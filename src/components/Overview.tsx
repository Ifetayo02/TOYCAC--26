import { motion } from "framer-motion";
import { Users, Calendar, MapPin, Zap, Monitor, Camera,ArrowRight } from "lucide-react";
import imgBrotherhood from "../assets/download.jpg";
import imgEmpowerment from "../assets/empowerment.jpg";
import imgLittle from "../assets/little.jpg";
import imgMosque from "../assets/Akhbarudeen.jpg";
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
    desc: "Connect with brothers and sisters across Oyo State to build a lifelong network.",
    icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" />,
    color: "bg-emerald-50"
  }
];

// Abdulqoyum: Add your image paths here
const gallery = [
  { url: imgBrotherhood, label: "Brotherhood" },
  { url: imgEmpowerment, label: "Empowerment through skill development" },
  { url: imgLittle, label: "Bright Minds, Bold Future" },
  { url: imgMosque, label: "Akhbarudeen Mosque" },
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
            className="text-3xl md:text-5xl font-black text-gray-900 mb-3"
          >
            What to Expect at <span className="text-emerald-600">TCAC '26</span>
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
            Intensive growth designed to bridge the gap between spiritual devotion 
            and professional excellence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-6 md:p-8 border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${f.color}`}
            >
              <div className="mb-4 bg-white border-2 border-black w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {f.icon}
              </div>
              <h3 className="text-lg md:text-xl font-black text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- TRENDY CAROUSEL SECTION --- */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-6 px-4 md:px-0">
            <Camera className="text-emerald-600 w-5 h-5" />
            <span className="font-black uppercase tracking-widest text-xs text-emerald-600">The Atmosphere</span>
          </div>
          
          {/* Horizontal Scroll Snap Container */}
          <div className="flex gap-4 overflow-x-auto pb-8 px-4 md:px-0 snap-x snap-mandatory scrollbar-hide">
            {gallery.map((img, idx) => (
              <motion.div 
                key={idx}
                className="min-w-[260px] md:min-w-[320px] aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden border-2 border-black shadow-[5px_5px_0px_0px_rgba(5,150,105,1)] snap-center relative group"
                whileTap={{ scale: 0.98 }}
              >
                <img 
                  src={img.url} 
                  alt={img.label} 
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black border border-black uppercase">
                    {img.label}
                  </span>
                </div>
              </motion.div>
            ))}
            {/* Spacer for mobile to allow last card to center */}
            <div className="min-w-[20px] md:hidden"></div>
          </div>
        </div>

        {/* Logistics Quick-Info Card */}
<motion.div 
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  className="bg-emerald-600 text-white p-6 md:p-10 rounded-3xl border-2 md:border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row justify-between items-center gap-8 mx-4 md:mx-0 mt-12"
>
  <div className="space-y-4 text-center md:text-left flex-1">
    <div className="inline-block bg-black/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20">
      TIMSAN LAUTECH '26
    </div>
    
    <h3 className="text-4xl md:text-6xl font-black italic leading-[0.9] tracking-tighter">
      IGNITE YOUR <br /> 
      <span className="text-black/30">PURPOSE.</span>
    </h3>
    
    <p className="text-emerald-50 text-base md:text-xl font-medium max-w-md leading-tight">
      Unparalleled growth, lifelong brotherhood, and spiritual elevation. 
      Don't just witness the legacy,be part of it.
    </p>
  </div>

  <div className="flex flex-col gap-3 w-full md:w-64 shrink-0">
    <div className="bg-white text-emerald-700 p-4 rounded-2xl border-2 border-black flex items-center justify-center gap-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
      <Users size={20} />
      <span className="text-xs font-black uppercase tracking-tighter">Limited Slots Available</span>
    </div>
    
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate('/register')}
      className="bg-black text-white p-5 rounded-2xl border-2 border-emerald-400 font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2"
    >
     Claim Your Spot <ArrowRight size={18} />
    </motion.button>
  </div>
</motion.div>
      </div>
    </section>
  );
};