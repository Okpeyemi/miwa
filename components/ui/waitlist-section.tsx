"use client"

import type React from "react"
import { useState } from "react"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function WaitlistSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Here you would typically send the email to your backend
      console.log("Email submitted:", email)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail("")
      }, 3000)
    }
  }

  return (
    <section id="waitlist" className="relative">
      <div className="h-[30rem] sm:h-[35rem] lg:h-[40rem] w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
          <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-miwa-teal to-miwa-blue text-center font-heading font-bold">
            Rejoignez la liste d'attente de MIWA
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto my-4 sm:my-6 text-sm sm:text-base text-center relative z-10 px-4 sm:px-0">
            Soyez les premiers à découvrir les solutions innovantes de <span className="text-miwa-blue font-semibold">MIWA</span> pour l'expérience usager. Laissez votre email pour rejoindre notre liste d'attente et restez informés de notre lancement !
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-6 relative z-10 px-4 sm:px-0"
          >
            <Input
              type="email"
              placeholder="your.email@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 text-sm sm:text-base border-miwa-teal/20 focus:border-miwa-teal focus:ring-miwa-teal/20 cursor-pointer"
              required
            />
            <Button
              type="submit"
              disabled={isSubmitted}
              className="whitespace-nowrap text-sm sm:text-base btn-miwa-gradient cursor-pointer"
            >
              {isSubmitted ? "Liste d'attente rejointe!" : "Rejoignez la liste d'attente"}
            </Button>
          </form>
          {isSubmitted && (
            <p className="text-miwa-teal text-sm sm:text-base text-center mt-2 relative z-10 font-medium">
              Merci! Nous vous informerons lorsque MIWA sera prêt.
            </p>
          )}
        </div>
        <BackgroundBeams />
      </div>
    </section>
  )
}

export { WaitlistSection }
