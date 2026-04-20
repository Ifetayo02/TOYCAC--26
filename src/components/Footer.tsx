import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#222222] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Logo */}
        <div className="mb-6">
          <img 
            src="timsan-logo.png" 
            alt="TIMSAN Logo" 
            className="w-20 h-20 object-contain rounded-full border-2 border-emerald-500/20 p-1"
          />
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold tracking-wider mb-4 uppercase">
          TIMSAN CAMP AND CONFERENCE, OYO STATE
        </h3>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-emerald-500 font-medium mb-8">
          <a href="mailto:timsan.oyocampandconference@gmail.com" className="hover:text-emerald-400 transition-colors">
            timsan.oyocampandconference@gmail.com
          </a>
          <span className="text-white hidden md:block">|</span>
          <a href="tel:+2348100000000" className="hover:text-emerald-400 transition-colors">
            +234 810 000 0000
          </a>
        </div>

        {/* Social Media */}
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-widest mb-4">Follow Us</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="bg-emerald-600 p-2.5 rounded-full hover:bg-emerald-500 transition-all hover:scale-110 shadow-lg">
              <Facebook size={20} fill="currentColor" />
            </a>
            <a href="#" className="bg-emerald-600 p-2.5 rounded-full hover:bg-emerald-500 transition-all hover:scale-110 shadow-lg">
              <Instagram size={20} />
            </a>
            <a href="#" className="bg-emerald-600 p-2.5 rounded-full hover:bg-emerald-500 transition-all hover:scale-110 shadow-lg">
              <Twitter size={20} fill="currentColor" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-400 space-y-1">
          <p>© {currentYear}. Powered by TIMSAN Oyo State.</p>
          <p>All Rights Reserved.</p>
        </div>
        
      </div>
    </footer>
  );
};