import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Copy, Check } from "lucide-react"
import { EarningsLogo } from "@/components/earnings-logo"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"

export const metadata: Metadata = {
  title: "Design — Earnings.fun",
  description: "Design system, brand assets, color palette, typography and components for Earnings.fun.",
}

const colors = [
  { name: "Background", value: "#070806", class: "bg-background", usage: "Primary background" },
  { name: "Surface", value: "#10110E", class: "bg-surface", usage: "Elevated cards, panels" },
  { name: "Surface Secondary", value: "#171914", class: "bg-surface-secondary", usage: "Nested surfaces, hover states" },
  { name: "Foreground", value: "#F4F5EF", class: "bg-foreground", usage: "Primary text, icons" },
  { name: "Muted Foreground", value: "#979D8D", class: "bg-muted", usage: "Secondary text, labels" },
  { name: "Border", value: "rgba(224,232,207,0.13)", class: "bg-border", usage: "Dividers, card borders" },
]

const accents = [
  { name: "Neon", value: "#C7F934", class: "bg-neon", usage: "Primary CTA, active data, progress" },
  { name: "Neon Bright", value: "#D7FF52", class: "bg-neon-bright", usage: "Hover states, emphasis" },
  { name: "Forest", value: "#15331D", class: "bg-forest", usage: "Dark green accent, badges" },
]

const signals = [
  { name: "Positive", value: "#62E88A", class: "bg-positive", usage: "Upward movement, wins, gains" },
  { name: "Negative", value: "#FF6B6B", class: "bg-negative", usage: "Downward movement, losses" },
  { name: "Warning", value: "#F5C563", class: "bg-warning", usage: "Pending markets, alerts" },
]

const typography = [
  { name: "Geist Sans", sample: "Predict what companies do next.", usage: "Body, headings, UI, navigation", className: "font-sans text-2xl font-semibold" },
  { name: "Geist Mono", sample: "HOOD · 67% · +8.4% · 2d 14h", usage: "Prices, probabilities, timestamps, tickers", className: "font-mono text-lg font-semibold" },
  { name: "Instrument Serif Italic", sample: "Build a reputation for being right.", usage: "Editorial emphasis inside headlines", className: "font-serif italic text-2xl text-neon" },
]

function ColorSwatch({ name, value, usage }: { name: string; value: string; usage: string }) {
  const isDark = value.startsWith("#0") || value.startsWith("#1") || value.includes("0.13")
  return (
    <div className="group relative">
      <div
        className="h-24 rounded-2xl border border-border flex items-end p-4"
        style={{ backgroundColor: value }}
      >
        <span className={`text-xs font-mono ${isDark ? "text-foreground/80" : "text-background/80"}`}>
          {value}
        </span>
      </div>
      <div className="mt-2 px-1">
        <div className="text-sm font-semibold">{name}</div>
        <div className="text-xs text-muted-foreground">{usage}</div>
      </div>
    </div>
  )
}

export default function DocsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-28 bg-background">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          {/* Header */}
          <div className="mb-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Earnings.fun
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <EarningsLogo className="w-10 h-10 text-neon" />
              <div>
                <h1 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em]">
                  Design System
                </h1>
                <p className="text-muted-foreground mt-1">
                  Brand identity, visual language and component guidelines.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            {/* Sidebar nav */}
            <nav className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-24 flex flex-col gap-2">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-2">
                  On this page
                </span>
                {["Brand", "Color Palette", "Typography", "Logo", "Spacing", "Border Radius", "Components", "Principles"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </nav>

            {/* Content */}
            <div className="lg:col-span-3 space-y-20">
              {/* Brand */}
              <section id="brand">
                <h2 className="text-2xl font-semibold mb-2">Brand</h2>
                <p className="text-muted-foreground mb-8">
                  Earnings.fun is a social forecasting game. The brand communicates intelligence,
                  credibility, speed, precision, conviction, and competition — without casino or gaming
                  aesthetics.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Personality", value: "Intelligent, credible, competitive, precise, community-driven" },
                    { label: "Positioning", value: "Institutional finance made accessible. Bloomberg meets Polymarket meets a premium social network." },
                    { label: "Audience", value: "Traders, market enthusiasts, financial creators, curious retail investors" },
                    { label: "Ecosystem", value: "Built for the Robinhood Chain ecosystem" },
                  ].map((item) => (
                    <div key={item.label} className="bg-surface border border-border rounded-xl p-5">
                      <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-1">
                        {item.label}
                      </div>
                      <div className="text-sm">{item.value}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Color Palette */}
              <section id="color-palette">
                <h2 className="text-2xl font-semibold mb-2">Color Palette</h2>
                <p className="text-muted-foreground mb-8">
                  Dark-first interface. Neon used selectively for CTAs, active data, and progress indicators.
                  Never cover large areas with neon.
                </p>

                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Core
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                  {colors.map((c) => (
                    <ColorSwatch key={c.name} {...c} />
                  ))}
                </div>

                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Accents
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                  {accents.map((c) => (
                    <ColorSwatch key={c.name} {...c} />
                  ))}
                </div>

                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Signals
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {signals.map((c) => (
                    <ColorSwatch key={c.name} {...c} />
                  ))}
                </div>
              </section>

              {/* Typography */}
              <section id="typography">
                <h2 className="text-2xl font-semibold mb-2">Typography</h2>
                <p className="text-muted-foreground mb-8">
                  Geist Sans for body and UI, Geist Mono for financial data, Instrument Serif for editorial emphasis.
                </p>
                <div className="space-y-6">
                  {typography.map((t) => (
                    <div key={t.name} className="bg-surface border border-border rounded-2xl p-6 md:p-8">
                      <div className="text-xs font-mono text-muted-foreground mb-3">
                        {t.name} — {t.usage}
                      </div>
                      <div className={t.className}>{t.sample}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Logo */}
              <section id="logo">
                <h2 className="text-2xl font-semibold mb-2">Logo</h2>
                <p className="text-muted-foreground mb-8">
                  The mark combines a rising forecast signal with an abstract &quot;E&quot; — representing prediction,
                  upward momentum, and the Earnings.fun brand.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-surface border border-border rounded-2xl p-8 flex items-center justify-center">
                    <EarningsLogo className="w-20 h-20 text-neon" />
                  </div>
                  <div className="bg-background border border-border rounded-2xl p-8 flex items-center justify-center">
                    <EarningsLogo className="w-20 h-20 text-neon" />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <div className="bg-surface border border-border rounded-xl px-4 py-3 flex items-center gap-3">
                    <EarningsLogo className="w-6 h-6 text-neon" />
                    <span className="text-sm font-semibold">
                      Earnings<span className="text-neon">.fun</span>
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">Wordmark + symbol</span>
                </div>
              </section>

              {/* Spacing */}
              <section id="spacing">
                <h2 className="text-2xl font-semibold mb-2">Spacing</h2>
                <p className="text-muted-foreground mb-8">
                  Premium, generous spacing. Section padding adapts across breakpoints.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-xs font-mono text-muted-foreground uppercase">Breakpoint</th>
                        <th className="text-left py-3 px-4 text-xs font-mono text-muted-foreground uppercase">Vertical padding</th>
                        <th className="text-left py-3 px-4 text-xs font-mono text-muted-foreground uppercase">Max width</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono">
                      {[
                        { bp: "Desktop", py: "120–160px", width: "1280–1400px" },
                        { bp: "Tablet", py: "72–96px", width: "100%" },
                        { bp: "Mobile", py: "56–72px", width: "100%" },
                      ].map((row) => (
                        <tr key={row.bp} className="border-b border-border/50">
                          <td className="py-3 px-4">{row.bp}</td>
                          <td className="py-3 px-4 text-muted-foreground">{row.py}</td>
                          <td className="py-3 px-4 text-muted-foreground">{row.width}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Border Radius */}
              <section id="border-radius">
                <h2 className="text-2xl font-semibold mb-2">Border Radius</h2>
                <p className="text-muted-foreground mb-8">
                  Restrained, consistent rounding. No excessive roundness.
                </p>
                <div className="flex flex-wrap gap-6">
                  {[
                    { label: "Large containers", value: "12–18px", class: "rounded-2xl" },
                    { label: "Compact elements", value: "8–12px", class: "rounded-xl" },
                    { label: "Tags & filters", value: "Pill (full)", class: "rounded-full" },
                  ].map((r) => (
                    <div key={r.label} className="text-center">
                      <div
                        className={`w-20 h-20 bg-surface border border-border ${r.class} mb-2`}
                      />
                      <div className="text-xs font-medium">{r.label}</div>
                      <div className="text-[10px] font-mono text-muted-foreground">{r.value}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Components */}
              <section id="components">
                <h2 className="text-2xl font-semibold mb-2">Components</h2>
                <p className="text-muted-foreground mb-8">
                  All landing page sections are built as reusable React components with Framer Motion
                  animations, responsive behavior, and Tailwind CSS v4 styling.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Navbar (sticky, transparent→blur)",
                    "Hero (asymmetric split, interactive card)",
                    "Market Ticker (infinite marquee)",
                    "Featured Markets (asymmetric grid, filters)",
                    "How It Works (connected process, 3 steps)",
                    "Reputation System (split layout, profile card)",
                    "Social Forecasting (feed + sidebar)",
                    "Competitions (leaderboard, rewards)",
                    "Category Explorer (modular grid, 8 categories)",
                    "Final CTA (email capture, states)",
                    "Footer (links, badge, disclaimer)",
                  ].map((comp) => (
                    <div
                      key={comp}
                      className="bg-surface border border-border rounded-xl px-4 py-3 text-sm"
                    >
                      {comp}
                    </div>
                  ))}
                </div>
              </section>

              {/* Principles */}
              <section id="principles">
                <h2 className="text-2xl font-semibold mb-2">Design Principles</h2>
                <div className="space-y-6 mt-8">
                  {[
                    {
                      title: "Neon is a signal, not a paint bucket.",
                      desc: "Use #C7F934 selectively: primary CTA, active percentages, progress bars, selected tabs. Never flood sections with it.",
                    },
                    {
                      title: "Dark is the default. Light is the content.",
                      desc: "Background #070806 recedes. Foreground #F4F5EF advances. Let content own the hierarchy.",
                    },
                    {
                      title: "Data wears a monospaced suit.",
                      desc: "All financial figures — prices, probabilities, percentages, timestamps — use Geist Mono with tabular numerals.",
                    },
                    {
                      title: "One accent moment per section.",
                      desc: "If everything is neon, nothing is. Each section gets one neon focal point: a number, a button, a line.",
                    },
                    {
                      title: "Avoid casino aesthetics.",
                      desc: "No chips, no slot machines, no coin illustrations, no purple-blue gradients, no glassmorphism, no cartoon mascots, no glowing orbs.",
                    },
                    {
                      title: "Respect reduced motion.",
                      desc: "All animations respect prefers-reduced-motion. Motion should enhance, not distract.",
                    },
                  ].map((p) => (
                    <div
                      key={p.title}
                      className="bg-surface border border-border rounded-2xl p-6"
                    >
                      <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
