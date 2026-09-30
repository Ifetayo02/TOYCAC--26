import type { VercelRequest, VercelResponse } from "@vercel/node";
import { db, registrationsRef } from "./_firebaseAdmin.js";

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
    await db.runTransaction(async (tx) => {
      const regRef = registrationsRef.doc(reference);
      const [regSnap, countersSnap] = await Promise.all([tx.get(regRef), tx.get(countersRef)]);

      if (!regSnap.exists) throw new Error("NOT_FOUND");
      const reg = regSnap.data()!;
      if (reg.payment_status !== "confirmed") throw new Error("NOT_CONFIRMED");

      const match = /^(.+)\s(\d+)$/.exec(reg.house_number ?? "");
      if (match) {
        const [, house, numStr] = match;
        const num = parseInt(numStr, 10);
        const lists: Record<string, number[]> = countersSnap.exists ? countersSnap.data()! : {};
        const active = lists[house] ?? [];
        // Unconditionally free this number — no "most recent" check needed
        // anymore, since the next confirm always picks the smallest gap.
        tx.set(countersRef, { [house]: active.filter((n) => n !== num) }, { merge: true });
      }

      tx.update(regRef, {
        payment_status: "pending",
        house_number: null,
        matched_at: null,
      });
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    if (err instanceof Error && err.message === "NOT_FOUND") {
      return res.status(404).json({ error: "Registration not found" });
    }
    if (err instanceof Error && err.message === "NOT_CONFIRMED") {
      return res.status(409).json({ error: "This registration isn't confirmed" });
    }
    return res.status(500).json({ error: "Could not unconfirm registration", detail: String(err) });
  }
}