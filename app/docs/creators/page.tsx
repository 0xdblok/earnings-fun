import { PageHeader, DocSection, DocCard, Callout } from "@/components/docs/shared"
import { Shield, Trophy, Gift, Users } from "lucide-react"

export default function Creators() {
  return (
    <>
      <PageHeader title="For Creators" desc="Launch markets, host leagues and build your forecasting community." />

      <DocSection id="creating-markets" title="Creating Markets">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Market creation is available to approved creators and community moderators.
        </p>
        <div className="bg-surface border border-border rounded-2xl p-5 my-4">
          <h4 className="text-sm font-semibold mb-3">Market creation requirements</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>&bull; Clear, unambiguous question about a verifiable future event</li>
            <li>&bull; Exactly two possible outcomes (binary)</li>
            <li>&bull; Published resolution criteria with a specific source</li>
            <li>&bull; Defined deadline</li>
            <li>&bull; Assigned to one or more categories</li>
          </ul>
        </div>
      </DocSection>

      <DocSection id="hosting-leagues" title="Hosting Leagues">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Creators can host private or public forecasting leagues with curated markets.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Curate market collections around a theme",
            "Set custom competition dates and rules",
            "Choose public or invite-only access",
            "View community leaderboards",
            "Brand your league page",
            "Generate shareable links and cards",
          ].map(f=><div key={f} className="flex items-start gap-2 bg-surface border border-border rounded-xl p-4"><span className="w-1.5 h-1.5 rounded-full bg-neon mt-2 shrink-0" /><span className="text-sm text-muted-foreground">{f}</span></div>)}
        </div>
      </DocSection>

      <DocSection id="sponsor-integration" title="Sponsor Integration">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Integrate sponsor-funded prizes into leagues. Sponsors provide the reward pool — Earnings.fun handles distribution.
        </p>
        <Callout type="info">
          All sponsor prize distributions are transparent. Eligibility rules are published before the competition starts. Sponsor branding appears on the competition page.
        </Callout>
      </DocSection>
    </>
  )
}
