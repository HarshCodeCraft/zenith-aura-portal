import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({
  to,
  suffix = "",
  decimals = 0,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => {
    const n = decimals ? v.toFixed(decimals) : Math.floor(v).toLocaleString();
    return n + suffix;
  });
  useEffect(() => {
    if (inView) {
      const c = animate(mv, to, { duration: 2.2, ease: "easeOut" });
      return c.stop;
    }
  }, [inView, mv, to]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { value: 1, suffix: "M+", label: "Businesses Served" },
  { value: 20, suffix: "B+", label: "Invoices Processed" },
  { value: 850, suffix: "+", label: "Support Centers" },
  { value: 50, suffix: "%+", label: "Pharma & FMCG Market" },
];

export function MargStats() {
  return (
    <section id="marg-stats" className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-[2.5rem] glass-strong p-10 md:p-16">
          <div className="absolute -top-32 left-1/4 h-72 w-[60%] -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 h-72 w-[60%] translate-x-1/2 rounded-full bg-secondary/30 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_oklch(1_0_0_/_0.03),_transparent_60%)]" />

          <div className="relative mb-10 text-center">
            <span className="rounded-full glass px-4 py-1 text-xs uppercase tracking-widest text-secondary">
              By the numbers
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Powering business at <span className="text-gradient-accent">global scale</span>
            </h2>
          </div>

          <div className="relative grid gap-10 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div
                  className="text-5xl font-bold text-gradient-accent md:text-6xl"
                  style={{ filter: "drop-shadow(0 0 30px oklch(0.86 0.16 215 / 0.4))" }}
                >
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
