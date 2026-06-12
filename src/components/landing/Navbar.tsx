import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import margLogo from "@/assets/margqrlogo.png.asset.json";

const links = ["Features", "Reviews", "Stats", "FAQ"];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4"
    >
      <nav className="glass-strong mx-auto flex max-w-6xl items-center justify-between gap-2 rounded-2xl px-3 py-2.5 sm:px-5 sm:py-3">
        <a
          href="#"
          className="flex min-w-0 items-center gap-2 font-display text-sm font-bold sm:text-base lg:text-lg"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 ring-1 ring-white/10 glow-primary sm:h-9 sm:w-9">
            <img src={margLogo.url} alt="Marg Soft Solutions" className="h-5 w-5 object-contain sm:h-6 sm:w-6" />
          </span>
          <span className="truncate text-gradient-accent">
            <span className="hidden sm:inline">MARG SOFT SOLUTIONS</span>
            <span className="sm:hidden">MARG SOFT</span>
          </span>
        </a>

        <ul className="hidden gap-6 md:flex lg:gap-8">
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

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#cta"
            className="hidden rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105 glow-primary sm:inline-flex"
          >
            Get Started
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-xl glass text-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-auto mt-2 max-w-6xl glass-strong rounded-2xl p-4"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                  >
                    {l}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-2.5 text-center text-sm font-medium text-white glow-primary"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
