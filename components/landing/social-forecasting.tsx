"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ThumbsUp, ThumbsDown, Bookmark, Eye, FileText, BarChart3 } from "lucide-react"
import { socialPosts, forecastersToWatch } from "@/lib/landing-data"

export function SocialForecasting() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-28 md:py-36 px-6 md:px-10 bg-surface">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-4">
            <span className="w-1 h-1 rounded-full bg-neon" />
            Social
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold leading-[1.1] tracking-[-0.03em]">
            Don&apos;t just predict.
            <br />
            Publish the <span className="font-serif italic text-neon">thesis</span>.
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Feed */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {socialPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-background border border-border rounded-2xl p-5 md:p-6 hover:border-border/80 transition-colors"
              >
                {/* Post header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-forest/50 flex items-center justify-center text-xs font-bold font-mono text-neon">
                    {post.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{post.name}</div>
                    <div className="text-xs text-muted-foreground font-mono">{post.handle}</div>
                  </div>
                  <div className="ml-auto text-xs font-mono text-muted-foreground">
                    {post.updated}
                  </div>
                </div>

                {/* Question */}
                <div className="mb-3">
                  <span className="text-xs font-semibold font-mono text-neon bg-neon/5 px-2 py-0.5 rounded">
                    {post.question}
                  </span>
                  <span className="ml-2 text-sm font-semibold font-mono text-muted-foreground">
                    Confidence: {post.confidence}%
                  </span>
                </div>

                {/* Thesis */}
                <p className="text-sm text-foreground/80 leading-relaxed mb-4 italic border-l-2 border-neon/30 pl-4">
                  &ldquo;{post.thesis}&rdquo;
                </p>

                {/* Evidence row */}
                <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <FileText className="w-3 h-3" />
                    {post.evidence} sources
                  </span>
                  <span className="flex items-center gap-1">
                    <BarChart3 className="w-3 h-3" />
                    {post.charts} charts
                  </span>
                  <span className="text-muted-foreground/50 ml-auto">
                    Updated {post.updated}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-5 pt-3 border-t border-border">
                  <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-positive transition-colors">
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{post.agrees}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-negative transition-colors">
                    <ThumbsDown className="w-3.5 h-3.5" />
                    <span>{post.disagrees}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-warning transition-colors">
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>{post.saves}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View reasoning</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar - Forecasters to watch */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-4"
          >
            <div className="sticky top-24 bg-background border border-border rounded-2xl p-6">
              <h3 className="text-sm font-semibold mb-1">Forecasters to watch</h3>
              <p className="text-xs text-muted-foreground mb-6">
                Strong recent performance
              </p>

              <div className="flex flex-col gap-4">
                {forecastersToWatch.map((f, i) => (
                  <div
                    key={f.handle}
                    className="flex items-center gap-3 pb-4 border-b border-border last:border-0 last:pb-0"
                  >
                    <div className="w-10 h-10 rounded-xl bg-forest/50 flex items-center justify-center text-xs font-bold font-mono text-neon shrink-0">
                      {f.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{f.name}</div>
                      <div className="text-xs text-muted-foreground">{f.specialty}</div>
                      <div className="flex items-center gap-2 mt-1 text-[10px]">
                        <span className="font-mono text-neon font-semibold">
                          {f.score}
                        </span>
                        <span className="text-muted-foreground">
                          {f.accuracy}% · {f.resolved} resolved
                        </span>
                      </div>
                    </div>
                    <button className="shrink-0 px-3 py-1.5 text-[10px] font-medium text-muted-foreground hover:text-foreground border border-border rounded-full hover:border-foreground/20 transition-all">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
