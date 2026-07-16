import { PageHeader, DocSection, DocCard } from "@/components/docs/shared"

export default function SocialFeatures() {
  return (
    <>
      <PageHeader title="Social Features" desc="Following forecasters, the reasoning feed and community interactions." />

      <DocSection id="following-forecasters" title="Following Forecasters">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Follow other forecasters to see their activity in your personalized feed. Following is the primary way to curate your experience and learn from top performers.
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>&bull; <strong className="text-foreground">Discover:</strong> Browse the leaderboard or category pages to find strong forecasters</li>
          <li>&bull; <strong className="text-foreground">Feed:</strong> See forecasts, reasoning and results from people you follow</li>
          <li>&bull; <strong className="text-foreground">Filtered leaderboard:</strong> Compare yourself against your following circle</li>
          <li>&bull; <strong className="text-foreground">Notifications:</strong> Alerts when someone you follow makes a new forecast</li>
        </ul>
      </DocSection>

      <DocSection id="feed-reasoning" title="Feed & Reasoning">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          The social feed displays forecasts as editorial posts with the market question, confidence, thesis and evidence.
        </p>
        <div className="bg-surface border border-border rounded-2xl p-5 my-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-forest/50 flex items-center justify-center text-[10px] font-bold font-mono text-neon">JL</div>
            <div><div className="text-sm font-semibold">Jordan Lee</div><div className="text-xs text-muted-foreground font-mono">@marketmuse &middot; 4h ago</div></div>
          </div>
          <div className="mb-2">
            <span className="text-xs font-semibold font-mono text-neon bg-neon/5 px-2 py-0.5 rounded">NVDA closes above $190 after earnings</span>
            <span className="ml-2 text-sm font-semibold font-mono text-muted-foreground">Confidence: 72%</span>
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed italic border-l-2 border-neon/30 pl-4">&ldquo;Data-center demand remains strong, but the real catalyst is forward guidance. I expect margins to remain resilient.&rdquo;</p>
          <div className="flex items-center gap-4 mt-3 text-[10px] text-muted-foreground font-mono">
            <span>3 sources</span><span>2 charts</span><span>284 agree</span><span>47 disagree</span>
          </div>
        </div>
      </DocSection>

      <DocSection id="community" title="Community">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <DocCard title="Agree / Disagree" desc="React to forecasts. Disagreement is encouraged when backed by reasoning." />
          <DocCard title="Save" desc="Bookmark forecasts you want to revisit or study later." />
          <DocCard title="Share" desc="Share your forecast cards on social media." />
          <DocCard title="Report" desc="Flag low-quality content. Community moderation keeps the feed high-signal." />
        </div>
      </DocSection>
    </>
  )
}
