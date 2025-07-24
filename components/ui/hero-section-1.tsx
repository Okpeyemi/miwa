"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

// Images du carrousel
const carouselImages = [
  {
    src: "dashboard.jpg",
    alt: "Tableau de bord présentant les analyses et la gestion des utilisateurs",
    title: "Dashboard Analytics"
  },
  {
    src: "interface.jpg", // Remplacez par votre deuxième image
    alt: "Interface de gestion des parcours usagers MIWA",
    title: "Gestion des parcours"
  }
]

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000) // Change d'image toutes les 4 secondes

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-xl sm:rounded-2xl border border-miwa-teal/20 p-2 sm:p-4 shadow-lg shadow-miwa-blue/10 ring-1"
        >
          <img
            className="bg-background aspect-[15/8] relative hidden rounded-xl sm:rounded-2xl dark:block w-full"
            src={carouselImages[currentIndex].src}
            alt={carouselImages[currentIndex].alt}
            width="2700"
            height="1440"
          />
          <img
            className="z-2 border-miwa-teal/25 aspect-[15/8] relative rounded-xl sm:rounded-2xl border dark:hidden w-full"
            src={carouselImages[currentIndex].src}
            alt={carouselImages[currentIndex].alt}
            width="2700"
            height="1440"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Indicateurs de pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentIndex 
                ? "bg-miwa-blue w-6" 
                : "bg-miwa-blue/30 hover:bg-miwa-blue/50"
            )}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>

      {/* Titre de l'image actuelle */}
      <motion.div
        key={`title-${currentIndex}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mt-4"
      >
        <span className="text-sm text-muted-foreground font-medium">
          {carouselImages[currentIndex].title}
        </span>
      </motion.div>
    </div>
  )
}

export function HeroSection() {
  return (
    <main className="overflow-hidden">
      <div
        aria-hidden
        className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block"
      >
        <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(121,58%,63%,.08)_0,hsla(210,100%,30%,.02)_50%,hsla(45,100%,50%,0)_80%)]" />
        <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(121,58%,63%,.06)_0,hsla(210,100%,30%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(121,58%,63%,.04)_0,hsla(210,100%,30%,.02)_80%,transparent_100%)]" />
      </div>
      <section id="home">
        <div className="relative pt-24 md:pt-36">
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    delayChildren: 1,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.3,
                    duration: 2,
                  },
                },
              },
            }}
            className="absolute inset-0 -z-20"
          >
            <img
              src="/placeholder.svg?height=4095&width=3276"
              alt="background"
              className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block w-full h-full object-cover"
              width="3276"
              height="4095"
            />
          </AnimatedGroup>
          <div
            aria-hidden
            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"
          />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
              <AnimatedGroup variants={transitionVariants}>
                <Link
                  href="#features"
                  className="hover:bg-background dark:hover:border-t-border bg-gradient-to-r from-miwa-teal/10 to-miwa-blue/10 border-miwa-teal/20 group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-miwa-blue/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950 cursor-pointer"
                >
                  <span className="text-miwa-blue text-sm font-medium">Soyez à jour des avancées de MIWA</span>
                  <span className="dark:border-background block h-4 w-0.5 border-l bg-miwa-teal dark:bg-zinc-700"></span>
                  <div className="bg-background group-hover:bg-miwa-teal/10 size-6 overflow-hidden rounded-full duration-500">
                    <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3 text-miwa-blue" />
                      </span>
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3 text-miwa-blue" />
                      </span>
                    </div>
                  </div>
                </Link>

                <h1 className="mt-8 max-w-4xl mx-auto text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:mt-16 xl:text-[5.25rem] font-heading font-bold leading-tight">
                  <span className="text-miwa-gradient">L'expérience usager</span> autrement
                </h1>
                <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-balance text-base sm:text-lg text-muted-foreground px-4 sm:px-0">
                  MIWA aide les entreprises accueillant un grand nombre d'usagers à gagner du temps et de l'argent grâce à des parcours usagers conçus sur mesure.
                </p>
              </AnimatedGroup>
              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
                className="mt-8 sm:mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
              >
                <Button asChild size="lg" className="mt-2.5 w-fit gap-2 btn-miwa-gradient cursor-pointer">
                  <Link href="#waitlist">Rejoindre la liste d'attente</Link>
                </Button>
              </AnimatedGroup>
            </div>
          </div>
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <div className="relative mt-8 overflow-hidden px-2 sm:mt-12 md:mt-20 sm:px-4 lg:px-8">
              <div
                aria-hidden
                className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
              />
              <ImageCarousel />
            </div>
          </AnimatedGroup>
        </div>
      </section>
    </main>
  )
}

const menuItems = [
  { name: "Acceuil", href: "/#home" },
  { name: "Fonctionnalités", href: "/#features" },
  { name: "Tarification", href: "/#pricing" },
  { name: "Contact", href: "/contact" },
]

const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = () => {
    setMenuState(false)
  }

  return (
    <header>
      <nav data-state={menuState && "active"} className="fixed z-20 w-full px-2 group">
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-4 sm:px-6 transition-all duration-300 lg:px-12",
            isScrolled && "bg-background/50 max-w-4xl rounded-2xl border border-miwa-teal/20 backdrop-blur-lg lg:px-5",
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link href="#home" aria-label="home" className="flex items-center space-x-2" onClick={handleLinkClick}>
                <span className="text-3xl font-bold text-miwa-gradient">miwa</span>
              </Link>
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200 text-miwa-blue" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 text-miwa-blue" />
              </button>
            </div>
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-6 xl:gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-miwa-blue block duration-150 transition-colors font-medium"
                      onClick={handleLinkClick}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-miwa-teal/20 p-6 shadow-2xl shadow-miwa-blue/10 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-miwa-blue block duration-150 transition-colors font-medium"
                        onClick={handleLinkClick}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button asChild size="lg" className="w-fit gap-2 btn-miwa-gradient cursor-pointer">
                  <Link href="#waitlist" onClick={handleLinkClick}>
                    <span>Rejoindre</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
