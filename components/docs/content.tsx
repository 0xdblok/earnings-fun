import { ArrowRight, Info, AlertTriangle, CheckCircle2 } from "lucide-react"

function Callout({ type, children }: { type: "info" | "warning" | "tip"; children: React.ReactNode }) {
  const styles = {
    info: "border-neon/30 bg-neon/5 text-foreground/90",
    warning: "border-warning/30 bg-warning/5 text-foreground/90",
    tip: "border-positive/30 bg-positive/5 text-foreground/90",
  }
  const icons = {
    info: <Info className="w-4 h-4 text-neon shrink-0 mt-0.5" />,
    warning: <AlertTriangle className="w-4 h-4 text-warning shrink-0 mt-0.5" />,
    tip: <CheckCircle2 className="w-4 h-4 text-positive shrink-0 mt-0.5" />,
  }
  return (
    <div className={`flex gap-3 border rounded-2xl px-5 py-4 my-6 text-sm ${styles[type]}`}>
      {icons[type]}
      <div className="leading-relaxed">{children}</div>
    </div>
  )
}

function Section({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-16 scroll-mt-24">
      <h2 className="text-2xl font-semibold tracking-[-0.02em] mb-1">{title}</h2>
      {subtitle && <p className="text-sm text-muted-foreground mb-6">{subtitle}</p>}
      <div className="space-y-4">{children}</div>
    </section>
  )
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      {children}
    </div>
  )
}

function DocTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            {headers.map((h) => (
              <th key={h} className="text-left py-3 px-4 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border/50">
              {row.map((cell, j) => (
                <td key={j} className={`py-3 px-4 ${j === 0 ? "font-medium" : "text-muted-foreground"}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Grid({ cols, children }: { cols?: number; children: React.ReactNode }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-${cols || 2} gap-4 my-4`}>
      {children}
    </div>
  )
}

function Card({ title, desc, icon }: { title: string; desc: string; icon?: React.ReactNode }) {
  return (
    <div className="bg-surface border border-border rounded-2xl p-5">
      {icon && <div className="text-neon mb-3">{icon}</div>}
      <h4 className="font-semibold text-sm mb-1">{title}</h4>
      <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  )
}

export function DocsContent() {
  return (
    <main className="flex-1 min-w-0">
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-12 md:py-16">
        {/* Page header */}
        <div className="mb-12">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
            Documentation
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] mb-3">
            Earnings.fun Protocol
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
            A social forecasting game for company events. Forecast earnings, product launches, acquisitions and market milestones. Build a verifiable track record without risking real money.
          </p>
        </div>

        {/* ─── GETTING STARTED ─── */}
        <Section id="overview" title="Overview" subtitle="What Earnings.fun is and how it works at a high level.">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Earnings.fun is a <strong className="text-foreground">points-based social forecasting game</strong> centered around company events, financial markets and business announcements. Unlike prediction markets that involve real-money wagering, Earnings.fun uses points, reputation and sponsor-funded prizes as incentives.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The core loop is simple: <strong className="text-foreground">forecast → reason → resolve → rank</strong>. You predict the outcome of a future business event, explain your reasoning, and when the event occurs your prediction is scored. Over time, your accuracy, calibration and consistency determine your public reputation.
          </p>
          <Card
            icon={<Info className="w-5 h-5" />}
            title="No real-money wagering"
            desc="Earnings.fun does not involve real-money betting. You compete for XP, badges, reputation and sponsor-funded prizes. Your track record is the only thing at stake."
          />

          <DocTable
            headers={["What you can forecast", "Examples"]}
            rows={[
              ["Quarterly earnings", "Will Robinhood beat revenue expectations?"],
              ["Product launches", "Will Apple announce smart glasses this year?"],
              ["Acquisitions (M&A)", "Will Salesforce announce an acquisition this quarter?"],
              ["CEO & leadership changes", "Will Disney name a new CEO before Q1 2027?"],
              ["Stock price milestones", "Will NVIDIA close above $190 after earnings?"],
              ["Delivery numbers", "Will Tesla deliver more than 500K vehicles this quarter?"],
              ["Regulatory decisions", "Will the EU approve the merger before year-end?"],
              ["Technology announcements", "Will OpenAI release a new model this month?"],
            ]}
          />
        </Section>

        <Section id="earningsfun-101" title="Earnings.fun 101" subtitle="The core concepts you need to understand.">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Markets", desc: "A market is a single yes/no or range question about a future event. Each market has a deadline, resolution criteria, and a community probability." },
              { title: "Forecasts", desc: "Your prediction on a market. Includes your chosen outcome, a confidence percentage (50–99%), and written reasoning." },
              { title: "Confidence", desc: "How sure you are. 50% = coin flip, 99% = near certainty. Higher confidence means bigger rewards when right but bigger calibration impact when wrong." },
              { title: "Resolution", desc: "When a market closes, an official source determines the outcome. Your forecast is scored correct or incorrect based on published criteria." },
              { title: "Forecast Score", desc: "Your composite reputation metric (0–100). Combines accuracy, confidence calibration, and consistency into one number." },
              { title: "XP", desc: "Experience Points earned through activity and correct forecasts. Determines leaderboard rank and unlocks badges." },
            ].map((c) => (
              <div key={c.title} className="bg-surface border border-border rounded-2xl p-5">
                <h4 className="font-semibold text-sm mb-1">{c.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="quickstart" title="Quickstart" subtitle="Start forecasting in under 2 minutes.">
          <div className="space-y-5">
            {[
              { step: "1", title: "Create your account", desc: "Sign up with email. Choose a handle — this is your public forecasting identity. Your profile is visible to the community." },
              { step: "2", title: "Browse live markets", desc: "Explore open forecasts across categories. Each market card shows the question, community probability, participant count and deadline." },
              { step: "3", title: "Make your first forecast", desc: "Pick a market, select your outcome and set your confidence level. The slider ranges from 50% to 99%." },
              { step: "4", title: "Publish your reasoning", desc: "Write a concise thesis. What evidence supports your view? What are the risks? Tag relevant factors like Margins, Guidance or Demand." },
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
        </Section>

        {/* ─── CORE CONCEPTS ─── */}
        <Section id="markets-events" title="Markets & Events" subtitle="Understanding the prediction lifecycle.">
          <SubSection title="Market structure">
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Every market on Earnings.fun is a binary or range-based question about a specific future company event. Markets are created with a clear question, two possible outcomes, a deadline, and published resolution criteria.
            </p>
          </SubSection>
          <SubSection title="Market lifecycle">
            <div className="space-y-3">
              {[
                { label: "Open", desc: "The market is live and accepting forecasts. Anyone can participate.", color: "bg-positive" },
                { label: "Closing soon", desc: "Less than 24 hours remain. The deadline is visible on the market card.", color: "bg-warning" },
                { label: "Closed", desc: "No more forecasts accepted. The market is pending resolution.", color: "bg-muted" },
                { label: "Resolved", desc: "The outcome is determined. Forecasts are scored and points are awarded.", color: "bg-neon" },
                { label: "Voided", desc: "Resolution criteria could not be met. No impact on scores.", color: "bg-negative" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${s.color} shrink-0`} />
                  <div>
                    <span className="text-sm font-medium">{s.label}</span>
                    <span className="text-xs text-muted-foreground ml-2">{s.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </SubSection>
          <SubSection title="Market categories">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: "Earnings", count: 128, desc: "Revenue, EPS, margins and guidance" },
                { name: "Product Launches", count: 87, desc: "Hardware, software and features" },
                { name: "Price Milestones", count: 96, desc: "Stock thresholds and market-cap" },
                { name: "Company Performance", count: 74, desc: "Deliveries, growth and KPIs" },
                { name: "M&A", count: 43, desc: "Acquisitions and mergers" },
                { name: "Leadership", count: 31, desc: "CEO, CFO and board changes" },
                { name: "Technology", count: 52, desc: "AI models, R&D, patents" },
                { name: "Regulatory", count: 29, desc: "Antitrust, approvals, policy" },
              ].map((c) => (
                <div key={c.name} className="bg-surface border border-border rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <h5 className="text-sm font-semibold">{c.name}</h5>
                    <p className="text-[11px] text-muted-foreground">{c.desc}</p>
                  </div>
                  <span className="text-xs font-mono text-neon shrink-0 ml-4">{c.count}</span>
                </div>
              ))}
            </div>
          </SubSection>
        </Section>

        <Section id="forecasting-mechanics" title="Forecasting Mechanics" subtitle="How to make a forecast and what each input means.">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Making a forecast requires three inputs: your <strong className="text-foreground">outcome</strong> (Yes/No, Over/Under, etc.), your <strong className="text-foreground">confidence level</strong> (50%–99%), and your <strong className="text-foreground">written reasoning</strong>.
          </p>

          <div className="bg-surface border border-border rounded-2xl p-6 my-4">
            <h4 className="font-semibold text-sm mb-4">Example forecast flow</h4>
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">1. Pick a market</span>
                <p className="text-sm mt-1">
                  <span className="px-2 py-0.5 text-[10px] font-bold font-mono bg-forest/50 text-neon rounded">HOOD</span>
                  {" "}Will Robinhood beat quarterly revenue expectations?
                </p>
              </div>
              <div>
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">2. Choose outcome</span>
                <div className="flex gap-2 mt-1">
                  <span className="px-3 py-1.5 text-xs font-semibold bg-positive/20 text-positive border border-positive/30 rounded-lg">YES — Beat</span>
                  <span className="px-3 py-1.5 text-xs text-muted-foreground border border-border rounded-lg">NO — Miss</span>
                </div>
              </div>
              <div>
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">3. Set confidence</span>
                <div className="flex items-center gap-3 mt-1">
                  <div className="flex-1 h-1.5 bg-surface-secondary rounded-full overflow-hidden">
                    <div className="h-full w-[72%] bg-gradient-to-r from-positive to-neon rounded-full" />
                  </div>
                  <span className="text-sm font-bold font-mono text-neon">72%</span>
                </div>
              </div>
              <div>
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">4. Write reasoning</span>
                <p className="text-sm text-muted-foreground mt-1 italic pl-4 border-l-2 border-neon/30">
                  &ldquo;Crypto trading volume spiked 40% QoQ. Options revenue is compounding. Analyst consensus is still lagging real-time data.&rdquo;
                </p>
              </div>
            </div>
          </div>

          <Callout type="tip">
            <strong>You can update your forecast at any time</strong> before the market closes. Only your final position counts. Use this to refine your prediction as new information emerges.
          </Callout>
        </Section>

        <Section id="confidence-reasoning" title="Confidence & Reasoning" subtitle="The two pillars of forecast quality.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface border border-border rounded-2xl p-6">
              <h4 className="font-semibold mb-3">Confidence Scale</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between"><span>50%</span><span>Coin flip — no conviction</span></div>
                <div className="flex justify-between"><span>60–70%</span><span>Lean — directional view</span></div>
                <div className="flex justify-between"><span>75–85%</span><span>Strong — high conviction</span></div>
                <div className="flex justify-between"><span>90–99%</span><span>Certain — near certainty</span></div>
              </div>
              <Callout type="warning">
                High confidence wrong answers are penalized more heavily in calibration scoring than low confidence wrong answers.
              </Callout>
            </div>
            <div className="bg-surface border border-border rounded-2xl p-6">
              <h4 className="font-semibold mb-3">Reasoning Guidelines</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• State your thesis in 1–3 sentences</li>
                <li>• Cite specific evidence (sources, data points)</li>
                <li>• Mention key catalysts and risks</li>
                <li>• Tag relevant factors (Margins, Demand, etc.)</li>
                <li>• Quality reasoning earns reputation even before resolution</li>
                <li>• Poor reasoning may reduce your visibility in feeds</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="market-resolution" title="Market Resolution" subtitle="How markets close and forecasts are scored.">
          <SubSection title="Resolution sources">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Each market declares its resolution source before opening. Common sources include:
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground mt-3">
              <li>• SEC filings (10-Q, 10-K, 8-K)</li>
              <li>• Official company press releases</li>
              <li>• Earnings call transcripts</li>
              <li>• Regulatory body announcements (FTC, EU Commission, etc.)</li>
              <li>• Public financial data (closing prices, delivery reports)</li>
            </ul>
          </SubSection>
          <SubSection title="Resolution outcomes">
            <DocTable
              headers={["Outcome", "Effect on your score"]}
              rows={[
                ["Correct forecast", "XP awarded. Accuracy ↑. Calibration adjusts. Rank may improve."],
                ["Incorrect forecast", "No XP penalty. Accuracy ↓. Calibration adjusts. Forecast stays visible."],
                ["Voided market", "No impact. Market clearly marked as voided. All forecasts preserved."],
              ]}
            />
          </SubSection>
          <Callout type="info">
            <strong>Transparency.</strong> All resolutions are public and can be appealed. Resolution criteria are fixed at market creation and cannot be changed retroactively.
          </Callout>
        </Section>

        <Section id="points-xp" title="Points & XP" subtitle="How experience points are earned.">
          <DocTable
            headers={["Action", "XP earned", "Notes"]}
            rows={[
              ["Make a forecast", "5 XP", "Awarded once per market"],
              ["Correct (low confidence 50–65%)", "10–25 XP", "Modest reward for modest conviction"],
              ["Correct (high confidence 66–85%)", "25–50 XP", "Scaling reward for conviction"],
              ["Correct (very high 86–99%)", "50–75 XP", "Maximum reward for strong conviction"],
              ["Publish reasoning with sources", "+10 XP", "Bonus for quality reasoning"],
              ["Weekly streak maintained", "+15 XP/wk", "One forecast per week minimum"],
              ["Top 10% in a competition", "50–200 XP", "Bonus varies by competition size"],
              ["Earn a category badge", "100 XP", "One-time per badge"],
            ]}
          />
        </Section>

        {/* ─── REPUTATION ─── */}
        <Section id="forecast-score" title="Forecast Score" subtitle="Your composite reputation metric.">
          <p className="text-sm text-muted-foreground leading-relaxed">
            The <strong className="text-foreground">Forecast Score</strong> is a number from 0 to 100 that represents your overall forecasting reputation. It is calculated from three components:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {[
              { title: "Accuracy", weight: "40%", desc: "How often your forecasts are correct. A 74% accuracy means you called 74 out of 100 resolved markets correctly." },
              { title: "Calibration", weight: "35%", desc: "How well your confidence matches real outcomes. If you say 60% and are right ~60% of the time, you are perfectly calibrated." },
              { title: "Consistency", weight: "25%", desc: "How regularly you participate. A longer streak of weekly activity increases your consistency score." },
            ].map((c) => (
              <div key={c.title} className="bg-surface border border-border rounded-2xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-sm">{c.title}</h5>
                  <span className="text-[10px] font-mono text-neon">{c.weight}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="accuracy-calibration" title="Accuracy & Calibration" subtitle="Understanding the difference and why both matter.">
          <Callout type="tip">
            <strong>Why calibration beats raw accuracy.</strong> A forecaster who picks &ldquo;Yes&rdquo; at 60% on every market and is right ~60% of the time is <em>perfectly calibrated</em> — even though their raw accuracy is only 60%. Another forecaster with 80% raw accuracy who always says 99% is actually poorly calibrated. The system rewards honesty.
          </Callout>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Calibration uses a <strong className="text-foreground">Brier score</strong>-based calculation. For each forecast, the squared difference between your confidence (as a probability 0.5–0.99) and the actual outcome (1 for correct, 0 for incorrect) is computed. Lower Brier scores = better calibration.
          </p>
        </Section>

        <Section id="leaderboards" title="Leaderboards" subtitle="How rankings work.">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Global Weekly", desc: "All forecasters across all categories. Resets every Monday at 00:00 UTC. Top 100 are displayed publicly." },
              { title: "Category-Specific", desc: "Separate leaderboards for Earnings, M&A, Product Launches, etc. Your specialty leaderboard is highlighted on your profile." },
              { title: "Competition", desc: "Dynamic leaderboard for each active competition. Only forecasts within the competition window count." },
              { title: "Following", desc: "Filter the leaderboard to only show forecasters you follow. Compare yourself against your curated circle." },
            ].map((lb) => (
              <div key={lb.title} className="bg-surface border border-border rounded-2xl p-5">
                <h4 className="font-semibold text-sm mb-1">{lb.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{lb.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="badges-achievements" title="Badges & Achievements" subtitle="Earn recognition for your forecasting skills.">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { badge: "🏆", title: "Top Earnings Forecaster", desc: "Finish #1 on the Earnings leaderboard for a week" },
              { badge: "🔥", title: "Hot Streak", desc: "10 consecutive correct forecasts" },
              { badge: "🎯", title: "Perfectly Calibrated", desc: "Brier score below 0.1 over 50+ forecasts" },
              { badge: "📈", title: "Rising Star", desc: "Top 5% Forecast Score improvement in 30 days" },
              { badge: "💯", title: "Century Club", desc: "100 resolved forecasts" },
              { badge: "👑", title: "Season Champion", desc: "Win a competition season" },
              { badge: "🧠", title: "Deep Dive", desc: "Publish reasoning with 3+ sources on 25 forecasts" },
              { badge: "🌐", title: "Polymath", desc: "Active in 5+ categories simultaneously" },
            ].map((b) => (
              <div key={b.title} className="bg-surface border border-border rounded-xl p-4 flex items-center gap-3">
                <span className="text-2xl">{b.badge}</span>
                <div>
                  <h5 className="text-sm font-semibold">{b.title}</h5>
                  <p className="text-[11px] text-muted-foreground">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ─── COMPETITIONS ─── */}
        <Section id="how-competitions-work" title="How Competitions Work" subtitle="Time-limited forecasting events with prizes.">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Competitions are themed forecasting events with a fixed set of markets and a defined time window. Each competition has its own leaderboard and reward pool.
          </p>
          <div className="bg-surface border border-border rounded-2xl p-6 my-4">
            <h4 className="font-semibold mb-4">Example: Earnings Season Sprint</h4>
            <div className="grid grid-cols-4 gap-4 text-center">
              {[
                { v: "48", l: "Markets" },
                { v: "6d", l: "Remaining" },
                { v: "12,481", l: "Participants" },
                { v: "Sponsor", l: "Prize pool" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-xl font-bold font-mono text-neon">{s.v}</div>
                  <div className="text-[10px] text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs text-muted-foreground text-center">
              Top 10% earn rewards. Weekly reset.
            </div>
          </div>
          <Callout type="info">
            Competition participation is optional. Your regular forecasts count toward your global stats regardless of whether you join competitions.
          </Callout>
        </Section>

        <Section id="seasons-schedule" title="Seasons & Schedule">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Competitions run on a seasonal calendar. Each season typically lasts 1–4 weeks and focuses on a specific theme.
          </p>
          <div className="space-y-3 mt-4">
            {[
              { season: "Earnings Season Sprint", timing: "Quarterly (Jan, Apr, Jul, Oct)", theme: "Company earnings reports" },
              { season: "Product Event Challenge", timing: "During major tech events (WWDC, CES, etc.)", theme: "Product announcements" },
              { season: "M&A Watch", timing: "Monthly", theme: "Acquisition and merger activity" },
              { season: "Year-End Marathon", timing: "December", theme: "Year-end milestones and annual reports" },
            ].map((s) => (
              <div key={s.season} className="bg-surface border border-border rounded-xl p-4 flex items-center justify-between">
                <div>
                  <h5 className="text-sm font-semibold">{s.season}</h5>
                  <p className="text-xs text-muted-foreground">{s.theme}</p>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground">{s.timing}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="rewards-prizes" title="Rewards & Prizes">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { title: "XP Points", desc: "Earned through activity and correct forecasts. The primary ranking metric." },
              { title: "Exclusive Badges", desc: "Achievement badges visible on your profile. Some are seasonal and never return." },
              { title: "Profile Cosmetics", desc: "Custom profile borders, colors and effects unlocked through achievements." },
              { title: "Sponsor Prizes", desc: "Funded by ecosystem sponsors. May include digital rewards, merchandise or tokens." },
              { title: "Featured Analyst", desc: "Top forecasters are featured on the homepage and in category pages." },
              { title: "Private Competitions", desc: "Access to invite-only forecasting events with higher stakes." },
            ].map((r) => (
              <div key={r.title} className="bg-surface border border-border rounded-xl p-4">
                <h5 className="text-sm font-semibold mb-1">{r.title}</h5>
                <p className="text-xs text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>
          <Callout type="warning">
            Sponsor prizes are governed by published eligibility rules. Prizes are not guaranteed and depend on sponsor participation. All prize distribution is transparent and auditable.
          </Callout>
        </Section>

        {/* ─── SOCIAL FEATURES ─── */}
        <Section id="following-forecasters" title="Following Forecasters">
          <p className="text-sm text-muted-foreground leading-relaxed">
            You can follow other forecasters to see their activity in your personalized feed. Following is the primary way to curate your experience and learn from top performers.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground mt-3">
            <li>• <strong className="text-foreground">Discover:</strong> Browse the leaderboard or category pages to find forecasters with strong track records</li>
            <li>• <strong className="text-foreground">Feed:</strong> See forecasts, reasoning and results from people you follow</li>
            <li>• <strong className="text-foreground">Filtered leaderboard:</strong> Compare yourself against your following circle</li>
            <li>• <strong className="text-foreground">Notifications:</strong> Get alerted when someone you follow makes a new forecast or publishes reasoning</li>
          </ul>
        </Section>

        <Section id="feed-reasoning" title="Feed & Reasoning">
          <p className="text-sm text-muted-foreground leading-relaxed">
            The social feed displays forecasts as editorial posts. Each post includes the market question, the forecaster&apos;s confidence, their written thesis, and supporting evidence (sources, charts).
          </p>
          <div className="bg-surface border border-border rounded-2xl p-5 my-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-forest/50 flex items-center justify-center text-[10px] font-bold font-mono text-neon">JL</div>
              <div>
                <div className="text-sm font-semibold">Jordan Lee</div>
                <div className="text-xs text-muted-foreground font-mono">@marketmuse · 4h ago</div>
              </div>
            </div>
            <div className="mb-2">
              <span className="text-xs font-semibold font-mono text-neon bg-neon/5 px-2 py-0.5 rounded">
                NVDA closes above $190 after earnings
              </span>
              <span className="ml-2 text-sm font-semibold font-mono text-muted-foreground">Confidence: 72%</span>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed italic border-l-2 border-neon/30 pl-4">
              &ldquo;Data-center demand remains strong, but the real catalyst is forward guidance. I expect margins to remain resilient despite supply constraints.&rdquo;
            </p>
            <div className="flex items-center gap-4 mt-3 text-[10px] text-muted-foreground font-mono">
              <span>3 sources</span>
              <span>2 charts</span>
              <span>284 agree</span>
              <span>47 disagree</span>
            </div>
          </div>
        </Section>

        <Section id="community" title="Community">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Earnings.fun is built around a community of market enthusiasts, financial creators and curious retail investors. The platform encourages constructive discussion and evidence-based forecasting.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {[
              { title: "Agree / Disagree", desc: "React to forecasts with agree or disagree. Disagreement is encouraged when backed by reasoning." },
              { title: "Save", desc: "Bookmark forecasts and reasoning you want to revisit or study later." },
              { title: "Share", desc: "Share your forecast cards on social media to build your public presence." },
              { title: "Report", desc: "Flag low-quality or spam content. Community moderation keeps the feed high-signal." },
            ].map((f) => (
              <div key={f.title} className="bg-surface border border-border rounded-xl p-4">
                <h5 className="text-sm font-semibold mb-1">{f.title}</h5>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ─── FOR CREATORS ─── */}
        <Section id="creating-markets" title="Creating Markets" subtitle="How approved creators can launch custom markets.">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Market creation is available to approved creators and community moderators. Creators can define the question, outcomes, deadline and resolution criteria.
          </p>
          <div className="bg-surface border border-border rounded-2xl p-5 my-4">
            <h4 className="text-sm font-semibold mb-3">Market creation requirements</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Clear, unambiguous question about a verifiable future event</li>
              <li>• Exactly two possible outcomes (binary)</li>
              <li>• Published resolution criteria with a specific source</li>
              <li>• Defined deadline (market closes at this time)</li>
              <li>• Assigned to one or more categories</li>
            </ul>
          </div>
        </Section>

        <Section id="hosting-leagues" title="Hosting Leagues">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Creators can host private or public forecasting leagues — custom competitions with a curated set of markets.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {[
              "Curate market collections around a theme",
              "Set custom competition dates and rules",
              "Choose public or invite-only access",
              "View community leaderboards",
              "Brand your league page",
              "Generate shareable links and cards",
            ].map((f) => (
              <div key={f} className="flex items-start gap-2 bg-surface border border-border rounded-xl p-4">
                <span className="w-1.5 h-1.5 rounded-full bg-neon mt-2 shrink-0" />
                <span className="text-sm text-muted-foreground">{f}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="sponsor-integration" title="Sponsor Integration">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Creators can integrate sponsor-funded prizes into their leagues. Sponsors provide the reward pool — Earnings.fun handles distribution based on published leaderboard results.
          </p>
          <Callout type="info">
            All sponsor prize distributions are transparent. Eligibility rules are published before the competition starts. Sponsor branding appears on the competition page.
          </Callout>
        </Section>

        {/* ─── RESOURCES ─── */}
        <Section id="faq" title="FAQ">
          <div className="space-y-3">
            {[
              { q: "Is this real-money betting?", a: "No. Earnings.fun is a points-based social forecasting game. There is no real-money wagering. You compete for reputation, XP, badges and sponsor-funded prizes." },
              { q: "How are markets resolved?", a: "Each market has published resolution criteria. We use official sources — SEC filings, press releases, earnings reports — to determine outcomes. All resolutions are transparent." },
              { q: "Can I change my forecast?", a: "Yes. You can update your forecast (outcome, confidence and reasoning) at any time before the market closes. Only your final position counts." },
              { q: "What happens if resolution criteria can't be met?", a: "The market is voided with no impact on any participant's score. Voided markets are clearly marked." },
              { q: "Are my forecasts private?", a: "No. All forecasts are public by design. Your track record is your reputation — transparency builds credibility." },
              { q: "How is the Forecast Score calculated?", a: "The Forecast Score is a weighted composite: 40% accuracy, 35% calibration (Brier score), 25% consistency. The formula is public." },
              { q: "Can I create my own markets?", a: "Market creation is available to approved creators. Apply through the Creator program." },
              { q: "What is the Robinhood Chain?", a: "Earnings.fun is built for the Robinhood Chain ecosystem — a blockchain platform. It is not officially affiliated with Robinhood Markets, Inc." },
            ].map((faq) => (
              <details key={faq.q} className="group bg-surface border border-border rounded-xl">
                <summary className="px-5 py-4 cursor-pointer font-medium text-sm hover:text-neon transition-colors">
                  {faq.q}
                </summary>
                <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </Section>

        <Section id="glossary" title="Glossary">
          <DocTable
            headers={["Term", "Definition"]}
            rows={[
              ["Market", "A single yes/no question about a future company event with a deadline and resolution criteria."],
              ["Forecast", "Your prediction on a market: outcome, confidence percentage and written reasoning."],
              ["Confidence", "A percentage (50–99%) representing how certain you are about your forecast."],
              ["Resolution", "The determination of a market's outcome using published criteria and official sources."],
              ["Forecast Score", "Composite reputation metric (0–100): 40% accuracy + 35% calibration + 25% consistency."],
              ["XP", "Experience Points. Earned through forecasting activity and performance."],
              ["Calibration", "How well your confidence percentages match actual outcomes. Measured by Brier score."],
              ["Brier Score", "A proper scoring rule measuring the accuracy of probabilistic predictions. Lower = better calibrated."],
              ["Streak", "Consecutive weeks with at least one forecast. Longer streaks increase consistency score."],
              ["Competition", "A time-limited forecasting event with a themed set of markets and a dedicated leaderboard."],
              ["Creator", "An approved user who can create markets and host private forecasting leagues."],
              ["Badge", "An achievement earned for reaching specific forecasting milestones or winning competitions."],
              ["Voided", "A market that could not be resolved according to its criteria. No score impact."],
            ]}
          />
        </Section>

        {/* End of docs */}
        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Can&apos;t find what you&apos;re looking for?{" "}
            <a href="#" className="text-neon hover:text-neon-bright transition-colors">
              Join our Discord
            </a>{" "}
            or{" "}
            <a href="#" className="text-neon hover:text-neon-bright transition-colors">
              open an issue on GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  )
}
