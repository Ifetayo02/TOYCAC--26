import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Timestamp } from "firebase-admin/firestore";
import { db, registrationsRef } from "./_firebaseAdmin";
import { HOUSES, formatHouseNumber } from "./_houses";
import { sendConfirmationEmail } from "./_email";

const ADMIN_SECRET = process.env.ADMIN_SECRET;
const countersRef = db.collection("meta").doc("houseCounters");

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  if (!ADMIN_SECRET || req.headers["x-admin-secret"] !== ADMIN_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { reference } = req.body ?? {};
  if (!reference || typeof reference !== "string") {
    return res.status(400).json({ error: "Missing reference" });
  }

  try {
    const result = await db.runTransaction(async (tx) => {
      const regRef = registrationsRef.doc(reference);
      const [regSnap, countersSnap] = await Promise.all([tx.get(regRef), tx.get(countersRef)]);

      if (!regSnap.exists) throw new Error("NOT_FOUND");
      const reg = regSnap.data()!;
      if (reg.payment_status === "confirmed") throw new Error("ALREADY_CONFIRMED");

      const counts = countersSnap.exists ? countersSnap.data()! : {};

      // Balance: send this registrant to whichever house currently has fewest people
      let chosenHouse = HOUSES[0];
      let lowest = counts[HOUSES[0]] ?? 0;
      for (const h of HOUSES) {
        const c = counts[h] ?? 0;
        if (c < lowest) {
          lowest = c;
          chosenHouse = h;
        }
      }
      const newCount = lowest + 1;
      const houseNumber = formatHouseNumber(chosenHouse, newCount);

      tx.set(countersRef, { [chosenHouse]: newCount }, { merge: true });
      tx.update(regRef, {
        payment_status: "confirmed",
        house_number: houseNumber,
        matched_at: Timestamp.now(),
      });

      return { houseNumber, fullName: reg.full_name, email: reg.email, category: reg.category };
    });

    // Email is sent after the transaction commits — a failed send shouldn't
    // undo a successful confirmation, so this is fire-and-report, not
    // rolled into the atomic write above.
    await sendConfirmationEmail({
      to: result.email,
      fullName: result.fullName,
      houseNumber: result.houseNumber,
      category: result.category,
    });

    return res.status(200).json({ houseNumber: result.houseNumber });
  } catch (err) {
    if (err instanceof Error && err.message === "NOT_FOUND") {
      return res.status(404).json({ error: "Registration not found" });
    }
    if (err instanceof Error && err.message === "ALREADY_CONFIRMED") {
      return res.status(409).json({ error: "Already confirmed" });
    }
    return res.status(500).json({ error: "Could not confirm registration", detail: String(err) });
  }
}
