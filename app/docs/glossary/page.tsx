import { PageHeader, DocTable } from "@/components/docs/shared"

export default function Glossary() {
  return (
    <>
      <PageHeader title="Glossary" desc="Key terms and definitions for the Earnings.fun protocol." />
      <DocTable
        headers={["Term", "Definition"]}
        rows={[
          ["Market", "A single yes/no question about a future company event with a deadline and resolution criteria."],
          ["Forecast", "Your prediction on a market: outcome, confidence percentage and written reasoning."],
          ["Confidence", "A percentage (50-99%) representing how certain you are about your forecast."],
          ["Resolution", "The determination of a market's outcome using published criteria and official sources."],
          ["Forecast Score", "Composite reputation metric (0-100): 40% accuracy + 35% calibration + 25% consistency."],
          ["XP", "Experience Points earned through forecasting activity and performance."],
          ["Calibration", "How well your confidence percentages match actual outcomes. Measured by Brier score."],
          ["Brier Score", "A proper scoring rule measuring accuracy of probabilistic predictions. Lower = better."],
          ["Streak", "Consecutive weeks with at least one forecast. Longer streaks increase consistency."],
          ["Competition", "A time-limited forecasting event with themed markets and a dedicated leaderboard."],
          ["Creator", "An approved user who can create markets and host private forecasting leagues."],
          ["Badge", "An achievement earned for reaching forecasting milestones or winning competitions."],
          ["Voided", "A market that could not be resolved. No score impact."],
          ["Community Probability", "The aggregate probability across all forecasts on a market."],
        ]}
      />
    </>
  )
}
