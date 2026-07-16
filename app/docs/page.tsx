import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { EarningsLogo } from "@/components/earnings-logo"
import { DocsSidebar } from "@/components/docs/sidebar"
import { DocsContent } from "@/components/docs/content"

export const metadata: Metadata = {
  title: "Documentation — Earnings.fun",
  description: "Learn how Earnings.fun works. Forecasting mechanics, reputation, competitions, and the complete protocol.",
}

export default function DocsPage() {
  return (
    <>
      <Navbar />
      <div className="pt-16 flex min-h-screen bg-background">
        <DocsSidebar />
        <DocsContent />
      </div>
      <Footer />
    </>
  )
}
