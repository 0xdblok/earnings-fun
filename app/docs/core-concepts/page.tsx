import { PageHeader, DocSection, SubSection, DocTable, DocCard, Callout } from "@/components/docs/shared"

export default function CoreConcepts() {
  return (
    <>
      <PageHeader
        title="Core Concepts"
        desc="Markets, forecasting mechanics, confidence, resolution and points."
      />

      <DocSection id="markets-events" title="Markets & Events">
        <SubSection title="Market structure">
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Every market on Earnings.fun is a binary or range-based question about a specific future company event. Markets are created with a clear question, two possible outcomes, a deadline, and published resolution criteria.
          </p>
        </SubSection>
        <SubSection title="Market lifecycle">
          <div className="space-y-3">
            {[
              { label: "Open", desc: "Live and accepting forecasts. Anyone can participate.", color: "bg-positive" },
              { label: "Closing soon", desc: "Less than 24 hours remain.", color: "bg-warning" },
              { label: "Closed", desc: "No more forecasts accepted. Pending resolution.", color: "bg-muted" },
              { label: "Resolved", desc: "Outcome determined. Forecasts scored.", color: "bg-neon" },
              { label: "Voided", desc: "Resolution criteria could not be met. No score impact.", color: "bg-negative" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full ${s.color} shrink-0`} />
                <div><span className="text-sm font-medium">{s.label}</span><span className="text-xs text-muted-foreground ml-2">{s.desc}</span></div>
              </div>
            ))}
          </div>
        </SubSection>
        <SubSection title="Market categories">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Earnings", count: "128", desc: "Revenue, EPS, margins and guidance" },
              { name: "Product Launches", count: "87", desc: "Hardware, software and features" },
              { name: "Price Milestones", count: "96", desc: "Stock thresholds and market-cap" },
              { name: "Company Performance", count: "74", desc: "Deliveries, growth and KPIs" },
              { name: "M&A", count: "43", desc: "Acquisitions and mergers" },
              { name: "Leadership", count: "31", desc: "CEO, CFO and board changes" },
              { name: "Technology", count: "52", desc: "AI models, R&D, patents" },
              { name: "Regulatory", count: "29", desc: "Antitrust, approvals, policy" },
            ].map((c) => (
              <div key={c.name} className="bg-surface border border-border rounded-xl p-4 flex items-center justify-between">
                <div><h5 className="text-sm font-semibold">{c.name}</h5><p className="text-[11px] text-muted-foreground">{c.desc}</p></div>
                <span className="text-xs font-mono text-neon shrink-0 ml-4">{c.count}</span>
              </div>
            ))}
          </div>
        </SubSection>
      </DocSection>

      <DocSection id="forecasting-mechanics" title="Forecasting Mechanics">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Making a forecast requires three inputs: <strong className="text-foreground">outcome</strong>, <strong className="text-foreground">confidence level</strong> (50%-99%), and <strong className="text-foreground">written reasoning</strong>.
        </p>
        <div className="bg-surface border border-border rounded-2xl p-6 my-4">
          <h4 className="font-semibold text-sm mb-4">Example forecast flow</h4>
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">1. Pick a market</span>
              <p className="text-sm mt-1"><span className="px-2 py-0.5 text-[10px] font-bold font-mono bg-forest/50 text-neon rounded">HOOD</span> Will Robinhood beat quarterly revenue expectations?</p>
            </div>
            <div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">2. Choose outcome</span>
              <div className="flex gap-2 mt-1">
                <span className="px-3 py-1.5 text-xs font-semibold bg-positive/20 text-positive border border-positive/30 rounded-lg">YES - Beat</span>
                <span className="px-3 py-1.5 text-xs text-muted-foreground border border-border rounded-lg">NO - Miss</span>
              </div>
            </div>
            <div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">3. Set confidence</span>
              <div className="flex items-center gap-3 mt-1">
                <div className="flex-1 h-1.5 bg-surface-secondary rounded-full overflow-hidden"><div className="h-full w-[72%] bg-gradient-to-r from-positive to-neon rounded-full" /></div>
                <span className="text-sm font-bold font-mono text-neon">72%</span>
              </div>
            </div>
            <div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">4. Write reasoning</span>
              <p className="text-sm text-muted-foreground mt-1 italic pl-4 border-l-2 border-neon/30">&ldquo;Crypto trading volume spiked 40% QoQ. Options revenue is compounding.&rdquo;</p>
            </div>
          </div>
        </div>
        <Callout type="tip">
          <strong>You can update your forecast</strong> at any time before the market closes. Only your final position counts.
        </Callout>
      </DocSection>

      <DocSection id="confidence-reasoning" title="Confidence & Reasoning">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface border border-border rounded-2xl p-6">
            <h4 className="font-semibold mb-3">Confidence Scale</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between"><span>50%</span><span>Coin flip - no conviction</span></div>
              <div className="flex justify-between"><span>60-70%</span><span>Lean - directional view</span></div>
              <div className="flex justify-between"><span>75-85%</span><span>Strong - high conviction</span></div>
              <div className="flex justify-between"><span>90-99%</span><span>Certain - near certainty</span></div>
            </div>
            <Callout type="warning">
              High confidence wrong answers are penalized more heavily in calibration scoring.
            </Callout>
          </div>
          <div className="bg-surface border border-border rounded-2xl p-6">
            <h4 className="font-semibold mb-3">Reasoning Guidelines</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>&bull; State your thesis in 1-3 sentences</li>
              <li>&bull; Cite specific evidence (sources, data)</li>
              <li>&bull; Mention key catalysts and risks</li>
              <li>&bull; Tag relevant factors</li>
              <li>&bull; Quality reasoning earns reputation</li>
            </ul>
          </div>
        </div>
      </DocSection>

      <DocSection id="market-resolution" title="Market Resolution">
        <SubSection title="Resolution sources">
          <p className="text-sm text-muted-foreground leading-relaxed">Each market declares its resolution source before opening:</p>
          <ul className="space-y-1 text-sm text-muted-foreground mt-3">
            <li>&bull; SEC filings (10-Q, 10-K, 8-K)</li>
            <li>&bull; Official company press releases</li>
            <li>&bull; Earnings call transcripts</li>
            <li>&bull; Regulatory body announcements</li>
            <li>&bull; Public financial data (closing prices, delivery reports)</li>
          </ul>
        </SubSection>
        <DocTable
          headers={["Outcome", "Effect on your score"]}
          rows={[
            ["Correct forecast", "XP awarded. Accuracy ↑. Calibration adjusts."],
            ["Incorrect forecast", "No XP penalty. Accuracy ↓. Forecast stays visible."],
            ["Voided market", "No impact. Market clearly marked as voided."],
          ]}
        />
      </DocSection>

      <DocSection id="points-xp" title="Points & XP">
        <DocTable
          headers={["Action", "XP earned", "Notes"]}
          rows={[
            ["Make a forecast", "5 XP", "Once per market"],
            ["Correct (50-65% confidence)", "10-25 XP", "Modest reward"],
            ["Correct (66-85% confidence)", "25-50 XP", "Scaling reward"],
            ["Correct (86-99% confidence)", "50-75 XP", "Maximum reward"],
            ["Publish reasoning with sources", "+10 XP", "Bonus"],
            ["Weekly streak maintained", "+15 XP/wk", "One forecast/week minimum"],
            ["Top 10% in competition", "50-200 XP", "Varies by competition size"],
            ["Earn a category badge", "100 XP", "One-time per badge"],
          ]}
        />
      </DocSection>
    </>
  )
}
