import { Header } from "@/components/ui/header"
import { HeroSection } from "@/components/ui/hero-section-1"
import { Feature108 } from "@/components/ui/feature108"
import { WaitlistSection } from "@/components/ui/waitlist-section"
import { MiwaFooter } from "@/components/ui/miwa-footer"
import { ClientsSection } from "@/components/ui/clients-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <Feature108 />
      <ClientsSection />
      <WaitlistSection />
      <MiwaFooter />
    </div>
  )
}
