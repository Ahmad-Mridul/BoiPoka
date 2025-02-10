import { useEffect, useState } from "react";
import Hero from "../Hero/Hero";
import BooksHome from "./BooksHome";

const Home = () => {
    const [books,setBooks] = useState([]);
    useEffect(()=>{
        fetch("/booksData.json")
        .then(response => response.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div>
            <Hero></Hero>
            <h1 className="text-center font-bold text-[40px] mt-[100px] mb-[36px]">Books</h1>
            <div className="md:grid md:grid-cols-2 gap-4 p-4 lg:grid-cols-3">
                {
                    books.map(book => <BooksHome key={book.bookId} book={book}></BooksHome>)
                }
            </div>
        </div>
    );
};

export default Home;