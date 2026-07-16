import { PageHeader, DocSection, DocCard, Callout } from "@/components/docs/shared"

export default function Competitions() {
  return (
    <>
      <PageHeader title="Competitions" desc="Time-limited forecasting events with prizes and dedicated leaderboards." />

      <DocSection id="how-competitions-work" title="How Competitions Work" subtitle="Themed forecasting events with a fixed set of markets and defined time window.">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Each competition has its own leaderboard and reward pool. Participation is optional - your regular forecasts count toward your global stats regardless.
        </p>
        <div className="bg-surface border border-border rounded-2xl p-6 my-4">
          <h4 className="font-semibold mb-4">Example: Earnings Season Sprint</h4>
          <div className="grid grid-cols-4 gap-4 text-center">
            {[{v:"48",l:"Markets"},{v:"6d",l:"Remaining"},{v:"12,481",l:"Participants"},{v:"Sponsor",l:"Prize pool"}].map(s=><div key={s.l}><div className="text-xl font-bold font-mono text-neon">{s.v}</div><div className="text-[10px] text-muted-foreground mt-1">{s.l}</div></div>)}
          </div>
          <div className="mt-4 text-xs text-muted-foreground text-center">Top 10% earn rewards. Weekly reset.</div>
        </div>
      </DocSection>

      <DocSection id="seasons-schedule" title="Seasons & Schedule">
        <div className="space-y-3">
          {[
            { season: "Earnings Season Sprint", timing: "Quarterly (Jan, Apr, Jul, Oct)", theme: "Company earnings reports" },
            { season: "Product Event Challenge", timing: "During major tech events", theme: "Product announcements" },
            { season: "M&A Watch", timing: "Monthly", theme: "Acquisition and merger activity" },
            { season: "Year-End Marathon", timing: "December", theme: "Year-end milestones" },
          ].map(s=><div key={s.season} className="bg-surface border border-border rounded-xl p-4 flex items-center justify-between"><div><h5 className="text-sm font-semibold">{s.season}</h5><p className="text-xs text-muted-foreground">{s.theme}</p></div><span className="text-[10px] font-mono text-muted-foreground">{s.timing}</span></div>)}
        </div>
      </DocSection>

      <DocSection id="rewards-prizes" title="Rewards & Prizes">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { title: "XP Points", desc: "Earned through activity and correct forecasts." },
            { title: "Exclusive Badges", desc: "Achievement badges. Some are seasonal and never return." },
            { title: "Profile Cosmetics", desc: "Custom borders, colors and effects." },
            { title: "Sponsor Prizes", desc: "Digital rewards, merchandise or tokens." },
            { title: "Featured Analyst", desc: "Featured on homepage and category pages." },
            { title: "Private Competitions", desc: "Access to invite-only events." },
          ].map(r=><DocCard key={r.title} title={r.title} desc={r.desc} />)}
        </div>
        <Callout type="warning">
          Sponsor prizes are governed by published eligibility rules. Prizes are not guaranteed and depend on sponsor participation.
        </Callout>
      </DocSection>
    </>
  )
}
