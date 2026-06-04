import { motion } from "framer-motion";
import {
  Rocket,
  Package,
  Receipt,
  BarChart3,
  MessageCircle,
  CreditCard,
  Store,
} from "lucide-react";
import { useRef, type MouseEvent, type ReactNode } from "react";

function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = (y / r.height - 0.5) * -8;
    const ry = (x / r.width - 0.5) * 8;
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group relative overflow-hidden rounded-3xl glass p-6 transition-transform duration-200 will-change-transform hover:glow-primary ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(500px circle at var(--mx,50%) var(--my,50%), oklch(0.7 0.2 280 / 0.18), transparent 45%)",
      }}
    >
      {children}
    </div>
  );
}

const small = [
  { icon: Package, title: "Inventory Management", desc: "Real-time stock visibility across every branch." },
  { icon: Receipt, title: "Billing & Accounting", desc: "GST invoices, ledgers and books — automated." },
  { icon: BarChart3, title: "Analytics & Reports", desc: "Powerful dashboards for instant decisions." },
  { icon: MessageCircle, title: "WhatsApp Integration", desc: "Send invoices and reports in one tap." },
  { icon: CreditCard, title: "Payment Management", desc: "Auto-reconciled collections and payouts." },
  { icon: Store, title: "Multi Store Operations", desc: "Centralized control for unlimited branches." },
];

export function MargBento() {
  return (
    <section id="bento" className="relative py-32">
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="rounded-full glass px-4 py-1 text-xs uppercase tracking-widest text-secondary">
            All-in-one
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            Everything You Need To <br />
            <span className="text-gradient-accent">Run Your Business</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {/* Large feature card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 md:row-span-2 lg:col-span-2 lg:row-span-2"
          >
            <TiltCard className="h-full min-h-[360px] p-10">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

              <motion.span
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative inline-grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary glow-primary"
              >
                <Rocket className="h-8 w-8 text-white" />
              </motion.span>

              <h3 className="relative mt-8 text-3xl font-bold leading-tight md:text-4xl">
                Complete Business <br />
                <span className="text-gradient">Operating System</span>
              </h3>
              <p className="relative mt-4 max-w-md text-muted-foreground">
                Inventory, billing, accounting, analytics, payments and customer communication — all unified inside one premium platform built for scale.
              </p>

              <div className="relative mt-8 flex flex-wrap gap-2">
                {["GST Ready", "Multi-Branch", "Cloud + Offline", "Enterprise Secure"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full glass px-3 py-1 text-xs text-white/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </TiltCard>
          </motion.div>

          {small.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.06 }}
            >
              <TiltCard className="h-full">
                <motion.span
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/80 to-secondary/80"
                >
                  <s.icon className="h-5 w-5 text-white" />
                </motion.span>
                <h4 className="mt-5 text-lg font-semibold">{s.title}</h4>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
