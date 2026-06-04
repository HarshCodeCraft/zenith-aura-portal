import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="relative py-32">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] p-12 md:p-20 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent animate-gradient" />
          <div className="absolute inset-0 bg-background/30" />
          <div className="absolute -top-20 left-1/2 h-80 w-[80%] -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />

          <div className="relative">
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Ready to ship at <br /> light speed?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Join 50,000+ teams already building the future. Start your 14-day free trial — no card required.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-background shadow-elevated transition-transform hover:scale-105"
              >
                Start free trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-2xl glass-strong px-8 py-4 font-medium text-white hover:bg-white/20"
              >
                Book a demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
