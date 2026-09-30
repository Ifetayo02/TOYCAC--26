import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft, ArrowRight, Loader2, ImagePlus, CheckCircle2, AlertCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { PaymentNavbar } from "../components/PaymentNavbar";
import { Footer } from "../components/Footer";

const CLOUD_NAME = "dio5go08v";
const CLOUDINARY_UPLOAD_PRESET = "TOYCAC Receipts"; // <-- your real preset name

const FEES = [
  { value: "timsanite", label: "Timsanite" },
  { value: "non_timsanite", label: "Non-Timsanite" },
  { value: "child", label: "Child" },
  { value: "iotb", label: "IOTB" },
] as const;
// Prices are TBA for now — swap the JSX below to show real amounts once set.

const BANK = { name: "FCMB", number: "1027278453", accountName: "TIMSAN OYO STATE" };

type FormState = {
  fullName: string;
  gender: "brother" | "sister" | "";
  phone: string;
  email: string;
  institution: string;
  level: string;
  courseOfStudy: string;
  nextOfKinName: string;
  nextOfKinPhone: string;
  medicalConditions: string;
  category: (typeof FEES)[number]["value"] | "";
};

const initialForm: FormState = {
  fullName: "", gender: "", phone: "", email: "", institution: "", level: "", courseOfStudy: "",
  nextOfKinName: "", nextOfKinPhone: "", medicalConditions: "", category: "",
};

type RegistrationResult = { reference: string };

export const PaymentPage = () => {
  const [step, setStep] = useState<"form" | "pending">("form");
  const [form, setForm] = useState<FormState>(initialForm);
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [receiptPreview, setReceiptPreview] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<RegistrationResult | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleReceipt = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setReceiptFile(file);
    setReceiptPreview(URL.createObjectURL(file));
  };

  const uploadImage = async (file: File): Promise<string> => {
    const body = new FormData();
    body.append("file", file);
    body.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
      method: "POST",
      body,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data?.error?.message ? `Upload failed: ${data.error.message}` : "Upload failed");
    }
    return data.secure_url as string;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const required: (keyof FormState)[] = [
      "fullName", "gender", "phone", "email", "institution", "level", "courseOfStudy",
      "nextOfKinName", "nextOfKinPhone", "category",
    ];
    const missing = required.find((k) => !form[k]);
    if (missing) {
      setError("Please fill in all required fields before submitting.");
      return;
    }
    if (!receiptFile) {
      setError("Please transfer the fee first, then attach a screenshot of your receipt.");
      return;
    }

    setSubmitting(true);
    try {
      const receiptUrl = await uploadImage(receiptFile);

      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, receiptUrl }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Registration failed");

      setResult(data);
      setStep("pending");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F0FDF4] flex flex-col">
      <PaymentNavbar />
      <main className="flex-grow pt-24 pb-20 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-emerald-700 font-bold mb-6 hover:underline text-xs md:text-sm uppercase tracking-tight">
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <div className="flex justify-center gap-2 mb-4">
              <div className="h-1.5 w-12 bg-emerald-600 rounded-full shadow-sm"></div>
              <div className={`h-1.5 w-12 rounded-full ${step === "pending" ? "bg-emerald-600" : "bg-gray-200"}`}></div>
            </div>
            <h1 className="text-2xl md:text-4xl font-black text-gray-900 leading-tight italic">
              {step === "form" ? "Register for TCAC '26" : "Registration Submitted"}
            </h1>
            <p className="text-gray-600 text-xs md:text-base mt-1">
              {step === "form"
                ? "Make your transfer first, then fill this in and attach your receipt."
                : "We've got it — your house is assigned the moment it's reviewed."}
            </p>
          </div>

          {step === "form" && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-black text-white p-5 md:p-8 rounded-2xl border-2 border-emerald-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-3">Step 1 — Pay First</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">Bank</p>
                    <p className="font-black text-lg">{BANK.name}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">Account No.</p>
                    <p className="font-black text-lg font-mono">{BANK.number}</p>
                  </div>
                </div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-3">Account Name</p>
                <p className="font-black text-sm">{BANK.accountName}</p>
                <p className="text-[11px] text-emerald-300 mt-3 italic">
                  Transfer the amount for your category below, take a screenshot of the receipt, then fill the rest of this form.
                </p>
              </div>

              <Section title="Your Details">
                <Field label="Full Name" required>
                  <input value={form.fullName} onChange={update("fullName")} className={inputClass} placeholder="e.g. Fatima Abdullahi" />
                </Field>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Gender" required>
                    <select value={form.gender} onChange={update("gender")} className={inputClass}>
                      <option value="">Select</option>
                      <option value="brother">Brother</option>
                      <option value="sister">Sister</option>
                    </select>
                  </Field>
                  <Field label="Level" required>
                    <input value={form.level} onChange={update("level")} className={inputClass} placeholder="e.g. 300L" />
                  </Field>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Phone Number" required>
                    <input value={form.phone} onChange={update("phone")} className={inputClass} placeholder="080..." />
                  </Field>
                  <Field label="Email" required>
                    <input type="email" value={form.email} onChange={update("email")} className={inputClass} placeholder="you@email.com" />
                  </Field>
                </div>
                <Field label="Institution" required>
                  <input value={form.institution} onChange={update("institution")} className={inputClass} placeholder="e.g. LAUTECH" />
                </Field>
                <Field label="Course / Department" required>
                  <input value={form.courseOfStudy} onChange={update("courseOfStudy")} className={inputClass} placeholder="e.g. Computer Science" />
                </Field>
              </Section>

              <Section title="Emergency Contact">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Next of Kin Name" required>
                    <input value={form.nextOfKinName} onChange={update("nextOfKinName")} className={inputClass} placeholder="Parent / Guardian name" />
                  </Field>
                  <Field label="Next of Kin Phone" required>
                    <input value={form.nextOfKinPhone} onChange={update("nextOfKinPhone")} className={inputClass} placeholder="080..." />
                  </Field>
                </div>
                <Field label="Medical Conditions" hint="Optional — allergies, medication, anything camp medical staff should know">
                  <textarea value={form.medicalConditions} onChange={update("medicalConditions")} className={`${inputClass} min-h-[80px]`} placeholder="None" />
                </Field>
              </Section>

              <Section title="Payment Receipt" hint="Required — screenshot of the transfer you just made">
                <PhotoPicker preview={receiptPreview} onChange={handleReceipt} label="receipt screenshot" />
              </Section>

              <Section title="Registration Category">
                <Field label="Registering As" required>
                  <select value={form.category} onChange={update("category")} className={inputClass}>
                    <option value="">Select a category</option>
                    {FEES.map((f) => (
                      <option key={f.value} value={f.value}>
                        {f.label} — TBA
                      </option>
                    ))}
                  </select>
                </Field>
              </Section>

              {error && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 border-2 border-red-100 rounded-xl p-3 text-xs md:text-sm font-medium">
                  <AlertCircle size={16} /> {error}
                </div>
              )}

              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-3 bg-black text-white font-black py-5 rounded-xl border-2 border-emerald-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:bg-gray-900 active:translate-y-1 transition-all uppercase tracking-widest text-sm disabled:opacity-60"
              >
                {submitting ? <Loader2 className="animate-spin" size={20} /> : <>Continue to Payment <ArrowRight size={20} className="text-emerald-400" /></>}
              </motion.button>
            </form>
          )}

          {step === "pending" && result && (
            <PendingPayment result={result} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

/* ---------- Pending Payment step ---------- */

const PendingPayment = ({ result }: { result: RegistrationResult }) => {
  const [status, setStatus] = useState<"pending" | "confirmed">("pending");
  const [houseNumber, setHouseNumber] = useState<string | null>(null);
  const pollRef = useRef<number | null>(null);

  useEffect(() => {
    const poll = async () => {
      try {
        const res = await fetch(`/api/status?reference=${result.reference}`);
        if (!res.ok) return;
        const data = await res.json();
        setStatus(data.payment_status);
        setHouseNumber(data.house_number ?? null);
        if (data.payment_status === "confirmed" && pollRef.current) {
          window.clearInterval(pollRef.current);
        }
      } catch {
        /* silent — next poll will retry */
      }
    };
    poll();
    pollRef.current = window.setInterval(poll, 8000);
    return () => {
      if (pollRef.current) window.clearInterval(pollRef.current);
    };
  }, [result.reference]);

  if (status === "confirmed") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 md:p-12 rounded-[2rem] border-2 md:border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center space-y-4"
      >
        <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
        <h3 className="text-2xl md:text-3xl font-black uppercase italic">You're In!</h3>
        <p className="text-gray-600 text-sm md:text-base">
          Payment confirmed. A confirmation email is on its way with your details.
        </p>
        {houseNumber && (
          <div className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-2xl border-2 border-black">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Your House</p>
            <p className="text-3xl font-black italic">{houseNumber}</p>
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-8 md:p-12 rounded-[2rem] border-2 md:border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center space-y-4"
    >
      <Loader2 className="w-10 h-10 text-emerald-600 animate-spin mx-auto" />
      <h3 className="text-xl md:text-2xl font-black uppercase italic">Under Review</h3>
      <p className="text-gray-500 text-xs md:text-sm max-w-md mx-auto">
        We've got your details and receipt. Nothing else to do — this page updates itself the
        moment it's reviewed, and your confirmation email (with house number) goes out automatically.
      </p>
      <p className="text-[10px] font-mono text-gray-400">Reference: {result.reference}</p>
    </motion.div>
  );
};

/* ---------- small building blocks ---------- */

const inputClass =
  "w-full p-3 md:p-4 rounded-xl border-2 border-black/10 focus:border-emerald-500 outline-none text-sm md:text-base bg-gray-50 focus:bg-white transition-colors";

const Section = ({ title, hint, children }: { title: string; hint?: string; children: React.ReactNode }) => (
  <div className="bg-white p-5 md:p-8 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-4">
    <div>
      <h4 className="font-black text-gray-900 text-sm md:text-base uppercase tracking-tight">{title}</h4>
      {hint && <p className="text-[11px] text-gray-400 italic">{hint}</p>}
    </div>
    {children}
  </div>
);

const Field = ({ label, required, hint, children }: { label: string; required?: boolean; hint?: string; children: React.ReactNode }) => (
  <label className="block space-y-1.5">
    <span className="text-xs md:text-sm font-bold text-gray-700">
      {label} {required && <span className="text-emerald-600">*</span>}
    </span>
    {children}
    {hint && <span className="block text-[10px] text-gray-400 italic">{hint}</span>}
  </label>
);

const PhotoPicker = ({
  preview, onChange, label = "photo",
}: {
  preview: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}) => (
  <label className="flex items-center gap-4 cursor-pointer">
    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border-2 border-dashed border-emerald-300 bg-emerald-50 flex items-center justify-center overflow-hidden shrink-0">
      {preview ? <img src={preview} className="w-full h-full object-cover" alt="Preview" /> : <ImagePlus className="text-emerald-400 w-6 h-6" />}
    </div>
    <span className="text-xs md:text-sm text-gray-500 font-medium">
      {preview ? "Selected — tap to change" : `Tap to upload a ${label}`}
    </span>
    <input type="file" accept="image/*" onChange={onChange} className="hidden" />
  </label>
);