import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import logo from "../assets/timsan-logo.png"; // Ensure this matches your logo file name

export const PaymentNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white  px-4 py-3 md:py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Brand/Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-white p-1 rounded-full  group-hover:translate-y-[-1px] transition-all">
            <img 
              src={logo} 
              alt="TCAC Logo" 
              className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover" 
            />
          </div>
          <div className="flex flex-col">
           
            <span className="font-black text-xs md:text-sm tracking-tighter text-emerald-600 uppercase leading-none">
              TOYCAC <span className="font-black text-xs md:text-sm tracking-tighter text-gray-900 uppercase leading-none">'26</span> 
            </span>
          </div>
        </Link>
        
        {/* Support Link */}
        <a 
          href="https://wa.me/2348137039272" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-2 md:px-5 md:py-2.5 rounded-xl text-[9px] md:text-[11px] font-black uppercase border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] active:shadow-none active:translate-y-[1px] transition-all"
        >
          <MessageCircle size={14} strokeWidth={3} className="md:w-4 md:h-4" /> 
          <span>Support</span>
        </a>
      </div>
    </nav>
  );
};