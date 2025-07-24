import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conditions d'utilisation - MIWA",
  description: "Conditions générales d'utilisation des services MIWA - Règles et conditions d'usage de notre plateforme d'analyse de données.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-miwa-gradient">
              Conditions d'utilisation
            </h1>
            <p className="text-lg text-muted-foreground">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptation des conditions</h2>
              <p className="text-muted-foreground mb-4">
                En accédant et en utilisant les services MIWA, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Description des services</h2>
              <p className="text-muted-foreground mb-4">
                MIWA fournit des services d'analyse de données, de digitalisation et d'optimisation des parcours utilisateur. Nos services incluent la transformation de données, l'analyse prédictive et la création d'interfaces utilisateur personnalisées.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Inscription et compte utilisateur</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Vous devez fournir des informations exactes et à jour lors de votre inscription</li>
                <li>Vous êtes responsable de la sécurité de votre compte et mot de passe</li>
                <li>Vous devez notifier immédiatement toute utilisation non autorisée de votre compte</li>
                <li>Un seul compte par utilisateur est autorisé</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Utilisation acceptable</h2>
              <p className="text-muted-foreground mb-4">Vous vous engagez à ne pas :</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Utiliser nos services à des fins illégales ou non autorisées</li>
                <li>Compromettre la sécurité de nos systèmes</li>
                <li>Transmettre des virus ou codes malveillants</li>
                <li>Violer les droits de propriété intellectuelle</li>
                <li>Harceler ou nuire à d'autres utilisateurs</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Propriété intellectuelle</h2>
              <p className="text-muted-foreground mb-4">
                Tous les contenus, logiciels, et technologies utilisés dans nos services sont protégés par des droits de propriété intellectuelle. Vous obtenez uniquement une licence d'utilisation limitée et non exclusive.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Limitation de responsabilité</h2>
              <p className="text-muted-foreground mb-4">
                MIWA ne peut être tenu responsable des dommages indirects, consécutifs ou accessoires résultant de l'utilisation de nos services. Notre responsabilité est limitée au montant des frais payés pour nos services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Résiliation</h2>
              <p className="text-muted-foreground mb-4">
                Nous nous réservons le droit de suspendre ou résilier votre accès à nos services en cas de violation de ces conditions, avec ou sans préavis.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Modifications</h2>
              <p className="text-muted-foreground mb-4">
                Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications entreront en vigueur dès leur publication sur cette page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Droit applicable</h2>
              <p className="text-muted-foreground">
                Ces conditions sont régies par le droit français. Tout litige sera soumis à la juridiction des tribunaux compétents.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}