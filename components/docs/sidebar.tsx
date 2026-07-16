"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, BookOpen, Target, Zap, Trophy, Users, BarChart3, Shield, HelpCircle, Settings, Star, TrendingUp, Layers, FileText, MessageSquare, Gift } from "lucide-react"
import { EarningsLogo } from "@/components/earnings-logo"

type Section = {
  icon: React.ReactNode
  title: string
  items: { label: string; href: string }[]
}

const sections: Section[] = [
  {
    icon: <BookOpen className="w-4 h-4" />,
    title: "Getting Started",
    items: [
      { label: "Overview", href: "/docs#overview" },
      { label: "Earnings.fun 101", href: "/docs#earningsfun-101" },
      { label: "Quickstart", href: "/docs#quickstart" },
    ],
  },
  {
    icon: <Layers className="w-4 h-4" />,
    title: "Core Concepts",
    items: [
      { label: "Markets & Events", href: "/docs#markets-events" },
      { label: "Forecasting Mechanics", href: "/docs#forecasting-mechanics" },
      { label: "Confidence & Reasoning", href: "/docs#confidence-reasoning" },
      { label: "Market Resolution", href: "/docs#market-resolution" },
      { label: "Points & XP", href: "/docs#points-xp" },
    ],
  },
  {
    icon: <Target className="w-4 h-4" />,
    title: "Reputation",
    items: [
      { label: "Forecast Score", href: "/docs#forecast-score" },
      { label: "Accuracy & Calibration", href: "/docs#accuracy-calibration" },
      { label: "Leaderboards", href: "/docs#leaderboards" },
      { label: "Badges & Achievements", href: "/docs#badges-achievements" },
    ],
  },
  {
    icon: <Trophy className="w-4 h-4" />,
    title: "Competitions",
    items: [
      { label: "How Competitions Work", href: "/docs#how-competitions-work" },
      { label: "Seasons & Schedule", href: "/docs#seasons-schedule" },
      { label: "Rewards & Prizes", href: "/docs#rewards-prizes" },
    ],
  },
  {
    icon: <Users className="w-4 h-4" />,
    title: "Social Features",
    items: [
      { label: "Following Forecasters", href: "/docs#following-forecasters" },
      { label: "Feed & Reasoning", href: "/docs#feed-reasoning" },
      { label: "Community", href: "/docs#community" },
    ],
  },
  {
    icon: <Star className="w-4 h-4" />,
    title: "For Creators",
    items: [
      { label: "Creating Markets", href: "/docs#creating-markets" },
      { label: "Hosting Leagues", href: "/docs#hosting-leagues" },
      { label: "Sponsor Integration", href: "/docs#sponsor-integration" },
    ],
  },
  {
    icon: <HelpCircle className="w-4 h-4" />,
    title: "Resources",
    items: [
      { label: "FAQ", href: "/docs#faq" },
      { label: "Glossary", href: "/docs#glossary" },
    ],
  },
]

export function DocsSidebar() {
  const pathname = usePathname()
  const [expanded, setExpanded] = useState<Record<string, boolean>>(
    Object.fromEntries(sections.map((s) => [s.title, true]))
  )

  const toggle = (title: string) =>
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }))

  return (
    <aside className="hidden lg:block w-64 shrink-0 border-r border-border h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
      <div className="px-6 py-6">
        {/* Brand header */}
        <Link href="/" className="flex items-center gap-2.5 mb-8">
          <EarningsLogo className="w-6 h-6 text-neon" />
          <span className="text-sm font-semibold tracking-tight">
            Earnings<span className="text-neon">.fun</span>
          </span>
        </Link>

        {/* Search placeholder */}
        <div className="mb-6">
          <div className="w-full px-3 py-2 bg-surface border border-border rounded-lg text-xs text-muted-foreground font-mono cursor-not-allowed">
            Search docs...
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {sections.map((section) => (
            <div key={section.title}>
              <button
                onClick={() => toggle(section.title)}
                className="w-full flex items-center gap-2 px-2 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors rounded-md"
              >
                <span className="text-neon/70">{section.icon}</span>
                <span className="flex-1 text-left">{section.title}</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${
                    expanded[section.title] ? "rotate-0" : "-rotate-90"
                  }`}
                />
              </button>
              {expanded[section.title] && (
                <div className="ml-4 mt-0.5 mb-2 space-y-0.5 border-l border-border/50 pl-3">
                  {section.items.map((item) => {
                    const isActive = pathname + (item.href.includes("#") ? window.location.hash : "") === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-2 py-1 text-xs rounded-md transition-colors ${
                          isActive
                            ? "text-neon bg-neon/5 font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Bottom links */}
        <div className="mt-8 pt-6 border-t border-border space-y-2">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
          >
            <TrendingUp className="w-3.5 h-3.5" />
            Back to app
          </Link>
          <a
            href="https://github.com/0xdblok/earnings-fun"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
          >
            <FileText className="w-3.5 h-3.5" />
            GitHub
          </a>
        </div>
      </div>
    </aside>
  )
}
