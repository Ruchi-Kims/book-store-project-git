//Importations et Configuration Initiale

const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cors = require("cors")
require('dotenv').config()
const port = process.env.PORT || 5000

//Middlewares de base (Configuration globale)

// Middleware JSON:permet à Express de lire le corps des requêtes POST (comme celle envoyée pour créer un livre)
app.use(express.json());

// Middleware Cors : permet l'acceptation des requetes frontend par le backend
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}))


// Définition des Routes (Le Dispatching) : dirige toutes les requêtes qui commencent par /api/books vers le fichier book.route.js
const bookRoutes = require("./src/books/book.route");
const orderRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route")

app.use("/api/books" , bookRoutes)
app.use("/api/orders" , orderRoutes)
app.use("/api/auth" , userRoutes)



// Connexion Base de données et Route de test
async function main() {
  await mongoose.connect(process.env.DB_URL);
app.get('/', (req, res) => {
  res.send('Book store server is running!')
})
}

//Démarrage du serveur

main().then(() => console.log("Mongo connect successfuly !")).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
