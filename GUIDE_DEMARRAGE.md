# 🚀 GUIDE DE DÉMARRAGE RAPIDE

## ✅ Le site est prêt !

Votre site e-commerce **La Fabrique des Nines** est maintenant construit et opérationnel.

## 📋 Commandes essentielles

### Développement

```bash
# Démarrer le serveur de développement
npm run dev

# Le site sera accessible sur http://localhost:3000
```

### Production

```bash
# Construire le site pour la production
npm run build

# Lancer le serveur de production
npm start
```

### Autres

```bash
# Vérifier le code (linting)
npm run lint

# Créer les images placeholder (déjà fait)
node scripts/create-placeholders.js
```

## 🎨 PERSONNALISATION RAPIDE

### 1. Modifier les couleurs

Éditez `src/app/globals.css` et changez les valeurs des variables CSS :

```css
:root {
  --background: #F6F0EA;    /* Votre couleur de fond */
  --primary: #C47A5A;       /* Votre couleur principale */
  --secondary: #D6A548;     /* Votre couleur secondaire */
  --accent: #2557FF;        /* Votre couleur d'accent */
}
```

### 2. Ajouter/Modifier des produits

Éditez `src/data/products.ts` :

```typescript
export const products: Product[] = [
  {
    id: "1",
    slug: "mon-nouveau-produit",
    name: "Mon Nouveau Produit",
    price: 50,
    category: "plateaux",
    image: "/images/mon-produit.svg",
    description: "Description de mon produit...",
    // ... etc
  },
  // Ajoutez vos produits ici
];
```

### 3. Remplacer les images

Les images actuelles sont des placeholders SVG. Pour ajouter vos vraies photos :

1. Placez vos images dans `public/images/`
2. Nommez-les comme les SVG existants (ex: `plateaux-01.jpg` remplace `plateaux-01.svg`)
3. Dans `src/data/products.ts`, changez `.svg` en `.jpg` ou `.png`

**Images nécessaires :**
- `hero-plateau.jpg` (1920x1080px)
- `plateaux-01.jpg`, `plateaux-02.jpg` (800x800px)
- `cendrier-01.jpg` (800x800px)
- `porta-sabon-bleu.jpg`, `porta-sabon-02.jpg` (800x800px)
- `statue-01.jpg`, `statue-02.jpg` (800x800px)
- `autres-01.jpg` (800x800px)
- `atelier.jpg` (1200x800px)
- `instagram-1.jpg` à `instagram-6.jpg` (600x600px)

### 4. Modifier les textes

- **Page d'accueil** : `src/app/page.tsx`
- **À propos** : `src/app/a-propos/page.tsx`
- **FAQ** : `src/app/faq/page.tsx`
- **Contact** : `src/app/contact/page.tsx`
- **Header** : `src/components/Header.tsx`
- **Footer** : `src/components/Footer.tsx`

## 💳 CONFIGURER STRIPE (PAIEMENTS)

### Mode Test (développement)

1. Créez un compte sur [stripe.com](https://stripe.com)
2. Activez le mode Test
3. Allez dans **Développeurs > Clés API**
4. Copiez vos clés de test
5. Éditez `.env.local` :

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_VOTRE_CLE_PUBLIQUE
STRIPE_SECRET_KEY=sk_test_VOTRE_CLE_SECRETE
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

6. Redémarrez le serveur (`npm run dev`)

### Cartes de test Stripe

Pour tester les paiements en mode test :
- **Succès** : 4242 4242 4242 4242
- **Échec** : 4000 0000 0000 0002
- Date d'expiration : n'importe quelle date future
- CVC : n'importe quels 3 chiffres

### Mode Production (site en ligne)

1. Sur Stripe, passez en mode Live
2. Copiez vos clés Live
3. Sur Vercel, ajoutez les variables d'environnement :
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...`
   - `STRIPE_SECRET_KEY=sk_live_...`
   - `NEXT_PUBLIC_SITE_URL=https://votre-site.vercel.app`

## 🚢 DÉPLOYER SUR VERCEL (gratuit)

1. Créez un compte sur [vercel.com](https://vercel.com)
2. Installez Git et poussez votre code sur GitHub
3. Sur Vercel, cliquez "New Project"
4. Importez votre dépôt GitHub
5. Ajoutez les variables d'environnement (voir ci-dessus)
6. Cliquez "Deploy"
7. Votre site sera en ligne en quelques minutes !

## 📁 STRUCTURE DES PAGES

```
/ (Accueil)
├── /boutique (Liste des produits avec filtres)
├── /produits/[slug] (Page détail d'un produit)
├── /panier (Panier d'achat)
├── /success (Confirmation après paiement)
├── /a-propos (Histoire et démarche)
├── /faq (Questions fréquentes)
├── /contact (Formulaire de contact)
├── /mentions-legales
└── /politique-confidentialite
```

## 🎯 CHECKLIST AVANT MISE EN LIGNE

- [ ] Remplacer toutes les images SVG par de vraies photos
- [ ] Configurer les clés Stripe en mode Live
- [ ] Vérifier et personnaliser tous les textes
- [ ] Ajouter vos vrais produits
- [ ] Tester le parcours d'achat complet
- [ ] Vérifier les mentions légales (SIRET, adresse)
- [ ] Configurer l'adresse email de contact
- [ ] Tester sur mobile, tablette et desktop
- [ ] Vérifier les liens Instagram
- [ ] Configurer les webhooks Stripe (optionnel)

## 🆘 EN CAS DE PROBLÈME

### Le site ne démarre pas
```bash
# Supprimez node_modules et réinstallez
Remove-Item -Recurse -Force node_modules
npm install
npm run dev
```

### Erreur Stripe
- Vérifiez que vos clés sont dans `.env.local`
- Redémarrez le serveur après modification du `.env.local`
- Vérifiez que vous utilisez les bonnes clés (test ou live)

### Images ne s'affichent pas
- Vérifiez que les fichiers sont dans `public/images/`
- Vérifiez les extensions dans `src/data/products.ts`
- Rechargez la page avec Ctrl+F5

## 📞 CONTACT

Pour toute question technique ou aide supplémentaire, n'hésitez pas !

---

**Bon courage avec votre boutique en ligne ! 🎉**
