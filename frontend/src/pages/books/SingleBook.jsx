import React from 'react'
import { useParams } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { useFetchBookByIdQuery } from '../../redux/features/books/booksApi';
import { getImgUrl } from '../../utils/getImgUrl';
import { useDispatch } from 'react-redux'; // Importez useDispatch
import { addToCart } from '../../redux/features/cart/cartSlice'; // Importez votre action

const SingleBook = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { data, isLoading, isError } = useFetchBookByIdQuery(id);

    // On s'adapte à la structure de la réponse (soit l'objet direct, soit {book: ...})
    const book = data?.book || data;

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    if (isLoading) return <div className="p-5 text-center">Loading...</div>;
    if (isError) return <div className="p-5 text-center text-red-500">Error loading book info. Please check the ID.</div>;
    if (!book) return <div className="p-5 text-center">No book found.</div>;

    return (
        <div className="w-96 shadow-md p-5 mx-auto">
            <h1 className="text-2xl font-bold mb-6">{book?.title}</h1>

            <div className=''>
                <div>
                    <img
                        src={`${getImgUrl(book?.coverImage)}`}
                        alt={book?.title}
                        className="mb-8 w-full rounded-md"
                    />
                </div>

                <div className='mb-5'>
                    <p className="text-gray-700 mb-2"><strong>Author:</strong> {book?.author || 'Admin'} </p>
                    <p className="text-gray-700 mb-4">
                        <strong>Published:</strong> {book?.createdAt ? new Date(book.createdAt).toLocaleDateString() : 'N/A'} 
                    </p>
                    <p className="text-gray-700 mb-4 capitalize">
                        <strong>Category:</strong> {book?.category} 
                    </p>
                    <p className="text-gray-700"><strong>Description:</strong> {book?.description} </p>
                </div>

                <button
                    onClick={() => handleAddToCart(book)}
                    className="bg-yellow-500 py-2 rounded-md text-base font-bold hover:bg-black hover:text-white transition-all duration-200 cursor-pointer px-6 space-x-1 flex items-center gap-1">
                    <FiShoppingCart />
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    )
}

export default SingleBook