import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Timestamp } from "firebase-admin/firestore";
import { db, registrationsRef } from "./_firebaseAdmin.js";
import { HOUSES, formatHouseNumber, smallestAvailable } from "./_houses.js";
import { sendConfirmationEmail } from "./_email.js";

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

  let result;
  try {
    result = await db.runTransaction(async (tx) => {
      const regRef = registrationsRef.doc(reference);
      const [regSnap, countersSnap] = await Promise.all([tx.get(regRef), tx.get(countersRef)]);

      if (!regSnap.exists) throw new Error("NOT_FOUND");
      const reg = regSnap.data()!;
      if (reg.payment_status === "confirmed") throw new Error("ALREADY_CONFIRMED");

      const lists: Record<string, number[]> = countersSnap.exists ? countersSnap.data()! : {};
      let chosenHouse: string;

      if (reg.category === "iotb") {
        chosenHouse = "IOTB";
      } else {
        // Balance by how many people are CURRENTLY active in each house
        // (list length), not by the highest number ever issued.
        chosenHouse = HOUSES[0];
        let lowestCount = (lists[HOUSES[0]] ?? []).length;
        for (const h of HOUSES) {
          const c = (lists[h] ?? []).length;
          if (c < lowestCount) {
            lowestCount = c;
            chosenHouse = h;
          }
        }
      }

      const activeInChosen = lists[chosenHouse] ?? [];
      const num = smallestAvailable(activeInChosen);
      const houseNumber = formatHouseNumber(chosenHouse, num);

      tx.set(countersRef, { [chosenHouse]: [...activeInChosen, num] }, { merge: true });
      tx.update(regRef, {
        payment_status: "confirmed",
        house_number: houseNumber,
        matched_at: Timestamp.now(),
      });

      return { houseNumber, fullName: reg.full_name, email: reg.email, category: reg.category };
    });
  } catch (err) {
    if (err instanceof Error && err.message === "NOT_FOUND") {
      return res.status(404).json({ error: "Registration not found" });
    }
    if (err instanceof Error && err.message === "ALREADY_CONFIRMED") {
      return res.status(409).json({ error: "Already confirmed" });
    }
    return res.status(500).json({ error: "Could not confirm registration", detail: String(err) });
  }

  let emailSent = true;
  try {
    await sendConfirmationEmail({
      to: result.email,
      fullName: result.fullName,
      houseNumber: result.houseNumber,
      category: result.category,
    });
  } catch (err) {
    emailSent = false;
    console.error("Email send failed after confirmation:", err);
  }

  return res.status(200).json({ houseNumber: result.houseNumber, emailSent });
}