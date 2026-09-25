import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Images, X, Loader2 } from "lucide-react";

/**
 * HOW TO ADD NEW PHOTOS (no code changes needed):
 * 1. Upload the photo to your Cloudinary account (any folder).
 * 2. Give it the tag below (CLOUDINARY_TAG) — either at upload time,
 *    or afterwards in the Cloudinary Media Library.
 * 3. It shows up here automatically next time the page loads.
 *
 * One-time setup in Cloudinary Console:
 *   Settings -> Security -> "Resource list" -> enable it for images.
 *   (Off by default; the public tag-list JSON endpoint below won't
 *   work until this is turned on.)
 *
 * Set your cloud name in `.env` as VITE_CLOUDINARY_CLOUD_NAME.
 */
const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "your-cloud-name";
const CLOUDINARY_TAG = "toycac-recap";

type CloudinaryResource = {
  public_id: string;
  format: string;
};

const thumbUrl = (publicId: string) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_500,h_500,c_fill,q_auto,f_auto/${publicId}`;

const fullUrl = (publicId: string) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_1600,q_auto,f_auto/${publicId}`;

export const Gallery = () => {
  const [images, setImages] = useState<CloudinaryResource[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [active, setActive] = useState<CloudinaryResource | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(`https://res.cloudinary.com/${CLOUD_NAME}/image/list/${CLOUDINARY_TAG}.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Gallery list unavailable");
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        setImages(data.resources ?? []);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="gallery" className="py-12 md:py-24 px-4 md:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Images className="text-emerald-600 w-5 h-5" />
            <span className="font-black uppercase tracking-widest text-[10px] text-emerald-600">
              Relive The Moments
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-black text-gray-900 uppercase italic leading-none"
          >
            Camp <span className="text-emerald-600">Gallery</span>
          </motion.h2>
        </div>

        {status === "loading" && (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400 gap-3">
            <Loader2 className="w-8 h-8 animate-spin" />
            <p className="text-sm font-medium">Loading photos&hellip;</p>
          </div>
        )}

        {status === "error" && (
          <div className="max-w-lg mx-auto text-center py-16 px-6 border-2 border-dashed border-emerald-200 rounded-3xl">
            <p className="text-gray-500 text-sm">
              Photos are on the way &mdash; check back soon for highlights from last year's camp.
            </p>
          </div>
        )}

        {status === "ready" && images.length === 0 && (
          <div className="max-w-lg mx-auto text-center py-16 px-6 border-2 border-dashed border-emerald-200 rounded-3xl">
            <p className="text-gray-500 text-sm">
              Photos are on the way &mdash; check back soon for highlights from last year's camp.
            </p>
          </div>
        )}

        {status === "ready" && images.length > 0 && (
          <div className="columns-2 sm:columns-3 md:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
            {images.map((img, i) => (
              <motion.button
                key={img.public_id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 12) * 0.04 }}
                onClick={() => setActive(img)}
                className="block w-full break-inside-avoid rounded-2xl overflow-hidden border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <img
                  src={thumbUrl(img.public_id)}
                  alt="TCAC camp memory"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-10"
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={fullUrl(active.public_id)}
              alt="TCAC camp memory"
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-full rounded-2xl border-2 border-white/20"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
