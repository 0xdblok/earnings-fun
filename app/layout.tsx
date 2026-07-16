import type { Metadata } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Earnings.fun — Predict what companies do next",
  description:
    "A social forecasting game for company events, earnings, product launches and market milestones. Build a reputation for being right — without risking real money.",
  keywords: [
    "forecasting",
    "earnings",
    "predictions",
    "markets",
    "social",
    "competition",
    "reputation",
  ],
  openGraph: {
    title: "Earnings.fun — Predict what companies do next",
    description:
      "Forecast earnings, launches, acquisitions and market milestones. Prove your edge and climb the leaderboard.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  )
}
