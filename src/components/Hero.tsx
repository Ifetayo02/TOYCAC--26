import { motion } from "framer-motion";
import heroImage from "../assets/download.jpg"; 
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative px-6 py-12 md:py-32 overflow-hidden bg-[#F0FDF4]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
        {/* Text Content - Added 'text-center' for mobile */}
        <div className="w-full md:w-1/2 space-y-6 md:space-y-8 z-10 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6"
          >
            <span className="inline-block text-emerald-700 font-bold tracking-widest text-[10px] md:text-xs uppercase bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-200">
              TCAC '26
            </span>
            
            {/* Minimized text-4xl on mobile, text-7xl on desktop */}
            <h1 className="text-4xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
              TIMSAN Oyo State  <br className="hidden md:block" />
              <span className="text-emerald-600">Camp & Conference 2026</span>
            </h1>
            
            {/* Adjusted font size and centering for paragraph */}
            <p className="text-gray-600 text-base md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed">
              Experience a transformative journey while delving into leadership excellence, 
              innovation, and brotherhood.
            </p>
          </motion.div>

          {/* Button Container - Added 'justify-center' for mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 md:gap-5"
          >
            <motion.div 
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 md:gap-5"
>
  {/* Primary Action */}
  <motion.button 
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="bg-emerald-600 text-white px-4 md:px-10 py-3 md:py-4 rounded-xl text-sm md:text-lg font-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-emerald-700"
    onClick={() => navigate("/register")}
  >
    Register Now
  </motion.button>

  {/* Secondary Action */}
  <motion.button 
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="bg-white text-gray-800 px-4 md:px-10 py-3 md:py-4 rounded-xl text-sm md:text-lg font-bold border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-gray-50"
    onClick={() => document.getElementById('logistics')?.scrollIntoView({ behavior: 'smooth' })}
  >
    View Schedule
  </motion.button>
</motion.div>
          </motion.div>
        </div>

        {/* Visual Content */}
        <div className="w-full md:w-1/2 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="aspect-[16/11] rounded-2xl overflow-hidden border-2 md:border-4 border-black shadow-[8px_8px_0px_0px_rgba(5,150,105,0.2)] md:shadow-[12px_12px_0px_0px_rgba(5,150,105,0.2)] relative"
          >
            <img 
              className="w-full h-full object-cover" 
              src={heroImage} 
              alt="TIMSAN Conference delegates"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent"></div>
          </motion.div>
          
          <div className="absolute -bottom-10 -right-10 w-48 h-48 md:w-64 md:h-64 bg-emerald-400 rounded-full blur-[80px] md:blur-[120px] opacity-20 -z-10"></div>
        </div>
      </div>
    </section>
  );
};