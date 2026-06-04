import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const items = [
  { title: "Setup in minutes", desc: "Connect your stack and ship your first workflow in under 5 minutes." },
  { title: "Built for scale", desc: "From 1 to 1M users — same codebase, same speed, zero re-architectures." },
  { title: "Premium support", desc: "Dedicated success engineer, 24/7 response, average 6-minute resolution." },
  { title: "Future-proof", desc: "Weekly model updates and platform improvements, automatically." },
];

export function WhyUs() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="rounded-full glass px-4 py-1 text-xs uppercase tracking-widest text-secondary">
            Why teams choose us
          </span>
          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            The unfair advantage
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          {/* timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            style={{ originY: 0 }}
            className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary via-secondary to-accent md:left-1/2"
          />

          <div className="space-y-12">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex gap-6 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}
              >
                <div className="absolute left-6 -translate-x-1/2 md:left-auto md:right-[-1.625rem] md:translate-x-0 md:[.md\\:ml-auto_&]:left-[-1.625rem] md:[.md\\:ml-auto_&]:right-auto">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary glow-primary">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </span>
                </div>
                <div className="ml-16 rounded-2xl glass p-6 md:ml-0">
                  <h3 className="text-xl font-semibold">{it.title}</h3>
                  <p className="mt-2 text-muted-foreground">{it.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
