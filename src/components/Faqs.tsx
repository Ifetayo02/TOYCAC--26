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
    answer: "Rooted in a legacy of consistency, the Oyo State Zone has successfully organized this conference annually, alternating host institutions to ensure a balanced and inclusive experience for all Muslim students in the state"
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
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <span className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest border border-emerald-200 flex items-center gap-2">
              <HelpCircle size={14} /> Support
            </span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4">Frequently Asked</h2>
          <p className="text-gray-600">Everything you need to know before joining us at TCAC '26.</p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`border-2 border-black rounded-2xl overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'shadow-[6px_6px_0px_0px_rgba(5,150,105,1)]' : 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-emerald-50 transition-colors"
              >
                <span className="font-bold text-gray-900 text-lg leading-tight">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  className="text-emerald-600 bg-emerald-50 p-2 rounded-lg border border-emerald-200"
                >
                  <ChevronDown size={20} />
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
                    <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-12 p-8 bg-[#F0FDF4] rounded-3xl border-2 border-dashed border-emerald-300 text-center" id="contact">
          <p className="font-bold text-gray-800 mb-4">Still confused about something?</p>
          <a 
            href="https://wa.me/your-number" 
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-xl font-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] active:translate-y-[0px] transition-all"
          >
            <MessageCircle size={20} /> Message the Secretariat
          </a>
        </div>

      </div>
    </section>
  );
};
export default FaqAccordion;