// Mock products database
export const productsData: Record<string, any> = {
  '1': {
    id: '1',
    name: 'Panier en Osier Naturel',
    price: 45.00,
    image: '/images/product-1.jpg',
    description: 'Panier artisanal tressé à la main avec de l\'osier naturel de qualité supérieure. Parfait pour ranger vos affaires ou pour une décoration authentique.',
    details: [
      'Dimensions: 30cm x 40cm',
      'Matériau: Osier naturel',
      'Fabriqué en France',
      'Entretien: Nettoyer avec un chiffon humide',
    ],
  },
  '2': {
    id: '2',
    name: 'Poterie Terre Cuite',
    price: 38.00,
    image: '/images/product-2.jpg',
    description: 'Vase en terre cuite façonné et cuit au four traditionnel. Chaque pièce est unique avec ses variations naturelles de couleur.',
    details: [
      'Hauteur: 25cm',
      'Matériau: Terre cuite naturelle',
      'Fabriqué à la main',
      'Adapté aux plantes',
    ],
  },
  '3': {
    id: '3',
    name: 'Couverture en Laine',
    price: 89.00,
    image: '/images/product-3.jpg',
    description: 'Plaid en laine naturelle tissée à la main selon les techniques traditionnelles. Doux et chaleureux, parfait pour les soirées d\'hiver.',
    details: [
      'Dimensions: 150cm x 200cm',
      'Matériau: Laine naturelle 100%',
      'Tissé à la main',
      'Lavable en machine à 30°C',
    ],
  },
};
