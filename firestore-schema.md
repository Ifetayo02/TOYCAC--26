# `registrations` collection

Firestore has no enforced schema — this is the shape the API routes read/write.
Set up once in the Firebase Console (console.firebase.google.com):

1. Create a Firestore database (production mode is fine — `firestore.rules` locks it down anyway).
2. Project Settings -> Service Accounts -> Generate new private key. That JSON gives you
   `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, and `FIREBASE_PRIVATE_KEY` for Vercel's env vars.
3. Deploy `firestore.rules` (via `firebase deploy --only firestore:rules`, or paste it into
   Console -> Firestore -> Rules) so the collection stays server-only.
4. Firestore will prompt you to create a composite index the first time the collision-check
   query in `api/register.ts` runs (`unique_amount` + `payment_status`) — it gives you a direct
   link in the error message the first time it's hit; just click it.

## Document fields (each registration = one document, auto-generated ID)

| Field                 | Type      | Notes                                                        |
|------------------------|-----------|---------------------------------------------------------------|
| `full_name`            | string    |                                                                 |
| `gender`               | string    | `"brother"` \| `"sister"`                                     |
| `phone`                | string    |                                                                 |
| `email`                | string    |                                                                 |
| `institution`          | string    |                                                                 |
| `level`                | string    |                                                                 |
| `next_of_kin_name`     | string    |                                                                 |
| `next_of_kin_phone`    | string    |                                                                 |
| `medical_conditions`   | string \| null | optional                                                  |
| `photo_url`            | string \| null | Cloudinary URL, optional                                  |
| `category`             | string    | `"timsanite"` \| `"non_timsanite"` \| `"child"` \| `"iotb"`   |
| `base_amount`          | number    |                                                                 |
| `unique_amount`        | number    | base_amount + offset — what they're told to transfer          |
| `payment_status`       | string    | `"pending"` \| `"confirmed"` \| `"flagged"` \| `"expired"`     |
| `expires_at`           | Timestamp | offset released back to the pool after this                    |
| `matched_at`           | Timestamp \| null | set when a transaction matches                          |
| `house_number`         | string \| null | set on confirmation                                       |
| `created_at`           | Timestamp |                                                                 |
