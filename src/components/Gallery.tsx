import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Images, X, Loader2, ChevronDown, ChevronUp } from "lucide-react";

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "dio5go08v";
const CLOUDINARY_TAG = "toycac-recap";
const PREVIEW_COUNT = 14; // two full cycles of the tile pattern below

type CloudinaryResource = {
  public_id: string;
  format: string;
};

// Repeating 7-tile pattern: big, small, small, tall, small, wide, small.
// On the 4-column desktop grid that is exactly 12 cells = 3 complete rows,
// so each cycle packs with no gaps. Class names are written out in full so
// Tailwind can detect them. w/h are the size requested from Cloudinary.
const TILE_PATTERN = [
  { cls: "col-span-2 row-span-2", w: 1000, h: 900 },
  { cls: "", w: 500, h: 450 },
  { cls: "", w: 500, h: 450 },
  { cls: "row-span-2", w: 500, h: 950 },
  { cls: "", w: 500, h: 450 },
  { cls: "col-span-2", w: 1000, h: 450 },
  { cls: "", w: 500, h: 450 },
] as const;

const tileUrl = (publicId: string, w: number, h: number) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_${w},h_${h},c_fill,g_auto,q_auto,f_auto/${encodeURIComponent(publicId)}`;

const fullUrl = (publicId: string) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_1600,q_auto,f_auto/${encodeURIComponent(publicId)}`;

export const Gallery = () => {
  const [images, setImages] = useState<CloudinaryResource[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [active, setActive] = useState<CloudinaryResource | null>(null);
  const [expanded, setExpanded] = useState(false);

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

  const visibleImages = expanded ? images : images.slice(0, PREVIEW_COUNT);

  const toggleExpanded = () => {
    if (expanded) {
      document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
    }
    setExpanded((e) => !e);
  };

  return (
    <section id="gallery" className="watermark py-12 md:py-24 px-4 md:px-6 bg-white overflow-hidden">
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

        {(status === "error" || (status === "ready" && images.length === 0)) && (
          <div className="max-w-lg mx-auto text-center py-16 px-6 border-2 border-dashed border-emerald-200 rounded-3xl">
            <p className="text-gray-500 text-sm">
              Photos are on the way &mdash; check back soon for highlights from last year's camp.
            </p>
          </div>
        )}

        {status === "ready" && images.length > 0 && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[260px] grid-flow-dense gap-3 md:gap-4">
              {visibleImages.map((img, i) => {
                const tile = TILE_PATTERN[i % TILE_PATTERN.length];
                return (
                  <motion.button
                    key={img.public_id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 7) * 0.05 }}
                    onClick={() => setActive(img)}
                    className={`group block overflow-hidden rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${tile.cls}`}
                  >
                    <img
                      src={tileUrl(img.public_id, tile.w, tile.h)}
                      alt="TCAC camp memory"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </motion.button>
                );
              })}
            </div>

            {images.length > PREVIEW_COUNT && (
              <div className="flex justify-center mt-8 md:mt-10">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={toggleExpanded}
                  className="inline-flex items-center gap-2 bg-black text-white font-black px-6 py-3 md:px-8 md:py-4 rounded-xl border-2 border-emerald-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] uppercase tracking-widest text-xs md:text-sm hover:bg-gray-900 transition-colors"
                >
                  {expanded ? "See Less" : "View Full Gallery"}
                  {expanded ? (
                    <ChevronUp size={18} className="text-emerald-400" />
                  ) : (
                    <ChevronDown size={18} className="text-emerald-400" />
                  )}
                </motion.button>
              </div>
            )}
          </>
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