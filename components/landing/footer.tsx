import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { EarningsLogo } from "@/components/earnings-logo"

const footerLinks = {
  Product: [
    { label: "Markets", href: "#markets" },
    { label: "Leaderboard", href: "#leaderboard" },
    { label: "Competitions", href: "#leaderboard" },
    { label: "For creators", href: "#creators" },
  ],
  Resources: [
    { label: "Design", href: "/docs" },
    { label: "Documentation", href: "#" },
    { label: "API", href: "#" },
    { label: "Status", href: "#" },
  ],
  Legal: [
    { label: "Terms", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Risk disclosure", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <EarningsLogo className="w-6 h-6 text-neon" />
              <span className="text-lg font-semibold tracking-tight">
                Earnings<span className="text-neon">.fun</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-[280px] mb-6 leading-relaxed">
              A social forecasting game for company events, earnings, product launches
              and market milestones. Build a reputation for being right.
            </p>

            {/* Ecosystem badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-surface-secondary border border-border/50 rounded-lg mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-neon" />
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                Built for the Robinhood Chain ecosystem
              </span>
            </div>

            {/* Disclaimer */}
            <p className="text-[10px] text-muted-foreground/60 font-mono leading-relaxed">
              A social forecasting game. No real-money wagering. Not affiliated with
              Robinhood Markets, Inc.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all"
                aria-label="X / Twitter"
              >
                <span className="text-xs font-bold">𝕏</span>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all"
                aria-label="Discord"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-muted-foreground/50">
          <span>&copy; {new Date().getFullYear()} Earnings.fun</span>
          <span>
            Forecasting first. Speculation second.
          </span>
        </div>
      </div>
    </footer>
  )
}
