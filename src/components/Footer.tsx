import { Facebook, Instagram, Twitter } from "lucide-react";
import logo from "../assets/timsan-logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white py-10 px-4 md:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Logo */}
        <div className="mb-5">
          <img 
            src={logo} 
            alt="TIMSAN Logo" 
            className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full border border-emerald-500/30 p-1"
          />
        </div>

        {/* Title */}
        <h3 className="text-sm md:text-lg font-black tracking-[0.15em] mb-4 uppercase max-w-xs md:max-w-none leading-relaxed">
          TIMSAN Camp & Conference <br className="md:hidden" /> Oyo State
        </h3>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 text-emerald-500 font-bold text-xs md:text-sm mb-8">
          <a 
            href="mailto:timsan.oyocampandconference@gmail.com" 
            className="hover:text-emerald-400 transition-colors break-all px-4 md:px-0"
          >
            timsanoyostate@gmail.com
          </a>
          <span className="hidden md:block text-gray-700">|</span>
          <a href="tel:+2348130089797" className="hover:text-emerald-400 transition-colors">
            +234 8130089797
          </a>
            <a href="tel:+2349057647997" className="hover:text-emerald-400 transition-colors">
            +234 9057647997
          </a>
        </div>

        {/* Social Media - Updated to Emerald */}
        <div className="mb-8">
          <div className="flex justify-center gap-6">
            <a href="#" className="text-emerald-600 hover:text-emerald-400 transition-all transform hover:scale-110">
              <Facebook size={24} fill="currentColor" />
            </a>
            <a href="https://www.instagram.com/oyo_timsan/" className="text-emerald-600 hover:text-emerald-400 transition-all transform hover:scale-110">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-emerald-600 hover:text-emerald-400 transition-all transform hover:scale-110">
              <Twitter size={24} fill="currentColor" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-xs h-[1px] bg-white/10 mb-6"></div>

        {/* Copyright */}
        <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-medium">
          <p>© {currentYear} TIMSAN Oyo State. All Rights Reserved.</p>
          <p className="mt-1 text-gray-600">Built with love by Abdulqoyum</p>
        </div>
        
      </div>
    </footer>
  );
};