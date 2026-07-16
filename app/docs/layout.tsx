export const dynamic = "force-dynamic"

import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { DocsSidebar } from "@/components/docs/sidebar"

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="pt-16 flex min-h-screen bg-background">
        <DocsSidebar />
        <main className="flex-1 min-w-0">
          <div className="max-w-3xl mx-auto px-6 md:px-10 py-12 md:py-16">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
