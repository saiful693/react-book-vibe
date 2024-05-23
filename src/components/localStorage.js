import { toast } from "react-toastify";

const getStoredReadBook = () =>{
    const storedReadBook= localStorage.getItem('read-book');
    if(storedReadBook){
        return JSON.parse(storedReadBook);
    }
    return [];
 }

 
 
 const saveReadBook= id =>{
    const storedReadBook=getStoredReadBook();
    const exists=storedReadBook.find(bookId => bookId === id);
    if(!exists){
        storedReadBook.push(id);
        localStorage.setItem('read-book', JSON.stringify(storedReadBook))
        toast.success('Books Added to Read List successfully'); 
    }else{
        toast.error('You have allReady Read this book'); 
    }
 }

//  for wishList
 const getStoredWishList = () =>{
    const storedWishList= localStorage.getItem('wish-list');
    if(storedWishList){
        return JSON.parse(storedWishList);
    }
    return [];
 }


 const saveWishList= id =>{
    const storedReadBook=getStoredReadBook();
    const exists=storedReadBook.find(bookId => bookId === id);

    const storedWishList=getStoredWishList();
    const exists_wishlist=storedWishList.find(bookId => bookId === id);

    if(!exists && !exists_wishlist){
        storedWishList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedWishList))
        toast.success('Wishlist Added to the List successfully'); 
    }else{
        toast.error('You have allReady Read this book'); 
    }
 }

 export { getStoredReadBook,saveReadBook, getStoredWishList, saveWishList}