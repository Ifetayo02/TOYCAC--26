import { motion } from "framer-motion";
import { UserRound } from "lucide-react";
import aasiyah from "../assets/Aasiyah.jpg";
import ags from "../assets/AGS.jpg";
import chiefWhip3 from "../assets/Chief Whip 3.jpg";
import dhikroh from "../assets/Dhikroh.jpg";
import genSec from "../assets/Gen. Sec.jpg";
import maryam from "../assets/Maryam.jpg";
import misturah from "../assets/Misturah.jpg";
import muheez from "../assets/Muheez.jpg";
import muqqodam from "../assets/Muqqodam.jpg";
import muqqodamah from "../assets/Muqqodamah.jpg";
import muhammad from "../assets/Muhammad.jpg";
import naibatulMuqqodamah from "../assets/Naibatul Muqqodamah.jpg";
import naibulMuqqodam from "../assets/Naibul Muqqodam.jpg";
import pro from "../assets/pro.jpg";
import rasheed from "../assets/Rasheed.jpg";
import rokeeb from "../assets/Rokeeb.jpg";
import saheed from "../assets/Saheed.jpg";
import tiletChairman from "../assets/Tilet Chairman.jpg";
import tilSec from "../assets/Til Sec.jpg";

/**
 * Executive photos are imported from the local assets folder and attached to
 * each matching executive record below.
 */
export type Executive = {
  name: string;
  position: string;
  institution: string;
  image?: string;
};

const executives: Executive[] = [
  { name: "Seyyid Abdulkareem Abdulazeez", position: "Muqqodam", institution: "MULCOED", image: muqqodam },
  { name: "Seyyid Abdulrahmon Sheriff ", position: "Naibul Muqqodam", institution: "Moor Plantation", image: naibulMuqqodam },
  { name: "Seyyid Olawale Mubarak", position: "General Secretary", institution: "LAUTECH", image: genSec },
  { name: "Seyyida Almahbub Aishah", position: "Muqqodamah", institution: "UI", image: muqqodamah },
   { name: "Seyyida Jimoh Azeezat", position: "Asst. Gen. Secretary", institution: "OYSCHST", image: ags },
   { name: "Seyyida Olafimihan Fateemah", position: "Naibatul Muqqodamah", institution: "EAUED", image: naibatulMuqqodamah },
  { name: "Seyyid Adebiyi Habeeb", position: "PRO 1", institution: "TPI", image: pro },
   { name: "Seyyid Adepoju Abdulakeem ", position: "TILETS Chairman", institution: "LAUTECH", image: tiletChairman },
  { name: "Seyyida Abolore Misturah", position: "Member of TILETS Committee", institution: "EAUED", image: misturah },
  { name: "Seyyida Adebisi Hikmah", position: "Chief Whip 3", institution: "OYSCATECH", image: chiefWhip3 },
  { name: "Seyyida Ibrahim Aasiya", position: "Fin. Secretary 1", institution: "LAUTECH", image: aasiyah },
  { name: "Seyyida Adepoju Dhikroh", position: "Welfare Officer 3", institution: "TOPS", image: dhikroh },
  { name: "Seyyid Saheed Nasirudeen", position: "Chief Whip 1", institution: "MULCOED", image: saheed },
  { name: "Seyyid Misbaudeen Rasheed", position: "Welfare Officer 1", institution: "SPED", image: rasheed },
  { name: "Seyyid Tijani Abdullateef", position: "TILETS Secretary", institution: "UI", image: tilSec },
  { name: "Seyyid Aderemi Muhammad", position: "Welfare Officer 2", institution: "MULCOED", image: muhammad },
  { name: "Seyyida Jimoh Mariam", position: "Member of TILETS Committee", institution: "LAUTECH", image: maryam },
  { name: "Seyyid Obisesan Rokeeb", position: "PRO 2", institution: "UI", image: rokeeb },
  { name: "Seyyida Okunola Muiz", position: "Fin. Secretary 2", institution: "EAUED", image: muheez },
  
  
  { name: "TBA", position: "Ex-Officio II", institution: "TBA" },
];

export const Executives = () => {
  return (
    <section id="executives" className="py-12 md:py-24 px-4 md:px-6 bg-[#F0FDF4]">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {executives.map((exec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 10) * 0.05 }}
              className="text-center hover:-translate-y-1 transition-transform"
            >
              <div className="aspect-square w-full rounded-full bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden">
                {exec.image ? (
                  <img src={exec.image} alt={exec.name} className="w-full h-full object-cover object-[center_20%]" />
                ) : (
                  <UserRound className="w-12 h-12 md:w-16 md:h-16 text-emerald-300" strokeWidth={1.5} />
                )}
              </div>
              <div className="px-2 pt-3 md:px-4 md:pt-4">
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
