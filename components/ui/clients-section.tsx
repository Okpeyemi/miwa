"use client"

import React from "react"
import { LogoCarousel } from "@/components/ui/logo-carousel"

const clientLogos = [
	{
		name: "Seme City",
		id: 1,
		img: "/seme_city.png",
	},
]

export function ClientsSection() {
	return (
		<section className="py-16 sm:py-24 lg:py-32">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="space-y-8">
					<div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8">
						<div className="text-center space-y-4">
							<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-miwa-teal to-miwa-blue text-center font-heading font-bold">
								Notre client partenaire
							</h2>
						</div>

						<div className="mt-8">
							<LogoCarousel logos={clientLogos} />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}