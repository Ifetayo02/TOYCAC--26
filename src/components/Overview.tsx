import { motion } from "framer-motion";
import { BookOpen, Monitor, Users, Calendar, MapPin, Zap } from "lucide-react";

const features = [
  {
    title: "Spiritual Rejuvenation",
    desc: "Soul-stirring Adhkaar sessions, Tahajjud, and lectures from renowned scholars.",
    icon: <Zap className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" />,
    color: "bg-emerald-50"
  },
  {
    title: "Intellectual Growth",
    desc: "Workshops designed to enhance your critical thinking and personal development.",
    icon: <Monitor className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" />,
    color: "bg-blue-50"
  },
  {
    title: "Strategic Networking",
    desc: "Connect with brothers and sisters across Oyo State to build a lifelong network.",
    icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" />,
    color: "bg-purple-50"
  }
];

export const Overview = () => {
  return (
    <section id="overview" className="py-12 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-gray-900 mb-3"
          >
            What to Expect at <span className="text-emerald-600">TCAC '26</span>
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed px-2">
            Intensive growth designed to bridge the gap between spiritual devotion 
            and professional excellence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-6 md:p-8 border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all ${f.color}`}
            >
              <div className="mb-4 bg-white border-2 border-black w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                {f.icon}
              </div>
              <h3 className="text-lg md:text-xl font-black text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Logistics Quick-Info Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-emerald-600 text-white p-6 md:p-12 rounded-2xl md:rounded-3xl border-2 md:border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8"
        >
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black italic">Save the Dates!</h3>
            <p className="text-emerald-100 max-w-md text-sm md:text-lg">
              Registration covers accommodation, feeding, and materials for the camp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
            <div className="flex items-center gap-3 bg-emerald-700/50 p-3 md:p-4 rounded-xl border-2 border-black">
              <Calendar className="w-5 h-5 text-emerald-300" />
              <div>
                <p className="text-[10px] uppercase font-bold text-emerald-200">Date</p>
                <p className="text-sm md:text-base font-bold">To be decided</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-emerald-700/50 p-3 md:p-4 rounded-xl border-2 border-black">
              <MapPin className="w-5 h-5 text-emerald-300" />
              <div>
                <p className="text-[10px] uppercase font-bold text-emerald-200">Venue</p>
                <p className="text-sm md:text-base font-bold">To be decided</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};