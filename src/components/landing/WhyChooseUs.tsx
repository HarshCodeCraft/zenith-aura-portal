import { motion, useInView, useMotionValue, useTransform, animate, useScroll } from "framer-motion";
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import {
  Zap,
  UserCheck,
  Target,
  GraduationCap,
  PhoneCall,
  Rocket,
  CheckCircle2,
  Activity,
  TrendingUp,
  Sparkles,
} from "lucide-react";

/* ---------- Story Cards ---------- */

type Card = {
  icon: typeof Zap;
  emoji: string;
  badge: string;
  title: string;
  headline: string;
  desc: string;
  visual: "support" | "experts" | "workflow" | "training" | "ecosystem" | "growth";
  gradient: string;
};

const cards: Card[] = [
  {
    icon: Zap,
    emoji: "⚡",
    badge: "Fast Response Support",
    title: "Rapid Problem Resolution",
    headline: "Most Issues Resolved Within Minutes",
    desc: "Our expert support team responds quickly and works to resolve operational issues, billing errors, GST concerns and system challenges with minimum business disruption.",
    visual: "support",
    gradient: "from-primary to-secondary",
  },
  {
    icon: UserCheck,
    emoji: "👨‍💻",
    badge: "Expert Guidance",
    title: "Certified ERP Experts",
    headline: "Highly Skilled Marg ERP Specialists",
    desc: "Get assistance from experienced professionals who understand retail, distribution, pharmacy, FMCG and wholesale business operations deeply.",
    visual: "experts",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Target,
    emoji: "🎯",
    badge: "Tailored Implementation",
    title: "Personalized Business Setup",
    headline: "ERP Configured For Your Business",
    desc: "Every business operates differently. We customize workflows, billing formats, reports and operational processes according to your business needs.",
    visual: "workflow",
    gradient: "from-accent to-primary",
  },
  {
    icon: GraduationCap,
    emoji: "🎓",
    badge: "Smooth Adoption",
    title: "Complete Staff Training",
    headline: "Your Team Becomes Productive Faster",
    desc: "We provide practical onboarding and training sessions so your staff can confidently use the software from day one.",
    visual: "training",
    gradient: "from-primary to-accent",
  },
  {
    icon: PhoneCall,
    emoji: "📞",
    badge: "Long-Term Partnership",
    title: "Reliable Ongoing Support",
    headline: "Support Beyond Installation",
    desc: "Our relationship does not end after deployment. We continuously assist with upgrades, troubleshooting, compliance updates and operational guidance.",
    visual: "ecosystem",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Rocket,
    emoji: "🚀",
    badge: "Business Transformation",
    title: "Business Growth Enablement",
    headline: "Focused On Efficiency And Growth",
    desc: "We help businesses automate routine tasks, improve reporting, increase operational visibility and make faster business decisions.",
    visual: "growth",
    gradient: "from-accent to-secondary",
  },
];

function CardVisual({ kind }: { kind: Card["visual"] }) {
  if (kind === "support") {
    return (
      <div className="space-y-2 text-[10px]">
        {[
          { label: "Billing issue #2841", status: "Resolved", t: "2m" },
          { label: "GST sync error", status: "In progress", t: "live" },
          { label: "Stock report fix", status: "Resolved", t: "4m" },
        ].map((r, i) => (
          <motion.div
            key={r.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
            className="flex items-center justify-between rounded-lg glass px-3 py-2"
          >
            <span className="flex items-center gap-2 text-foreground/80">
              <span className={`h-1.5 w-1.5 rounded-full ${r.status === "Resolved" ? "bg-secondary" : "bg-accent"} animate-pulse`} />
              {r.label}
            </span>
            <span className="text-muted-foreground">{r.t}</span>
          </motion.div>
        ))}
      </div>
    );
  }
  if (kind === "experts") {
    const skills = [
      { l: "Retail Ops", v: 96 },
      { l: "Pharma & FMCG", v: 92 },
      { l: "Distribution", v: 89 },
      { l: "GST & Compliance", v: 94 },
    ];
    return (
      <div className="space-y-3 text-[10px]">
        {skills.map((s, i) => (
          <div key={s.l}>
            <div className="mb-1 flex justify-between text-muted-foreground">
              <span>{s.l}</span>
              <span>{s.v}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.v}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.12, duration: 1.1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (kind === "workflow") {
    return (
      <div className="grid grid-cols-3 gap-2 text-[9px]">
        {["Invoice", "Stock", "Reports", "GST", "Payments", "Returns"].map((n, i) => (
          <motion.div
            key={n}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-lg glass px-2 py-3 text-center"
          >
            <div className="mx-auto mb-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
            {n}
          </motion.div>
        ))}
      </div>
    );
  }
  if (kind === "training") {
    const steps = ["Kickoff", "Hands-on", "Practice", "Certified"];
    return (
      <div className="flex items-center justify-between text-[10px]">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 items-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.18 }}
              className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-[10px] font-semibold"
            >
              {i + 1}
            </motion.div>
            {i < steps.length - 1 && (
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.18, duration: 0.5 }}
                style={{ originX: 0 }}
                className="mx-1 h-px flex-1 bg-gradient-to-r from-primary to-secondary"
              />
            )}
          </div>
        ))}
      </div>
    );
  }
  if (kind === "ecosystem") {
    return (
      <div className="relative h-32">
        <div className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary glow-primary">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        {[0, 60, 120, 180, 240, 300].map((a, i) => (
          <motion.div
            key={a}
            animate={{ rotate: 360 }}
            transition={{ duration: 16 + i, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
            style={{ transformOrigin: "center" }}
          >
            <div
              className="absolute h-2 w-2 rounded-full bg-secondary shadow-[0_0_12px_var(--secondary)]"
              style={{
                left: "50%",
                top: "50%",
                transform: `rotate(${a}deg) translateX(52px)`,
              }}
            />
          </motion.div>
        ))}
      </div>
    );
  }
  // growth
  return (
    <div className="relative h-28">
      <svg viewBox="0 0 200 80" className="h-full w-full">
        <defs>
          <linearGradient id="growthLine" x1="0" x2="1">
            <stop offset="0" stopColor="oklch(0.62 0.22 280)" />
            <stop offset="1" stopColor="oklch(0.86 0.16 215)" />
          </linearGradient>
          <linearGradient id="growthFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="oklch(0.86 0.16 215 / 0.45)" />
            <stop offset="1" stopColor="oklch(0.86 0.16 215 / 0)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,70 L30,60 L60,55 L90,40 L120,35 L150,20 L200,8"
          fill="none"
          stroke="url(#growthLine)"
          strokeWidth="2.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />
        <motion.path
          d="M0,70 L30,60 L60,55 L90,40 L120,35 L150,20 L200,8 L200,80 L0,80 Z"
          fill="url(#growthFill)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
        />
      </svg>
      <div className="absolute right-2 top-1 flex items-center gap-1 rounded-full glass px-2 py-0.5 text-[10px] text-secondary">
        <TrendingUp className="h-3 w-3" /> +218%
      </div>
    </div>
  );
}

function StoryCard({ card, index }: { card: Card; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = ((y / r.height) - 0.5) * -6;
    const ry = ((x / r.width) - 0.5) * 6;
    el.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(1200px) rotateX(0) rotateY(0)";
  };
  const Icon = card.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
      className="group relative"
    >
      {/* gradient border glow */}
      <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative h-full overflow-hidden rounded-3xl glass-strong p-7 transition-transform duration-200 will-change-transform"
        style={{
          backgroundImage:
            "radial-gradient(450px circle at var(--mx,50%) var(--my,50%), oklch(0.86 0.16 215 / 0.12), transparent 45%)",
        }}
      >
        <div className="mb-5 flex items-center justify-between">
          <span
            className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${card.gradient} glow-primary animate-float`}
            style={{ animationDelay: `${index * 0.4}s` }}
          >
            <Icon className="h-6 w-6 text-white" />
          </span>
          <span className="rounded-full glass px-3 py-1 text-[10px] uppercase tracking-widest text-secondary">
            {card.badge}
          </span>
        </div>

        <div className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">
          <span className="mr-1">{card.emoji}</span> {card.title}
        </div>
        <h3 className="text-2xl font-bold leading-tight">{card.headline}</h3>
        <p className="mt-3 text-sm text-muted-foreground">{card.desc}</p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
          <CardVisual kind={card.visual} />
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- Trust / Stats ---------- */

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString() + suffix);
  useEffect(() => {
    if (inView) {
      const c = animate(mv, to, { duration: 2.2, ease: "easeOut" });
      return c.stop;
    }
  }, [inView, mv, to]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

type Metric = { value?: number; suffix?: string; text?: string; label: string };
const metrics: Metric[] = [
  { value: 5000, suffix: "+", label: "Businesses Supported" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { text: "Fast", label: "Response Assistance" },
  { text: "Dedicated", label: "Expert Team" },
  { text: "Long-Term", label: "Customer Relationships" },
  { text: "Continuous", label: "Training & Guidance" },
];

function TrustBlock() {
  return (
    <div className="relative mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <span className="rounded-full glass px-4 py-1 text-xs uppercase tracking-widest text-secondary">
          The Difference
        </span>
        <h3 className="mt-4 text-3xl font-bold md:text-5xl">
          What Makes Us <span className="text-gradient-accent">Different</span>
        </h3>
      </motion.div>

      <div className="relative overflow-hidden rounded-[2.5rem] glass-strong p-10 md:p-14">
        <div className="absolute -top-32 left-1/4 h-72 w-[50%] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 h-72 w-[50%] translate-x-1/2 rounded-full bg-secondary/25 blur-3xl" />

        <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div
                className="text-4xl font-bold text-gradient-accent md:text-5xl"
                style={{ filter: "drop-shadow(0 0 28px oklch(0.86 0.16 215 / 0.4))" }}
              >
                {m.value !== undefined ? <Counter to={m.value} suffix={m.suffix} /> : m.text}
              </div>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Journey Timeline ---------- */

const journey = [
  { t: "Requirement Understanding", d: "We listen first — capturing your operational reality." },
  { t: "Business Process Analysis", d: "Mapping workflows, bottlenecks and growth levers." },
  { t: "Professional ERP Setup", d: "Tailored configuration of Marg ERP to your business." },
  { t: "Team Training", d: "Hands-on enablement so your staff are confident from day one." },
  { t: "Go Live Support", d: "On-ground assistance during launch — zero disruption." },
  { t: "Continuous Growth Assistance", d: "Ongoing optimization, upgrades and advisory." },
];

function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 30%"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <span className="rounded-full glass px-4 py-1 text-xs uppercase tracking-widest text-secondary">
          Partnership Roadmap
        </span>
        <h3 className="mt-4 text-3xl font-bold md:text-5xl">
          Your <span className="text-gradient-accent">Success Journey</span>
        </h3>
      </motion.div>

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-6 top-0 h-full w-px bg-white/10 md:left-1/2" />
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-6 top-0 w-px bg-gradient-to-b from-primary via-secondary to-accent md:left-1/2"
        />

        <div className="space-y-12">
          {journey.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.05 }}
              className={`relative flex gap-6 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}
            >
              <div
                className={`absolute left-6 -translate-x-1/2 md:translate-x-0 ${
                  i % 2 === 0 ? "md:left-auto md:right-[-1.625rem]" : "md:left-[-1.625rem]"
                }`}
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary glow-primary text-sm font-bold">
                  {i + 1}
                </span>
              </div>
              <div className="ml-16 rounded-2xl glass p-6 md:ml-0">
                <h4 className="text-lg font-semibold">{s.t}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Cinematic Final Message ---------- */

function FinalMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative mt-32 overflow-hidden rounded-[2.5rem] glass-strong px-6 py-20 text-center md:py-28"
    >
      <div className="absolute -top-40 left-1/2 h-80 w-[80%] -translate-x-1/2 rounded-full bg-primary/30 blur-[120px]" />
      <div className="absolute -bottom-40 left-1/2 h-80 w-[80%] -translate-x-1/2 rounded-full bg-secondary/25 blur-[120px]" />
      <motion.div
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_oklch(1_0_0_/_0.04),_transparent_60%)]"
      />
      <h3 className="relative mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
        We Don't Just Install Software.{" "}
        <span className="text-gradient-accent">We Help Businesses Run Better.</span>
      </h3>
    </motion.div>
  );
}

/* ---------- Main Export ---------- */

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-32">
      <div className="absolute inset-0 mesh-bg opacity-30" />
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <span className="rounded-full glass px-4 py-1 text-xs uppercase tracking-widest text-secondary">
            Why Businesses Choose Us
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            More Than Software.{" "}
            <span className="text-gradient-accent">A Dedicated Business Growth Partner.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            While others sell software and disappear, we provide continuous support, expert
            guidance, rapid problem resolution and business-focused ERP implementation that
            helps you operate with confidence.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <StoryCard key={c.title} card={c} index={i} />
          ))}
        </div>

        <TrustBlock />
        <Journey />
        <FinalMessage />
      </div>
    </section>
  );
}
