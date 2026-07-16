import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Zap, Target, Trophy, Users, BarChart3, Shield, HelpCircle } from "lucide-react"
import { EarningsLogo } from "@/components/earnings-logo"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"

export const metadata: Metadata = {
  title: "Docs — Earnings.fun",
  description: "Learn how Earnings.fun works. Forecasting mechanics, reputation scoring, competitions, and more.",
}

export default function DocsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-28 bg-background">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          {/* Header */}
          <div className="mb-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Earnings.fun
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <EarningsLogo className="w-10 h-10 text-neon" />
              <div>
                <h1 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em]">
                  Documentation
                </h1>
                <p className="text-muted-foreground mt-1">
                  Everything you need to know about forecasting on Earnings.fun.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            {/* Sidebar */}
            <nav className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-24 flex flex-col gap-2">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-2">
                  Contents
                </span>
                {[
                  "Overview",
                  "Getting Started",
                  "Making Forecasts",
                  "Confidence & Reasoning",
                  "Market Resolution",
                  "Reputation System",
                  "Leaderboards",
                  "Competitions",
                  "Forecast Categories",
                  "For Creators",
                  "Points & XP",
                  "FAQ",
                ].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+&?\s*/g, "-").replace(/\//g, "")}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </nav>

            {/* Content */}
            <div className="lg:col-span-3 space-y-20">
              {/* Overview */}
              <section id="overview">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Earnings.fun is a <strong className="text-foreground">social forecasting game</strong> centered around
                  company events, financial markets and business announcements. Users predict outcomes related to quarterly
                  earnings, product launches, acquisitions, CEO changes, stock-price milestones and more.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The platform is <strong className="text-foreground">points-based</strong>, not real-money gambling.
                  Your success is measured by your public track record — a composite score reflecting accuracy,
                  confidence calibration and consistency over time.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  {[
                    { icon: <Target className="w-5 h-5" />, title: "Forecast", desc: "Choose an event, pick an outcome, set your confidence." },
                    { icon: <BarChart3 className="w-5 h-5" />, title: "Prove it", desc: "Publish reasoning. Build a verifiable track record." },
                    { icon: <Trophy className="w-5 h-5" />, title: "Compete", desc: "Climb leaderboards, earn XP, win sponsor prizes." },
                  ].map((item) => (
                    <div key={item.title} className="bg-surface border border-border rounded-2xl p-6">
                      <div className="text-neon mb-3">{item.icon}</div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Getting Started */}
              <section id="getting-started">
                <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
                <div className="space-y-6">
                  <Step num="1" title="Create your account">
                    Sign up with email or connect a wallet. Your profile is your public forecasting identity — choose
                    a handle that represents you in the community.
                  </Step>
                  <Step num="2" title="Browse live markets">
                    Explore open forecasts across categories: Earnings, Product Launches, M&A, Leadership, Price
                    Milestones and more. Each market shows the current community probability, participant count
                    and deadline.
                  </Step>
                  <Step num="3" title="Make your first forecast">
                    Pick a market, select your outcome (Yes/No, Over/Under, etc.) and set a confidence percentage
                    between 50% and 99%. The higher your confidence, the more conviction you&apos;re signaling.
                  </Step>
                  <Step num="4" title="Explain your reasoning">
                    Write a brief thesis explaining your forecast. Quality reasoning earns more respect — and
                    higher-quality scores when your forecast resolves.
                  </Step>
                  <Step num="5" title="Track your performance">
                    Your profile tracks every resolved forecast. Accuracy, calibration and consistency scores
                    update automatically as markets close.
                  </Step>
                </div>
              </section>

              {/* Making Forecasts */}
              <section id="making-forecasts">
                <h2 className="text-2xl font-semibold mb-4">Making Forecasts</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Each market on Earnings.fun is a binary or range question about a future company event.
                  You forecast the outcome and assign a confidence level.
                </p>
                <div className="bg-surface border border-border rounded-2xl p-6 mb-6">
                  <h3 className="font-semibold mb-3">Example market</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Question</span>
                      <p className="text-foreground mt-0.5">
                        Will Robinhood beat quarterly revenue expectations?
                      </p>
                    </div>
                    <div className="flex gap-6">
                      <div>
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Yes</span>
                        <p className="text-positive font-semibold font-mono mt-0.5">67% community</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">No</span>
                        <p className="text-muted-foreground font-mono mt-0.5">33% community</p>
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Deadline</span>
                      <p className="text-muted-foreground font-mono mt-0.5">Closes in 2d 14h</p>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-neon shrink-0 mt-1">•</span>
                    <span>Forecasts can be updated until the market closes. Your final position is what counts.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neon shrink-0 mt-1">•</span>
                    <span>All forecasts are public. The community sees what you predicted, your confidence level, and your reasoning.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neon shrink-0 mt-1">•</span>
                    <span>You can follow other forecasters to see their activity in your feed.</span>
                  </li>
                </ul>
              </section>

              {/* Confidence & Reasoning */}
              <section id="confidence--reasoning">
                <h2 className="text-2xl font-semibold mb-4">Confidence &amp; Reasoning</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Your confidence percentage and written reasoning are the two most important inputs in every forecast.
                  Together, they determine the quality of your prediction.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-surface border border-border rounded-2xl p-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-neon" />
                      Confidence
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Scale: 50% (coin flip) to 99% (near certainty)</li>
                      <li>• Higher confidence = more points when right, but bigger penalty when wrong</li>
                      <li>• Well-calibrated confidence is rewarded over time</li>
                      <li>• A forecaster who says 60% and is right 60% of the time is perfectly calibrated</li>
                    </ul>
                  </div>
                  <div className="bg-surface border border-border rounded-2xl p-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-neon" />
                      Reasoning
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Publish a concise thesis with evidence, catalysts and risks</li>
                      <li>• Tag relevant factors: Margins, Guidance, Demand, Supply Chain, etc.</li>
                      <li>• Attach sources and charts to support your view</li>
                      <li>• Quality reasoning earns reputation even before the market resolves</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Market Resolution */}
              <section id="market-resolution">
                <h2 className="text-2xl font-semibold mb-4">Market Resolution</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Markets resolve according to published criteria. The resolution source is always declared
                  before the market opens — typically a public financial report, press release or regulatory filing.
                </p>
                <div className="bg-surface border border-border rounded-2xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-positive">Correct forecast</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• XP awarded based on confidence and market difficulty</li>
                        <li>• Accuracy score increases</li>
                        <li>• Calibration score adjusts</li>
                        <li>• Leaderboard rank may improve</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-negative">Incorrect forecast</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• No XP penalty (you keep your existing points)</li>
                        <li>• Accuracy score decreases</li>
                        <li>• Calibration score adjusts</li>
                        <li>• Your forecast remains visible on your profile</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-warning">Unresolved</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• If the resolution criteria cannot be met, the market is voided</li>
                        <li>• No impact on any participant&apos;s score</li>
                        <li>• Voided markets are clearly marked</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Reputation System */}
              <section id="reputation-system">
                <h2 className="text-2xl font-semibold mb-4">Reputation System</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Your reputation is the core currency on Earnings.fun. It is measured by a composite
                  <strong className="text-foreground"> Forecast Score</strong> that combines four dimensions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { label: "Forecast Score", value: "0–100", desc: "Composite score weighting accuracy, calibration and consistency." },
                    { label: "Accuracy", value: "0–100%", desc: "Percentage of resolved forecasts predicted correctly." },
                    { label: "Confidence Calibration", value: "0.0–1.0", desc: "Brier-based measure of how well confidence matches real outcomes." },
                    { label: "Consistency", value: "Streak (weeks)", desc: "Consecutive weeks with at least one forecast activity." },
                  ].map((m) => (
                    <div key={m.label} className="bg-surface border border-border rounded-2xl p-5">
                      <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                        {m.label}
                      </div>
                      <div className="text-xl font-bold font-mono text-neon mb-1">{m.value}</div>
                      <div className="text-xs text-muted-foreground">{m.desc}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-forest/20 border border-forest/30 rounded-2xl p-6">
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    <strong className="text-neon">Why calibration matters.</strong> A forecaster who consistently
                    picks &quot;Yes&quot; at 60% confidence and is right ~60% of the time is well-calibrated — even
                    if they sometimes get individual forecasts wrong. The system rewards honesty over bravado.
                  </p>
                </div>
              </section>

              {/* Leaderboards */}
              <section id="leaderboards">
                <h2 className="text-2xl font-semibold mb-4">Leaderboards</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Leaderboards rank forecasters by XP earned during a given period. There are multiple leaderboard
                  views.
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Global Weekly", desc: "All forecasters across all categories. Reset every Monday." },
                    { title: "Category-specific", desc: "Top forecasters in Earnings, M&A, Product Launches, etc." },
                    { title: "Competition", desc: "Leaderboard for each active competition or season." },
                    { title: "Following", desc: "See how the forecasters you follow are performing." },
                  ].map((lb) => (
                    <div key={lb.title} className="bg-surface border border-border rounded-xl p-4 flex items-start gap-4">
                      <Trophy className="w-5 h-5 text-neon shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm">{lb.title}</h4>
                        <p className="text-xs text-muted-foreground mt-0.5">{lb.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Competitions */}
              <section id="competitions">
                <h2 className="text-2xl font-semibold mb-4">Competitions</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Competitions are time-limited forecasting events. Each competition has a set of markets, a
                  deadline and a leaderboard. The best forecasters earn rewards.
                </p>
                <div className="bg-surface border border-border rounded-2xl p-6 mb-6">
                  <h3 className="font-semibold mb-4">Example: Earnings Season Sprint</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    {[
                      { value: "48", label: "Markets" },
                      { value: "6d", label: "Remaining" },
                      { value: "12,481", label: "Participants" },
                      { value: "Sponsor-funded", label: "Prize pool" },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <div className="text-lg font-bold font-mono text-neon">{stat.value}</div>
                        <div className="text-[10px] text-muted-foreground mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <h4 className="font-semibold mb-3 mt-6">Rewards</h4>
                <div className="flex flex-wrap gap-2">
                  {["XP points", "Exclusive badges", "Profile cosmetics", "Sponsor prizes", "Featured analyst placement", "Private competition access"].map(
                    (r) => (
                      <span key={r} className="px-3 py-1.5 text-xs bg-surface-secondary border border-border rounded-full text-muted-foreground">
                        {r}
                      </span>
                    )
                  )}
                </div>
              </section>

              {/* Forecast Categories */}
              <section id="forecast-categories">
                <h2 className="text-2xl font-semibold mb-4">Forecast Categories</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Markets are organized into categories. You can browse by category or filter the live feed.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { name: "Earnings", desc: "Revenue, EPS, margins and guidance forecasts.", count: 128 },
                    { name: "Product Launches", desc: "Hardware, software and feature announcements.", count: 87 },
                    { name: "Price Milestones", desc: "Stock price thresholds and market-cap targets.", count: 96 },
                    { name: "Company Performance", desc: "Delivery numbers, user growth and KPI targets.", count: 74 },
                    { name: "Technology", desc: "R&D breakthroughs, AI models and patents.", count: 52 },
                    { name: "Acquisitions", desc: "M&A activity, mergers and strategic purchases.", count: 43 },
                    { name: "Leadership", desc: "CEO, CFO and board appointments.", count: 31 },
                    { name: "Regulatory", desc: "Antitrust rulings, approvals and policy changes.", count: 29 },
                  ].map((cat) => (
                    <div key={cat.name} className="bg-surface border border-border rounded-xl p-4 flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-semibold">{cat.name}</h4>
                        <p className="text-xs text-muted-foreground mt-0.5">{cat.desc}</p>
                      </div>
                      <span className="text-xs font-mono text-neon shrink-0">{cat.count} open</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* For Creators */}
              <section id="for-creators">
                <h2 className="text-2xl font-semibold mb-4">For Creators</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Creators, analysts and communities can launch curated markets, host private competitions
                  and discover their sharpest members.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Curate market collections around a theme or sector",
                    "Host private or public forecasting leagues",
                    "Create custom competition pages with your branding",
                    "View community leaderboards and member stats",
                    "Integrate sponsor prizes and rewards",
                    "Generate shareable forecast cards for social media",
                  ].map((f) => (
                    <div key={f} className="flex items-start gap-3 bg-surface border border-border rounded-xl p-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon mt-2 shrink-0" />
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Points & XP */}
              <section id="points--xp">
                <h2 className="text-2xl font-semibold mb-4">Points &amp; XP</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  XP (Experience Points) is earned through forecasting activity and performance. It determines
                  your leaderboard rank and unlocks rewards.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-xs font-mono text-muted-foreground uppercase">Action</th>
                        <th className="text-right py-3 px-4 text-xs font-mono text-muted-foreground uppercase">XP earned</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono">
                      {[
                        ["Make a forecast", "5 XP"],
                        ["Correct forecast (low confidence)", "10–25 XP"],
                        ["Correct forecast (high confidence)", "25–75 XP"],
                        ["Publish reasoning with sources", "10 XP bonus"],
                        ["Weekly streak maintained", "15 XP per week"],
                        ["Top 10% in a competition", "50–200 XP bonus"],
                        ["Earn a category badge", "100 XP"],
                      ].map(([action, xp]) => (
                        <tr key={action} className="border-b border-border/50">
                          <td className="py-3 px-4">{action}</td>
                          <td className="py-3 px-4 text-right text-neon">{xp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq">
                <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "Is this real-money betting?",
                      a: "No. Earnings.fun is a points-based social forecasting game. There is no real-money wagering in the initial version. You compete for reputation, XP, badges and sponsor-funded prizes.",
                    },
                    {
                      q: "How are markets resolved?",
                      a: "Each market has published resolution criteria declared before it opens. We use official sources — SEC filings, press releases, earnings reports — to determine the outcome. All resolutions are transparent and can be appealed.",
                    },
                    {
                      q: "Can I change my forecast?",
                      a: "Yes, you can update your forecast (outcome, confidence and reasoning) at any time before the market closes. Only your final position counts toward your score.",
                    },
                    {
                      q: "What happens if the resolution criteria can't be met?",
                      a: "If a market cannot be resolved according to its published criteria (e.g. the event is cancelled or indefinitely delayed), the market is voided with no impact on any participant's score.",
                    },
                    {
                      q: "How is the Forecast Score calculated?",
                      a: "The Forecast Score is a composite metric weighting accuracy (correct predictions), confidence calibration (how well your confidence matches actual outcomes) and consistency (regular activity). The exact formula is public and auditable.",
                    },
                    {
                      q: "Are my forecasts private?",
                      a: "No. All forecasts are public by design. Your track record is your reputation — transparency builds credibility.",
                    },
                    {
                      q: "Can I create my own markets?",
                      a: "Market creation is available to approved creators and community moderators. Apply through the Creator program to get access.",
                    },
                    {
                      q: "What is the Robinhood Chain?",
                      a: "Earnings.fun is built for the Robinhood Chain ecosystem. The Robinhood Chain is a blockchain platform — Earnings.fun leverages it for transparent market resolution, immutable forecast records and sponsor-funded prize distribution.",
                    },
                  ].map((faq) => (
                    <details key={faq.q} className="group bg-surface border border-border rounded-2xl">
                      <summary className="px-6 py-4 cursor-pointer flex items-center justify-between font-semibold text-sm hover:text-neon transition-colors">
                        {faq.q}
                        <HelpCircle className="w-4 h-4 text-muted-foreground group-open:text-neon transition-colors shrink-0 ml-4" />
                      </summary>
                      <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

function Step({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="w-8 h-8 rounded-xl bg-forest/50 border border-forest/50 flex items-center justify-center text-sm font-bold font-mono text-neon shrink-0">
        {num}
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
      </div>
    </div>
  )
}
