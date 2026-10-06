import type { VercelRequest, VercelResponse } from "@vercel/node";
import { registrationsRef } from "./_firebaseAdmin.js";

const ADMIN_SECRET = process.env.ADMIN_SECRET;

function escapeCsv(value: unknown): string {
  const str = String(value ?? "");
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!ADMIN_SECRET || req.headers["x-admin-secret"] !== ADMIN_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const snap = await registrationsRef.orderBy("created_at", "desc").get();

    const headers = [
      "reference", "full_name", "gender", "phone", "email", "institution",
      "level", "course_of_study", "category", "payment_status", "house_number",
      "next_of_kin_name", "next_of_kin_phone", "medical_conditions", "created_at",
    ];

    const rows = snap.docs.map((doc) => {
      const d = doc.data();
      return [
        doc.id, d.full_name, d.gender, d.phone, d.email, d.institution,
        d.level, d.course_of_study, d.category, d.payment_status, d.house_number ?? "",
        d.next_of_kin_name, d.next_of_kin_phone, d.medical_conditions ?? "",
        d.created_at?.toDate?.().toISOString() ?? "",
      ].map(escapeCsv).join(",");
    });

    const csv = [headers.join(","), ...rows].join("\n");

    res.setHeader("Content-Type", "text/csv; charset=utf-8");
    res.setHeader("Content-Disposition", `attachment; filename="toycac27-registrations-${new Date().toISOString().slice(0, 10)}.csv"`);
    return res.status(200).send(csv);
  } catch (err) {
    return res.status(500).json({ error: "Export failed", detail: String(err) });
  }
}

const snap = await registrationsRef
  .where("payment_status", "==", "confirmed")
  .orderBy("created_at", "desc")
  .get();