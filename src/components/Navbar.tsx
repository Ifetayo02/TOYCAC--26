import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import  logo  from "../assets/timsan-logo.png"; // Replace with your actual logo path

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Schedule", href: "#logistics" },
    { name: "Contact", href: "#contact" },
    { name: "FAQs", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-3">
        
        {/* Logo Section */}
        <div onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
          <span className="text-emerald-700 font-black text-lg tracking-tight hidden xs:block">TCAC '26</span>
        </div>

        {/* Desktop Links - HIDDEN ON MOBILE */}
        <div className="hidden lg:flex items-center gap-8 font-medium text-sm">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-600 hover:text-emerald-600 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/register")} 
            className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-xs md:text-sm font-bold shadow-md"
          >
            Register Now
          </motion.button>

          {/* HAMBURGER - ONLY VISIBLE ON SMALL SCREENS (lg:hidden) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-all"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown - ONLY ACCESSIBLE ON MOBILE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-b shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-5 space-y-5 bg-white">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className="text-gray-700 font-bold text-lg hover:text-emerald-600 border-b border-gray-50 pb-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};