import { NavLink, useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getLSDMarkAsRead, getLSDWishListData } from "../../Utility/addToDB";
import BooksHome from "../Home/BooksHome";
import { useEffect, useState } from "react";
const ListedBooks = () => {
    const allBooks = useLoaderData();
    console.log(allBooks);
    
    const [sort,setSort] = useState('');
    const [readList, setReadList] = useState([]);
    useEffect(() => {
        const localStorageMarkAsRead = getLSDMarkAsRead();
        const localStorageDataInt = localStorageMarkAsRead.map((data) => JSON.parse(data));
        const markAsReadBook = allBooks.filter((book) =>
            localStorageDataInt.includes(book.bookId)
        );
        console.log("mark as read: ",markAsReadBook);
        
        setReadList(markAsReadBook);
    },[])
    
    const wishlistStorage = getLSDWishListData();
    const wishlistStorageInt = wishlistStorage.map(data => JSON.parse(data));
    const wishlistBook = allBooks?.filter(book => wishlistStorageInt.includes(book.bookId)) ?? [];
    const dropdown = <>
        <NavLink onClick={()=>handleSort('rating')}>Rating</NavLink>
        <NavLink onClick={()=>handleSort('number of pages')}>Number of Pages</NavLink>
        <NavLink onClick={()=>handleSort('publisher year')}>Publisher year</NavLink>
    </>
    const handleSort = sortType => {
        setSort(sortType);
        if(sortType === 'rating'){
            const sortedReadBooks = [...readList].sort((a,b)=> a.rating - b.rating);
            setReadList(sortedReadBooks)
        }
        if(sortType==='number of pages'){
            const sortedReadList = readList.sort((a,b)=> a.totalPages - b.totalPages);
            setReadList(sortedReadList)
        }
        if(sortType==='publisher year'){
            const sortedReadList = readList.sort((a,b)=> a.yearOfPublishing - b.yearOfPublishing);
            setReadList(sortedReadList)
        }
    }
    return (
        <div>
            <h1 className="text-center p-5 bg-indigo-300 rounded-2xl mb-4">Book</h1>

            <details className="dropdown m-2">
                <summary className="btn m-1">{sort ? `Sort By: ${sort}`:'Sort By'}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    {dropdown}
                </ul>
            </details>


            <Tabs>
                <TabList>
                <Tab>Read Books</Tab>
                <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <div className="md:grid md:grid-cols-3 gap-4">
                        {
                            readList.map(book => <BooksHome key={book.bookId} book={book}></BooksHome>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="md:grid md:grid-cols-3 gap-4">
                        {
                            wishlistBook.map(book => <BooksHome key={book.bookId} book={book}></BooksHome>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
