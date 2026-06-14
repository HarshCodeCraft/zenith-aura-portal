import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import {
  Zap,
  Package,
  MessageCircle,
  CreditCard,
  BarChart3,
  Building2,
  CheckCircle2,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    tag: "Lightning Fast GST Billing",
    title: "Generate invoices in seconds.",
    desc: "Create GST-compliant invoices, e-Invoices and E-Way Bills with maximum speed and accuracy.",
    accent: "from-primary to-secondary",
  },
  {
    icon: Package,
    tag: "Smart Inventory Intelligence",
    title: "Never lose control of your inventory.",
    desc: "Track stock levels, near-expiry products, reorder points, focused stock and warehouse performance in real-time.",
    accent: "from-secondary to-accent",
  },
  {
    icon: MessageCircle,
    tag: "WhatsApp Business Automation",
    title: "Communicate with customers instantly.",
    desc: "Send invoices, outstanding reports, stock statements and business reports directly through WhatsApp.",
    accent: "from-accent to-primary",
  },
  {
    icon: CreditCard,
    tag: "Auto Payment Reconciliation",
    title: "Get paid faster with zero confusion.",
    desc: "Automatically reconcile customer payments, outstanding balances and collections without manual effort.",
    accent: "from-primary to-accent",
  },
  {
    icon: BarChart3,
    tag: "Real-Time Business Analytics",
    title: "See your business performance instantly.",
    desc: "Monitor sales, profit, purchases, collections and growth through powerful live dashboards.",
    accent: "from-secondary to-primary",
  },
  {
    icon: Building2,
    tag: "Multi-Branch Business Control",
    title: "Manage everything from one place.",
    desc: "Control multiple stores, warehouses and branches through a centralized ERP system.",
    accent: "from-accent to-secondary",
  },
];

function DashboardMockup({ activeIndex }: { activeIndex: number }) {
  const f = features[activeIndex] ?? features[0];
  const Icon = f.icon;
  return (
    <div className="relative aspect-[4/3] w-full">
      <div className="absolute -inset-10 -z-10">
        <div
          className={`absolute inset-0 rounded-[3rem] bg-gradient-to-br ${f.accent} opacity-30 blur-3xl transition-all duration-700`}
        />
      </div>

      <div className="relative h-full w-full overflow-hidden rounded-3xl glass-strong p-5 shadow-elevated">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-accent/80" />
          <span className="h-3 w-3 rounded-full bg-secondary/80" />
          <span className="h-3 w-3 rounded-full bg-primary/80" />
          <div className="ml-3 h-6 flex-1 rounded-md bg-white/5" />
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              key={`icon-${activeIndex}`}
              initial={{ scale: 0.6, opacity: 0, rotate: -20 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${f.accent} glow-primary`}
            >
              <Icon className="h-6 w-6 text-white" />
            </motion.div>
            <div>
              <p className="text-xs uppercase tracking-widest text-secondary">Marg ERP</p>
              <motion.p
                key={`tag-${activeIndex}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-semibold"
              >
                {f.tag}
              </motion.p>
            </div>
          </div>
          <span className="rounded-full glass px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">
            Live
          </span>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`kpi-${activeIndex}-${i}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl glass p-3"
            >
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {["Today", "Week", "Month"][i]}
              </p>
              <p className="mt-1 text-lg font-bold text-gradient-accent">
                ₹{(activeIndex + 1) * (i + 1) * 12}K
              </p>
              <div className="mt-2 flex items-center gap-1 text-[10px] text-secondary">
                <TrendingUp className="h-3 w-3" /> +{(activeIndex + 2) * (i + 1)}%
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 h-32 rounded-2xl glass p-3">
          <svg viewBox="0 0 300 100" className="h-full w-full">
            <defs>
              <linearGradient id="margChart" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.86 0.16 215)" stopOpacity="0.7" />
                <stop offset="100%" stopColor="oklch(0.62 0.22 280)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              key={`path-${activeIndex}`}
              d={`M0,${80 - activeIndex * 5} C40,${60 - activeIndex * 4} 80,${70} 120,${50 - activeIndex * 3} S200,${30 + activeIndex * 2} 300,${20 + activeIndex * 2}`}
              fill="none"
              stroke="url(#margChart)"
              strokeWidth="2.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
            <motion.path
              key={`area-${activeIndex}`}
              d={`M0,${80 - activeIndex * 5} C40,${60 - activeIndex * 4} 80,${70} 120,${50 - activeIndex * 3} S200,${30 + activeIndex * 2} 300,${20 + activeIndex * 2} L300,100 L0,100 Z`}
              fill="url(#margChart)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1.4 }}
            />
          </svg>
        </div>

        <motion.div
          key={`status-${activeIndex}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 px-3 py-1.5 text-xs"
        >
          <CheckCircle2 className="h-3.5 w-3.5 text-secondary" />
          <span className="text-white/90">{f.tag} active</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-3 top-20 rounded-2xl glass-strong px-3 py-2 text-xs shadow-elevated"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="h-3 w-3 text-secondary" />
            +1,284 today
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-3 bottom-16 rounded-2xl glass-strong px-3 py-2 text-xs shadow-elevated"
        >
          <div className="flex items-center gap-2">
            <ArrowUpRight className="h-3 w-3 text-accent" />
            99.99% uptime
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function MargTrust() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const [activeIndex, setActiveIndex] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(features.length - 1, Math.max(0, Math.floor(v * features.length)));
    setActiveIndex(i);
  });

  return (
    <section id="trust" className="relative overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-4 pt-16 text-center sm:pt-24">
        <span className="rounded-full glass px-4 py-1 text-xs uppercase tracking-widest text-secondary">
          Trusted globally
        </span>
        <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
          Why <span className="text-gradient-accent">1,000,000+ Businesses</span>
          <br className="hidden sm:block" />
          Trust Marg ERP
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          One unified platform powering retailers, distributors, pharmacies and enterprises across the globe.
        </p>
      </div>

      <div ref={ref} className="relative mt-8 sm:mt-10" style={{ height: `${features.length * 40 + 30}vh` }}>
        <div className="sticky top-0 flex min-h-[100svh] items-center py-6">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 py-6 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-2 lg:order-1">
              <DashboardMockup activeIndex={activeIndex} />
            </div>

            <div className="relative order-1 flex items-center lg:order-2">
              <div className="relative w-full">
                {features.map((f, i) => {
                  const Icon = f.icon;
                  const isActive = i === activeIndex;
                  return (
                    <motion.div
                      key={f.tag}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 20,
                        scale: isActive ? 1 : 0.97,
                      }}
                      transition={{ duration: 0.5 }}
                      className={`absolute inset-0 ${isActive ? "pointer-events-auto" : "pointer-events-none"}`}
                    >
                      <div className="rounded-3xl glass p-5 sm:p-8 md:p-10">
                        <div className="flex items-center gap-3">
                          <span
                            className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${f.accent} glow-primary sm:h-12 sm:w-12`}
                          >
                            <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                          </span>
                          <span className="text-[11px] uppercase tracking-widest text-secondary sm:text-xs">{f.tag}</span>
                        </div>
                        <h3 className="mt-4 text-xl font-bold leading-tight sm:mt-6 sm:text-3xl md:text-4xl">{f.title}</h3>
                        <p className="mt-3 text-sm text-muted-foreground sm:mt-4 sm:text-base md:text-lg">{f.desc}</p>
                        <div className="mt-8 flex items-center gap-2">
                          {features.map((_, j) => (
                            <span
                              key={j}
                              className={`h-1.5 rounded-full transition-all ${
                                j === activeIndex
                                  ? "w-8 bg-gradient-to-r from-primary to-secondary"
                                  : "w-3 bg-white/15"
                              }`}
                            />
                          ))}
                          <span className="ml-3 text-xs text-muted-foreground">
                            {String(activeIndex + 1).padStart(2, "0")} / {String(features.length).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
                {/* spacer to reserve height */}
                <div className="invisible rounded-3xl p-8 md:p-10" aria-hidden>
                  <div className="h-12" />
                  <h3 className="mt-6 text-3xl font-bold md:text-4xl">Spacer</h3>
                  <p className="mt-4 text-base md:text-lg">
                    Reserved height so absolutely positioned cards render correctly across breakpoints.
                  </p>
                  <div className="mt-8 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
