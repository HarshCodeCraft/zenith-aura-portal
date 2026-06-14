import { motion } from "framer-motion";
import {
  Users,
  Headphones,
  Store,
  Truck,
  Pill,
  ShoppingCart,
  LineChart,
  Sparkles,
} from "lucide-react";

const products = [
  { icon: Users, name: "Marg HR", desc: "People & payroll", color: "from-primary to-secondary" },
  { icon: Headphones, name: "Marg CRM", desc: "Sales & support", color: "from-secondary to-accent" },
  { icon: Store, name: "Marg POS", desc: "Retail checkout", color: "from-accent to-primary" },
  { icon: Truck, name: "Marg Distributor", desc: "Supply chain", color: "from-primary to-accent" },
  { icon: Pill, name: "Marg Pharma", desc: "Pharmacy ops", color: "from-secondary to-primary" },
  { icon: ShoppingCart, name: "Marg eShop", desc: "Online storefront", color: "from-accent to-secondary" },
  { icon: LineChart, name: "Marg Analytics", desc: "Business insights", color: "from-primary to-secondary" },
];

export function MargEcosystem() {
  // Positions for orbiting product cards (desktop)
  const positions = [
    { x: "0%", y: "-46%" },
    { x: "40%", y: "-30%" },
    { x: "46%", y: "8%" },
    { x: "28%", y: "40%" },
    { x: "-28%", y: "40%" },
    { x: "-46%", y: "8%" },
    { x: "-40%", y: "-30%" },
  ];

  return (
    <section id="ecosystem" className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-20" />
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="rounded-full glass px-4 py-1 text-xs uppercase tracking-widest text-secondary">
            Platform Ecosystem
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            One Platform.{" "}
            <span className="text-gradient-accent">Multiple Business Solutions.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Everything your business needs, connected inside a single ecosystem.
          </p>
        </motion.div>

        {/* Desktop orbital ecosystem */}
        <div className="relative hidden h-[640px] lg:block">
          {/* Decorative rings */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0%, oklch(0.86 0.16 215 / 0.25) 25%, transparent 50%, oklch(0.62 0.22 280 / 0.25) 75%, transparent 100%)",
              mask: "radial-gradient(closest-side, transparent 96%, black 97%, black 100%)",
              WebkitMask:
                "radial-gradient(closest-side, transparent 96%, black 97%, black 100%)",
            }}
          />

          {/* Connection lines */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 800 640"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="ecoLine" x1="0" x2="1">
                <stop offset="0" stopColor="oklch(0.62 0.22 280 / 0.6)" />
                <stop offset="1" stopColor="oklch(0.86 0.16 215 / 0.05)" />
              </linearGradient>
            </defs>
            {positions.map((p, i) => {
              const cx = 400;
              const cy = 320;
              const px = cx + (parseFloat(p.x) / 100) * 800;
              const py = cy + (parseFloat(p.y) / 100) * 640;
              return (
                <motion.line
                  key={i}
                  x1={cx}
                  y1={cy}
                  x2={px}
                  y2={py}
                  stroke="url(#ecoLine)"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.8 }}
                />
              );
            })}
          </svg>

          {/* Core */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/40 to-secondary/40 blur-2xl" />
              <div className="relative grid h-44 w-44 place-items-center rounded-[2rem] glass-strong p-4 text-center shadow-elevated">
                <div>
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary glow-primary">
                    <Sparkles className="h-6 w-6 text-white" />
                  </span>
                  <p className="mt-3 text-xs uppercase tracking-widest text-secondary">
                    Core Platform
                  </p>
                  <p className="text-base font-bold">Marg ERP</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Orbiting products */}
          {products.map((p, i) => {
            const Icon = p.icon;
            const pos = positions[i];
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08, type: "spring", stiffness: 160 }}
                className="group absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(calc(-50% + ${pos.x}), calc(-50% + ${pos.y}))`,
                }}
              >
                <div className="relative w-44 cursor-pointer rounded-2xl glass-strong p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
                  <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/40 to-secondary/40 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex items-center gap-3">
                    <span
                      className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${p.color} glow-primary`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold leading-tight">{p.name}</p>
                      <p className="text-[11px] text-muted-foreground">{p.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile / tablet grid */}
        <div className="lg:hidden">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative mx-auto mb-8 w-52"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/40 to-secondary/40 blur-2xl" />
            <div className="relative grid place-items-center rounded-[2rem] glass-strong p-6 text-center">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary glow-primary">
                <Sparkles className="h-6 w-6 text-white" />
              </span>
              <p className="mt-3 text-[10px] uppercase tracking-widest text-secondary">
                Core Platform
              </p>
              <p className="text-base font-bold">Marg ERP</p>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {products.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl glass-strong p-4"
                >
                  <span
                    className={`grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br ${p.color}`}
                  >
                    <Icon className="h-4 w-4 text-white" />
                  </span>
                  <p className="mt-3 text-sm font-semibold">{p.name}</p>
                  <p className="text-[11px] text-muted-foreground">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
