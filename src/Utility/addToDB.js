import { toast } from "react-toastify";

const getLSDMarkAsRead = () => {
    const storedDataStr = localStorage.getItem('read-list');
    if(storedDataStr){
        const storedData = JSON.parse(storedDataStr);
        return storedData;
    }else{
        return [];
    }
}
const getLSDWishListData = () => {
    const wishListDataStr = localStorage.getItem('wish-list');
    if(wishListDataStr){
        const wishListData = JSON.parse(wishListDataStr);
        return wishListData;
    }else{
        return [];
    }
}
const addToLSDMarkAsRead = (id) => {
    const storedData = getLSDMarkAsRead();
    if(storedData.includes(id)){
        toast("This book is already in the list.")
    }else{
        storedData.push(id);
        const storedDataString = JSON.stringify(storedData);
        localStorage.setItem("read-list",storedDataString);
        toast("Added to the list.")
    }
}
const addToLSDWishList = (id) => {
    const wishListBooks = getLSDWishListData();
    if(wishListBooks.includes(id)){
        toast("This book is already in the list.")
    }else{
        wishListBooks.push(id);
        const wishListBooksStr = JSON.stringify(wishListBooks);
        localStorage.setItem('wish-list', wishListBooksStr);
        toast("Added to wishlist.")
    }
}
export {addToLSDMarkAsRead,getLSDMarkAsRead,addToLSDWishList,getLSDWishListData};