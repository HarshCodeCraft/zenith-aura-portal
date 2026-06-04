import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "How long does setup take?", a: "Most teams are up and running in under 10 minutes. Our onboarding wizard walks you through every step." },
  { q: "Do you offer a free trial?", a: "Yes — 14 days, full access, no credit card required. Cancel anytime." },
  { q: "Is my data secure?", a: "SOC 2 Type II, ISO 27001, GDPR, and HIPAA compliant. All data is encrypted in transit and at rest." },
  { q: "Can I integrate with my existing tools?", a: "We have 200+ native integrations including Slack, Notion, GitHub, Figma, and Linear, plus a powerful API." },
  { q: "What support do you provide?", a: "All plans include 24/7 email support. Pro and Enterprise plans get a dedicated success engineer." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32">
      <div className="mx-auto max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full glass px-4 py-1 text-xs uppercase tracking-widest text-secondary">
            FAQ
          </span>
          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Questions, <span className="text-gradient-accent">answered</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="overflow-hidden rounded-2xl glass"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
              >
                <span className="text-lg font-medium">{f.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary"
                >
                  <Plus className="h-4 w-4 text-white" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-6 text-muted-foreground">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
