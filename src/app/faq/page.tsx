"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Quels sont les délais de fabrication et de livraison ?",
    answer:
      "Chaque pièce est faite à la main sur commande. Comptez 3 à 7 jours ouvrés pour la fabrication selon le produit, puis 2 à 5 jours pour la livraison en France métropolitaine.",
  },
  {
    question: "Comment entretenir mes objets en jesmonite ?",
    answer:
      "La jesmonite est un matériau solide mais nécessite quelques précautions : nettoyez avec un chiffon humide et doux, évitez les produits abrasifs et les chocs. Les porte-savons peuvent être utilisés quotidiennement.",
  },
  {
    question: "Les créations sont-elles vraiment uniques ?",
    answer:
      "Oui ! Chaque pièce est faite à la main, ce qui signifie que les motifs, textures et nuances de couleurs peuvent légèrement varier d'un produit à l'autre. C'est ce qui fait le charme de l'artisanat.",
  },
  {
    question: "Proposez-vous des commandes personnalisées ?",
    answer:
      "Oui, nous proposons des commandes sur-mesure pour certains produits. Contactez-nous via le formulaire de contact ou Instagram pour discuter de votre projet.",
  },
  {
    question: "Quelle est votre politique de retour ?",
    answer:
      "Vous disposez de 14 jours après réception pour retourner un article non utilisé et dans son emballage d'origine. Les frais de retour sont à votre charge. Contactez-nous avant tout retour.",
  },
  {
    question: "Livrez-vous à l'international ?",
    answer:
      "Pour le moment, nous livrons uniquement en France métropolitaine, Belgique, Suisse, Luxembourg et Monaco. N'hésitez pas à nous contacter pour d'autres destinations.",
  },
  {
    question: "Comment puis-je suivre ma commande ?",
    answer:
      "Dès l'expédition de votre commande, vous recevrez un email avec un numéro de suivi qui vous permettra de suivre votre colis en temps réel.",
  },
  {
    question: "Puis-je offrir un produit ?",
    answer:
      "Bien sûr ! Nous pouvons ajouter un message personnalisé à votre commande. Indiquez-le-nous dans les notes de commande ou contactez-nous.",
  },
];

/**
 * Page FAQ
 */
export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4 text-center">
          FAQ
        </h1>
        <p className="text-text-secondary text-lg text-center mb-12">
          Questions fréquemment posées
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <span
                  className={`text-primary text-2xl transform transition-transform ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-text-secondary leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-text-secondary mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </div>
  );
}
