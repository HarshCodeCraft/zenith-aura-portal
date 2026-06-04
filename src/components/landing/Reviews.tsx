import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const reviews = [
  { name: "Sarah Chen", role: "Head of Product, Linear", quote: "Nebula transformed how our team ships. We went from monthly to weekly releases without breaking a sweat.", avatar: "https://i.pravatar.cc/120?img=47" },
  { name: "Marcus Reed", role: "CTO, Vercel", quote: "The performance is unmatched. Our latency dropped 60% on day one. The team is genuinely impressive.", avatar: "https://i.pravatar.cc/120?img=12" },
  { name: "Priya Patel", role: "VP Engineering, Figma", quote: "Best dev experience I've used in a decade. The AI copilot feels like having a senior engineer on every project.", avatar: "https://i.pravatar.cc/120?img=44" },
  { name: "Diego Alvarez", role: "Founder, Pulse Labs", quote: "We replaced 8 tools with Nebula. Saved $40k/year and our team is shipping twice as fast.", avatar: "https://i.pravatar.cc/120?img=15" },
  { name: "Anna Kowalski", role: "Lead Designer, Stripe", quote: "Beautiful, fast, thoughtful. Every detail feels considered. This is what premium software should look like.", avatar: "https://i.pravatar.cc/120?img=32" },
];

export function Reviews() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % reviews.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="reviews" className="relative py-32">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full glass px-4 py-1 text-xs uppercase tracking-widest text-secondary">
            Loved worldwide
          </span>
          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Trusted by <span className="text-gradient-accent">50,000+ teams</span>
          </h2>
        </motion.div>

        <div className="relative h-[320px] md:h-[260px]">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={false}
              animate={{
                opacity: i === idx ? 1 : 0,
                scale: i === idx ? 1 : 0.95,
                y: i === idx ? 0 : 20,
              }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
              style={{ pointerEvents: i === idx ? "auto" : "none" }}
            >
              <div className="relative h-full glass-strong rounded-3xl p-8 md:p-12">
                <div className="absolute -top-4 -left-4 h-20 w-20 rounded-full bg-primary/30 blur-2xl" />
                <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-secondary/30 blur-2xl" />
                <div className="relative">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-xl leading-relaxed md:text-2xl">"{r.quote}"</p>
                  <div className="mt-6 flex items-center gap-4">
                    <img
                      src={r.avatar}
                      alt={r.name}
                      className="h-12 w-12 rounded-full ring-2 ring-primary/50"
                    />
                    <div>
                      <p className="font-semibold">{r.name}</p>
                      <p className="text-sm text-muted-foreground">{r.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Show review ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-gradient-to-r from-primary to-secondary" : "w-2 bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
