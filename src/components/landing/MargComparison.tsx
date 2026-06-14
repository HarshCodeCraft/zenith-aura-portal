import { motion } from "framer-motion";
import { Check, X, ArrowRight, Sparkles } from "lucide-react";

const traditional = [
  "Complex Setup",
  "Multiple Software Needed",
  "Manual Reconciliation",
  "Limited Reporting",
  "Weak Inventory Visibility",
  "Slow Billing",
];

const marg = [
  "Quick Deployment",
  "All-In-One Platform",
  "Automated Reconciliation",
  "Advanced Analytics",
  "Real-Time Inventory Tracking",
  "Lightning Fast Billing",
];

function Row({
  text,
  good,
  index,
  from,
}: {
  text: string;
  good: boolean;
  index: number;
  from: "left" | "right";
}) {
  return (
    <motion.li
      initial={{ opacity: 0, x: from === "left" ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: "easeOut" }}
      className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3.5 transition-colors hover:bg-white/[0.05]"
    >
      <span
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${
          good
            ? "bg-gradient-to-br from-primary/30 to-secondary/30 ring-1 ring-secondary/40"
            : "bg-destructive/15 ring-1 ring-destructive/30"
        }`}
      >
        {good ? (
          <Check className="h-4 w-4 text-secondary" />
        ) : (
          <X className="h-4 w-4 text-destructive" />
        )}
      </span>
      <span
        className={`text-sm md:text-base ${
          good ? "font-medium text-white" : "text-muted-foreground line-through"
        }`}
      >
        {text}
      </span>
    </motion.li>
  );
}

export function MargComparison() {
  return (
    <section id="comparison" className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-20" />
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="rounded-full glass px-4 py-1 text-xs uppercase tracking-widest text-secondary">
            The shift
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Why Businesses Switch From{" "}
            <span className="text-muted-foreground">Traditional ERP</span> To{" "}
            <span className="text-gradient-accent">Marg ERP</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            A modern, unified business platform built for speed, automation and clarity.
          </p>
        </motion.div>

        <div className="relative">
          {/* Center arrow on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-[0_0_40px_oklch(0.62_0.22_280_/_0.6)] ring-4 ring-background">
              <ArrowRight className="h-6 w-6 text-white" />
            </span>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
            {/* Traditional */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-5 sm:p-7 md:p-8"
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                    Yesterday
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-white/80">
                    Traditional ERP
                  </h3>
                </div>
                <span className="rounded-full bg-destructive/15 px-3 py-1 text-[10px] uppercase tracking-widest text-destructive ring-1 ring-destructive/30">
                  Legacy
                </span>
              </div>
              <ul className="space-y-3">
                {traditional.map((t, i) => (
                  <Row key={t} text={t} good={false} index={i} from="left" />
                ))}
              </ul>
            </motion.div>

            {/* Marg */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="relative overflow-hidden rounded-3xl glass-strong p-5 sm:p-7 md:p-8"
            >
              <div className="pointer-events-none absolute -top-24 right-0 h-56 w-56 rounded-full bg-secondary/25 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 left-0 h-56 w-56 rounded-full bg-primary/25 blur-3xl" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />

              <div className="relative mb-6 flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-secondary">
                    Today
                  </p>
                  <h3 className="mt-1 flex items-center gap-2 text-2xl font-semibold">
                    <span className="text-gradient-accent">Marg ERP</span>
                    <Sparkles className="h-5 w-5 text-secondary" />
                  </h3>
                </div>
                <span className="rounded-full bg-gradient-to-r from-primary to-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white shadow-[0_0_20px_oklch(0.62_0.22_280_/_0.5)]">
                  Modern
                </span>
              </div>
              <ul className="relative space-y-3">
                {marg.map((t, i) => (
                  <Row key={t} text={t} good index={i} from="right" />
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
