# 🚀 Quick Start - Sanity Studio

## ✅ Configuration terminée !

Le Studio Sanity est maintenant configuré et accessible :

- **En ligne** : https://lafabriquedesnines.sanity.studio
- **Local** : http://localhost:3000/studio

---

## 📋 Étape suivante : Ajouter les catégories

1. **Ouvrez le Studio** : http://localhost:3000/studio

2. **Dans le menu latéral**, cliquez sur **"Category"**

3. **Cliquez sur le bouton bleu "Create"** en haut à droite

4. **Créez ces 5 catégories** (dans l'ordre) :

### Catégorie 1 : Plateaux
```
Titre: Plateaux
Slug: plateaux (généré automatiquement)
Description: Plateaux décoratifs en jesmonite pour sublimer votre intérieur
```
→ Cliquez **Publish** en bas à droite

### Catégorie 2 : Cendriers
```
Titre: Cendriers
Slug: cendriers
Description: Cendriers artisanaux en jesmonite, pièces uniques
```
→ Cliquez **Publish**

### Catégorie 3 : Porte-savons
```
Titre: Porte-savons
Slug: porta-sabon
Description: Porte-savons en jesmonite, design minimaliste
```
→ Cliquez **Publish**

### Catégorie 4 : Statues
```
Titre: Statues
Slug: statues
Description: Sculptures décoratives en jesmonite
```
→ Cliquez **Publish**

### Catégorie 5 : Autres
```
Titre: Autres
Slug: autres
Description: Autres créations artisanales en jesmonite
```
→ Cliquez **Publish**

---

## 🎨 Ajouter votre premier produit

1. **Dans le menu latéral**, cliquez sur **"Product"**

2. **Cliquez sur "Create"**

3. **Remplissez le formulaire** :

```
Nom: Plateau Rond Terracotta
Slug: plateau-rond-terracotta (généré automatiquement)

Image: 
→ Cliquez sur "Upload" ou drag & drop une photo
→ Ajustez le cadrage si nécessaire

Prix: 45

Catégorie:
→ Cliquez sur "Select" et choisissez "Plateaux"

Description:
Magnifique plateau rond en jesmonite couleur terracotta. 
Parfait pour sublimer votre table basse ou comme vide-poche élégant.
Chaque pièce est unique avec ses nuances et variations naturelles.

Dimensions: Ø 25cm x 2cm
Matériau: Jesmonite
Délai de fabrication: 3-5 jours ouvrés

Couleurs disponibles:
→ Cliquez "Add item" et tapez: Terracotta
→ Cliquez "Add item" et tapez: Beige naturel

☑ Nouveau produit (cochez si c'est une nouveauté)
☐ Best-seller (cochez si c'est un best-seller)
```

4. **Cliquez sur "Publish"** en bas à droite

---

## 🖼️ Où trouver les photos ?

### Option 1 : Photos Instagram (recommandé)
Suivez le guide [GUIDE_PHOTOS.md](GUIDE_PHOTOS.md) pour télécharger les 17 photos depuis [@la_fabrique_des_nines_](https://instagram.com/la_fabrique_des_nines_)

### Option 2 : Photos placeholder (temporaire)
Les fichiers SVG dans `public/images/` peuvent être utilisés temporairement.

---

## 🔄 Workflow quotidien pour Aurélie

### Ajouter un nouveau produit
1. Ouvrir http://localhost:3000/studio
2. Product → Create
3. Remplir les champs + Upload photo
4. Publish

### Modifier un prix
1. Product → Cliquer sur le produit
2. Changer le prix
3. Publish

### Marquer en rupture de stock
1. Créer un nouveau champ "En stock" dans le schéma (optionnel)
2. Ou mettre le produit en "Draft" (non publié)

### Ajouter une nouvelle catégorie
1. Category → Create
2. Titre + Description
3. Publish

---

## 🎯 Prochaine étape : Connecter le site à Sanity

Actuellement, le site utilise encore les données statiques de `src/data/products.ts`.

Pour que le site affiche les produits depuis Sanity, il faut :

1. **Mettre à jour les pages** pour utiliser les fonctions de `lib/sanity.ts`
2. **Remplacer** les imports de `products.ts` par des appels API Sanity

Je peux faire cette mise à jour automatiquement. Dites-moi quand vous aurez ajouté quelques produits dans le Studio !

---

## ✅ Checklist

- [ ] 5 catégories créées et publiées
- [ ] Au moins 1 produit test ajouté
- [ ] Photos téléchargées depuis Instagram
- [ ] Plusieurs produits ajoutés avec leurs vraies photos
- [ ] Site connecté à Sanity (remplace les données statiques)
- [ ] Test complet du workflow

---

## 🆘 Aide

**Le Studio ne s'ouvre pas ?**
→ Vérifiez que le serveur tourne : `npm run dev`
→ Allez sur http://localhost:3000/studio

**Erreur d'authentification ?**
→ Reconnectez-vous : `npx sanity login`

**Les changements n'apparaissent pas sur le site ?**
→ Normal ! Le site utilise encore les données statiques.
→ Je dois mettre à jour le code pour utiliser Sanity.

---

**Prêt à remplir le Studio ! 🎨**
