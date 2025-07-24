import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique des cookies - MIWA",
  description: "Politique des cookies de MIWA - Comment nous utilisons les cookies pour améliorer votre expérience sur notre site.",
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-miwa-gradient">
              Politique des cookies
            </h1>
            <p className="text-lg text-muted-foreground">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Qu'est-ce qu'un cookie ?</h2>
              <p className="text-muted-foreground mb-4">
                Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez notre site web. Les cookies nous aident à améliorer votre expérience en mémorisant vos préférences et en analysant l'utilisation de notre site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Types de cookies utilisés</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Cookies essentiels</h3>
                <p className="text-muted-foreground mb-2">
                  Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés :
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Cookies de session pour maintenir votre connexion</li>
                  <li>Cookies de sécurité pour protéger contre les attaques</li>
                  <li>Cookies de préférences linguistiques</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Cookies de performance</h3>
                <p className="text-muted-foreground mb-2">
                  Ces cookies nous aident à comprendre comment vous utilisez notre site :
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Google Analytics pour analyser le trafic</li>
                  <li>Cookies de mesure d'audience</li>
                  <li>Cookies de temps de chargement des pages</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Cookies de fonctionnalité</h3>
                <p className="text-muted-foreground mb-2">
                  Ces cookies améliorent votre expérience utilisateur :
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Mémorisation de vos préférences d'affichage</li>
                  <li>Cookies de personnalisation de l'interface</li>
                  <li>Cookies de géolocalisation (avec votre consentement)</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Cookies tiers</h2>
              <p className="text-muted-foreground mb-4">
                Nous utilisons également des services tiers qui peuvent déposer leurs propres cookies :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Google Analytics :</strong> pour analyser l'utilisation du site</li>
                <li><strong>Services de cartographie :</strong> pour afficher des cartes interactives</li>
                <li><strong>Réseaux sociaux :</strong> pour les boutons de partage</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Durée de conservation</h2>
              <p className="text-muted-foreground mb-4">La durée de conservation des cookies varie selon leur type :</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Cookies de session :</strong> supprimés à la fermeture du navigateur</li>
                <li><strong>Cookies persistants :</strong> conservés entre 1 mois et 2 ans maximum</li>
                <li><strong>Cookies analytiques :</strong> conservés 26 mois maximum</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Gestion des cookies</h2>
              <p className="text-muted-foreground mb-4">
                Vous pouvez contrôler et gérer les cookies de plusieurs façons :
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Via votre navigateur</h3>
                <p className="text-muted-foreground mb-2">
                  Vous pouvez configurer votre navigateur pour :
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Accepter ou refuser tous les cookies</li>
                  <li>Vous alerter avant qu'un cookie soit stocké</li>
                  <li>Supprimer les cookies existants</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Via notre bannière de consentement</h3>
                <p className="text-muted-foreground">
                  Lors de votre première visite, une bannière vous permet de choisir quels types de cookies accepter. Vous pouvez modifier vos préférences à tout moment.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Impact du refus des cookies</h2>
              <p className="text-muted-foreground mb-4">
                Si vous refusez certains cookies, cela peut affecter votre expérience :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Certaines fonctionnalités peuvent ne pas fonctionner correctement</li>
                <li>Vos préférences ne seront pas mémorisées</li>
                <li>Le contenu peut être moins personnalisé</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
              <p className="text-muted-foreground">
                Pour toute question concernant notre utilisation des cookies, contactez-nous à : 
                <span className="font-medium"> cookies@miwa.com</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}