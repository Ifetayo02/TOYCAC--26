import React from "react";
import { motion } from "framer-motion";
import { Users, Zap, Monitor, Camera, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Image Imports
import imgBrotherhood from "../assets/brothers.jpg";
import imgCompetition from "../assets/competition.jpg";
import imgZikr from "../assets/Zikr.jpg"; 
import imgPanel from "../assets/Panel Session.jpg";
import imgMedical from "../assets/Medical Checkup.jpg";
import imgMosque from "../assets/Akhbarudeen.jpg";

const features = [
  {
    title: "Spiritual Rejuvenation",
    desc: "Soul-stirring Adhkaar sessions, Tahajjud, and lectures from renowned scholars.",
    icon: <Zap className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" />,
    color: "bg-emerald-50"
  },
  {
    title: "Intellectual Growth",
    desc: "Workshops designed to enhance your critical thinking and personal development.",
    icon: <Monitor className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" />,
    color: "bg-emerald-50"
  },
  {
    title: "Strategic Networking",
    desc: "Connect with brothers across Oyo State to build a lifelong network.",
    icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" />,
    color: "bg-emerald-50"
  }
];

const gallery = [
  { url: imgBrotherhood, label: "Brotherhood" },
  { url: imgZikr, label: "Zikr Sessions" },
  { url: imgPanel, label: "Panel Sessions" },
  { url: imgMosque, label: "Akhbarudeen Mosque" },
  { url: imgCompetition, label: "Quranic Competition" },
  { url: imgMedical, label: "Medical Checkup" }
];

export const Overview = () => {
  const navigate = useNavigate();

  return (
    <section id="overview" className="py-12 md:py-24 px-0 md:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-gray-900 mb-3 uppercase italic"
          >
            What to Expect at <span className="text-emerald-600">TOYCAC '26</span>
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
            Intensive growth designed to bridge the gap between spiritual devotion 
            and professional excellence.
          </p>
        </div>

        {/* Features Grid - Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-6 md:p-8 border-2 border-black rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${f.color}`}
            >
              <div className="mb-4 bg-white border-2 border-black w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {f.icon}
              </div>
              <h3 className="text-lg md:text-xl font-black text-gray-900 mb-2 uppercase tracking-tight">{f.title}</h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- PERFORMANCE-OPTIMIZED MARQUEE GALLERY --- */}
        <div className="mb-16 md:mb-24 overflow-hidden">
          <div className="flex items-center gap-2 mb-6 px-4 md:px-0">
            <Camera className="text-emerald-600 w-5 h-5" />
            <span className="font-black uppercase tracking-widest text-[10px] md:text-xs text-emerald-600">The Atmosphere</span>
          </div>
          
          <div className="relative flex overflow-x-hidden group">
            <div className="flex py-4 whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
              {[...gallery, ...gallery].map((img, idx) => (
                <motion.div 
                  key={idx}
                  className="inline-block mx-3 min-w-[260px] md:min-w-[320px] aspect-[4/5] bg-gray-100 rounded-[2rem] overflow-hidden border-2 border-black shadow-[6px_6px_0px_0px_rgba(5,150,105,1)] relative"
                  whileTap={{ scale: 0.96 }}
                >
                  <img 
                    src={img.url} 
                    alt={img.label} 
                    loading="lazy"
                    className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white px-3 py-1.5 rounded-full text-[10px] font-black border-2 border-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      {img.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-emerald-600 text-white p-6 md:p-10 rounded-[2.5rem] border-2 md:border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="space-y-4 text-center md:text-left flex-1">
            <h3 className="text-4xl md:text-6xl font-black italic leading-[0.9] tracking-tighter uppercase">
              IGNITE YOUR <br /> 
              <span className="text-black/30">PURPOSE.</span>
            </h3>
            <p className="text-emerald-50 text-sm md:text-xl font-medium max-w-md">
              Unparalleled growth and spiritual elevation. Don't just witness the legacy, be part of it.
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full md:w-64">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/register')}
              className="bg-black text-white p-5 rounded-2xl border-2 border-emerald-400 font-black text-xs md:text-sm uppercase tracking-widest flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]"
            >
              Claim Your Spot <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};