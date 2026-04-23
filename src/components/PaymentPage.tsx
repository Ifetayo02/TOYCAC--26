import { useEffect, useState } from "react"; // Added useEffect
import { motion } from "framer-motion";
import { CreditCard, Copy, Check, Info, ArrowLeft, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const PaymentPage = () => {
  const [copied, setCopied] = useState(false);
  const accountNumber = "1234567890"; // Replace with real number

  // FIX: This ensures the page always starts at the top
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
    <div className="min-h-screen bg-[#F0FDF4] pt-6 pb-20 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Progress Header */}
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-emerald-700 font-bold mb-6 hover:underline text-xs md:text-sm uppercase tracking-tight">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="flex justify-center gap-2 mb-4">
            <div className="h-1.5 w-12 bg-emerald-600 rounded-full"></div>
            <div className="h-1.5 w-12 bg-gray-200 rounded-full"></div>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">Finalize Registration</h1>
          <p className="text-gray-600 text-xs md:text-base mt-1">Complete your payment to secure your slot.</p>
        </div>

        <div className="space-y-5 md:space-y-8">
          
          {/* Step 1: Fee Schedule Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-5 md:p-6 rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <Users className="w-4 h-4 md:w-5 md:h-5 text-emerald-700" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm md:text-lg uppercase tracking-tight">Category Fee</h4>
            </div>
            
            <div className="space-y-2">
              {fees.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="text-xs md:text-sm font-semibold text-gray-700">{item.category}</span>
                  <span className="text-base md:text-lg font-black text-emerald-700">₦{item.price}</span>
                </div>
              ))}
            </div>
            <p className="text-[9px] md:text-[10px] text-gray-400 italic mt-3 text-center uppercase tracking-wider">
              Ensure you pay the correct amount for your category
            </p>
          </motion.div>

          {/* Step 2: Account Details Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-emerald-600 p-5 md:p-8 rounded-2xl md:rounded-3xl border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] text-white"
          >
            <div className="flex justify-between items-center mb-5">
               <span className="bg-emerald-700 px-2 py-1 rounded text-[9px] md:text-[10px] font-black border border-emerald-400 uppercase tracking-tighter">Official Account</span>
               <CreditCard className="w-6 h-6 md:w-8 md:h-8 text-emerald-200 opacity-50" />
            </div>

            <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl text-gray-900 shadow-inner">
                <div className="mb-3 md:mb-4">
                    <p className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">Bank Name</p>
                    <p className="font-black text-lg md:text-xl text-emerald-800">WEMA BANK</p>
                </div>
                
                <div className="mb-3 md:mb-4">
                    <p className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">Account Number</p>
                    <div className="flex justify-between items-center bg-gray-50 p-2.5 md:p-3 rounded-lg border-2 border-dashed border-gray-200 mt-1">
                        <span className="text-lg md:text-2xl font-mono font-black tracking-tighter">{accountNumber}</span>
                        <button 
                          onClick={handleCopy} 
                          className="p-2 hover:bg-emerald-100 rounded-lg transition-all active:scale-90"
                        >
                            {copied ? <Check size={18} className="text-emerald-600" /> : <Copy size={18} className="text-gray-400" />}
                        </button>
                    </div>
                </div>

                <div>
                    <p className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">Account Name</p>
                    <p className="font-bold text-xs md:text-base leading-tight uppercase">TIMSAN OYO STATE CONFERENCE</p>
                </div>
            </div>
          </motion.div>

          {/* Step 3: Submission Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center"
          >
            <h4 className="font-bold text-sm md:text-lg mb-1">Step 2: Submit Proof</h4>
            <p className="text-gray-500 mb-6 text-[11px] md:text-xs italic">Upload your screenshot to the form below.</p>
            <a 
              href="https://forms.gle/zxf3Zx12BNBKKjgTA" 
              target="_blank"
              rel="noreferrer"
              className="inline-block w-full bg-emerald-600 text-white font-black py-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all uppercase tracking-widest text-xs md:text-sm"
            >
              Open Registration Form
            </a>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};