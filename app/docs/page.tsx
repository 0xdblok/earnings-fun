import Link from "next/link"
import { ArrowRight, Target, BarChart3, Trophy, BookOpen, Zap } from "lucide-react"
import { PageHeader, DocTable, DocCard, Callout } from "@/components/docs/shared"

export default function DocsOverview() {
  return (
    <>
      <PageHeader
        title="Earnings.fun Protocol"
        desc="A social forecasting game for company events. Forecast earnings, product launches, acquisitions and market milestones. Build a verifiable track record without risking real money."
      />

      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
        Earnings.fun is a <strong className="text-foreground">points-based social forecasting game</strong> centered around company events, financial markets and business announcements. Unlike prediction markets that involve real-money wagering, Earnings.fun uses points, reputation and sponsor-funded prizes as incentives.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
        The core loop is simple: <strong className="text-foreground">forecast → reason → resolve → rank</strong>. You predict the outcome of a future business event, explain your reasoning, and when the event occurs your prediction is scored. Over time, your accuracy, calibration and consistency determine your public reputation.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
        <DocCard icon={<Target className="w-5 h-5" />} title="Forecast" desc="Choose an event, pick an outcome, set your confidence." />
        <DocCard icon={<BarChart3 className="w-5 h-5" />} title="Prove it" desc="Publish reasoning. Build a verifiable track record." />
        <DocCard icon={<Trophy className="w-5 h-5" />} title="Compete" desc="Climb leaderboards, earn XP, win sponsor prizes." />
      </div>

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

      <Callout type="info">
        <strong>No real-money wagering.</strong> Earnings.fun does not involve real-money betting. You compete for XP, badges, reputation and sponsor-funded prizes. Your track record is the only thing at stake.
      </Callout>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { icon: <Zap className="w-4 h-4" />, title: "Getting Started", desc: "Quickstart guide and core concepts.", href: "/docs/getting-started" },
          { icon: <BookOpen className="w-4 h-4" />, title: "Core Concepts", desc: "Markets, forecasting, resolution and points.", href: "/docs/core-concepts" },
          { icon: <Target className="w-4 h-4" />, title: "Reputation System", desc: "Scores, accuracy, calibration and badges.", href: "/docs/reputation" },
          { icon: <Trophy className="w-4 h-4" />, title: "Competitions", desc: "Seasons, leaderboards and rewards.", href: "/docs/competitions" },
        ].map((card) => (
          <Link key={card.title} href={card.href} className="bg-surface border border-border rounded-2xl p-5 hover:border-neon/30 transition-all group">
            <div className="text-neon mb-3">{card.icon}</div>
            <h3 className="font-semibold text-sm mb-1 group-hover:text-neon transition-colors">{card.title}</h3>
            <p className="text-xs text-muted-foreground">{card.desc}</p>
            <ArrowRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-neon group-hover:translate-x-1 transition-all mt-3" />
          </Link>
        ))}
      </div>
    </>
  )
}
