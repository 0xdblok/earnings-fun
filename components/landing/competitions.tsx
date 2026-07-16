"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Trophy, Clock, Users, ArrowUpRight, Gift, BadgeCheck, Sparkles } from "lucide-react"
import { currentCompetition, leaderboardEntries } from "@/lib/landing-data"

export function Competitions() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="leaderboard" className="py-28 md:py-36 px-6 md:px-10 bg-forest/20">
      <div ref={ref} className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center gap-6"
          >
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-4">
                <span className="w-1 h-1 rounded-full bg-neon" />
                Competitions
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold leading-[1.15] tracking-[-0.03em] mb-4">
                Every week is a new{" "}
                <span className="font-serif italic text-neon">market season</span>.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-[440px]">
                Compete in earnings weeks, product-event challenges and sponsored forecasting
                tournaments. The sharpest forecasters climb the ranks.
              </p>
            </div>

            {/* Rewards */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-foreground/80">
                What you can earn
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: <Trophy className="w-3.5 h-3.5" />, label: "XP points" },
                  { icon: <BadgeCheck className="w-3.5 h-3.5" />, label: "Exclusive badges" },
                  { icon: <Sparkles className="w-3.5 h-3.5" />, label: "Profile cosmetics" },
                  { icon: <Gift className="w-3.5 h-3.5" />, label: "Sponsor prizes" },
                ].map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-surface border border-border rounded-full text-muted-foreground"
                  >
                    {item.icon}
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Competition card + Leaderboard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-surface border border-border/60 rounded-2xl overflow-hidden">
              {/* Competition header */}
              <div className="p-6 md:p-8 border-b border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-neon/10 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-neon" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{currentCompetition.name}</h3>
                    <div className="flex items-center gap-3 mt-1 text-xs font-mono text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {currentCompetition.participants.toLocaleString()} participants
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {currentCompetition.daysRemaining}d remaining
                      </span>
                    </div>
                  </div>
                  <span className="ml-auto text-xs font-medium text-warning bg-warning/10 px-3 py-1 rounded-full">
                    {currentCompetition.prizePool}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="font-mono">{currentCompetition.markets} markets</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>Top 10% earn rewards</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>Weekly reset</span>
                </div>
              </div>

              {/* Leaderboard */}
              <div className="p-6 md:p-8">
                <h4 className="text-sm font-semibold mb-4">Current standings</h4>
                <div className="space-y-0.5">
                  {leaderboardEntries.map((entry) => (
                    <div
                      key={entry.handle}
                      className="flex items-center gap-4 py-3 px-4 rounded-xl hover:bg-surface-secondary/50 transition-colors group"
                    >
                      {/* Rank */}
                      <div className="w-8 text-center">
                        <span className="text-sm font-bold font-mono tabular-nums">
                          {entry.rank}
                        </span>
                        {entry.rank !== entry.previousRank && (
                          <span
                            className={`text-[10px] ml-0.5 ${
                              entry.rank < entry.previousRank ? "text-positive" : "text-negative"
                            }`}
                          >
                            {entry.rank < entry.previousRank ? "▲" : "▼"}
                          </span>
                        )}
                      </div>

                      {/* Avatar */}
                      <div className="w-8 h-8 rounded-lg bg-forest/50 flex items-center justify-center text-[10px] font-bold font-mono text-neon shrink-0">
                        {entry.name
                          .split(" ")
                          .map((w) => w[0])
                          .join("")}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">
                          {entry.name}
                          <span className="text-muted-foreground/60 font-normal ml-1.5">
                            {entry.handle}
                          </span>
                        </div>
                        <div className="text-[10px] text-muted-foreground font-mono">
                          {entry.specialty} · {entry.accuracy}% accuracy
                        </div>
                      </div>

                      {/* XP */}
                      <div className="text-right shrink-0">
                        <div className="text-sm font-bold font-mono tabular-nums text-neon">
                          {entry.xp.toLocaleString()}
                        </div>
                        <div className="text-[10px] text-muted-foreground font-mono">
                          XP
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium text-neon hover:text-neon-bright transition-colors"
                  >
                    View full leaderboard
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
