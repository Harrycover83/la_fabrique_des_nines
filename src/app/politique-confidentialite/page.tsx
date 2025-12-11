/**
 * Page Politique de confidentialité
 */
export default function PolitiqueConfidentialitePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto prose prose-lg">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-8">
          Politique de confidentialité
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
            Collecte des données
          </h2>
          <p className="text-text-secondary">
            Nous collectons uniquement les données nécessaires au traitement de
            vos commandes et à la communication avec vous :
          </p>
          <ul className="text-text-secondary">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Adresse de livraison et de facturation</li>
            <li>Informations de paiement (traitées de manière sécurisée par Stripe)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
            Utilisation des données
          </h2>
          <p className="text-text-secondary">
            Vos données personnelles sont utilisées uniquement pour :
          </p>
          <ul className="text-text-secondary">
            <li>Traiter et expédier vos commandes</li>
            <li>Vous envoyer des confirmations et mises à jour de commande</li>
            <li>Répondre à vos questions via le formulaire de contact</li>
            <li>Améliorer nos services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
            Partage des données
          </h2>
          <p className="text-text-secondary">
            Nous ne vendons ni ne louons vos données personnelles à des tiers. Vos
            informations de paiement sont traitées de manière sécurisée par Stripe
            et ne sont jamais stockées sur nos serveurs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
            Cookies
          </h2>
          <p className="text-text-secondary">
            Ce site utilise uniquement des cookies essentiels pour le
            fonctionnement du panier et la sauvegarde de vos préférences. Aucun
            cookie de suivi publicitaire n'est utilisé.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
            Vos droits
          </h2>
          <p className="text-text-secondary">
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul className="text-text-secondary">
            <li>Droit d'accès à vos données personnelles</li>
            <li>Droit de rectification de vos données</li>
            <li>Droit à l'effacement de vos données</li>
            <li>Droit à la portabilité de vos données</li>
            <li>Droit d'opposition au traitement de vos données</li>
          </ul>
          <p className="text-text-secondary mt-4">
            Pour exercer ces droits, contactez-nous à{" "}
            <a href="mailto:contact@lafabriquedesnines.fr" className="text-primary underline">
              contact@lafabriquedesnines.fr
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
            Sécurité
          </h2>
          <p className="text-text-secondary">
            Nous mettons en œuvre des mesures de sécurité techniques et
            organisationnelles appropriées pour protéger vos données contre tout
            accès non autorisé, modification, divulgation ou destruction.
          </p>
        </section>

        <p className="text-text-secondary text-sm mt-8">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
        </p>
      </div>
    </div>
  );
}
