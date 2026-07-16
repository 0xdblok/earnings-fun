"use client"

import Link from "next/link"
import { Info, AlertTriangle, CheckCircle2 } from "lucide-react"
import { ReactNode } from "react"

export function Callout({ type, children }: { type: "info" | "warning" | "tip"; children: ReactNode }) {
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
    <div className={`flex gap-3 border rounded-2xl px-5 py-4 my-4 text-sm ${styles[type]}`}>
      {icons[type]}
      <div className="leading-relaxed">{children}</div>
    </div>
  )
}

export function DocSection({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section id={id} className="mb-16 scroll-mt-24">
      <h2 className="text-2xl font-semibold tracking-[-0.02em] mb-1">{title}</h2>
      {subtitle && <p className="text-sm text-muted-foreground mb-6">{subtitle}</p>}
      <div className="space-y-4">{children}</div>
    </section>
  )
}

export function SubSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      {children}
    </div>
  )
}

export function DocTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
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

export function DocCard({ title, desc, icon }: { title: string; desc: string; icon?: ReactNode }) {
  return (
    <div className="bg-surface border border-border rounded-2xl p-5">
      {icon && <div className="text-neon mb-3">{icon}</div>}
      <h4 className="font-semibold text-sm mb-1">{title}</h4>
      <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  )
}

export function PageHeader({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="mb-12">
      <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
        Documentation
      </p>
      <h1 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] mb-3">
        {title}
      </h1>
      <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">{desc}</p>
    </div>
  )
}
