import PropTypes from "prop-types";
import { NavLink } from "react-router";
const BooksHome = ({ book }) => {
    const {bookId, image, tags, bookName, author, category, rating,totalPages,yearOfPublishing } = book;
    return (
        <NavLink to={`/book/${bookId}`} className="card bg-base-100 shadow-xl mb-4 p-4 border-1 border-amber-400">
            <figure>
                <img
                className="h-96 w-full rounded-2xl"
                src={image}
                alt={bookName}
                />
            </figure>
            <div className="card-body">
                <div className="card-actions">
                    {
                        tags.map((tag,idx) =>  <div key={idx} className="badge badge-outline">{tag}</div>)
                    }
                </div>
                <h2 className="card-title">{bookName}</h2>
                <p>By: {author}</p>
                <p>{category}</p>
                <p>{rating}</p>
                <p>{totalPages}</p>
                <p>{yearOfPublishing}</p>
            </div>
        </NavLink>
    );
};
BooksHome.propTypes = {
    book: PropTypes.object.isRequired,
};
export default BooksHome;
