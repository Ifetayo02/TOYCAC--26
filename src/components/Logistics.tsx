import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ClipboardList, 
  BookOpen, 
  Bath, 
  Shirt, 
  Bed, 
  Zap, 
  Ban 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Logistics = () => {
  const navigate = useNavigate();

  return (
    <section id="logistics" className="py-12 md:py-24 px-4 md:px-6 bg-[#F0FDF4]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-3">
            Logistics <span className='text-emerald-600'>& Venue</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto px-2">
            Plan your journey to Ogbomosho for TCAC '26. We've handled the essentials so you can focus on the experience.
          </p>
        </div>

        {/* items-stretch ensures columns match height on desktop */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          
          {/* Left Side: Essential Details & Packing List */}
          <div className="space-y-6 flex flex-col">
            
            {/* Combined Date & Venue Card */}
            <div className="bg-white p-5 md:p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-6">
              <div className="flex gap-4">
                <div className="bg-emerald-100 p-2 md:p-3 rounded-xl h-fit">
                  <Calendar className="w-5 h-5 md:w-6 md:h-6 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg text-gray-900">Date & Time</h4>
                  <p className="text-gray-600 font-medium text-sm md:text-lg leading-tight">Thursday, 6th – Sunday, 9th August 2026</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-100 p-2 md:p-3 rounded-xl h-fit flex-shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg text-gray-900">Venue</h4>
                  <p className="text-gray-600 font-medium text-sm md:text-base leading-tight">
                    Akhbarudeen Central Mosque, Caretaker Area, Ogbomosho.
                  </p>
                  <p className="text-[10px] md:text-sm text-emerald-700 font-bold uppercase mt-1">Oyo State, Nigeria.</p>
                </div>
              </div>
            </div>

            {/* Packing List Card - Fills the vertical space */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-grow">
              <h4 className="font-bold text-xs md:text-lg text-gray-900 mb-6 uppercase tracking-wider flex items-center gap-2">
                <ClipboardList size={22} className="text-emerald-600" /> Delegate Packing List:
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {[
                  { title: 'Spiritual Tools', desc: "Qur'an, Prayer Mat, Du'a Book", icon: <BookOpen /> },
                  { title: 'Personal Hygiene', desc: 'Soap, Towel, Sanitary Needs', icon: <Bath /> },
                  { title: 'Warm Clothing', desc: 'Hoodie, Sweater, Socks, Scarf', icon: <Shirt /> },
                  { title: 'Sleeping Gear', desc: 'Blanket, Wrapper, Mat, Pillow', icon: <Bed /> },
                  { title: 'Tech Extras', desc: 'Power Bank, Torchlight, Flask', icon: <Zap /> },
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100 items-start">
                    <div className="text-emerald-700 bg-white p-2 rounded-lg flex-shrink-0 mt-0.5 border border-emerald-100">
                      {React.cloneElement(item.icon, { size: 16 })}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-[13px] leading-none mb-1">{item.title}</p>
                      <p className="text-[11px] text-gray-600 leading-tight">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Prohibited Items Section */}
              <div className="bg-red-50 p-4 rounded-xl border-2 border-dashed border-red-200 mt-6 text-red-900 flex items-center gap-3">
                <Ban size={20} className="text-red-700 flex-shrink-0" />
                <p className="text-[11px] leading-snug">
                  <span className="font-black">DO NOT BRING:</span> Electric Iron, Boiling Ring, Gas Stove, Large Electronics, or Sharp Objects.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Registration CTA */}
          <div className="bg-emerald-600 p-8 md:p-10 rounded-2xl md:rounded-3xl border-2 md:border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-white flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-200" />
                  <span className="uppercase text-[9px] font-black tracking-widest text-emerald-100">Status: Active</span>
                </div>
                <div className="bg-black/20 px-3 py-1 rounded-full border border-white/10 text-[10px] font-bold">
                  TIMSAN LAUTECH '26
                </div>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-black mb-6 italic leading-none">Secure Your <br/> Slot Today</h3>
              
              <p className="text-emerald-50 text-base md:text-xl mb-10 leading-relaxed opacity-90 font-medium">
                Join us for a weekend of growth, connection, and spiritual elevation. Ignite your purpose and lead with excellence.
              </p>

              {/* Inclusions Recap */}
              <div className="space-y-3 mb-8">
                <p className="text-xs font-black uppercase tracking-widest text-emerald-200 mb-2">Package Covers:</p>
                <div className="grid grid-cols-2 gap-2">
                  {['Accommodation', '3 Meals Daily', 'Workshops', 'Materials'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-bold">
                      <CheckCircle2 size={14} className="text-emerald-300" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pushes button to bottom */}
            <div className="mt-auto">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/register')}
                className="w-full bg-white text-emerald-700 font-black py-4 md:py-6 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-3 text-base md:text-xl transition-all"
              >
                PROCEED TO PAYMENT <ArrowRight size={24} />
              </motion.button>
              
              <p className="text-center text-[10px] text-emerald-200 font-medium mt-6 uppercase tracking-widest opacity-80">
                Verified by Oyo State TIMSAN Secretariat
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};