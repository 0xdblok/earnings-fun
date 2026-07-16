"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { TrendingUp, Award, Target, Zap } from "lucide-react"
import { featuredForecaster, reputationMetrics } from "@/lib/landing-data"

const iconMap: Record<string, React.ReactNode> = {
  "Forecast Score": <TrendingUp className="w-4 h-4" />,
  Accuracy: <Target className="w-4 h-4" />,
  "Confidence Calibration": <Zap className="w-4 h-4" />,
  Consistency: <Award className="w-4 h-4" />,
}

export function ReputationSystem() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-28 md:py-36 px-6 md:px-10 bg-background">
      <div className="mx-auto max-w-[1400px]">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left - Text + Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-8"
          >
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-4">
                <span className="w-1 h-1 rounded-full bg-neon" />
                Reputation
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold leading-[1.15] tracking-[-0.03em] mb-4">
                Your opinions disappear.
                <br />
                Your <span className="font-serif italic text-neon">track record</span>{" "}
                should not.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-[480px]">
                Every forecast contributes to a public performance history measuring
                accuracy, confidence calibration, consistency and category expertise.
                The score rewards well-calibrated predictions, not just lucky binary
                guesses.
              </p>
            </div>

            {/* Metric cards */}
            <div className="grid grid-cols-2 gap-3">
              {reputationMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-surface border border-border rounded-2xl p-4 md:p-5"
                >
                  <div className="flex items-center gap-2 text-neon mb-3">
                    {iconMap[metric.label]}
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                      {metric.label}
                    </span>
                  </div>
                  <div className="text-2xl font-bold font-mono tabular-nums mb-1">
                    {metric.value}
                  </div>
                  <div className="text-[11px] text-muted-foreground leading-tight">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="w-full max-w-[440px] bg-surface border border-border rounded-2xl p-6 md:p-8">
              {/* Profile header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon/30 to-forest flex items-center justify-center text-xl font-bold font-mono text-neon">
                  AM
                </div>
                <div>
                  <div className="text-lg font-semibold">{featuredForecaster.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {featuredForecaster.specialty}
                  </div>
                </div>
                <div className="ml-auto">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold bg-forest text-neon rounded-full">
                    Top 2.8%
                  </span>
                </div>
              </div>

              {/* Score */}
              <div className="mb-8">
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                  Forecast Score
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-bold font-mono tabular-nums text-neon">
                    {featuredForecaster.score}
                  </span>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-lg font-bold font-mono">{featuredForecaster.accuracy}%</div>
                  <div className="text-[10px] text-muted-foreground mt-1">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold font-mono">{featuredForecaster.resolved}</div>
                  <div className="text-[10px] text-muted-foreground mt-1">Resolved</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold font-mono">{featuredForecaster.streak}w</div>
                  <div className="text-[10px] text-muted-foreground mt-1">Streak</div>
                </div>
              </div>

              {/* Calibration mini-chart */}
              <div className="mb-6">
                <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-2">
                  Calibration
                </div>
                <div className="flex items-end gap-1 h-20">
                  {[45, 62, 72, 80, 85, 88, 86, 84, 82, 78].map((v, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full bg-neon/30 rounded-[2px]"
                        style={{ height: `${v}%` }}
                      />
                      {i % 3 === 0 && (
                        <span className="text-[8px] text-muted-foreground/50">{i * 10}%</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Badge */}
              {featuredForecaster.badge && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-forest/30 border border-forest/50 rounded-full">
                  <Award className="w-3.5 h-3.5 text-neon" />
                  <span className="text-xs font-medium text-neon/90">
                    {featuredForecaster.badge}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
