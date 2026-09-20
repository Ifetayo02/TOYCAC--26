import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// SERVER-ONLY. Never import this from src/ (client bundle) — the service
// account key has full read/write access and must never reach the browser.
const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
// Vercel env vars can't hold real newlines, so the key is stored with
// literal "\n" sequences — this swaps them back to real line breaks.
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

if (!projectId || !clientEmail || !privateKey) {
  throw new Error(
    "Missing FIREBASE_PROJECT_ID / FIREBASE_CLIENT_EMAIL / FIREBASE_PRIVATE_KEY env vars (set these in Vercel project settings, not .env.example)."
  );
}

// Serverless functions can be reused between invocations — guard against
// re-initializing the app on every warm start.
if (!getApps().length) {
  initializeApp({ credential: cert({ projectId, clientEmail, privateKey }) });
}

export const db = getFirestore();
export const registrationsRef = db.collection("registrations");
