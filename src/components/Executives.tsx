import { motion } from "framer-motion";
import { UserRound } from "lucide-react";

const CLOUD_NAME = "dio5go08v";

// Change this ONE line to resize every executive photo on the page.
// Order is: phone, tablet, desktop (96px, 112px, 144px).
const AVATAR_SIZE = "w-24 sm:w-28 lg:w-36";

// No folder prefix here — Dynamic Folder Mode keeps the visual folder
// separate from the actual delivery path, so it never appears in the URL.
// encodeURIComponent handles the public IDs that have spaces/periods in them
// (since these were uploaded keeping their original filenames as-is).
const execImg = (publicId: string) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_400,h_400,c_fill,g_auto,q_auto,f_auto/${encodeURIComponent(publicId)}`;

export type Executive = {
  name: string;
  position: string;
  institution: string;
  image?: string;
};

const executives: Executive[] = [
  { name: "Seyyid Abdulkareem Abdulazeez", position: "Muqqodam", institution: "MULCOED", image: execImg("Muqqodam") },
  { name: "Seyyid Abdulrahmon Sheriff ", position: "Naibul Muqqodam", institution: "Moor Plantation", image: execImg("naibul-muqqodam") },
  { name: "Seyyid Olawale Mubarak", position: "General Secretary", institution: "LAUTECH", image: execImg("gen-sec") },
  { name: "Seyyida Almahbub Aishah", position: "Muqqodamah", institution: "UI", image: execImg("Muqqodamah") },
  { name: "Seyyida Jimoh Azeezat", position: "Asst. Gen. Secretary", institution: "OYSCHST", image: execImg("AGS") },
  { name: "Seyyida Olafimihan Fateemah", position: "Naibatul Muqqodamah", institution: "EAUED", image: execImg("naibatul-muqqodamah") },
  { name: "Seyyid Adebiyi Habeeb", position: "PRO 1", institution: "TPI", image: execImg("pro") },
  { name: "Seyyid Adepoju Abdulakeem ", position: "TILETS Chairman", institution: "LAUTECH", image: execImg("tilet-chairman") },
  { name: "Seyyida Abolore Misturah", position: "Member of TILETS Committee", institution: "EAUED", image: execImg("Misturah") },
  { name: "Seyyida Adebisi Hikmah", position: "Chief Whip 3", institution: "OYSCATECH", image: execImg("hikmah") },
  { name: "Seyyida Ibrahim Aasiya", position: "Fin. Secretary 1", institution: "LAUTECH", image: execImg("Aasiyah") },
  { name: "Seyyida Adepoju Dhikroh", position: "Welfare Officer 3", institution: "TOPS", image: execImg("Dhikroh") },
  { name: "Seyyid Saheed Nasirudeen", position: "Chief Whip 1", institution: "MULCOED", image: execImg("Saheed") },
  { name: "Seyyid Misbaudeen Rasheed", position: "Welfare Officer 1", institution: "SPED", image: execImg("Rasheed") },
  { name: "Seyyid Tijani Abdullateef", position: "TILETS Secretary", institution: "UI", image: execImg("til-sec") },
  { name: "Seyyid Aderemi Muhammad", position: "Welfare Officer 2", institution: "MULCOED", image: execImg("Muhammad") },
  { name: "Seyyida Jimoh Mariam", position: "Member of TILETS Committee", institution: "LAUTECH", image: execImg("Maryam") },
  { name: "Seyyid Obisesan Rokeeb", position: "PRO 2", institution: "UI", image: execImg("Rokeeb") },
  { name: "Seyyid Okunola Muiz", position: "Fin. Secretary 2", institution: "EAUED", image: execImg("Muheez") },
  { name: "Seyyida Jimoh Saidat", position: "Chief Whip 2", institution: "TPI", image: execImg("saidat") },
];

export const Executives = () => {
  return (
    <section id="executives" className="watermark watermark-left py-12 md:py-24 px-4 md:px-6 bg-[#F0FDF4]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-black text-gray-900 mb-3 uppercase italic leading-none"
          >
            Sitting <span className="text-emerald-600">Executives</span>
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
            The men and women steering TIMSAN Oyo State this tenure.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-8 sm:gap-x-4 md:gap-x-6 md:gap-y-10">
          {executives.map((exec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 10) * 0.05 }}
              className="text-center hover:-translate-y-1 transition-transform"
            >
              <div
                className={`${AVATAR_SIZE} aspect-square mx-auto rounded-full bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden`}
              >
                {exec.image ? (
                  <img src={exec.image} alt={exec.name} className="w-full h-full object-cover object-[center_20%]" />
                ) : (
                  <UserRound className="w-10 h-10 md:w-14 md:h-14 text-emerald-300" strokeWidth={1.5} />
                )}
              </div>
              <div className="px-1 pt-3 md:pt-4 max-w-[11rem] mx-auto">
                <p className="font-black text-gray-900 text-[10px] md:text-xs uppercase tracking-tight leading-tight">
                  {exec.name}
                </p>
                <p className="text-emerald-700 text-[9px] md:text-[10px] font-bold mt-1 leading-snug">
                  {exec.position}
                </p>
                <p className="text-gray-400 text-[8px] md:text-[9px] mt-1 uppercase tracking-wide truncate">
                  {exec.institution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};