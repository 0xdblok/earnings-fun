"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, Users, Clock, Trophy } from "lucide-react"
import { categories, creatorPreview } from "@/lib/landing-data"

export function CategoryExplorer() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <>
      {/* Categories */}
      <section className="py-28 md:py-36 px-6 md:px-10 bg-background">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-4">
              <span className="w-1 h-1 rounded-full bg-neon" />
              Categories
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold leading-[1.1] tracking-[-0.03em]">
              Forecast what <span className="font-serif italic text-neon">matters</span> to you.
            </h2>
          </div>

          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`group relative bg-surface border border-border/60 rounded-2xl p-6 transition-all duration-300 hover:border-border hover:bg-surface-secondary/30 cursor-pointer ${
                  cat.large ? "sm:col-span-2" : ""
                }`}
              >
                {/* Subtle data pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] overflow-hidden">
                  <div className="grid grid-cols-4 gap-[2px] rotate-45 scale-150">
                    {Array.from({ length: 64 }).map((_, j) => (
                      <div
                        key={j}
                        className="w-1 h-1 rounded-full"
                        style={{
                          backgroundColor:
                            Math.random() > 0.5 ? "#C7F934" : "transparent",
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative z-10">
                  <span className="text-[10px] font-bold font-mono tracking-[0.15em] text-neon uppercase mb-3 block">
                    {cat.name}
                  </span>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {cat.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-foreground/60">
                      {cat.openForecasts} open forecasts
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-neon transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section id="creators" className="py-28 md:py-36 px-6 md:px-10 bg-surface">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left - Text */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-4">
                  <span className="w-1 h-1 rounded-full bg-neon" />
                  For Creators
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold leading-[1.15] tracking-[-0.03em] mb-4">
                  Turn an audience into a{" "}
                  <span className="font-serif italic text-neon">forecasting league</span>.
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed max-w-[460px]">
                  Creators, analysts and communities can launch curated markets, host
                  private competitions and discover their sharpest members.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Curated market collections",
                  "Custom competition pages",
                  "Private or public leagues",
                  "Community leaderboard",
                  "Sponsor integration",
                  "Shareable forecast cards",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <span className="w-1 h-1 rounded-full bg-neon/60 shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Preview card */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <div className="w-full max-w-[460px] bg-background border border-border rounded-2xl overflow-hidden">
                <div className="p-6 md:p-8 border-b border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Trophy className="w-5 h-5 text-neon" />
                    <h3 className="text-lg font-semibold">{creatorPreview.name}</h3>
                  </div>
                  <div className="text-sm text-muted-foreground font-mono">
                    Hosted by {creatorPreview.host}
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-xl font-bold font-mono tabular-nums text-neon">
                        {creatorPreview.openForecasts}
                      </div>
                      <div className="text-[10px] text-muted-foreground mt-1">
                        Open forecasts
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold font-mono tabular-nums">
                        {creatorPreview.players.toLocaleString()}
                      </div>
                      <div className="text-[10px] text-muted-foreground mt-1">Players</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold font-mono tabular-nums text-warning">
                        {creatorPreview.seasonEnd}
                      </div>
                      <div className="text-[10px] text-muted-foreground mt-1">
                        Season ends
                      </div>
                    </div>
                  </div>
                  <button className="w-full py-3 text-sm font-semibold bg-neon text-background rounded-xl hover:bg-neon-bright transition-all">
                    Join league
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
