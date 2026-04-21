import { motion } from "framer-motion";
import { BookOpen, Monitor, Users, Calendar, MapPin, Zap } from "lucide-react";

const features = [
  {
    title: "Spiritual Rejuvenation",
    desc: "Soul-stirring Adhkaar sessions, Tahajjud, and lectures from renowned scholars to recharge your Imaan.",
    icon: <Zap className="w-8 h-8 text-emerald-600" />,
    color: "bg-emerald-50"
  },
  {
    title: "Intellectual & Personal Growth",
    desc: "Engage in thought-provoking discussions and workshops designed to enhance your critical thinking and personal development.",
    icon: <Monitor className="w-8 h-8 text-emerald-600" />,
    color: "bg-blue-50"
  },
  {
    title: "Strategic Networking",
    desc: "Connect with brothers and sisters from tertiary institutions across Oyo State to build a lifelong network.",
    icon: <Users className="w-8 h-8 text-emerald-600" />,
    color: "bg-purple-50"
  }
];

export const Overview = () => {
  return (
    <section id="overview" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
          >
            What to Expect at <span className="text-emerald-600">TCAC '26</span>
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Experience intensive growth designed to bridge the gap between spiritual devotion 
            and professional excellence for the 21st-century Muslim student.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 border-2 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all ${f.color}`}
            >
              <div className="mb-4 bg-white border-2 border-black w-14 h-14 rounded-xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                {f.icon}
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-700 leading-relaxed">
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
          className="bg-emerald-600 text-white p-8 md:p-12 rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-3xl font-black italic">Save the Dates!</h3>
            <p className="text-emerald-100 max-w-md text-lg">
              Registration covers accommodation, feeding, and all conference materials for the duration of the camp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-auto">
            <div className="flex items-center gap-4 bg-emerald-700/50 p-4 rounded-xl border-2 border-black">
              <Calendar className="w-6 h-6 text-emerald-300" />
              <div>
                <p className="text-xs uppercase font-bold text-emerald-200">Date</p>
                <p className="font-bold">To be decided</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-emerald-700/50 p-4 rounded-xl border-2 border-black">
              <MapPin className="w-6 h-6 text-emerald-300" />
              <div>
                <p className="text-xs uppercase font-bold text-emerald-200">Venue</p>
                <p className="font-bold">To be decided</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};