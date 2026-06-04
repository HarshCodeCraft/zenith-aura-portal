import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  { traditional: "Complex Setup", marg: "Quick Deployment" },
  { traditional: "Multiple Software Needed", marg: "All-In-One Platform" },
  { traditional: "Manual Reconciliation", marg: "Automated Reconciliation" },
  { traditional: "Limited Reports", marg: "Advanced Analytics" },
  { traditional: "Weak Inventory Visibility", marg: "Real-Time Inventory Tracking" },
  { traditional: "Slow Billing Process", marg: "Ultra Fast Billing" },
];

export function MargComparison() {
  return (
    <section id="comparison" className="relative py-32">
      <div className="absolute inset-0 mesh-bg opacity-30" />
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="rounded-full glass px-4 py-1 text-xs uppercase tracking-widest text-secondary">
            The shift
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Why Businesses Switch From{" "}
            <span className="text-muted-foreground">Traditional ERP</span> To{" "}
            <span className="text-gradient-accent">Marg ERP</span>
          </h2>
        </motion.div>

        <div className="overflow-hidden rounded-[2rem] glass-strong">
          <div className="grid grid-cols-2">
            <div className="border-b border-white/10 p-6 text-center">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Traditional ERP</p>
            </div>
            <div className="relative border-b border-white/10 p-6 text-center">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
              <p className="relative text-xs uppercase tracking-widest text-secondary">Marg ERP</p>
            </div>
          </div>

          {rows.map((row, i) => (
            <motion.div
              key={row.marg}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
              className="grid grid-cols-2 border-b border-white/5 last:border-0"
            >
              <div className="flex items-center gap-3 p-5 md:p-6">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-destructive/20">
                  <X className="h-4 w-4 text-destructive" />
                </span>
                <span className="text-sm text-muted-foreground line-through md:text-base">
                  {row.traditional}
                </span>
              </div>
              <div className="relative flex items-center gap-3 p-5 md:p-6">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
                <span className="relative grid h-8 w-8 place-items-center rounded-full bg-secondary/20">
                  <Check className="h-4 w-4 text-secondary" />
                </span>
                <span className="relative text-sm font-medium text-white md:text-base">
                  {row.marg}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
