import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

const faqData = [
  {
    question: "What is TIMSAN?",
    answer: "TIMSAN (Tijaniyyah Muslim Students’ Association of Nigeria) exists to uplift the spiritual life, academic excellence and social service ethic of Tijaniyyah students in Nigerian tertiary institutions. The camp is its programme for putting those ideals into practice."
  },
    {
    question:"When & where it happens?",
    answer: "Rooted in a legacy of consistency, the Oyo State Zone has successfully organized this conference annually, alternating host institutions to ensure a balanced and inclusive experience for all Muslim students in the state.This year's camp is proudly hosted by TIMSAN LAUTECH, Ogbomosho, and will be held at the Akhbarudeen Central Mosque, Caretaker Area, Ogbomosho from Thursday, 6th to Sunday, 9th August 2026."
  },
    {
    question: "How do I register for the camp?",
    answer: "Secure your registration in three steps: Pay the delegate fee to the official account on the payment page, capture your digital receipt, and upload it through our integrated Google Form. A confirmation email will be dispatched to you once our Secretariat validates the transaction."
  },
  {
    question: "Is the registration fee for the entirety of the camp?",
    answer: "Yes! The registration fee is all-inclusive. It covers your accommodation at the Iseyin camp, three meals per day, conference materials, and access to all technical and spiritual sessions."
  },

  {
    question: "Can I get a refund if I am unable to attend?",
    answer: "No!,Registration fees are generally non-refundable as they are immediately committed to logistics (feeding and materials)."
  }
];

export const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        
        {/* Header - Tightened for Mobile */}
        <div className="text-center mb-10 md:mb-16">
          <div className="flex justify-center mb-3">
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest border border-emerald-200 flex items-center gap-2">
              <HelpCircle size={12} /> Support
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Frequently Asked</h2>
          <p className="text-gray-600 text-sm md:text-base px-4">Everything you need to know before TOYCAC '26.</p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 md:space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`border-2 border-black rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 ${
                activeIndex === index 
                ? 'shadow-[4px_4px_0px_0px_rgba(5,150,105,1)] md:shadow-[6px_6px_0px_0px_rgba(5,150,105,1)]' 
                : 'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-4 md:p-6 text-left bg-white hover:bg-emerald-50 transition-colors"
              >
                <span className="font-bold text-gray-900 text-sm md:text-lg leading-tight pr-4">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  className="text-emerald-600 bg-emerald-50 p-1.5 md:p-2 rounded-lg border border-emerald-200 flex-shrink-0"
                >
                  <ChevronDown size={18} />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-4 md:px-6 pb-4 md:pb-6 pt-1 text-gray-600 text-xs md:text-base leading-relaxed border-t border-gray-50">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Support CTA - Minimized for Mobile */}
        <div className="mt-10 p-6 md:p-8 bg-[#F0FDF4] rounded-2xl md:rounded-3xl border-2 border-dashed border-emerald-300 text-center" id="contact">
          <p className="font-bold text-sm md:text-base text-gray-800 mb-4">Still confused about something?</p>
          <a 
            href="https://wa.me/+2347059098620?text=Hello%20TCAC%20Secretariat%2C%20I%20have%20a%20question%20about%20the%20upcoming%20camp." 
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 md:px-8 py-3 rounded-xl text-sm md:text-base font-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 active:translate-y-0 transition-all"
          >
            <MessageCircle size={18} /> Message Secretariat
          </a>
        </div>

      </div>
    </section>
  );
};
export default FaqAccordion;