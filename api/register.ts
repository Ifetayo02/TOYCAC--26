import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Timestamp } from "firebase-admin/firestore";
import { registrationsRef } from "./_firebaseAdmin";

const BASE_AMOUNTS: Record<string, number> = {
  timsanite: 5000,
  non_timsanite: 6000,
  child: 3000,
  iotb: 7000,
};
// NOTE: placeholder prices — update to match the real fee structure.

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    fullName, gender, phone, email, institution, level,
    nextOfKinName, nextOfKinPhone, medicalConditions, photoUrl, receiptUrl, category,
  } = req.body ?? {};

  const required = { fullName, gender, phone, email, institution, level, nextOfKinName, nextOfKinPhone, category, receiptUrl };
  for (const [key, value] of Object.entries(required)) {
    if (!value || typeof value !== "string" || !value.trim()) {
      return res.status(400).json({ error: `Missing required field: ${key}` });
    }
  }
  const baseAmount = BASE_AMOUNTS[category];
  if (!baseAmount) {
    return res.status(400).json({ error: "Invalid category" });
  }

  const docRef = await registrationsRef.add({
    full_name: fullName.trim(),
    gender,
    phone: phone.trim(),
    email: email.trim().toLowerCase(),
    institution: institution.trim(),
    level: level.trim(),
    next_of_kin_name: nextOfKinName.trim(),
    next_of_kin_phone: nextOfKinPhone.trim(),
    medical_conditions: medicalConditions?.trim() || null,
    photo_url: photoUrl || null,
    receipt_url: receiptUrl,
    category,
    base_amount: baseAmount,
    unique_amount: baseAmount, // kept as a display alias for the amount they were told to pay
    payment_status: "pending", // awaiting a quick admin glance at the receipt
    house_number: null,
    matched_at: null,
    created_at: Timestamp.now(),
  });

  return res.status(200).json({ reference: docRef.id });
}
