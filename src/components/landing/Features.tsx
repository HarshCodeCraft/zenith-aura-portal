import { motion } from "framer-motion";
import { Bot, Lock, Rocket, BarChart3, Globe2, Workflow } from "lucide-react";
import { useRef, type MouseEvent } from "react";

const features = [
  { icon: Bot, title: "AI Copilot", desc: "Smart suggestions and automations that learn your workflow.", color: "from-primary to-secondary" },
  { icon: Rocket, title: "Ship Faster", desc: "Pre-built blocks and one-click deploys cut weeks off launches.", color: "from-secondary to-accent" },
  { icon: BarChart3, title: "Realtime Analytics", desc: "Beautiful dashboards that update the instant data lands.", color: "from-accent to-primary" },
  { icon: Lock, title: "Enterprise Security", desc: "SOC2, GDPR, and bank-grade encryption by default.", color: "from-primary to-accent" },
  { icon: Globe2, title: "Global Edge", desc: "Sub-50ms response times from 250+ edge locations.", color: "from-secondary to-primary" },
  { icon: Workflow, title: "Workflow Builder", desc: "Drag-and-drop automations connect every tool you use.", color: "from-accent to-secondary" },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = ((y / r.height) - 0.5) * -10;
    const ry = ((x / r.width) - 0.5) * 10;
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
      className="group relative h-full rounded-3xl glass p-6 transition-transform duration-200 will-change-transform"
      style={{
        backgroundImage:
          "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), oklch(0.7 0.2 280 / 0.15), transparent 40%)",
      }}
    >
      {children}
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="relative py-32">
      <div className="absolute inset-0 mesh-bg opacity-40" />
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full glass px-4 py-1 text-xs uppercase tracking-widest text-secondary">
            Features
          </span>
          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Everything you need.<br />
            <span className="text-gradient-accent">Nothing you don't.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Powerful primitives that compose into the workflow your team actually wants.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
            >
              <TiltCard>
                <span className={`mb-5 inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${f.color} glow-primary`}>
                  <f.icon className="h-6 w-6 text-white" />
                </span>
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
