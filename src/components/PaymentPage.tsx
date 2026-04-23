import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, Copy, Check, ArrowLeft, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PaymentNavbar } from "../components/PaymentNavbar"; // Import Navbar
import { Footer } from "../components/Footer"; // Import Footer

export const PaymentPage = () => {
  const [copied, setCopied] = useState(false);
  const accountNumber = "1027278453"; // Updated to your new FCMB number

  // Ensures the user starts at the top of the page on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fees = [
    { category: "Children", price: "3,000" },
    { category: "Timsanite / Non-Timsanite", price: "5,000" },
    { category: "IOTB", price: "7,000" },
  ];

  return (
    <div className="min-h-screen bg-[#F0FDF4] flex flex-col">
      {/* 1. Integrated Payment Navbar */}
      <PaymentNavbar />

      {/* 2. Main Content Wrapper - Added pt-24 to prevent navbar overlap */}
      <main className="flex-grow pt-24 pb-20 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          
          {/* Progress Header */}
          <div className="mb-8 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-emerald-700 font-bold mb-6 hover:underline text-xs md:text-sm uppercase tracking-tight">
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <div className="flex justify-center gap-2 mb-4">
              <div className="h-1.5 w-12 bg-emerald-600 rounded-full shadow-sm"></div>
              <div className="h-1.5 w-12 bg-gray-200 rounded-full"></div>
            </div>
            <h1 className="text-2xl md:text-4xl font-black text-gray-900 leading-tight italic">Finalize Registration</h1>
            <p className="text-gray-600 text-xs md:text-base mt-1">Complete your payment to secure your slot at TCAC '26.</p>
          </div>

          <div className="space-y-6 md:space-y-10">
            
            {/* Step 1: Fee Schedule Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-5 md:p-8 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-emerald-100 p-2 rounded-xl">
                  <Users className="w-5 h-5 text-emerald-700" />
                </div>
                <h4 className="font-black text-gray-900 text-sm md:text-base uppercase tracking-tight">Category Fee</h4>
              </div>
              
              <div className="space-y-3">
                {fees.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl border-2 border-black/5 hover:border-emerald-200 transition-colors">
                    <span className="text-xs md:text-sm font-bold text-gray-700">{item.category}</span>
                    <span className="text-base md:text-xl font-black text-emerald-700 italic">₦{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-[9px] md:text-[10px] text-gray-400 italic mt-4 text-center uppercase tracking-widest">
                Ensure you pay the correct amount for your category
              </p>
            </motion.div>

            {/* Step 2: Account Details Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-emerald-600 p-6 md:p-10 rounded-[2rem] border-2 md:border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] text-white"
            >
              <div className="flex justify-between items-center mb-6">
                 <span className="bg-emerald-700 px-3 py-1 rounded-full text-[10px] font-black border border-emerald-400 uppercase tracking-tighter">Official Account</span>
                 <CreditCard className="w-7 h-7 text-emerald-200 opacity-60" />
              </div>

              <div className="bg-white p-5 md:p-8 rounded-3xl text-gray-900 shadow-inner">
                  <div className="mb-4">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Bank Name</p>
                      <p className="font-black text-xl md:text-2xl text-emerald-900">FCMB</p>
                  </div>
                  
                  <div className="mb-5">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Account Number</p>
                      <div className="flex justify-between items-center bg-gray-50 p-3 md:p-4 rounded-2xl border-2 border-dashed border-emerald-100">
                          <span className="text-xl md:text-3xl font-mono font-black tracking-tight text-gray-800">{accountNumber}</span>
                          <button 
                            onClick={handleCopy} 
                            className="bg-emerald-600 text-white p-2.5 rounded-xl hover:bg-emerald-700 active:scale-90 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                          >
                              {copied ? <Check size={20} /> : <Copy size={20} />}
                          </button>
                      </div>
                  </div>

                  <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Account Name</p>
                      <p className="font-black text-xs md:text-base leading-tight uppercase tracking-tight text-gray-700">TIMSAN OYO STATE</p>
                  </div>
              </div>
            </motion.div>

            {/* Step 3: Submission Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 md:p-10 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center"
            >
              <h4 className="font-black text-sm md:text-lg mb-1 uppercase">Step 2: Submit Proof</h4>
              <p className="text-gray-500 mb-8 text-[11px] md:text-xs italic">Your slot is not reserved until you upload your proof of payment.</p>
              
              <a 
                href="https://forms.gle/zxf3Zx12BNBKKjgTA" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 bg-black text-white font-black py-5 rounded-xl border-2 border-emerald-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:bg-gray-900 active:translate-y-1 transition-all uppercase tracking-widest text-sm"
              >
                Open Submission Form <ArrowRight size={20} className="text-emerald-400" />
              </a>
            </motion.div>
            
          </div>
        </div>
      </main>

      {/* 3. Integrated Footer */}
      <Footer />
    </div>
  );
};