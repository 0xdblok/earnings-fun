import { PageHeader } from "@/components/docs/shared"

const faqs = [
  { q: "Is this real-money betting?", a: "No. Earnings.fun is a points-based social forecasting game. No real-money wagering. You compete for reputation, XP, badges and sponsor-funded prizes." },
  { q: "How are markets resolved?", a: "Each market has published resolution criteria declared before opening. We use official sources — SEC filings, press releases, earnings reports — to determine outcomes. All resolutions are transparent and can be appealed." },
  { q: "Can I change my forecast?", a: "Yes. You can update your forecast (outcome, confidence and reasoning) at any time before the market closes. Only your final position counts." },
  { q: "What happens if resolution criteria can't be met?", a: "The market is voided with no impact on any participant's score. Voided markets are clearly marked." },
  { q: "Are my forecasts private?", a: "No. All forecasts are public by design. Your track record is your reputation — transparency builds credibility." },
  { q: "How is the Forecast Score calculated?", a: "The Forecast Score is a weighted composite: 40% accuracy, 35% calibration (Brier score), 25% consistency. The formula is public and auditable." },
  { q: "Can I create my own markets?", a: "Market creation is available to approved creators. Apply through the Creator program to get access." },
  { q: "What is the Robinhood Chain?", a: "Earnings.fun is built for the Robinhood Chain ecosystem — a blockchain platform. It is not officially affiliated with Robinhood Markets, Inc." },
  { q: "How do sponsor prizes work?", a: "Sponsors fund prize pools for competitions. Eligibility rules are published before each competition. Distribution is handled transparently." },
  { q: "Can I delete my account?", a: "Yes. Contact support to request account deletion. Your forecast history is preserved for market integrity but anonymized." },
]

export default function FAQ() {
  return (
    <>
      <PageHeader title="FAQ" desc="Frequently asked questions about Earnings.fun." />
      <div className="space-y-3">
        {faqs.map(faq=><details key={faq.q} className="group bg-surface border border-border rounded-xl"><summary className="px-5 py-4 cursor-pointer font-medium text-sm hover:text-neon transition-colors">{faq.q}</summary><div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</div></details>)}
      </div>
    </>
  )
}
