import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

export function MargCTA() {
  return (
    <section id="marg-cta" className="relative py-32">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] p-12 text-center md:p-20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent animate-gradient" />
          <div className="absolute inset-0 bg-background/40" />
          <div className="absolute -top-32 left-1/2 h-96 w-[90%] -translate-x-1/2 rounded-full bg-white/15 blur-3xl" />

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.span
              key={i}
              aria-hidden
              className="absolute h-2 w-2 rounded-full bg-white/60"
              style={{
                left: `${15 + i * 12}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full glass-strong px-4 py-1.5 text-xs uppercase tracking-widest text-white/90">
              <Sparkles className="h-3.5 w-3.5 text-secondary" />
              Limited onboarding slots this month
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              Ready To Scale Your Business <br />
              With <span className="text-gradient-accent">Marg ERP?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/80 md:text-lg">
              Join thousands of successful retailers, distributors, pharmacies and enterprises using Marg ERP to automate operations and accelerate growth.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-white px-8 py-4 font-semibold text-background shadow-elevated transition-transform hover:scale-105"
                style={{ boxShadow: "0 0 60px -10px oklch(0.86 0.16 215), 0 0 120px -30px oklch(0.62 0.22 280)" }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative">Book Free Demo</span>
                <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-2xl glass-strong px-8 py-4 font-medium text-white hover:bg-white/20"
              >
                <PlayCircle className="h-5 w-5 text-secondary" />
                Watch Live Product Tour
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/70">
              <span>✓ No credit card required</span>
              <span>✓ Setup in under 24 hours</span>
              <span>✓ 24/7 expert support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
