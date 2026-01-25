const Book = require('./book.model')

const postABook = async(req,res)  =>{

    try{
        const newBook = await Book({...req.body});
                await newBook.save();
                res.status(200).send({message: "Book posted successfully", book: newBook})
    }
    catch(error){
        console.error("Error creating book", error);
                res.status(500).send({message: "Failed to create book"})

    }
}

const getAllBooks = async(req,res) =>{
    try {
        const books = await Book.find().sort({createdAt: -1});
        res.status(200).send(books)

        
    } catch (error) {
        console.error("Error fetching books", error);
        res.status(500).send({message: "Failed to create books"})
    }
}

const getSingleBook = async(req,res) =>{

    try {
        const {id} = req.params;
        const book = await Book.findById(id);
        if(!book){
            res.status(404).send({message: "Book not Found"})
        }
        res.status(200).send(book)

        
    } catch (error) {
        console.error("Error fetching book", error);
        res.status(500).send({message: "Failed to create book"})
    }

}

const updateABook = async(req,res) =>{

    try {
        const {id} = req.params;
        const updateBook = await Book.findByIdAndUpdate(id, req.body,{new: true});
        if(!updateBook){
            res.status(404).send({message: "Book is not Found"})
        }
        res.status(200).send(
            {
                message: "Book posted successfully",
                book: updateBook
            }
        )

        
    } catch (error) {
        console.error("Error fetching book", error);
        res.status(500).send({message: "Failed to create book"})
    }
}

const deleteBook = async (req,res) =>{

    try {
        const {id} = req.params;
        const deleteBook = await Book.findByIdAndDelete(id);
        if(!deleteBook){
            res.status(404).send({message: "Book is not Found"})
        }
        res.status(200).send(
            {
                message: "Book deleted successfully",
                book: deleteBook
            }
        )

        
    } catch (error) {
        console.error("Error deleting a book", error);
        res.status(500).send({message: "Failed to delete a book"})
    }
}

module.exports = {
    postABook,
    getAllBooks,
    getSingleBook,
    updateABook,
    deleteBook

}