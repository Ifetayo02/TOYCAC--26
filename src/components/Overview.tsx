import React from "react";
import { motion } from "framer-motion";
import { Users, Zap, Monitor, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
            className="text-3xl md:text-6xl font-black text-gray-900 mb-3 uppercase italic leading-none"
          >
            Expect <span className="text-emerald-600">Excellence</span>
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
            Bridging the gap between spiritual devotion and professional leadership at TOYCAC '27.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-6 md:p-10 border-2 border-black rounded-[2rem] shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] ${f.color}`}
            >
              <div className="mb-6 bg-white border-2 border-black w-14 h-14 rounded-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                {f.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3 uppercase tracking-tight">{f.title}</h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- CALL TO ACTION CARD --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-emerald-600 text-white p-8 md:p-14 rounded-[3rem] border-2 md:border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row justify-between items-center gap-10"
        >
          <div className="space-y-5 text-center md:text-left flex-1">
            <div className="inline-block bg-black/20 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20">
              Registration Open
            </div>
            <h3 className="text-5xl md:text-7xl font-black italic leading-[0.85] tracking-tighter uppercase">
              IGNITE YOUR <br /> 
              <span className="text-black/30">PURPOSE.</span>
            </h3>
            <p className="text-emerald-50 text-sm md:text-xl font-medium max-w-md leading-snug">
              Don't just witness the legacy, be part of the transformation at TOYCAC '27.
            </p>
          </div>

          <div className="w-full md:w-72 shrink-0">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/register')}
              className="w-full bg-black text-white p-6 rounded-2xl border-2 border-emerald-400 font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)] transition-all"
            >
              Get Tickets <ArrowRight size={20} className="text-emerald-400" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};