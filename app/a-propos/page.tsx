/**
 * Page À propos
 * 
 * Présente la créatrice, l'atelier et la démarche artisanale
 */

import Image from 'next/image';

export default function AProposPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl font-bold text-text-primary mb-8 text-center">
          À propos
        </h1>

        <div className="mb-12">
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
            <Image
              src="/images/plateaux-01.svg"
              alt="Atelier La Fabrique des Nines"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-text-primary mb-4">
              L&apos;histoire
            </h2>
            <p className="text-text-secondary mb-4">
              Bienvenue chez La Fabrique des Nines, où chaque création raconte une histoire unique. 
              Passionnée par l&apos;artisanat et le design, j&apos;ai découvert la jesmonite, un matériau 
              écologique et versatile qui m&apos;a tout de suite séduite par ses possibilités infinies.
            </p>
            <p className="text-text-secondary mb-4">
              Chaque pièce est façonnée à la main dans mon atelier en France, avec une attention 
              particulière portée aux détails, aux couleurs et aux textures. Mon objectif est de créer 
              des objets qui allient beauté et fonctionnalité, tout en respectant l&apos;environnement.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-text-primary mb-4">
              La jesmonite, qu&apos;est-ce que c&apos;est ?
            </h2>
            <p className="text-text-secondary mb-4">
              La jesmonite est un matériau composite écologique, non toxique et respectueux de 
              l&apos;environnement. Elle offre une grande liberté créative grâce à sa capacité à reproduire 
              différentes textures (marbre, pierre, bois) et à se décliner dans une palette de couleurs 
              infinie.
            </p>
            <p className="text-text-secondary mb-4">
              Résistante et durable, la jesmonite est parfaite pour créer des objets décoratifs et 
              fonctionnels qui traversent le temps. Chaque pièce est unique, avec ses variations 
              naturelles qui font tout son charme.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-text-primary mb-4">
              Notre démarche
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-xl text-primary mb-3">
                  🇫🇷 Fait main en France
                </h3>
                <p className="text-text-secondary">
                  Chaque objet est créé avec soin dans notre atelier français, garantissant 
                  qualité et authenticité.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-xl text-primary mb-3">
                  🌱 Écologique
                </h3>
                <p className="text-text-secondary">
                  La jesmonite est un matériau respectueux de l&apos;environnement, non toxique 
                  et durable.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-xl text-primary mb-3">
                  ✨ Pièces uniques
                </h3>
                <p className="text-text-secondary">
                  Chaque création est unique avec ses variations naturelles, vous offrant 
                  un objet exclusif.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-xl text-primary mb-3">
                  💝 Avec passion
                </h3>
                <p className="text-text-secondary">
                  Chaque pièce est créée avec amour et attention aux détails pour sublimer 
                  votre intérieur.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-primary/5 rounded-2xl p-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-text-primary mb-4">
              Suivez l&apos;aventure
            </h2>
            <p className="text-text-secondary mb-6">
              Découvrez les coulisses de l&apos;atelier, les nouvelles créations et les projets en cours 
              sur Instagram !
            </p>
            <a
              href="https://www.instagram.com/la_fabrique_des_nines_/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Suivre sur Instagram
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
