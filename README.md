# 📚 Book Store Project

Application **full-stack** de gestion d’une librairie (Book Store) avec un **backend Node.js / Express** et un **frontend React (Vite)**.

Ce projet permet de gérer les livres, les utilisateurs, les commandes et les statistiques via une API REST consommée par une interface web moderne.

---

## 🚀 Fonctionnalités

### Backend
- 📖 Gestion des livres
- 👤 Gestion des utilisateurs
- 🛒 Gestion des commandes
- 📊 Statistiques
- 🔐 Middleware (sécurité, validations, etc.)
- API REST avec Express

### Frontend
- ⚛️ Interface utilisateur avec React
- ⚡ Vite pour un build rapide
- 🔎 Consommation de l’API backend
- 🎨 UI moderne et responsive

---

## 🛠️ Technologies utilisées

### Backend
- Node.js
- Express.js
- JavaScript
- Middleware personnalisés

### Frontend
- React
- Vite
- JavaScript
- ESLint

---

## 📂 Structure du projet

BOOK-STORE-PROJECT/
│
├── backend/
│ ├── src/
│ │ ├── books/
│ │ ├── users/
│ │ ├── orders/
│ │ ├── stats/
│ │ └── middleware/
│ ├── index.js
│ ├── package.json
│ └── .env.example
│
├── frontend/
│ ├── src/
│ ├── public/
│ ├── index.html
│ ├── vite.config.js
│ └── package.json
│
├── README.md
└── .gitignore


---

## ⚙️ Installation et lancement

### 1️⃣ Cloner le projet
```bash
git clone https://github.com/TON-USERNAME/book-store-project.git
cd book-store-project
2️⃣ Lancer le backend
cd backend
npm install
npm run dev
👉 Le serveur démarre sur le port défini dans le fichier .env.

3️⃣ Lancer le frontend
cd frontend
npm install
npm run dev
👉 L’application est accessible depuis le navigateur.

🔐 Variables d’environnement
Créer un fichier .env dans le dossier backend en vous basant sur :

PORT=5000
DB_URL=your_database_url
JWT_SECRET=your_secret_key
⚠️ Le fichier .env n’est pas versionné pour des raisons de sécurité.

🎯 Objectif du projet
Ce projet a été réalisé dans un objectif :

d’apprentissage du développement full-stack

de pratique des API REST

de mise en place d’une architecture propre frontend / backend

de présentation dans un portfolio développeur

👤 Auteur
Ruchi
Développeur web junior
GitHub : https://github.com/Ruchi-Kims
