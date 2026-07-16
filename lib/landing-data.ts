// ─── Ticker Items ────────────────────────────────────────────────
export interface TickerItem {
  id: string
  ticker: string
  label: string
  probability: number
  change: number
}

export const tickerItems: TickerItem[] = [
  { id: "t1", ticker: "HOOD", label: "Q2 Earnings Beat", probability: 67, change: 8.4 },
  { id: "t2", ticker: "TSLA", label: "Deliveries > 500K", probability: 54, change: -2.1 },
  { id: "t3", ticker: "AAPL", label: "Smart Glasses '26", probability: 41, change: 5.8 },
  { id: "t4", ticker: "NVDA", label: "Close > $190", probability: 63, change: 2.3 },
  { id: "t5", ticker: "META", label: "Quest 4 Launch Q4", probability: 48, change: 12.1 },
  { id: "t6", ticker: "MSFT", label: "AI Revenue > $5B", probability: 71, change: -0.8 },
  { id: "t7", ticker: "AMZN", label: "AWS Growth > 18%", probability: 59, change: 3.5 },
  { id: "t8", ticker: "GOOGL", label: "Cloud Profitability", probability: 45, change: -4.2 },
  { id: "t9", ticker: "CRM", label: "CEO Change '26", probability: 22, change: 7.0 },
  { id: "t10", ticker: "COIN", label: "Q3 Volume > $200B", probability: 38, change: 15.3 },
]

// ─── Market Cards ─────────────────────────────────────────────────
export interface MarketCard {
  id: string
  ticker: string
  company: string
  category: Category
  question: string
  yesLabel: string
  noLabel: string
  probability: number
  change: number
  participants: number
  closesIn: string
  featured?: boolean
}

export type Category =
  | "Earnings"
  | "Company Performance"
  | "Product Launch"
  | "Price Milestone"
  | "M&A"
  | "Leadership"
  | "Regulatory"
  | "Technology"

export const featuredMarkets: MarketCard[] = [
  {
    id: "m1",
    ticker: "HOOD",
    company: "Robinhood",
    category: "Earnings",
    question: "Will Robinhood beat quarterly revenue expectations?",
    yesLabel: "Beat",
    noLabel: "Miss",
    probability: 67,
    change: 8.4,
    participants: 1842,
    closesIn: "2d 14h",
    featured: true,
  },
  {
    id: "m2",
    ticker: "TSLA",
    company: "Tesla",
    category: "Company Performance",
    question: "Will Tesla deliver more than 500K vehicles this quarter?",
    yesLabel: "Over",
    noLabel: "Under",
    probability: 54,
    change: -2.1,
    participants: 3251,
    closesIn: "18d 6h",
  },
  {
    id: "m3",
    ticker: "AAPL",
    company: "Apple",
    category: "Product Launch",
    question: "Will Apple announce smart glasses before year-end?",
    yesLabel: "Yes",
    noLabel: "No",
    probability: 41,
    change: 5.8,
    participants: 2103,
    closesIn: "174d",
  },
  {
    id: "m4",
    ticker: "NVDA",
    company: "NVIDIA",
    category: "Price Milestone",
    question: "Will NVIDIA close above $190 after earnings?",
    yesLabel: "Yes",
    noLabel: "No",
    probability: 63,
    change: 2.3,
    participants: 4712,
    closesIn: "9d 3h",
  },
  {
    id: "m5",
    ticker: "CRM",
    company: "Salesforce",
    category: "M&A",
    question: "Will Salesforce announce an acquisition this quarter?",
    yesLabel: "Yes",
    noLabel: "No",
    probability: 29,
    change: 4.1,
    participants: 1287,
    closesIn: "45d",
  },
  {
    id: "m6",
    ticker: "DIS",
    company: "Disney",
    category: "Leadership",
    question: "Will Disney name a new CEO before Q1 2027?",
    yesLabel: "Yes",
    noLabel: "No",
    probability: 36,
    change: -1.7,
    participants: 967,
    closesIn: "168d",
  },
]

// ─── Category Filters ─────────────────────────────────────────────
export const categoryFilters: Category[] = [
  "Trending",
  "Earnings",
  "Products",
  "M&A",
  "Leadership",
  "Price targets",
] as Category[]

// ─── Leaderboard ──────────────────────────────────────────────────
export interface LeaderboardEntry {
  rank: number
  previousRank: number
  handle: string
  name: string
  xp: number
  accuracy: number
  specialty: string
}

export const leaderboardEntries: LeaderboardEntry[] = [
  { rank: 1, previousRank: 1, handle: "@signalnoise", name: "Alex Mercer", xp: 1840, accuracy: 82, specialty: "Earnings" },
  { rank: 2, previousRank: 3, handle: "@quarterbeat", name: "Sarah Chen", xp: 1775, accuracy: 79, specialty: "Technology" },
  { rank: 3, previousRank: 2, handle: "@eventhorizon", name: "Marcus Webb", xp: 1690, accuracy: 76, specialty: "M&A" },
  { rank: 4, previousRank: 5, handle: "@marginmax", name: "David Park", xp: 1621, accuracy: 81, specialty: "Price Targets" },
  { rank: 5, previousRank: 4, handle: "@guidancealpha", name: "Priya Sharma", xp: 1604, accuracy: 74, specialty: "Earnings" },
]

// ─── Forecaster Profiles ──────────────────────────────────────────
export interface ForecasterProfile {
  handle: string
  name: string
  specialty: string
  score: number
  percentile: number
  accuracy: number
  resolved: number
  streak: number
  badge?: string
}

export const featuredForecaster: ForecasterProfile = {
  handle: "@signalnoise",
  name: "Alex Mercer",
  specialty: "Technology & Earnings",
  score: 87.4,
  percentile: 2.8,
  accuracy: 74,
  resolved: 142,
  streak: 11,
  badge: "Top Earnings Forecaster",
}

// ─── Forecasters to Watch ─────────────────────────────────────────
export const forecastersToWatch: ForecasterProfile[] = [
  {
    handle: "@quarterbeat",
    name: "Sarah Chen",
    specialty: "Consumer Tech",
    score: 83.1,
    percentile: 4.2,
    accuracy: 79,
    resolved: 98,
    streak: 7,
  },
  {
    handle: "@eventhorizon",
    name: "Marcus Webb",
    specialty: "M&A",
    score: 79.6,
    percentile: 6.5,
    accuracy: 76,
    resolved: 115,
    streak: 5,
  },
  {
    handle: "@marketmuse",
    name: "Jordan Lee",
    specialty: "Earnings",
    score: 76.2,
    percentile: 8.9,
    accuracy: 72,
    resolved: 87,
    streak: 9,
  },
]

// ─── Social Feed ──────────────────────────────────────────────────
export interface SocialPost {
  id: string
  handle: string
  name: string
  question: string
  confidence: number
  thesis: string
  evidence: number
  charts: number
  updated: string
  agrees: number
  disagrees: number
  saves: number
}

export const socialPosts: SocialPost[] = [
  {
    id: "p1",
    handle: "@marketmuse",
    name: "Jordan Lee",
    question: "NVDA closes above $190 after earnings",
    confidence: 72,
    thesis: "Data-center demand remains strong, but the real catalyst is forward guidance. I expect margins to remain resilient despite supply constraints.",
    evidence: 3,
    charts: 2,
    updated: "4h ago",
    agrees: 284,
    disagrees: 47,
    saves: 193,
  },
  {
    id: "p2",
    handle: "@quarterbeat",
    name: "Sarah Chen",
    question: "AAPL announces smart glasses this year",
    confidence: 41,
    thesis: "Supply chain signals point to a Q4 reveal. The Vision Pro ecosystem needs a lighter, cheaper entry point, and the component pipeline supports it.",
    evidence: 5,
    charts: 3,
    updated: "2h ago",
    agrees: 156,
    disagrees: 89,
    saves: 112,
  },
  {
    id: "p3",
    handle: "@signalnoise",
    name: "Alex Mercer",
    question: "HOOD beats revenue expectations",
    confidence: 78,
    thesis: "Crypto trading volume spiked 40% QoQ and options revenue is compounding. The analyst consensus is still lagging the real-time data.",
    evidence: 4,
    charts: 1,
    updated: "6h ago",
    agrees: 412,
    disagrees: 23,
    saves: 267,
  },
]

// ─── Categories ───────────────────────────────────────────────────
export interface CategoryInfo {
  id: string
  name: string
  description: string
  openForecasts: number
  large?: boolean
}

export const categories: CategoryInfo[] = [
  { id: "c1", name: "Earnings", description: "Revenue, EPS, margins and guidance forecasts.", openForecasts: 128, large: true },
  { id: "c2", name: "Product Launches", description: "Hardware, software and feature announcements.", openForecasts: 87, large: true },
  { id: "c3", name: "Acquisitions", description: "M&A activity, mergers and strategic purchases.", openForecasts: 43 },
  { id: "c4", name: "Leadership Changes", description: "CEO, CFO and board appointments.", openForecasts: 31 },
  { id: "c5", name: "Price Milestones", description: "Stock price thresholds and market-cap targets.", openForecasts: 96 },
  { id: "c6", name: "Company Performance", description: "Delivery numbers, user growth and KPI targets.", openForecasts: 74 },
  { id: "c7", name: "Regulatory Decisions", description: "Antitrust rulings, approvals and policy changes.", openForecasts: 29 },
  { id: "c8", name: "Technology Announcements", description: "R&D breakthroughs, AI models and patents.", openForecasts: 52 },
]

// ─── Competition ──────────────────────────────────────────────────
export interface Competition {
  name: string
  markets: number
  daysRemaining: number
  participants: number
  prizePool: string
}

export const currentCompetition: Competition = {
  name: "Earnings Season Sprint",
  markets: 48,
  daysRemaining: 6,
  participants: 12481,
  prizePool: "Sponsor-funded",
}

// ─── Creator Preview ──────────────────────────────────────────────
export interface CreatorPreview {
  name: string
  host: string
  openForecasts: number
  players: number
  seasonEnd: string
}

export const creatorPreview: CreatorPreview = {
  name: "The Tech Earnings League",
  host: "@marketbrief",
  openForecasts: 24,
  players: 3620,
  seasonEnd: "August 14",
}

// ─── Reputation Metrics ───────────────────────────────────────────
export interface ReputationMetric {
  label: string
  value: string
  description: string
}

export const reputationMetrics: ReputationMetric[] = [
  { label: "Forecast Score", value: "87.4", description: "Composite score weighting accuracy, calibration, and consistency." },
  { label: "Accuracy", value: "74%", description: "Percentage of resolved forecasts predicted correctly." },
  { label: "Confidence Calibration", value: "0.92", description: "Brier-based measure of how well confidence matches outcomes." },
  { label: "Consistency", value: "11 weeks", description: "Consecutive weeks with forecast activity." },
]
