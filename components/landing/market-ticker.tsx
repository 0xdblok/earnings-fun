"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, ArrowDownRight, Dot } from "lucide-react"
import { tickerItems, type TickerItem } from "@/lib/landing-data"

function TickerRow({ items }: { items: TickerItem[] }) {
  const duplicated = [...items, ...items]
  return (
    <div className="flex gap-0 animate-marquee hover:[animation-play-state:paused]">
      {duplicated.map((item, i) => (
        <div
          key={`${item.id}-${i}`}
          className="flex items-center gap-2 px-5 py-3 border-r border-border/40 shrink-0 select-none"
        >
          <span className="text-xs font-bold font-mono text-foreground/80">
            {item.ticker}
          </span>
          <span className="text-xs text-muted-foreground">{item.label}</span>
          <span className="text-xs font-semibold font-mono tabular-nums text-neon">
            {item.probability}%
          </span>
          <span
            className={`inline-flex items-center gap-0.5 text-[10px] font-mono ${
              item.change >= 0 ? "text-positive" : "text-negative"
            }`}
          >
            {item.change >= 0 ? (
              <ArrowUpRight className="w-3 h-3" />
            ) : (
              <ArrowDownRight className="w-3 h-3" />
            )}
            {item.change >= 0 ? "+" : ""}
            {item.change.toFixed(1)}%
          </span>
        </div>
      ))}
    </div>
  )
}

export function MarketTicker() {
  const mid = Math.floor(tickerItems.length / 2)

  return (
    <section className="relative border-y border-border bg-surface/50 overflow-hidden" aria-label="Live market ticker">
      <div className="py-0">
        <TickerRow items={tickerItems} />
      </div>
      {/* Gradient fades on edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface/80 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface/80 to-transparent z-10" />
    </section>
  )
}
