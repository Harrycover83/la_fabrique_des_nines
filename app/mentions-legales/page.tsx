/**
 * Page Mentions Légales
 */

export default function MentionsLegalesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h1 className="font-serif text-5xl font-bold text-text-primary mb-8">
          Mentions légales
        </h1>

        <section className="mb-8">
          <h2 className="font-serif text-3xl font-semibold text-text-primary mb-4">
            Éditeur du site
          </h2>
          <p className="text-text-secondary">
            <strong>La Fabrique des Nines</strong><br />
            Auto-entrepreneur<br />
            SIRET: [À compléter]<br />
            Email: contact@lafabriquedesninnes.fr
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-3xl font-semibold text-text-primary mb-4">
            Hébergement
          </h2>
          <p className="text-text-secondary">
            Ce site est hébergé par:<br />
            <strong>Vercel Inc.</strong><br />
            340 S Lemon Ave #4133<br />
            Walnut, CA 91789<br />
            USA
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-3xl font-semibold text-text-primary mb-4">
            Propriété intellectuelle
          </h2>
          <p className="text-text-secondary mb-4">
            L&apos;ensemble de ce site relève de la législation française et internationale sur le 
            droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, 
            y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
          <p className="text-text-secondary">
            La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il soit 
            est formellement interdite sauf autorisation expresse de l&apos;éditeur, conformément à 
            l&apos;article L 122-4 du Code de la Propriété Intellectuelle.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-3xl font-semibold text-text-primary mb-4">
            Données personnelles
          </h2>
          <p className="text-text-secondary">
            Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au 
            Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, 
            de rectification et de suppression des données vous concernant. Pour exercer ce droit, 
            vous pouvez nous contacter à l&apos;adresse: contact@lafabriquedesninnes.fr
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-3xl font-semibold text-text-primary mb-4">
            Cookies
          </h2>
          <p className="text-text-secondary">
            Ce site utilise des cookies techniques nécessaires au bon fonctionnement du panier d&apos;achat. 
            Aucun cookie de tracking ou de publicité n&apos;est utilisé.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-3xl font-semibold text-text-primary mb-4">
            Crédits
          </h2>
          <p className="text-text-secondary">
            Conception et développement: La Fabrique des Nines<br />
            Photographies: La Fabrique des Nines
          </p>
        </section>
      </div>
    </div>
  );
}
