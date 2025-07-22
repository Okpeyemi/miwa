import type React from "react"
import type { Metadata } from "next"
import { Onest, Montserrat } from "next/font/google"
import "./globals.css"

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "MIWA - L'expérience usager autrement",
  description: "MIWA révolutionne l'expérience usager en réduisant les temps d'attente, en augmentant les revenus et en exploitant les données grâce à des solutions sur mesure.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} ${montserrat.variable} font-sans`}>{children}</body>
    </html>
  )
}
