// frontend/tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Définissez ici les chemins vers vos fichiers JSX/HTML
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Utilisez 'extend' pour ajouter ces polices en plus des polices par défaut
    extend: {
      fontFamily: {
        'sans': ["Montserrat", "sans-serif"],
        'secondary': ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}