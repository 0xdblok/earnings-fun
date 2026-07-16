import { PageHeader, DocSection, DocCard, Callout } from "@/components/docs/shared"

export default function Reputation() {
  return (
    <>
      <PageHeader title="Reputation" desc="How your forecasting track record is measured and ranked." />

      <DocSection id="forecast-score" title="Forecast Score" subtitle="Your composite reputation metric (0-100).">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          The Forecast Score is a weighted composite of three components:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <DocCard title="Accuracy (40%)" desc="How often your forecasts are correct. 74% accuracy = 74 out of 100 resolved markets called correctly." />
          <DocCard title="Calibration (35%)" desc="How well your confidence matches real outcomes. If you say 60% and are right ~60% of the time, you're perfectly calibrated." />
          <DocCard title="Consistency (25%)" desc="How regularly you participate. Longer streaks of weekly activity increase your score." />
        </div>
      </DocSection>

      <DocSection id="accuracy-calibration" title="Accuracy & Calibration">
        <Callout type="tip">
          <strong>Why calibration beats raw accuracy.</strong> A forecaster who picks &ldquo;Yes&rdquo; at 60% on every market and is right ~60% of the time is perfectly calibrated — even with only 60% raw accuracy. The system rewards honesty over bravado.
        </Callout>
        <p className="text-sm text-muted-foreground leading-relaxed mt-4">
          Calibration uses a <strong className="text-foreground">Brier score</strong>-based calculation. For each forecast, the squared difference between your confidence (0.5-0.99) and the actual outcome (1=correct, 0=incorrect) is computed. Lower Brier scores = better calibration.
        </p>
      </DocSection>

      <DocSection id="leaderboards" title="Leaderboards">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <DocCard title="Global Weekly" desc="All forecasters. Resets every Monday 00:00 UTC. Top 100 displayed publicly." />
          <DocCard title="Category-Specific" desc="Separate leaderboards for Earnings, M&A, Product Launches, etc." />
          <DocCard title="Competition" desc="Dynamic leaderboard per active competition. Only competition forecasts count." />
          <DocCard title="Following" desc="Filter to only show forecasters you follow. Compare against your circle." />
        </div>
      </DocSection>

      <DocSection id="badges-achievements" title="Badges & Achievements">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { emoji: "🏆", title: "Top Earnings Forecaster", desc: "Finish #1 on Earnings leaderboard for a week" },
            { emoji: "🔥", title: "Hot Streak", desc: "10 consecutive correct forecasts" },
            { emoji: "🎯", title: "Perfectly Calibrated", desc: "Brier score below 0.1 over 50+ forecasts" },
            { emoji: "📈", title: "Rising Star", desc: "Top 5% Forecast Score improvement in 30 days" },
            { emoji: "💯", title: "Century Club", desc: "100 resolved forecasts" },
            { emoji: "👑", title: "Season Champion", desc: "Win a competition season" },
            { emoji: "🧠", title: "Deep Dive", desc: "Publish reasoning with 3+ sources on 25 forecasts" },
            { emoji: "🌐", title: "Polymath", desc: "Active in 5+ categories simultaneously" },
          ].map((b) => (
            <div key={b.title} className="bg-surface border border-border rounded-xl p-4 flex items-center gap-3">
              <span className="text-2xl">{b.emoji}</span>
              <div><h5 className="text-sm font-semibold">{b.title}</h5><p className="text-[11px] text-muted-foreground">{b.desc}</p></div>
            </div>
          ))}
        </div>
      </DocSection>
    </>
  )
}
