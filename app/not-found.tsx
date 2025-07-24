import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-miwa-blue/5 to-miwa-teal/5 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Logo ou illustration */}
        <div className="mb-8">
          <div className="mx-auto w-32 h-32 bg-gradient-to-br from-miwa-blue to-miwa-teal rounded-full flex items-center justify-center mb-6">
            <span className="text-6xl font-bold text-white">404</span>
          </div>
        </div>

        {/* Titre avec gradient MIWA */}
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-miwa-gradient">Page introuvable</span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="btn-miwa-gradient">
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Retour à l'accueil
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg">
            <Link href="/contact" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Nous contacter
            </Link>
          </Button>
        </div>

        {/* Liens utiles */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Liens utiles :
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              href="/#features" 
              className="text-miwa-blue hover:text-miwa-teal transition-colors"
            >
              Fonctionnalités
            </Link>
            <Link 
              href="/#pricing" 
              className="text-miwa-blue hover:text-miwa-teal transition-colors"
            >
              Tarifs
            </Link>
            <Link 
              href="/contact" 
              className="text-miwa-blue hover:text-miwa-teal transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}