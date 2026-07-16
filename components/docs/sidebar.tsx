"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, BookOpen, Target, Zap, Trophy, Users, BarChart3, Shield, HelpCircle, Settings, Star, TrendingUp, Layers, FileText, MessageSquare, Gift, BookMarked, BookOpenCheck } from "lucide-react"
import { EarningsLogo } from "@/components/earnings-logo"

type NavSection = {
  icon: React.ReactNode
  title: string
  href?: string
  items?: { label: string; href: string; badge?: string }[]
}

const navSections: NavSection[] = [
  {
    icon: <BookOpen className="w-4 h-4" />,
    title: "Overview",
    href: "/docs",
  },
  {
    icon: <Zap className="w-4 h-4" />,
    title: "Getting Started",
    href: "/docs/getting-started",
    items: [
      { label: "Quickstart", href: "/docs/getting-started#quickstart" },
      { label: "Earnings.fun 101", href: "/docs/getting-started#earningsfun-101" },
    ],
  },
  {
    icon: <Layers className="w-4 h-4" />,
    title: "Core Concepts",
    href: "/docs/core-concepts",
    items: [
      { label: "Markets & Events", href: "/docs/core-concepts#markets-events" },
      { label: "Forecasting Mechanics", href: "/docs/core-concepts#forecasting-mechanics" },
      { label: "Confidence & Reasoning", href: "/docs/core-concepts#confidence-reasoning" },
      { label: "Market Resolution", href: "/docs/core-concepts#market-resolution" },
      { label: "Points & XP", href: "/docs/core-concepts#points-xp" },
    ],
  },
  {
    icon: <Target className="w-4 h-4" />,
    title: "Reputation",
    href: "/docs/reputation",
    items: [
      { label: "Forecast Score", href: "/docs/reputation#forecast-score" },
      { label: "Accuracy & Calibration", href: "/docs/reputation#accuracy-calibration" },
      { label: "Leaderboards", href: "/docs/reputation#leaderboards" },
      { label: "Badges & Achievements", href: "/docs/reputation#badges-achievements" },
    ],
  },
  {
    icon: <Trophy className="w-4 h-4" />,
    title: "Competitions",
    href: "/docs/competitions",
    items: [
      { label: "How Competitions Work", href: "/docs/competitions#how-competitions-work" },
      { label: "Seasons & Schedule", href: "/docs/competitions#seasons-schedule" },
      { label: "Rewards & Prizes", href: "/docs/competitions#rewards-prizes" },
    ],
  },
  {
    icon: <MessageSquare className="w-4 h-4" />,
    title: "Social Features",
    href: "/docs/social",
  },
  {
    icon: <Star className="w-4 h-4" />,
    title: "For Creators",
    href: "/docs/creators",
    items: [
      { label: "Creating Markets", href: "/docs/creators#creating-markets" },
      { label: "Hosting Leagues", href: "/docs/creators#hosting-leagues" },
      { label: "Sponsor Integration", href: "/docs/creators#sponsor-integration" },
    ],
  },
  {
    icon: <HelpCircle className="w-4 h-4" />,
    title: "FAQ",
    href: "/docs/faq",
  },
  {
    icon: <BookMarked className="w-4 h-4" />,
    title: "Glossary",
    href: "/docs/glossary",
  },
]

export function DocsSidebar() {
  const pathname = usePathname()
  const [expanded, setExpanded] = useState<Record<string, boolean>>(
    Object.fromEntries(
      navSections
        .filter((s) => s.items)
        .map((s) => [s.title, true])
    )
  )

  const toggle = (title: string) =>
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }))

  return (
    <aside className="hidden lg:block w-64 shrink-0 border-r border-border h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
      <div className="px-6 py-6">
        <Link href="/" className="flex items-center gap-2.5 mb-8">
          <EarningsLogo className="w-6 h-6 text-neon" />
          <span className="text-sm font-semibold tracking-tight">
            Earnings<span className="text-neon">.fun</span>
          </span>
        </Link>

        <div className="mb-6">
          <div className="w-full px-3 py-2 bg-surface border border-border rounded-lg text-xs text-muted-foreground font-mono cursor-not-allowed select-none">
            Search docs...
          </div>
        </div>

        <nav className="space-y-1">
          {navSections.map((section) => {
            const isActive = section.href
              ? pathname === section.href || (section.href !== "/docs" && pathname.startsWith(section.href))
              : false
            const hasItems = section.items && section.items.length > 0

            return (
              <div key={section.title}>
                {hasItems ? (
                  <>
                    <button
                      onClick={() => toggle(section.title)}
                      className={`w-full flex items-center gap-2 px-2 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                        isActive
                          ? "text-neon"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className={isActive ? "text-neon" : "text-neon/70"}>{section.icon}</span>
                      <Link href={section.href!} className="flex-1 text-left hover:underline">
                        {section.title}
                      </Link>
                      <ChevronDown
                        className={`w-3 h-3 transition-transform ${
                          expanded[section.title] ? "rotate-0" : "-rotate-90"
                        }`}
                      />
                    </button>
                    {expanded[section.title] && (
                      <div className="ml-4 mt-0.5 mb-2 space-y-0.5 border-l border-border/50 pl-3">
                        {section.items!.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`block px-2 py-1 text-xs rounded-md transition-colors ${
                              pathname === item.href || (typeof window !== "undefined" && pathname + window.location.hash === item.href)
                                ? "text-neon bg-neon/5 font-medium"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={section.href!}
                    className={`w-full flex items-center gap-2 px-2 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                      isActive
                        ? "text-neon"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className={isActive ? "text-neon" : "text-neon/70"}>{section.icon}</span>
                    <span>{section.title}</span>
                  </Link>
                )}
              </div>
            )
          })}
        </nav>

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
