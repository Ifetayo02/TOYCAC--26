import { useEffect, useState } from "react";
import { CheckCircle2, Loader2, LogOut, RefreshCw } from "lucide-react";

type PendingReg = {
  reference: string;
  full_name: string;
  gender: string;
  institution: string;
  level: string;
  category: string;
  unique_amount: number;
  receipt_url: string;
  photo_url: string | null;
  created_at: string | null;
};

export const AdminPage = () => {
  const [secret, setSecret] = useState(() => sessionStorage.getItem("tcac_admin_secret") || "");
  const [authed, setAuthed] = useState(false);
  const [regs, setRegs] = useState<PendingReg[]>([]);
  const [loading, setLoading] = useState(false);
  const [confirming, setConfirming] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = async (key: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin-list?status=pending", {
        headers: { "x-admin-secret": key },
      });
      if (res.status === 401) {
        setAuthed(false);
        setError("Wrong admin key.");
        return;
      }
      const data = await res.json();
      setRegs(data.registrations);
      setAuthed(true);
      sessionStorage.setItem("tcac_admin_secret", key);
    } catch {
      setError("Couldn't load registrations.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (secret) load(secret);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleConfirm = async (reference: string) => {
    setConfirming(reference);
    try {
      const res = await fetch("/api/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-admin-secret": secret },
        body: JSON.stringify({ reference }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to confirm");
      setRegs((prev) => prev.filter((r) => r.reference !== reference));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setConfirming(null);
    }
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-[#F0FDF4] flex items-center justify-center p-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            load(secret);
          }}
          className="bg-white p-8 rounded-3xl border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] w-full max-w-sm space-y-4"
        >
          <h1 className="text-xl font-black uppercase italic">Admin Access</h1>
          <input
            type="password"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            placeholder="Admin key"
            className="w-full p-3 rounded-xl border-2 border-black/10 focus:border-emerald-500 outline-none"
          />
          {error && <p className="text-red-600 text-xs font-medium">{error}</p>}
          <button className="w-full bg-black text-white font-black py-3 rounded-xl uppercase text-sm tracking-widest">
            {loading ? <Loader2 className="animate-spin mx-auto" size={18} /> : "Enter"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F0FDF4] p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-black uppercase italic">Pending Registrations ({regs.length})</h1>
          <div className="flex gap-2">
            <button onClick={() => load(secret)} className="p-2 bg-white border-2 border-black rounded-xl">
              <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
            </button>
            <button
              onClick={() => {
                sessionStorage.removeItem("tcac_admin_secret");
                setAuthed(false);
                setSecret("");
              }}
              className="p-2 bg-white border-2 border-black rounded-xl"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>

        {regs.length === 0 && !loading && (
          <p className="text-gray-500 text-sm">Nothing pending — all caught up.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {regs.map((r) => (
            <div key={r.reference} className="bg-white rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              <img src={r.receipt_url} alt="Receipt" className="w-full h-48 object-cover border-b-2 border-black" />
              <div className="p-4 space-y-1">
                <p className="font-black">{r.full_name}</p>
                <p className="text-xs text-gray-500">{r.institution} · {r.level} · {r.gender}</p>
                <p className="text-xs uppercase font-bold text-emerald-700">{r.category}</p>
                <p className="text-sm font-mono">Expected: ₦{r.unique_amount?.toLocaleString()}</p>
                <button
                  onClick={() => handleConfirm(r.reference)}
                  disabled={confirming === r.reference}
                  className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-black py-2.5 rounded-xl text-xs uppercase tracking-widest disabled:opacity-60"
                >
                  {confirming === r.reference ? <Loader2 className="animate-spin" size={16} /> : <><CheckCircle2 size={16} /> Confirm</>}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
