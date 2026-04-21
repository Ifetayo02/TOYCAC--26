import { motion } from "framer-motion";
import { MapPin, Calendar, CheckCircle2, ArrowRight, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Logistics = () => {
  const navigate = useNavigate();

  return (
    <section id="logistics" className="py-24 px-6 bg-[#F0FDF4]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Logistics & Venue</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Everything you need to plan your journey to TCAC '26. We've handled the essentials so you can focus on the experience.
          </p>
        </div>

        {/* Changed items-stretch to items-start to prevent vertical stretching */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Essential Details */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-4">
              <div className="bg-emerald-100 p-3 rounded-xl h-fit">
                <Calendar className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">Date & Time</h4>
                <p className="text-gray-600 font-medium text-lg">To be decided, 2026</p>
                <p className="text-sm text-gray-500 italic mt-1"></p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-4">
              <div className="bg-blue-100 p-3 rounded-xl h-fit">
                <MapPin className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">Venue</h4>
                <p className="text-gray-600 font-medium text-lg">To be decided</p>
                <p className="text-sm text-gray-500 font-bold text-emerald-700">Oyo State, Nigeria.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-bold text-lg text-gray-900 mb-4 uppercase tracking-tighter">What's Included:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                {['Accommodation', '3 Balanced Meals Daily', 'Conference Materials','Workshops', 'Guest Scholars'].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Registration CTA (Now height-adjusted) */}
          <div className="bg-emerald-600 p-8 md:p-10 rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-white">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-emerald-200" />
              <span className="uppercase text-[10px] font-black tracking-[0.2em] text-emerald-100">Status: Active</span>
            </div>
            
            <h3 className="text-3xl font-black mb-4 leading-tight italic">Secure Your Slot</h3>
            
            <p className="text-emerald-50 text-base mb-8 leading-relaxed opacity-90">
              Delegate slots are limited to ensure a high-quality experience. Join us for a transformative 5-day journey.
            </p>

            <div className="bg-emerald-700/40 p-5 rounded-2xl border-2 border-emerald-400 mb-8 flex justify-between items-center">
              <span className="font-bold text-emerald-100">Registration Fee</span>
              <span className="text-3xl font-black text-white">₦5,000</span>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/register')}
              className="w-full bg-white text-emerald-700 font-black py-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-50 flex items-center justify-center gap-3 transition-all"
            >
              PROCEED TO PAYMENT <ArrowRight size={20} />
            </motion.button>
            
            <p className="text-center text-[11px] text-emerald-200 font-medium mt-6 uppercase tracking-widest">
              Verified by TIMSAN Oyo State Secretariat
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};