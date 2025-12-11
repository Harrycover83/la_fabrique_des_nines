export default function AProposPage() {
  return (
    <div className="bg-artisan-warm min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-artisan-clay mb-6">
            Notre Histoire
          </h1>
          <p className="text-xl text-artisan-charcoal leading-relaxed">
            La passion de l'artisanat transmise de génération en génération
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg mb-12">
            <h2 className="text-3xl font-serif text-artisan-clay mb-6">
              La Fabrique des Nines
            </h2>
            <div className="prose prose-lg text-artisan-charcoal space-y-4">
              <p>
                Bienvenue dans l'univers de La Fabrique des Nines, où chaque création raconte 
                une histoire unique. Née d'une passion pour l'artisanat authentique et les 
                matériaux naturels, notre atelier perpétue un savoir-faire traditionnel tout 
                en apportant une touche contemporaine à nos créations.
              </p>
              <p>
                Tout a commencé avec l'envie de créer des objets qui durent, qui ont une âme, 
                et qui apportent de la chaleur dans nos intérieurs. Inspirés par les techniques 
                ancestrales et les matériaux nobles, nous façonnons chaque pièce avec soin et 
                attention aux détails.
              </p>
              <p>
                Notre démarche s'inscrit dans une philosophie respectueuse de l'environnement. 
                Nous privilégions les matériaux naturels et durables : l'osier, la terre cuite, 
                la laine, le lin... Des matières qui vieillissent avec élégance et portent en 
                elles l'histoire de leur création.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-artisan-sage p-8 rounded-lg">
              <h3 className="text-2xl font-serif text-artisan-clay mb-4">
                Notre Philosophie
              </h3>
              <p className="text-artisan-charcoal leading-relaxed">
                Créer des pièces uniques qui apportent de l'authenticité et de la chaleur 
                dans votre quotidien. Chaque création est pensée pour durer et traverser 
                le temps avec élégance.
              </p>
            </div>

            <div className="bg-artisan-cream p-8 rounded-lg">
              <h3 className="text-2xl font-serif text-artisan-clay mb-4">
                Notre Engagement
              </h3>
              <p className="text-artisan-charcoal leading-relaxed">
                Respecter l'environnement en utilisant des matériaux naturels et durables. 
                Perpétuer les techniques artisanales traditionnelles et soutenir 
                l'économie locale.
              </p>
            </div>
          </div>

          {/* Process */}
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-serif text-artisan-clay mb-8 text-center">
              Notre Processus de Création
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-artisan-terracotta text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-medium text-artisan-clay mb-2">
                    Sélection des Matériaux
                  </h3>
                  <p className="text-artisan-charcoal">
                    Nous choisissons avec soin des matériaux naturels de qualité supérieure, 
                    en privilégiant les producteurs locaux et éthiques.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-artisan-terracotta text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-medium text-artisan-clay mb-2">
                    Façonnage à la Main
                  </h3>
                  <p className="text-artisan-charcoal">
                    Chaque pièce est façonnée avec patience et précision, selon des techniques 
                    artisanales transmises de génération en génération.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-artisan-terracotta text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-medium text-artisan-clay mb-2">
                    Finitions Soignées
                  </h3>
                  <p className="text-artisan-charcoal">
                    Les finitions sont réalisées avec le plus grand soin pour garantir 
                    la qualité et la durabilité de chaque création.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
