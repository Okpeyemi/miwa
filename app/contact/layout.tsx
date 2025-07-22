import { Header } from "@/components/ui/header"
import { MiwaFooter } from "@/components/ui/miwa-footer"

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <MiwaFooter />
    </div>
  )
}