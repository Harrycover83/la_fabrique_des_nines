# ✅ Prochaines Étapes - Configuration Sanity CMS

## 🎯 Objectif
Activer Sanity pour qu'Aurélie puisse gérer les produits du site sans coder !

---

## 📋 Étape 1 : Initialiser Sanity (5 minutes)

1. **Ouvrez un terminal** dans le dossier du projet

2. **Lancez la commande** :
   ```bash
   npx sanity init
   ```

3. **Répondez aux questions** :
   - **Create new project?** → Tapez **Y** (oui)
   - **Project name** → Tapez **La Fabrique des Nines**
   - **Use the default dataset configuration?** → Tapez **Y** (oui)

4. **⚠️ IMPORTANT : Notez le Project ID !**
   
   La commande affichera quelque chose comme :
   ```
   ✔ Success! Your project is ready
   Project ID: abc12345 ← COPIEZ CE CODE !
   ```

---

## 📋 Étape 2 : Configurer les clés (5 minutes)

### A. Créer un token API

1. Allez sur : [https://manage.sanity.io](https://manage.sanity.io)
2. Connectez-vous (ou créez un compte)
3. Sélectionnez votre projet **La Fabrique des Nines**
4. Allez dans **API** → **Tokens**
5. Cliquez **Add API Token**
6. Donnez un nom : **Production Token**
7. Permissions : **Editor**
8. Cliquez **Add Token**
9. **⚠️ Copiez le token immédiatement !** (vous ne pourrez plus le revoir)

### B. Mettre à jour .env.local

1. Ouvrez le fichier `.env.local` à la racine du projet
2. Remplacez les valeurs placeholder :

```env
# Stripe (à configurer plus tard)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=votre_cle_publique_stripe
STRIPE_SECRET_KEY=votre_cle_secrete_stripe
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Sanity CMS (METTEZ À JOUR ICI)
NEXT_PUBLIC_SANITY_PROJECT_ID=abc12345  ← Collez votre Project ID ici
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-03-15
SANITY_API_TOKEN=votre_token_ici  ← Collez votre Token ici
```

3. Sauvegardez le fichier

---

## 📋 Étape 3 : Déployer Sanity Studio (2 minutes)

1. **Dans le terminal**, lancez :
   ```bash
   npx sanity deploy
   ```

2. **Choisissez un nom** : `lafabriquedesnines` (ou autre)

3. **Résultat** :
   - Studio accessible sur : `https://lafabriquedesnines.sanity.studio`
   - Aussi accessible localement : `http://localhost:3000/studio`

---

## 📋 Étape 4 : Ajouter les catégories (5 minutes)

1. **Lancez le site** :
   ```bash
   npm run dev
   ```

2. **Ouvrez le Studio** : [http://localhost:3000/studio](http://localhost:3000/studio)

3. **Dans la barre latérale**, cliquez sur **Category**

4. **Créez 5 catégories** en cliquant **+ Create** :

   | Titre | Slug | Description |
   |-------|------|-------------|
   | Plateaux | `plateaux` | Plateaux décoratifs en jesmonite |
   | Cendriers | `cendriers` | Cendriers artisanaux |
   | Porte-savons | `porta-sabon` | Porte-savons uniques |
   | Statues | `statues` | Sculptures décoratives |
   | Autres | `autres` | Autres créations |

5. **Publiez chaque catégorie** (bouton **Publish** en bas)

---

## 📋 Étape 5 : Ajouter un premier produit test (10 minutes)

1. **Dans le Studio**, cliquez sur **Product** dans la barre latérale

2. **Cliquez** sur **+ Create**

3. **Remplissez les champs** :
   - **Nom** : ex. "Plateau Terracotta"
   - **Slug** : ex. "plateau-terracotta" (sera auto-généré)
   - **Image** : Uploadez une photo (drag & drop)
   - **Prix** : ex. 45
   - **Catégorie** : Sélectionnez "Plateaux"
   - **Description** : Décrivez le produit
   - **Dimensions** : ex. "25cm x 25cm x 2cm"
   - **Matériau** : "Jesmonite"
   - **Délai de fabrication** : "3-5 jours ouvrés"
   - **Couleurs disponibles** : Ajoutez les couleurs (ex: "Terracotta", "Beige")
   - **Nouveau produit ?** : Cochez si nouveau
   - **Best-seller ?** : Cochez si best-seller

4. **Cliquez** sur **Publish** en bas

5. **Vérifiez** : Retournez sur le site [http://localhost:3000](http://localhost:3000) et actualisez

---

## 📋 Étape 6 : Télécharger les photos Instagram (30 minutes)

📖 **Suivez le guide détaillé** : [GUIDE_PHOTOS.md](GUIDE_PHOTOS.md)

**Résumé rapide** :
1. Allez sur [@la_fabrique_des_nines_](https://instagram.com/la_fabrique_des_nines_)
2. Utilisez [downloadgram.com](https://downloadgram.com) pour télécharger les photos
3. Optimisez-les avec [tinypng.com](https://tinypng.com)
4. Renommez-les selon la liste dans le guide
5. Placez-les dans le dossier `public/images/`
6. Uploadez-les dans Sanity Studio pour chaque produit

---

## ✅ Vérification finale

Une fois toutes les étapes complétées :

- [ ] Sanity initialisé (Project ID obtenu)
- [ ] Token API créé et configuré dans .env.local
- [ ] Sanity Studio déployé
- [ ] 5 catégories créées dans le Studio
- [ ] Au moins 1 produit test ajouté
- [ ] Photos Instagram téléchargées et optimisées
- [ ] Le site affiche les produits depuis Sanity

---

## 🎉 Prêt pour Aurélie !

Une fois ces étapes complétées, Aurélie pourra :

✅ Ajouter de nouveaux produits via [http://localhost:3000/studio](http://localhost:3000/studio)  
✅ Modifier les prix et descriptions  
✅ Uploader des photos facilement  
✅ Gérer l'inventaire sans toucher au code  
✅ Marquer les nouveautés et best-sellers  

---

## 🆘 Besoin d'aide ?

- 📖 Guide complet Sanity : [GUIDE_SANITY.md](GUIDE_SANITY.md)
- 📸 Guide photos : [GUIDE_PHOTOS.md](GUIDE_PHOTOS.md)
- 🚀 Guide démarrage : [GUIDE_DEMARRAGE.md](GUIDE_DEMARRAGE.md)
- 📧 Support Sanity : [help.sanity.io](https://help.sanity.io)

---

**Bonne chance ! 🚀**
