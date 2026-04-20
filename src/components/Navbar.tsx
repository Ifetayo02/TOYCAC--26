import { motion } from "framer-motion";
import {useNavigate} from "react-router-dom" // Changed to 'framer-motion' as it's the standard package name

export const Navbar = () => {
  const navigate = useNavigate(); // Hook for navigation
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 w-full mx-auto">
        
        {/* Logo Section - Scaled Up */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src="timsan-logo.png" 
            alt="TIMSAN Logo" 
            className="w-14 h-14 object-contain" // Increased from w-10 to w-14
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col leading-tight hidden xs:block">
            <span className="text-emerald-700 font-black text-lg tracking-tight">TIMSAN</span>
            <span className="text-gray-500 text-xs font-medium">Oyo State Conference</span>
          </div>
        </motion.div>
        
        {/* Navigation Links - Updated for Camp Purpose */}
        <div className="hidden lg:flex items-center gap-8 font-medium tracking-tight text-sm">
          <a className="text-emerald-600 font-bold border-b-2 border-emerald-600" href="#overview">Overview</a>

          <a className="text-gray-600 hover:text-emerald-600 transition-colors" href="#schedule">Schedule</a>
          <a className="text-gray-600 hover:text-emerald-600 transition-colors" href="#contact">Contact</a>
                    <a className="text-gray-600 hover:text-emerald-600 transition-colors" href="#faq">FAQs</a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          
          {/* Changed 'Login' to 'Register' to match our workflow */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/register")} 
            className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg text-sm font-bold tracking-tight shadow-md hover:bg-emerald-700 transition-all"
          >
            Register Now
          </motion.button>
        </div>
      </div>
    </nav>
  );
};