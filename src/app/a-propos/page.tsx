import Image from "next/image";

/**
 * Page À propos
 */
export default function AProposPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8 text-center">
          À propos
        </h1>

        {/* Image hero */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12">
          <Image
            src="/images/atelier.jpg"
            alt="L'atelier"
            fill
            className="object-cover"
          />
        </div>

        {/* Contenu */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              L'histoire de La Fabrique des Nines
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              La Fabrique des Nines est née d'une passion pour l'artisanat et le
              design. Chaque pièce est créée à la main par Aurélie dans son
              atelier en France, avec amour et attention aux détails.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Inspirée par les formes organiques, les textures naturelles et les
              couleurs douces de la terre, chaque création est unique et raconte
              sa propre histoire. La jesmonite, un matériau écologique et
              durable, permet de donner vie à des objets à la fois esthétiques et
              fonctionnels.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              La jesmonite, qu'est-ce que c'est ?
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              La jesmonite est un matériau composite écologique, composé de
              résine acrylique et de charges minérales. Elle offre une
              alternative durable aux résines traditionnelles et permet de créer
              des pièces solides et légères.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Non toxique et respectueuse de l'environnement, la jesmonite se
              travaille facilement et offre une infinité de possibilités
              créatives : textures, couleurs, formes...
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Notre démarche
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                  ✨ Fait main
                </h3>
                <p className="text-text-secondary text-sm">
                  Chaque pièce est créée à la main, ce qui la rend unique et
                  authentique.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                  🌿 Éco-responsable
                </h3>
                <p className="text-text-secondary text-sm">
                  Nous utilisons des matériaux durables et respectueux de
                  l'environnement.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                  🇫🇷 Made in France
                </h3>
                <p className="text-text-secondary text-sm">
                  Toutes nos créations sont fabriquées en France dans notre
                  atelier.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Suivez l'aventure
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Pour découvrir les coulisses de l'atelier, les nouvelles créations
              et les collections à venir, suivez-nous sur Instagram :
            </p>
            <a
              href="https://www.instagram.com/la_fabrique_des_nines_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
            >
              @la_fabrique_des_nines_
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
