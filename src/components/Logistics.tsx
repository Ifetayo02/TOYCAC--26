import { motion } from "framer-motion";
import { MapPin, Calendar, CheckCircle2, ArrowRight, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Logistics = () => {
  const navigate = useNavigate();

  return (
    <section id="logistics" className="py-12 md:py-24 px-4 md:px-6 bg-[#F0FDF4]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Scaled down for mobile */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-3">Logistics <span className='text-emerald-600'> & Venue</span></h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto px-2">
            Everything you need to plan your journey to TCAC '26. We've handled the essentials so you can focus on the experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          
          {/* Left Side: Essential Details */}
          <div className="space-y-4 md:space-y-6">
            
            {/* Card 1: Date */}
            <div className="bg-white p-5 md:p-6 rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-4">
              <div className="bg-emerald-100 p-2 md:p-3 rounded-xl h-fit">
                <Calendar className="w-5 h-5 md:w-6 md:h-6 text-emerald-700" />
              </div>
              <div>
                <h4 className="font-bold text-base md:text-lg text-gray-900">Date & Time</h4>
                <p className="text-gray-600 font-medium text-sm md:text-lg">To be decided, 2026</p>
              </div>
            </div>

            {/* Card 2: Venue */}
            <div className="bg-white p-5 md:p-6 rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-4">
              <div className="bg-emerald-100 p-2 md:p-3 rounded-xl h-fit">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-emerald-700" />
              </div>
              <div>
                <h4 className="font-bold text-base md:text-lg text-gray-900">Venue</h4>
                <p className="text-gray-600 font-medium text-sm md:text-lg">To be decided</p>
                <p className="text-[10px] md:text-sm text-emerald-700 font-bold uppercase mt-0.5">Oyo State, Nigeria.</p>
              </div>
            </div>

            {/* Card 3: Checklist */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-bold text-xs md:text-lg text-gray-900 mb-4 uppercase tracking-wider">What's Included:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                {['Accommodation', '3 Balanced Meals Daily', 'Conference Materials','Workshops', 'Guest Scholars'].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700 font-medium text-xs md:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Registration CTA */}
          <div className="bg-emerald-600 p-6 md:p-10 rounded-2xl md:rounded-3xl border-2 md:border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-white">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-emerald-200" />
              <span className="uppercase text-[9px] font-black tracking-widest text-emerald-100">Status: Active</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black mb-3 italic">Secure Your Slot</h3>
            
            <p className="text-emerald-50 text-sm md:text-base mb-6 leading-relaxed opacity-90">
              Delegate slots are limited. Join us for a transformative 5-day journey.
            </p>

            <div className="bg-emerald-700/40 p-4 md:p-5 rounded-xl border border-emerald-400/50 mb-6 flex justify-between items-center">
              <span className="font-bold text-sm text-emerald-100">Fee</span>
              <span className="text-2xl md:text-3xl font-black text-white">₦5,000</span>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/register')}
              className="w-full bg-white text-emerald-700 font-black py-3.5 md:py-4 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2 text-sm md:text-base transition-all"
            >
              PROCEED TO PAYMENT <ArrowRight size={18} />
            </motion.button>
            
            <p className="text-center text-[10px] text-emerald-200 font-medium mt-6 uppercase tracking-widest opacity-80">
              Verified by Oyo State TIMSAN 
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};