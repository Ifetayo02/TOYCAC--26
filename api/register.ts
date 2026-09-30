import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Timestamp } from "firebase-admin/firestore";
import { registrationsRef } from "./_firebaseAdmin.js";

const VALID_CATEGORIES = ["timsanite", "non_timsanite", "child", "iotb"];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    fullName, gender, phone, email, institution, level, courseOfStudy,
    nextOfKinName, nextOfKinPhone, medicalConditions, receiptUrl, category,
  } = req.body ?? {};

  const required = {
    fullName, gender, phone, email, institution, level, courseOfStudy,
    nextOfKinName, nextOfKinPhone, category, receiptUrl,
  };
  for (const [key, value] of Object.entries(required)) {
    if (!value || typeof value !== "string" || !value.trim()) {
      return res.status(400).json({ error: `Missing required field: ${key}` });
    }
  }
  if (!VALID_CATEGORIES.includes(category)) {
    return res.status(400).json({ error: "Invalid category" });
  }

  const docRef = await registrationsRef.add({
    full_name: fullName.trim(),
    gender,
    phone: phone.trim(),
    email: email.trim().toLowerCase(),
    institution: institution.trim(),
    level: level.trim(),
    course_of_study: courseOfStudy.trim(),
    next_of_kin_name: nextOfKinName.trim(),
    next_of_kin_phone: nextOfKinPhone.trim(),
    medical_conditions: medicalConditions?.trim() || null,
    receipt_url: receiptUrl,
    category,
    payment_status: "pending",
    house_number: null,
    matched_at: null,
    created_at: Timestamp.now(),
  });

  return res.status(200).json({ reference: docRef.id });
}