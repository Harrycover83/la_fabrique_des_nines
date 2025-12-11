/**
 * Page Politique de confidentialité
 */

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h1 className="font-serif text-5xl font-bold text-text-primary mb-8">
          Politique de confidentialité
        </h1>

        <p className="text-text-secondary mb-8">
          Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')}
        </p>

        <section className="mb-8">
          <h2 className="font-serif text-3xl font-semibold text-text-primary mb-4">
            1. Collecte des données personnelles
          </h2>
          <p className="text-text-secondary mb-4">
            Nous collectons les informations suivantes lorsque vous passez commande ou nous contactez:
          </p>
          <ul className="text-text-secondary list-disc pl-6 space-y-2">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Adresse de livraison et de facturation</li>
            <li>Numéro de téléphone (optionnel)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-3xl font-semibold text-text-primary mb-4">
            2. Utilisation des données
          </h2>
          <p className="text-text-secondary mb-4">
            Vos données personnelles sont utilisées pour:
          </p>
          <ul className="text-text-secondary list-disc pl-6 space-y-2">
            <li>Traiter et expédier vos commandes</li>
            <li>Vous contacter concernant votre commande</li>
            <li>Améliorer nos services</li>
            <li>Respecter nos obligations légales</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-3xl font-semibold text-text-primary mb-4">
            3. Partage des données
          </h2>
          <p className="text-text-secondary mb-4">
            Vos données personnelles peuvent être partagées avec:
          </p>
          <ul className="text-text-secondary list-disc pl-6 space-y-2">
            <li>
              <strong>Stripe:</strong> Notre prestataire de paiement pour traiter les transactions 
              de manière sécurisée
            </li>
            <li>
              <strong>Services de livraison:</strong> Pour l&apos;expédition de vos commandes
            </li>
          </ul>
          <p className="text-text-secondary mt-4">
            Nous ne vendons jamais vos données personnelles à des tiers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-3xl font-semibold text-text-primary mb-4">
            4. Sécurité des données
          </h2>
          <p className="text-text-secondary">
            Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées 
            pour protéger vos données personnelles contre tout accès non autorisé, modification, 
            divulgation ou destruction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-3xl font-semibold text-text-primary mb-4">
            5. Conservation des données
          </h2>
          <p className="text-text-secondary">
            Nous conservons vos données personnelles pendant la durée nécessaire aux finalités pour 
            lesquelles elles ont été collectées, conformément aux obligations légales applicables 
            (généralement 3 ans après votre dernière commande).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-3xl font-semibold text-text-primary mb-4">
            6. Vos droits
          </h2>
          <p className="text-text-secondary mb-4">
            Conformément au RGPD, vous disposez des droits suivants:
          </p>
          <ul className="text-text-secondary list-disc pl-6 space-y-2">
            <li>Droit d&apos;accès à vos données personnelles</li>
            <li>Droit de rectification de vos données</li>
            <li>Droit à l&apos;effacement de vos données</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité de vos données</li>
            <li>Droit d&apos;opposition au traitement</li>
          </ul>
          <p className="text-text-secondary mt-4">
            Pour exercer ces droits, contactez-nous à: contact@lafabriquedesninnes.fr
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-3xl font-semibold text-text-primary mb-4">
            7. Cookies
          </h2>
          <p className="text-text-secondary">
            Notre site utilise uniquement des cookies techniques strictement nécessaires au 
            fonctionnement du panier d&apos;achat et de la navigation sur le site. Ces cookies sont 
            stockés localement dans votre navigateur et ne collectent aucune information personnelle 
            identifiable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-3xl font-semibold text-text-primary mb-4">
            8. Modifications de cette politique
          </h2>
          <p className="text-text-secondary">
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
            Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-3xl font-semibold text-text-primary mb-4">
            9. Contact
          </h2>
          <p className="text-text-secondary">
            Pour toute question concernant cette politique de confidentialité, contactez-nous à:<br />
            Email: contact@lafabriquedesninnes.fr
          </p>
        </section>
      </div>
    </div>
  );
}
