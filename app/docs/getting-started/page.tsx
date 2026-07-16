import { PageHeader, Callout, DocCard } from "@/components/docs/shared"
import { Zap, Target, BarChart3, Trophy, Layers, BookOpenCheck } from "lucide-react"

export default function GettingStarted() {
  return (
    <>
      <PageHeader
        title="Getting Started"
        desc="Everything you need to start forecasting on Earnings.fun."
      />

      <section id="quickstart" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-[-0.02em] mb-6">Quickstart</h2>
        <div className="space-y-5">
          {[
            { step: "1", title: "Create your account", desc: "Sign up with email. Choose a handle — this is your public forecasting identity visible to the community." },
            { step: "2", title: "Browse live markets", desc: "Explore open forecasts across categories. Each market card shows the question, community probability, participant count and deadline." },
            { step: "3", title: "Make your first forecast", desc: "Pick a market, select your outcome and set your confidence level. The slider ranges from 50% to 99%." },
            { step: "4", title: "Publish your reasoning", desc: "Write a concise thesis. What evidence supports your view? What are the risks? Tag relevant factors." },
            { step: "5", title: "Track your performance", desc: "Your profile updates automatically as markets resolve. Accuracy, calibration and consistency scores reflect every forecast." },
          ].map((s) => (
            <div key={s.step} className="flex gap-4">
              <div className="w-9 h-9 rounded-xl bg-forest/50 border border-forest/50 flex items-center justify-center text-sm font-bold font-mono text-neon shrink-0">
                {s.step}
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">{s.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="earningsfun-101" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-[-0.02em] mb-1">Earnings.fun 101</h2>
        <p className="text-sm text-muted-foreground mb-6">The key concepts you need to understand.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: <Layers className="w-4 h-4" />, title: "Markets", desc: "A single yes/no question about a future event with a deadline and resolution criteria." },
            { icon: <Target className="w-4 h-4" />, title: "Forecasts", desc: "Your prediction: outcome, confidence percentage (50–99%) and written reasoning." },
            { icon: <Zap className="w-4 h-4" />, title: "Confidence", desc: "How sure you are. 50% = coin flip, 99% = near certainty. Higher confidence = bigger impact." },
            { icon: <BookOpenCheck className="w-4 h-4" />, title: "Resolution", desc: "Official sources determine outcomes. Your forecast is scored correct or incorrect." },
            { icon: <BarChart3 className="w-4 h-4" />, title: "Forecast Score", desc: "Composite reputation metric (0–100): accuracy + calibration + consistency." },
            { icon: <Trophy className="w-4 h-4" />, title: "XP", desc: "Experience Points. Earned through activity and performance. Determines leaderboard rank." },
          ].map((c) => (
            <DocCard key={c.title} icon={c.icon} title={c.title} desc={c.desc} />
          ))}
        </div>
      </section>
    </>
  )
}
