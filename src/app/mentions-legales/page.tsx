/**
 * Page Mentions légales
 */
export default function MentionsLegalesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto prose prose-lg">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-8">
          Mentions légales
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
            Éditeur du site
          </h2>
          <p className="text-text-secondary">
            <strong>La Fabrique des Nines</strong>
            <br />
            Aurélie [Nom]
            <br />
            Auto-entrepreneur / Micro-entreprise
            <br />
            SIRET : [À compléter]
            <br />
            Adresse : [À compléter]
            <br />
            Email : contact@lafabriquedesnines.fr
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
            Hébergement
          </h2>
          <p className="text-text-secondary">
            Ce site est hébergé par Vercel Inc.
            <br />
            340 S Lemon Ave #4133
            <br />
            Walnut, CA 91789, USA
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
            Propriété intellectuelle
          </h2>
          <p className="text-text-secondary">
            L'ensemble du contenu de ce site (textes, images, créations) est la
            propriété exclusive de La Fabrique des Nines. Toute reproduction,
            même partielle, est interdite sans autorisation préalable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
            Données personnelles
          </h2>
          <p className="text-text-secondary">
            Conformément au RGPD, vous disposez d'un droit d'accès, de
            rectification et de suppression de vos données personnelles.
            Consultez notre{" "}
            <a href="/politique-confidentialite" className="text-primary underline">
              politique de confidentialité
            </a>{" "}
            pour plus d'informations.
          </p>
        </section>
      </div>
    </div>
  );
}
