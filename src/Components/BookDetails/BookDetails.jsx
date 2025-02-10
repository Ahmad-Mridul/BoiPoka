import {useLoaderData, useNavigate, useParams } from "react-router";
import { addToLSDMarkAsRead, addToLSDWishList } from "../../Utility/addToDB";

const BookDetails = () => {
    const allBooks = useLoaderData();
    const {bookId}  = useParams();
    const bookDetails = allBooks.find(book => book.bookId===parseInt(bookId));
    const {bookName,category,image,author,review,tags,publisher,totalPages,yearOfPublishing,rating} = bookDetails;
    const navigate = useNavigate();
    const handleGoBack =()=>{
        navigate(-1);
    }
    const handleMarkAsRead = (id) => {
        addToLSDMarkAsRead(id);
    }
    const handleWishlist = (id) => {
        addToLSDWishList(id);
    }
    return (
        <div className="hero bg-base-20 p-4">
            <div className="hero-content flex-col lg:flex-row">
                <img
                src={image}
                className="rounded-lg shadow-2xl w-96" />
                <div>
                <h1 className="text-5xl font-bold">{bookName}</h1>
                <p>By: {author}</p>
                <p>{category}</p>
                <p>{category}</p>
                <p className="py-6">
                    {review}
                </p>
                <p>{tags}</p>
                <p>{totalPages}</p>
                <p>{publisher}</p>
                <p>{yearOfPublishing}</p>
                <p>{rating}</p>
                <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-primary">Mark as Read</button>
                <button onClick={()=>handleWishlist(bookId)} className="btn btn-accent ms-2">Wishlist</button>
                <button onClick={handleGoBack} className="btn btn-accent ms-2">Go back</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;