"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check, Edit3, TrendingUp, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Make your call",
    description:
      "Choose an event, select an outcome and assign a confidence level that reflects your conviction.",
    visual: (
      <div className="mt-6 bg-surface border border-border rounded-2xl p-5 w-full max-w-[320px]">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-2 py-0.5 text-[10px] font-bold font-mono bg-forest/50 text-neon rounded">
            AAPL
          </span>
          <span className="text-[10px] font-mono text-muted-foreground uppercase">
            Product Launch
          </span>
        </div>
        <p className="text-sm font-medium text-foreground mb-4">
          Will Apple announce smart glasses before year-end?
        </p>
        <div className="flex gap-2 mb-4">
          <button className="flex-1 py-2.5 text-xs font-semibold bg-positive/10 text-positive border border-positive/20 rounded-lg">
            YES
          </button>
          <button className="flex-1 py-2.5 text-xs font-medium text-muted-foreground border border-border rounded-lg">
            NO
          </button>
        </div>
        <div>
          <div className="flex items-center justify-between mb-1 text-[10px] font-mono text-muted-foreground">
            <span>Confidence</span>
            <span className="text-neon font-semibold">78%</span>
          </div>
          <div className="h-1.5 bg-surface-secondary rounded-full overflow-hidden">
            <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-neon/60 to-neon" />
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Show your work",
    description:
      "Publish a concise thesis with evidence, catalysts and risks. The quality of your reasoning matters.",
    visual: (
      <div className="mt-6 bg-surface border border-border rounded-2xl p-5 w-full max-w-[320px]">
        <p className="text-xs font-medium text-muted-foreground mb-3">
          Thesis preview
        </p>
        <p className="text-sm text-foreground/80 leading-relaxed mb-4">
          Supply chain signals point to a Q4 reveal. The Vision Pro ecosystem needs a
          lighter entry point…
        </p>
        <div className="flex flex-wrap gap-1.5">
          {["Margins", "Guidance", "Demand"].map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-mono bg-surface-secondary text-muted-foreground rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Build your edge",
    description:
      "Every resolved forecast improves or weakens your public track record. Consistency compounds.",
    visual: (
      <div className="mt-6 bg-surface border border-border rounded-2xl p-5 w-full max-w-[320px]">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono text-muted-foreground uppercase">
            Forecast Score
          </span>
          <span className="text-xl font-bold font-mono tabular-nums text-neon">
            87.4
          </span>
        </div>
        <div className="h-1.5 bg-surface-secondary rounded-full overflow-hidden mb-4">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "87.4%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-neon/60 to-neon"
          />
        </div>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div>
            <div className="text-sm font-bold font-mono">
              <span className="text-positive">▲</span> 3
            </div>
            <div className="text-[10px] text-muted-foreground mt-0.5">Rank</div>
          </div>
          <div>
            <div className="text-sm font-bold font-mono">74%</div>
            <div className="text-[10px] text-muted-foreground mt-0.5">Accuracy</div>
          </div>
          <div>
            <div className="text-sm font-bold font-mono">11w</div>
            <div className="text-[10px] text-muted-foreground mt-0.5">Streak</div>
          </div>
        </div>
      </div>
    ),
  },
]

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="how-it-works" className="py-28 md:py-36 px-6 md:px-10 bg-surface">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-4">
            <span className="w-1 h-1 rounded-full bg-neon" />
            How it works
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold leading-[1.1] tracking-[-0.03em]">
            Three steps to a <span className="font-serif italic text-neon">verifiable</span> track record.
          </h2>
        </div>

        {/* Connected process */}
        <div ref={ref} className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-[180px] left-[16%] right-[16%] h-[1px]">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              className="h-full bg-border origin-left"
            />
            {/* Animated signal dots */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: "-100%" }}
                animate={isInView ? { opacity: 1, x: "100%" } : {}}
                transition={{
                  duration: 2,
                  delay: 0.5 + i * 0.6,
                  ease: "linear",
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
                className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-neon"
                style={{ left: `${25 + i * 25}%` }}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                className="relative flex flex-col items-center lg:items-start text-center lg:text-left group"
              >
                {/* Step number */}
                <div className="w-14 h-14 rounded-2xl bg-surface-secondary border border-border flex items-center justify-center mb-6 text-lg font-bold font-mono text-foreground/60 group-hover:text-neon transition-colors">
                  {step.number}
                </div>

                {/* Line connector - mobile */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden w-[1px] h-10 bg-border/40 mb-4" />
                )}

                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[340px] mb-6">
                  {step.description}
                </p>

                {/* Visual */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.2 }}
                >
                  {step.visual}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
