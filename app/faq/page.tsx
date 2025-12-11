/**
 * Page FAQ - Questions fréquentes
 */

'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Qu\'est-ce que la jesmonite ?',
    answer: 'La jesmonite est un matériau composite écologique, non toxique et respectueux de l\'environnement. Elle est composée d\'une base minérale et d\'une résine acrylique à base d\'eau. Ce matériau offre une grande liberté créative et permet de créer des objets durables et résistants.',
  },
  {
    question: 'Quel est le délai de fabrication ?',
    answer: 'Chaque pièce étant faite main, le délai de fabrication varie entre 5 et 10 jours ouvrés selon le produit. Ce délai ne comprend pas le temps de livraison. Nous vous informons par email dès que votre commande est expédiée.',
  },
  {
    question: 'Comment entretenir mes objets en jesmonite ?',
    answer: 'Les objets en jesmonite sont faciles d\'entretien. Nettoyez-les simplement avec un chiffon doux et humide. Évitez les produits abrasifs et les éponges rugueuses. Pour les porte-savons, rincez-les régulièrement à l\'eau claire pour éviter l\'accumulation de résidus.',
  },
  {
    question: 'Les produits sont-ils résistants à l\'eau ?',
    answer: 'Oui, la jesmonite est imperméable et résiste bien à l\'eau. Cependant, nous recommandons d\'éviter une immersion prolongée et de sécher les objets après contact avec l\'eau pour préserver leur beauté dans le temps.',
  },
  {
    question: 'Puis-je faire une commande personnalisée ?',
    answer: 'Oui ! Nous adorons réaliser des commandes sur mesure. N\'hésitez pas à nous contacter via la page de contact ou sur Instagram pour discuter de votre projet. Nous pouvons personnaliser les couleurs, les dimensions et créer des pièces uniques selon vos envies.',
  },
  {
    question: 'Quels sont les modes de paiement acceptés ?',
    answer: 'Nous acceptons les paiements par carte bancaire via notre plateforme sécurisée Stripe. Toutes les transactions sont cryptées et sécurisées.',
  },
  {
    question: 'Livrez-vous en dehors de la France ?',
    answer: 'Actuellement, nous livrons en France métropolitaine, Belgique, Luxembourg, Suisse et Monaco. Les frais de livraison sont calculés lors du passage de la commande en fonction de votre adresse.',
  },
  {
    question: 'Quelle est votre politique de retour ?',
    answer: 'Vous disposez de 14 jours pour nous retourner un article qui ne vous conviendrait pas. L\'article doit être dans son état d\'origine et non utilisé. Les frais de retour sont à votre charge. Pour plus de détails, consultez nos conditions générales de vente.',
  },
  {
    question: 'Les articles sont-ils emballés avec soin ?',
    answer: 'Absolument ! Chaque article est soigneusement emballé avec des matériaux de protection pour garantir qu\'il arrive en parfait état. Nous utilisons des emballages recyclés et recyclables dans la mesure du possible.',
  },
  {
    question: 'Pourquoi chaque pièce est-elle unique ?',
    answer: 'La jesmonite étant travaillée à la main, chaque création présente des variations naturelles dans les couleurs, les marbrures et les textures. Ces variations font le charme et l\'authenticité de chaque pièce, garantissant que vous possédez un objet véritablement unique.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl font-bold text-text-primary mb-4 text-center">
          Questions fréquentes
        </h1>
        <p className="text-text-secondary text-lg mb-12 text-center">
          Vous avez une question ? Consultez nos réponses ci-dessous ou contactez-nous
        </p>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-text-primary pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary/5 rounded-2xl p-8 text-center">
          <h2 className="font-serif text-2xl font-semibold text-text-primary mb-3">
            Vous n&apos;avez pas trouvé votre réponse ?
          </h2>
          <p className="text-text-secondary mb-6">
            N&apos;hésitez pas à nous contacter, nous serons ravis de vous aider !
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Nous contacter
          </a>
        </div>
      </div>
    </div>
  );
}
