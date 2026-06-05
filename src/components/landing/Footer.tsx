import { Github, Twitter, Linkedin, Youtube, Sparkles, Mail } from "lucide-react";

const cols = [
  { title: "Product", links: ["Features", "Pricing", "Integrations", "Changelog", "Roadmap"] },
  { title: "Company", links: ["About", "Careers", "Press", "Customers", "Contact"] },
  { title: "Resources", links: ["Docs", "Guides", "Blog", "Community", "Help center"] },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-20 pb-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 font-display text-xl font-bold">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-secondary glow-primary">
                <Sparkles className="h-4 w-4 text-white" />
              </span>
              <span className="text-gradient-accent">MARGERP</span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              India's #1 ERP for retailers, distributors, pharmacies and enterprises — automate billing, inventory and growth.
            </p>
            <form className="mt-6 flex max-w-sm gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl glass-strong py-3 pl-10 pr-3 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-3 text-sm font-medium text-white transition-transform hover:scale-105 glow-primary"
              >
                Subscribe
              </button>
            </form>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">{c.title}</p>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-secondary">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2026 MARGERP Technologies Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-3">
            {[Twitter, Github, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-10 w-10 place-items-center rounded-xl glass transition-all hover:bg-white/10 hover:text-secondary hover:scale-110"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
