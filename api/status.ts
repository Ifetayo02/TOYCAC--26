import type { VercelRequest, VercelResponse } from "@vercel/node";
import { registrationsRef } from "./_firebaseAdmin.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const reference = req.query.reference;
  if (!reference || typeof reference !== "string") {
    return res.status(400).json({ error: "Missing reference" });
  }

  const snap = await registrationsRef.doc(reference).get();
  if (!snap.exists) {
    return res.status(404).json({ error: "Registration not found" });
  }

  const data = snap.data()!;
  return res.status(200).json({
    payment_status: data.payment_status,
    house_number: data.house_number,
    unique_amount: data.unique_amount,
    expires_at: data.expires_at?.toDate?.().toISOString() ?? null,
  });
}
