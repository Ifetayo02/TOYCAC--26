import type { VercelRequest, VercelResponse } from "@vercel/node";
import { registrationsRef } from "./_firebaseAdmin";

const ADMIN_SECRET = process.env.ADMIN_SECRET;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!ADMIN_SECRET || req.headers["x-admin-secret"] !== ADMIN_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const status = (req.query.status as string) || "pending";

  try {
    const snap = await registrationsRef
      .where("payment_status", "==", status)
      .orderBy("created_at", "desc")
      .limit(200)
      .get();

    const registrations = snap.docs.map((doc) => {
      const d = doc.data();
      return {
        reference: doc.id,
        full_name: d.full_name,
        gender: d.gender,
        institution: d.institution,
        level: d.level,
        category: d.category,
        unique_amount: d.unique_amount,
        receipt_url: d.receipt_url,
        created_at: d.created_at?.toDate?.().toISOString() ?? null,
      };
    });

    return res.status(200).json({ registrations });
  } catch (err) {
    return res.status(500).json({ error: "Query failed", detail: String(err) });
  }
}