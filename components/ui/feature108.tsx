"use client"

import type React from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Layout, Pointer, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface TabContent {
  badge: string
  title: string
  description: string
  buttonText: string
  imageSrc: string
  imageAlt: string
}

interface Tab {
  value: string
  icon: React.ReactNode
  label: string
  content: TabContent
}

interface Feature108Props {
  badge?: string
  heading?: string
  description?: string
  tabs?: Tab[]
}

const Feature108 = ({
  badge = "Solutions MIWA",
  heading = "Des solutions innovantes pour votre entreprise",
  description = "Transformez votre expérience usager avec nos outils sur mesure.",
  tabs = [
    {
      value: "tab-1",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Parcours Usager",
      content: {
        badge: "Sur Mesure",
        title: "Conception d'un parcours usager sur mesure",
        description:
          "Nous concevons des parcours usagers personnalisés pour améliorer l'engagement, réduire les temps d'attente et optimiser la satisfaction, adaptés aux besoins de votre entreprise.",
        buttonText: "Découvrir les parcours",
        imageSrc: "/image1.png",
        imageAlt: "Parcours usager fluide",
      },
    },
    {
      value: "tab-2",
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: "Digitalisation",
      content: {
        badge: "Innovation",
        title: "Digitalisation des registres papier",
        description:
          "Fini les registres papier obsolètes. MIWA numérise vos données, les rendant accessibles, sécurisées et prêtes pour des analyses exploitables.",
        buttonText: "Numériser maintenant",
        imageSrc: "/image2.png",
        imageAlt: "Document papier se transformant en interface numérique",
      },
    },
    {
      value: "tab-3",
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: "Analytics",
      content: {
        badge: "Temps Réel",
        title: "Tableau de bord de visualisation de statistiques",
        description:
          "Obtenez des insights grâce à notre tableau de bord intuitif, offrant des statistiques en temps réel pour optimiser les opérations et stimuler la croissance des revenus.",
        buttonText: "Voir les analytics",
        imageSrc: "/image3.png",
        imageAlt: "Un tableau de bord avec des graphiques, des diagrammes et des visualisations de données",
      },
    },
  ],
}: Feature108Props) => {
  return (
    <section id="features" className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline" className="badge-miwa">
            {badge}
          </Badge>
          <h1 className="max-w-2xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold">
            <span className="text-miwa-gradient">{heading}</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl px-4 sm:px-0">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="container bg-transparent flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-10 w-full max-w-none p-0">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-semibold text-muted-foreground data-[state=active]:bg-miwa-teal/10 data-[state=active]:text-miwa-blue data-[state=active]:border data-[state=active]:border-miwa-teal/20 flex-1 sm:flex-initial min-w-0 transition-all duration-200 cursor-pointer"
              >
                {tab.icon} 
                <span className="truncate">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-gradient-to-br from-miwa-teal/5 to-miwa-blue/5 border border-miwa-teal/10 p-4 sm:p-6 lg:p-16">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-8 lg:gap-20 lg:grid-cols-2"
              >
                <div className="flex flex-col gap-5 text-center lg:text-left">
                  <Badge
                    variant="outline"
                    className="w-fit bg-miwa-yellow/10 text-miwa-blue border-miwa-yellow/30 mx-auto lg:mx-0"
                  >
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-2xl sm:text-3xl font-heading font-semibold lg:text-4xl xl:text-5xl text-miwa-gradient">
                    {tab.content.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">{tab.content.description}</p>
                  {/* <Button className="mt-2.5 w-fit gap-2 mx-auto lg:mx-0 btn-miwa-gradient cursor-pointer" size="lg">
                    {tab.content.buttonText}
                  </Button> */}
                </div>
                <img
                  src={tab.content.imageSrc || "/placeholder.svg"}
                  alt={tab.content.imageAlt}
                  className="rounded-xl w-full max-w-md lg:max-w-none border border-miwa-teal/20"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export { Feature108 }
