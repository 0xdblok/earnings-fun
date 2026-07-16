"use client"

import { useState, useRef, FormEvent } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, CheckCircle, Eye, ArrowRight, Loader2, Mail, Sparkles } from "lucide-react"
import Link from "next/link"

export function FinalCTA() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus("error")
      setErrorMsg("Please enter a valid email address.")
      return
    }

    setStatus("loading")
    setErrorMsg("")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setStatus("success")
    setEmail("")
  }

  return (
    <>
      {/* Trust Section */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-surface border-y border-border">
        <div className="mx-auto max-w-[900px] text-center">
          <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-4">
            <Shield className="w-3.5 h-3.5" />
            Responsible product
          </span>
          <h2 className="text-2xl md:text-4xl font-semibold leading-[1.2] mb-4">
            Forecasting first.
            <br />
            <span className="font-serif italic text-neon">Speculation</span> second.
          </h2>
          <p className="text-base text-muted-foreground max-w-[600px] mx-auto mb-10">
            Earnings.fun is a points-based social forecasting game. Our commitment to
            transparency and integrity means you can focus on what matters: building a
            track record that proves your market insight.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left max-w-[720px] mx-auto">
            {[
              {
                icon: <CheckCircle className="w-4 h-4" />,
                title: "No real-money wagering",
                desc: "Points-based competitions only. Your reputation is the currency.",
              },
              {
                icon: <Eye className="w-4 h-4" />,
                title: "Transparent resolutions",
                desc: "Markets resolve according to published criteria. All forecasts remain visible.",
              },
              {
                icon: <Shield className="w-4 h-4" />,
                title: "Sustained accuracy rewarded",
                desc: "Well-calibrated predictions earn more than lucky binary guesses.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-background border border-border rounded-xl p-4"
              >
                <div className="text-neon mb-2">{item.icon}</div>
                <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="cta"
        ref={ref}
        className="relative py-32 md:py-44 px-6 md:px-10 bg-background overflow-hidden"
      >
        {/* Subtle animated background grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(199,249,52,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(199,249,52,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative mx-auto max-w-[900px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Neon accent line */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 40 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-[2px] bg-neon"
            />

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-[-0.03em]">
              The next market expert
              <br />
              doesn&apos;t need a{" "}
              <span className="font-serif italic text-neon">television desk</span>.
            </h2>

            <p className="text-base md:text-lg text-muted-foreground max-w-[500px]">
              Start building your forecasting record before everyone knows your name.
            </p>

            {/* Email form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 w-full max-w-[440px]"
            >
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (status === "error") setStatus("idle")
                  }}
                  placeholder="Enter your email"
                  className="w-full h-12 pl-11 pr-4 bg-surface border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-neon/50 transition-colors font-mono"
                  aria-label="Email address"
                  disabled={status === "loading" || status === "success"}
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="h-12 px-6 text-sm font-semibold bg-neon text-background rounded-xl hover:bg-neon-bright transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 shrink-0"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Joining…
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    You&apos;re on the list
                  </>
                ) : (
                  <>
                    Join waitlist
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </motion.form>

            {status === "error" && (
              <p className="text-xs text-negative -mt-4" role="alert">
                {errorMsg}
              </p>
            )}

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-positive -mt-4 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Thanks! We&apos;ll be in touch when we launch.
              </motion.p>
            )}

            {/* Secondary link */}
            <Link
              href="#markets"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Or explore live markets
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
