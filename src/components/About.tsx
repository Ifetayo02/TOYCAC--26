import { motion } from "framer-motion";
import { BookOpen, HeartHandshake, GraduationCap, Landmark } from "lucide-react";
import timsanLogo from "../assets/TMS-fb.jpg";

const pillars = [
  {
    title: "Da'awah",
    desc: "Calling students back to the deen through lectures, seminars, and webinars.",
    icon: <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-emerald-700" />,
  },
  {
    title: "Brotherhood & Sisterhood",
    desc: "Uniting Muslim students across every tertiary institution in Oyo State under one Ummah.",
    icon: <HeartHandshake className="w-5 h-5 md:w-6 md:h-6 text-emerald-700" />,
  },
  {
    title: "Academic Excellence",
    desc: "Mentorship, tutorials, and scholarship support that push members toward excellence in and out of class.",
    icon: <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-emerald-700" />,
  },
  {
    title: "Leadership Development",
    desc: "Grooming principled leaders for the Ummah through committees, camps, and hands-on responsibility.",
    icon: <Landmark className="w-5 h-5 md:w-6 md:h-6 text-emerald-700" />,
  },
];

export const About = () => {
  return (
    <section id="about" className="py-12 md:py-24 px-4 md:px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <span className="inline-block text-emerald-700 font-bold tracking-widest text-[10px] md:text-xs uppercase bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-200">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase italic leading-[1.05]">
            TIMSAN <span className="text-emerald-600">Oyo State</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto">
            The Muslim Students' Society of Nigeria (TIMSAN), Oyo State Chapter, is the
            umbrella body uniting Muslim students across all tertiary institutions
            in the state from LAUTECH and UI to Poly Ibadan and beyond
            through Da'awah programs, academic support, and personal development that
            keep members rooted in faith while excelling on campus.
          </p>
          <p className="text-gray-600 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto">
            TOYCAC is our flagship annual gathering, a few days when every chapter
            comes together under one roof for worship, learning, and brotherhood
            that lasts well beyond camp.
          </p>
        </motion.div>
      </div>

      {/* Emblem + stat strip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 mb-12 md:mb-16"
      >
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 md:border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] shrink-0">
          <img src={timsanLogo} alt="TIMSAN logo" className="w-full h-full object-cover" />
        </div>
        <div className="bg-emerald-600 text-white px-8 py-5 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
          <p className="text-3xl md:text-4xl font-black italic leading-none">10+</p>
          <p className="text-[10px] font-bold uppercase tracking-widest mt-1">Tertiary Institutions</p>
        </div>
      </motion.div>

      {/* Pillars */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="p-4 md:p-5 rounded-2xl border-2 border-black/10 bg-[#F5FBF5] hover:border-emerald-300 transition-colors text-center sm:text-left"
          >
            <div className="mb-3 bg-white border-2 border-black w-10 h-10 rounded-xl flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mx-auto sm:mx-0">
              {p.icon}
            </div>
            <h3 className="font-black text-gray-900 text-sm md:text-base uppercase tracking-tight mb-1">
              {p.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-600 leading-snug">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};