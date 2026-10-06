import { Instagram } from "lucide-react";
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
        <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">
          Contact Us On
        </p>
       <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 text-emerald-500 font-bold text-xs md:text-sm mb-8" id="contact">
          <a 
            href="mailto:timsan.oyocampandconference@gmail.com" 
            className="hover:text-emerald-400 transition-colors break-all px-4 md:px-0"
          >
            timsanoyostate@gmail.com
          </a>
          <span className="hidden md:block text-gray-700">|</span>
          <a href="tel:+2348130089797" className="hover:text-emerald-400 transition-colors">
            +234 8054958284
          </a>
            <a href="tel:+2349057647997" className="hover:text-emerald-400 transition-colors">
            +234 8023889399
          </a>
        </div>

        {/* Social Media */}
        <div className="mb-8">
          <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">
            Connect With Us On
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/oyo_timsan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-400 transition-all transform hover:scale-110"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@timsanoyostate?_r=1&_t=ZS-9AK7Lg2wmhC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-400 transition-all transform hover:scale-110"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.753 2h3.172c.144 1.17.58 2.267 1.252 3.21.973 1.37 2.405 2.394 4.073 2.86v3.277a7.98 7.98 0 0 1-4.19-1.24v6.646c0 3.42-2.776 6.247-6.195 6.247A6.195 6.195 0 0 1 4.67 16.76c0-3.37 2.69-6.145 6.054-6.238v3.26a3.01 3.01 0 0 0-3.055 3.01 3.01 3.01 0 1 0 6.022 0V2z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-xs h-[1px] bg-white/10 mb-6"></div>

        {/* Copyright */}
        <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-medium">
          <p>© {currentYear} TIMSAN Oyo State. All Rights Reserved.</p>
          <p className="mt-1 text-gray-600">Designed and built by Abdulqoyum</p>
        </div>
        
      </div>
    </footer>
  );
};