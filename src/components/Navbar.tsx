import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/timsan-logo.png"; // Ensure this path is correct based on your project structure

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      {/* Changed px-6 to px-4 on mobile to save space */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-3 md:py-4">
        
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 md:gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img 
            src={logo} 
            alt="TIMSAN Logo" 
            className="w-10 h-10 md:w-14 md:h-14 object-contain"
            referrerPolicy="no-referrer"
          />
          {/* hidden on extra small screens, shown from small (sm) upwards */}
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-emerald-700 font-black text-base md:text-lg tracking-tight">TIMSAN</span>
            <span className="text-gray-500 text-[10px] md:text-xs font-medium">Oyo State Conference</span>
          </div>
        </motion.div>
        
        {/* Navigation Links - Desktop Only */}
        <div className="hidden lg:flex items-center gap-8 font-medium tracking-tight text-sm text-gray-600">
          <a className="hover:text-emerald-600 transition-colors" href="#overview">Overview</a>
          <a className="hover:text-emerald-600 transition-colors" href="#logistics">Schedule</a>
          <a className="hover:text-emerald-600 transition-colors" href="#contact">Contact</a>
          <a className="hover:text-emerald-600 transition-colors" href="#faq">FAQs</a>
        </div>

        {/* Action Button */}
        <div className="flex items-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/register")} 
            className="bg-emerald-600 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-bold tracking-tight shadow-md hover:bg-emerald-700 transition-all whitespace-nowrap"
          >
            Register Now
          </motion.button>
        </div>
      </div>
    </nav>
  );
};