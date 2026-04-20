import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative px-6 py-16 md:py-32 overflow-hidden bg-[#F0FDF4]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-8 z-10 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-block text-emerald-700 font-bold tracking-widest text-xs uppercase bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-200">
              TOYCAC '26
            </span>
            
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
              TIMSAN Camp & <br />
              <span className="text-emerald-600">Conference 2026</span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl max-w-xl leading-relaxed">
               
         Experience a transformative  journey and participate in an extraordinary experience while delving into the heart of leadership excellence, creativity, innovation, brotherhood, and exponential growth.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-5"
          >
            {/* Primary Action - Matches Navbar Shadow Style */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-emerald-600 text-white px-10 py-4 rounded-xl text-lg font-black border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-emerald-700"
              onClick={() => document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Register Now
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-gray-800 px-10 py-4 rounded-xl text-lg font-bold border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-gray-50"
            >
              View Schedule
            </motion.button>
          </motion.div>
        </div>

        {/* Visual Content */}
        <div className="w-full md:w-1/2 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="aspect-[16/11] rounded-2xl overflow-hidden border-4 border-black shadow-[12px_12px_0px_0px_rgba(5,150,105,0.2)] relative"
          >
            {/* Replace with a high-res camp image or mosque photo */}
            <img 
              className="w-full h-full object-cover" 
              src="../download.jpg" 
              alt="TIMSAN Conference delegates"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent"></div>
          </motion.div>
          
          {/* Decorative Background Glow */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-400 rounded-full blur-[120px] opacity-20 -z-10"></div>
        </div>
      </div>
    </section>
  );
};