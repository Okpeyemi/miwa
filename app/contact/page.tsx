import { ContactSection } from "@/components/ui/contact-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - MIWA",
  description: "Contactez l'équipe MIWA pour transformer vos données en insights. Demandez une démonstration personnalisée.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactSection />
    </div>
  )
}