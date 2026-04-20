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
    <div className="min-h-screen bg-[#F0FDF4] pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Progress Header */}
        <div className="mb-10 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-emerald-700 font-bold mb-6 hover:underline">
            <ArrowLeft size={18} /> Go back to Home
          </Link>
          <div className="flex justify-center gap-2 mb-4">
            <div className="h-2 w-16 bg-emerald-600 rounded-full"></div>
            <div className="h-2 w-16 bg-emerald-600 rounded-full"></div>
            <div className="h-2 w-16 bg-gray-200 rounded-full"></div>
          </div>
          <h1 className="text-3xl font-black text-gray-900">Finalize Registration</h1>
          <p className="text-gray-600">Follow the steps below to secure your slot.</p>
        </div>

        {/* Step 1: Instruction */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-4"
          >
            <div className="bg-blue-100 p-3 rounded-xl h-fit">
              <Info className="w-6 h-6 text-blue-700" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Step 1: Make your payment</h4>
              <p className="text-gray-600">Transfer the fee of ₦5,000 to the official TIMSAN account below. Ensure you save your receipt/screenshot.</p>
            </div>
          </motion.div>

          {/* Step 2: Account Details Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-emerald-600 p-8 rounded-3xl border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] text-white"
          >
            <div className="flex justify-between items-center mb-6">
               <span className="bg-emerald-700 px-3 py-1 rounded-lg text-xs font-bold border border-emerald-400">OFFICIAL ACCOUNT</span>
               <CreditCard className="w-8 h-8 text-emerald-200" />
            </div>

            <div className="bg-white p-6 rounded-2xl text-gray-900">
                <div className="mb-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Bank</p>
                    <p className="font-black text-xl text-emerald-800">WEMA BANK</p>
                </div>
                
                <div className="mb-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Account Number</p>
                    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl border-2 border-dashed border-gray-300 mt-1">
                        <span className="text-2xl font-mono font-bold">{accountNumber}</span>
                        <button onClick={handleCopy} className="p-2 hover:bg-emerald-50 rounded-lg">
                            {copied ? <Check className="text-emerald-600" /> : <Copy className="text-gray-400" />}
                        </button>
                    </div>
                </div>

                <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Account Name</p>
                    <p className="font-bold">TIMSAN OYO STATE CONFERENCE</p>
                </div>
            </div>
          </motion.div>

          {/* Step 3: The Form Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center"
          >
            <h4 className="font-bold text-lg mb-2">Step 2: Submit your details</h4>
            <p className="text-gray-600 mb-6 text-sm italic">Once you have your payment screenshot ready, click below to finish.</p>
            <a 
              href="YOUR_GOOGLE_FORM_LINK" 
              target="_blank"
              rel="noreferrer"
              className="inline-block w-full bg-emerald-600 text-white font-black py-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] transition-all"
            >
              OPEN REGISTRATION FORM
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};