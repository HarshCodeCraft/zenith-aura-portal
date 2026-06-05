import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const links = ["Features", "Reviews", "Stats", "FAQ"];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
    >
      <nav className="glass-strong mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3">
        <a href="#" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-secondary glow-primary">
            <Sparkles className="h-4 w-4 text-white" />
          </span>
          <span className="text-gradient-accent">MARGERP</span>
        </a>
        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#cta"
          className="rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105 glow-primary"
        >
          Get Started
        </a>
      </nav>
    </motion.header>
  );
}
