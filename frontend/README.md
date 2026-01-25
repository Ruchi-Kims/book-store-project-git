# 📚 Book Store Project (Frontend)

## 🌟 Aperçu du Projet

Ce projet est la partie cliente (Frontend) d'une application e-commerce moderne dédiée à la vente de livres.

L'objectif principal est de fournir une interface utilisateur rapide, réactive et intuitive, couvrant toutes les fonctionnalités clés d'une boutique en ligne : navigation, affichage des produits, gestion du panier, et tunnel de paiement.

> **⚠️ STATUT DU PROJET ACTUEL :**
> Ce dépôt contient l'intégralité du Frontend. Le projet est actuellement configuré pour récupérer ses données de produits depuis un fichier local (`books.json`). L'étape suivante critique est l'intégration du **Backend (API REST)** pour la persistance des données et l'authentification utilisateur.

## 🛠️ Stack Technique

Ce projet a été construit en utilisant un ensemble d'outils performants et modernes :

| Catégorie | Outil | Version/Utilisation |
| :--- | :--- | :--- |
| **Langage** | **JavaScript** | ES6+ |
| **Librairie** | **React** | Vitesse et modularité de l'interface utilisateur. |
| **Bundler / Dev** | **Vite** | Serveur de développement ultra-rapide et optimisation du *build*. |
| **Styling** | **Tailwind CSS** | Framework CSS utilitaire pour un développement *responsive* et stylisé. |
| **Gestion d'État** | **Redux Toolkit** | Gestion centralisée et prévisible de l'état (notamment le panier). |
| **Routage** | **React Router DOM v6** | Routage déclaratif et structuré de l'application. |
| **Formulaires** | **React Hook Form** | Gestion performante et simplifiée des validations et des états de formulaire (`CheckoutPage`). |

## ✨ Fonctionnalités Implémentées

Le Frontend couvre les aspects suivants de l'expérience utilisateur :

* **Page d'Accueil** : Affichage d'une bannière de promotion, carrousels des **Top Sellers** (avec filtre par catégorie) et **Recommandations** (utilisant la librairie Swiper).
* **Catalogue Produit** : Utilisation du composant réutilisable `<BookCard />` pour l'affichage des produits.
* **Panier (Cart)** : Gestion complète du panier via **Redux** (ajout, suppression d'articles, effacement total).
* **Tunnel de Commande (Checkout)** : Formulaire de livraison et de paiement `Cash on Delivery` utilisant **React Hook Form** pour la validation.
* **Structure** : Mise en place des routes `/login`, `/register`, `/orders`, et `/about` (en tant que *placeholders* pour l'extension future).
* **Design** : Interface entièrement **Responsive** grâce à Tailwind CSS.

## 📁 Structure du Projet

L'organisation des fichiers suit les conventions modernes de React, séparant les préoccupations par rôle :

## 🚀 Démarrage Rapide (Installation Locale)

Pour exécuter le projet sur votre machine en tant que développeur :

1.  **Cloner le dépôt :**
    ```bash
    git clone [URL_DE_VOTRE_DEPOT]
    cd book-store-project
    cd frontend /
    ```

2.  **Installer les dépendances :**
    ```bash
    npm install
    # ou yarn install
    ```

3.  **Lancer le serveur de développement :**
    ```bash
    npm run dev
    # ou yarn dev
    ```

L'application sera accessible à l'adresse `http://localhost:5173` (ou port similaire).

## ⏭️ Prochaines Étapes (Projet Backend)

La feuille de route se concentre sur la création d'une API backend pour dynamiser l'application :

1.  **Authentification** : Implémenter le Login/Register avec JWT.
2.  **API Produit** : Créer des endpoints CRUD pour les livres (lecture dynamique des données).
3.  **API Commande** : Persister les commandes dans une base de données (ex: MongoDB).