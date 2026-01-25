// Importations et Configuration
const express = require('express')
const { model } = require('mongoose')
const router = express.Router()
const Book = require('./book.model')
const {postABook, getAllBooks, getSingleBook,updateABook, deleteBook}  = require('./book.controller')
const verifyAdminToken = require('../middleware/verifyAdminToken')

//frontend => backend server => controller =>book schema =>database => send to server => back to the frontend

//  Définition des Points d'Entrée (Endpoints)
// post a book
router.post("/create-book",verifyAdminToken, postABook);

// get All books
router.get("/", getAllBooks);

// get a single book
router.get("/:id", getSingleBook);

// update book
router.put("/edit/:id", verifyAdminToken, updateABook);

// delete book
router.delete("/:id",verifyAdminToken, deleteBook)


module.exports = router;