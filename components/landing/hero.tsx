"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { TrendingUp, Clock, Users, ChevronRight, Info, Minus, Plus } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [probability, setProbability] = useState(67)
  const [confidence, setConfidence] = useState(72)

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-background"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(199,249,52,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(199,249,52,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col gap-8"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse-subtle" />
              <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase font-mono">
                The social forecasting layer for company events
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground">
              Predict what companies do next.
              <br />
              <span className="font-serif italic text-neon">
                Build a reputation
              </span>{" "}
              for being right.
            </h1>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-[540px] leading-relaxed">
              Forecast earnings, launches, acquisitions and market milestones. Prove
              your edge, follow the sharpest minds and climb the leaderboard — without
              risking real money.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link
                href="#cta"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold bg-neon text-background rounded-xl hover:bg-neon-bright transition-all active:scale-[0.98]"
              >
                Start forecasting
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="#markets"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-foreground/80 border border-border rounded-xl hover:border-foreground/20 hover:text-foreground transition-all"
              >
                Explore live markets
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-mono">
              <span className="flex items-center gap-1.5">
                <Info className="w-3 h-3" />
                No real-money wagering
              </span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>Transparent resolutions</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>Performance-based reputation</span>
            </div>
          </motion.div>

          {/* Right Column - Featured Forecast Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[460px]">
              <LiveMarketCard
                probability={probability}
                setProbability={setProbability}
                confidence={confidence}
                setConfidence={setConfidence}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function LiveMarketCard({
  probability,
  setProbability,
  confidence,
  setConfidence,
}: {
  probability: number
  setProbability: (v: number) => void
  confidence: number
  setConfidence: (v: number) => void
}) {
  const [animatedProb, setAnimatedProb] = useState(0)
  const probRef = useRef<HTMLDivElement>(null)
  const isProbInView = useInView(probRef, { once: true })

  useEffect(() => {
    if (isProbInView) {
      const duration = 1200
      const start = performance.now()
      const from = 0
      const to = probability
      const animate = (now: number) => {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setAnimatedProb(Math.round(from + (to - from) * eased))
        if (progress < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    }
  }, [isProbInView, probability])

  return (
    <div
      ref={probRef}
      className="relative bg-surface border border-border rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/40"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 text-xs font-bold font-mono tracking-wider bg-forest text-neon rounded-md">
            HOOD
          </span>
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
            Q2 Earnings
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-positive animate-pulse-subtle" />
          <span className="text-xs font-mono text-muted-foreground">Live</span>
        </div>
      </div>

      {/* Question */}
      <h3 className="text-xl md:text-2xl font-semibold leading-tight mb-6 text-foreground">
        Will Robinhood beat quarterly revenue expectations?
      </h3>

      {/* Probability Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-positive">
              YES {animatedProb}%
            </span>
            <span className="text-xs font-mono text-positive/60">
              +8.4% this week
            </span>
          </div>
          <span className="text-xs font-mono text-muted-foreground">
            NO {100 - animatedProb}%
          </span>
        </div>

        {/* Animated bar */}
        <div className="relative h-1.5 bg-surface-secondary rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${probability}%` }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-positive to-neon"
          />
        </div>

        {/* Small sparkline placeholder */}
        <div className="mt-3 flex items-end gap-[2px] h-8 opacity-50">
          {[30, 45, 40, 55, 50, 62, 58, 67, 63, 68, 65, 72, 67].map((v, i) => (
            <div
              key={i}
              className="flex-1 bg-positive/40 rounded-[1px]"
              style={{ height: `${v}%` }}
            />
          ))}
        </div>
      </div>

      {/* Confidence Slider */}
      <div className="mb-6 p-4 bg-surface-secondary/50 rounded-xl">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
            Your confidence
          </span>
          <span className="text-sm font-semibold font-mono tabular-nums text-neon">
            {confidence}%
          </span>
        </div>
        <div className="relative">
          <input
            type="range"
            min={50}
            max={99}
            value={confidence}
            onChange={(e) => setConfidence(Number(e.target.value))}
            className="w-full h-1.5 appearance-none bg-surface-secondary rounded-full outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-neon [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
            aria-label="Confidence percentage"
          />
          <div className="flex justify-between mt-1.5 text-[10px] font-mono text-muted-foreground">
            <span>50%</span>
            <span>99%</span>
          </div>
        </div>
      </div>

      {/* Reasoning input */}
      <div className="mb-5">
        <div className="px-4 py-3 bg-surface-secondary/50 rounded-xl border border-border/50 text-sm text-muted-foreground font-mono">
          <span className="text-muted-foreground/50">Add your reasoning…</span>
        </div>
      </div>

      {/* Footer stats */}
      <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5" />
          <span>1,842 forecasts</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          <span>Closes in 2d 14h</span>
        </div>
      </div>

      {/* Participant avatars */}
      <div className="flex items-center gap-1 mt-4">
        {["#C7F934", "#62E88A", "#F5C563", "#FF6B6B", "#979D8D"].map((color, i) => (
          <div
            key={i}
            className="w-6 h-6 rounded-full border-2 border-surface"
            style={{ backgroundColor: color, marginLeft: i > 0 ? -6 : 0 }}
          />
        ))}
        <span className="text-[10px] font-mono text-muted-foreground ml-1.5">
          +1,837
        </span>
      </div>
    </div>
  )
}
