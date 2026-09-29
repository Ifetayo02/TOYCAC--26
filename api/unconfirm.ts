import type { VercelRequest, VercelResponse } from "@vercel/node";
import { registrationsRef } from "./_firebaseAdmin.js";

const ADMIN_SECRET = process.env.ADMIN_SECRET;

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
    const regRef = registrationsRef.doc(reference);
    const regSnap = await regRef.get();

    if (!regSnap.exists) return res.status(404).json({ error: "Registration not found" });
    const reg = regSnap.data()!;
    if (reg.payment_status !== "confirmed") {
      return res.status(409).json({ error: "This registration isn't confirmed" });
    }

    await regRef.update({
      payment_status: "pending",
      house_number: null,
      matched_at: null,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "Could not unconfirm registration", detail: String(err) });
  }
}