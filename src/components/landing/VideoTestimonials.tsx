import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { useState } from "react";

const videos = [
  { name: "Alex Morgan", role: "CEO, Helix", thumb: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=70", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { name: "Jamie Wu", role: "Head of Eng, Loop", thumb: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=600&q=70", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { name: "Sofia Rossi", role: "Product, Nimbus", thumb: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=70", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
];

export function VideoTestimonials() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full glass px-4 py-1 text-xs uppercase tracking-widest text-secondary">
            Video stories
          </span>
          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Hear from <span className="text-gradient-accent">our customers</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {videos.map((v, i) => (
            <motion.button
              key={v.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActive(i)}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl text-left"
            >
              <img src={v.thumb} alt={v.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 grid place-items-center">
                <motion.span
                  whileHover={{ scale: 1.15 }}
                  className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-glow-primary transition-transform group-hover:scale-110"
                >
                  <Play className="h-8 w-8 fill-current" />
                </motion.span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-lg font-semibold">{v.name}</p>
                <p className="text-sm text-muted-foreground">{v.role}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-background/80 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl glass-strong"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full glass-strong hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
              <video src={videos[active].src} controls autoPlay className="aspect-video w-full bg-black" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
