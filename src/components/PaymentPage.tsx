import { motion } from "framer-motion";
import { useState } from "react";
import { CreditCard, Copy, Check, Info, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const PaymentPage = () => {
  const [copied, setCopied] = useState(false);
  const accountNumber = "1234567890";

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F0FDF4] pt-2 pb-20 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Progress Header */}
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-emerald-700 font-bold mb-4 hover:underline text-sm">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="flex justify-center gap-2 mb-4">
            <div className="h-1.5 w-12 bg-emerald-600 rounded-full"></div>
            <div className="h-1.5 w-12 bg-gray-200 rounded-full"></div>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-gray-900">Finalize Registration</h1>
          <p className="text-gray-600 text-sm md:text-base">Secure your slot in two easy steps.</p>
        </div>

        <div className="space-y-6 md:space-y-8">
          
          {/* Step 1: Instruction */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-5 md:p-6 rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex gap-4 items-start"
          >
            <div className="bg-blue-50 p-2.5 rounded-xl flex-shrink-0">
              <Info className="w-5 h-5 md:w-6 md:h-6 text-emerald-700" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-base md:text-lg">Step 1: Make your payment</h4>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed mt-1">
                Transfer ₦5,000 to the account below. Keep your receipt/screenshot safe.
              </p>
            </div>
          </motion.div>

          {/* Step 2: Account Details Card (The "ATM" Card) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-emerald-600 p-5 md:p-8 rounded-2xl md:rounded-3xl border-2 md:border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] text-white"
          >
            <div className="flex justify-between items-center mb-5 md:mb-6">
               <span className="bg-emerald-700 px-2 py-1 rounded text-[10px] font-black border border-emerald-400 uppercase tracking-tighter">Official Account</span>
               <CreditCard className="w-6 h-6 md:w-8 md:h-8 text-emerald-200" />
            </div>

            <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl text-gray-900">
                <div className="mb-3 md:mb-4">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Bank</p>
                    <p className="font-black text-lg md:text-xl text-emerald-800">WEMA BANK</p>
                </div>
                
                <div className="mb-3 md:mb-4">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Account Number</p>
                    <div className="flex justify-between items-center bg-gray-50 p-2.5 md:p-3 rounded-lg border-2 border-dashed border-gray-200 mt-1">
                        <span className="text-xl md:text-2xl font-mono font-bold tracking-tight">{accountNumber}</span>
                        <button 
                          onClick={handleCopy} 
                          className="p-2 hover:bg-emerald-100 rounded-lg transition-colors active:scale-90"
                        >
                            {copied ? <Check size={18} className="text-emerald-600" /> : <Copy size={18} className="text-gray-400" />}
                        </button>
                    </div>
                </div>

                <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Account Name</p>
                    <p className="font-bold text-sm md:text-base leading-tight">TIMSAN OYO STATE CONFERENCE</p>
                </div>
            </div>
          </motion.div>

          {/* Step 3: The Form Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 md:p-8 rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center"
          >
            <h4 className="font-bold text-base md:text-lg mb-1">Step 2: Submit your details</h4>
            <p className="text-gray-500 mb-6 text-xs italic">Upload your screenshot to the form below.</p>
            <a 
              href="https://forms.gle/zxf3Zx12BNBKKjgTA" 
              target="_blank"
              rel="noreferrer"
              className="inline-block w-full bg-emerald-600 text-white font-black py-3.5 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
            >
              OPEN REGISTRATION FORM
            </a>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};