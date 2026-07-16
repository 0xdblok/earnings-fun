"use client"

import React, { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, ArrowDownRight, Clock, Users } from "lucide-react"
import { featuredMarkets, type MarketCard } from "@/lib/landing-data"

type FilterKey = "Trending" | "Earnings" | "Products" | "M&A" | "Leadership" | "Price targets"

const filters: FilterKey[] = ["Trending", "Earnings", "Products", "M&A", "Leadership", "Price targets"]

function MarketCard({ market, large }: { market: MarketCard; large?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={`group relative bg-surface border border-border/60 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:border-border hover:bg-surface-secondary/30 ${
        large ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 text-[10px] font-bold font-mono tracking-wider bg-forest/50 text-neon rounded">
            {market.ticker}
          </span>
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
            {market.category}
          </span>
        </div>
        <span
          className={`inline-flex items-center gap-0.5 text-[10px] font-mono ${
            market.change >= 0 ? "text-positive" : "text-negative"
          }`}
        >
          {market.change >= 0 ? (
            <ArrowUpRight className="w-3 h-3" />
          ) : (
            <ArrowDownRight className="w-3 h-3" />
          )}
          {market.change >= 0 ? "+" : ""}
          {market.change.toFixed(1)}%
        </span>
      </div>

      {/* Question */}
      <h3
        className={`font-semibold leading-snug mb-4 text-foreground ${
          large ? "text-lg md:text-xl" : "text-sm md:text-base"
        }`}
      >
        {market.question}
      </h3>

      {/* Probability */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-semibold font-mono text-positive">
            {market.yesLabel} {market.probability}%
          </span>
          <span className="text-xs font-mono text-muted-foreground">
            {market.noLabel} {100 - market.probability}%
          </span>
        </div>
        <div className="relative h-1 bg-surface-secondary rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${market.probability}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-positive to-neon"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground mt-auto">
        <div className="flex items-center gap-1">
          <Users className="w-3 h-3" />
          <span>{market.participants.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{market.closesIn}</span>
        </div>
      </div>
    </motion.div>
  )
}

export function FeaturedMarkets() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("Trending")

  return (
    <section id="markets" className="py-28 md:py-36 px-6 md:px-10 bg-background">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-4">
            <span className="w-1 h-1 rounded-full bg-neon" />
            Live Forecasts
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold leading-[1.1] tracking-[-0.03em] mb-4">
            The questions moving <span className="font-serif italic text-neon">markets</span>.
          </h2>
          <p className="text-base text-muted-foreground max-w-[500px]">
            Make a call, set your confidence and explain the reasoning behind it.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`shrink-0 px-4 py-2 text-xs font-medium rounded-full border transition-all ${
                activeFilter === filter
                  ? "bg-neon text-background border-neon"
                  : "text-muted-foreground border-border hover:border-foreground/20 hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {featuredMarkets.map((market, i) => (
            <MarketCard key={market.id} market={market} large={i === 0} />
          ))}
        </div>

        {/* View all link */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-neon hover:text-neon-bright transition-colors"
          >
            View all 200+ markets
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
