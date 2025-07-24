import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de confidentialité - MIWA",
  description: "Politique de confidentialité de MIWA - Comment nous collectons, utilisons et protégeons vos données personnelles.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-miwa-gradient">
              Politique de confidentialité
            </h1>
            <p className="text-lg text-muted-foreground">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                MIWA s'engage à protéger votre vie privée et vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations lorsque vous utilisez nos services d'analyse de données.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Données collectées</h2>
              <p className="text-muted-foreground mb-4">Nous collectons les types de données suivants :</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Informations d'identification (nom, prénom, adresse email)</li>
                <li>Informations professionnelles (entreprise, poste)</li>
                <li>Données d'utilisation de nos services</li>
                <li>Données techniques (adresse IP, type de navigateur)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Utilisation des données</h2>
              <p className="text-muted-foreground mb-4">Vos données sont utilisées pour :</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Fournir et améliorer nos services d'analyse</li>
                <li>Communiquer avec vous concernant nos services</li>
                <li>Personnaliser votre expérience utilisateur</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Partage des données</h2>
              <p className="text-muted-foreground mb-4">
                Nous ne vendons pas vos données personnelles. Nous pouvons partager vos informations uniquement dans les cas suivants :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Avec votre consentement explicite</li>
                <li>Pour respecter une obligation légale</li>
                <li>Avec nos partenaires de confiance pour la fourniture de services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Sécurité des données</h2>
              <p className="text-muted-foreground mb-4">
                Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Vos droits</h2>
              <p className="text-muted-foreground mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d'opposition</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
              <p className="text-muted-foreground">
                Pour toute question concernant cette politique de confidentialité, contactez-nous à l'adresse : 
                <span className="font-medium"> privacy@miwa.com</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}