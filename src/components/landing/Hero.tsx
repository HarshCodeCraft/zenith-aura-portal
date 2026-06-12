import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Star, Zap } from "lucide-react";
import { useRef } from "react";
import { Particles } from "./Particles";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20 mesh-bg">
      <Particles count={60} />

      {/* Floating orbs */}
      <motion.div
        style={{ y }}
        className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-float-slow"
      />
      <motion.div
        style={{ y }}
        className="absolute top-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-secondary/20 blur-3xl animate-float"
      />
      <motion.div
        style={{ y }}
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-float-slow"
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-6xl px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm"
        >
          <Zap className="h-3.5 w-3.5 text-secondary" />
          <span className="text-muted-foreground">New: AI-powered insights are here</span>
          <span className="text-secondary">→</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl font-bold leading-[1.05] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Build products at <br />
          <span className="text-gradient-accent animate-gradient">light speed</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl"
        >
          The all-in-one platform that helps modern teams ship faster,
          collaborate smarter, and scale without limits.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-8 flex flex-col flex-wrap items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
        >
          <a
            href="#cta"
            className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] px-6 py-3.5 text-sm font-semibold text-white shadow-glow-primary transition-all hover:bg-[position:100%_0] hover:scale-105 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
          >
            Start free trial
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
          </a>
          <a
            href="#features"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl glass-strong px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:scale-105 hover:bg-white/10 sm:w-auto sm:px-7 sm:py-4 sm:text-base"
          >
            <Play className="h-4 w-4 fill-current" />
            Watch demo
          </a>
        </motion.div>

        {/* Trust */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 flex flex-col items-center gap-3 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
            ))}
            <span className="ml-2">4.9/5 from 12,000+ reviews</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-60">
            {["Acme", "Globex", "Stark", "Wayne", "Umbrella"].map((b) => (
              <span key={b} className="font-display text-lg font-semibold tracking-wider">
                {b}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 80, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          style={{ perspective: 1000 }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary via-secondary to-accent opacity-30 blur-2xl animate-pulse-glow" />
          <div className="relative glass-strong overflow-hidden rounded-3xl p-2 shadow-elevated">
            <div className="rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1e1b4b] p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-accent" />
                <span className="h-3 w-3 rounded-full bg-secondary/70" />
                <span className="h-3 w-3 rounded-full bg-primary" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Revenue", value: "$248K", delta: "+24%" },
                  { label: "Active users", value: "18.4K", delta: "+12%" },
                  { label: "Conversion", value: "5.6%", delta: "+3.2%" },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + i * 0.1 }}
                    className="rounded-xl bg-white/5 p-4 text-left"
                  >
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                    <p className="mt-1 text-2xl font-bold">{s.value}</p>
                    <p className="text-xs text-secondary">{s.delta}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 h-48 rounded-xl bg-white/5 p-4">
                <svg viewBox="0 0 400 150" className="h-full w-full">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#6C63FF" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#6C63FF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,120 C50,80 100,100 150,60 C200,20 250,70 300,40 C350,20 380,30 400,20 L400,150 L0,150 Z"
                    fill="url(#g1)"
                  />
                  <path
                    d="M0,120 C50,80 100,100 150,60 C200,20 250,70 300,40 C350,20 380,30 400,20"
                    fill="none"
                    stroke="#00E5FF"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -left-6 top-1/4 hidden glass-strong rounded-2xl px-4 py-3 md:flex md:items-center md:gap-2"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/30">
              <Zap className="h-4 w-4 text-accent" />
            </span>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Speed</p>
              <p className="text-sm font-semibold">10x faster</p>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -right-6 top-1/3 hidden glass-strong rounded-2xl px-4 py-3 md:flex md:items-center md:gap-2"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-secondary/30">
              <Star className="h-4 w-4 text-secondary" />
            </span>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Rated</p>
              <p className="text-sm font-semibold">#1 in 2026</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
