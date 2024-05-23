
import { useEffect, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { NavLink, useLoaderData } from "react-router-dom";
import { getStoredReadBook, getStoredWishList } from "../localStorage";
import ReadBooks from "../ReadBooks/ReadBooks";
import './ListedBooks.css'
const ListedBooks = () => {

    const books = useLoaderData();
    const [readBook, setReadBooks] = useState([]);
    const [wishListBook, setWishListBooks] = useState([]);
    const [activeTab, setActiveTab] = useState('read');



    

    const handleBooksFilter= filter =>{
        if(filter === 'rating'){
            const ratingReadBook=[...readBook];
            const readBookDsc=ratingReadBook.sort((a,b)=> b.rating-a.rating);
            
             displayBooks = activeTab === 'read' ? setReadBooks(readBookDsc) : setWishListBooks(readBookDsc);
           
        }
        else if(filter === 'number-of-pages'){
            const pagesReadBook=[...readBook];
            const readBookDsc=pagesReadBook.sort((a,b)=> b.totalPages-a.totalPages);
            displayBooks = activeTab === 'read' ? setReadBooks(readBookDsc) : setWishListBooks(readBookDsc);
        }
        else if(filter === 'published-year'){
            const publishedReadBook=[...readBook];
            const readBookDsc=publishedReadBook.sort((a,b)=> b.yearOfPublishing-a.yearOfPublishing);
            displayBooks = activeTab === 'read' ? setReadBooks(readBookDsc) : setWishListBooks(readBookDsc);
        }
    }






    useEffect(() => {
       
         const storedBookIds = getStoredReadBook(); 
         const  storedWishListIds=getStoredWishList(); 
        
        if (books.length > 0) {
            const readBook = books.filter(book => storedBookIds.includes(book.bookId))
            setReadBooks(readBook)
            const wishListBook = books.filter(book => storedWishListIds.includes(book.bookId))
            setWishListBooks(wishListBook)
            
        }

    }, [books])



    let displayBooks = activeTab === 'read' ? readBook : wishListBook;


    return (
        <div>
            <div>
                <h2 className="h-28 flex items-center justify-center w-full text-3xl font-bold bg-[#1313130D]">Books</h2>
            </div>
            <div className="flex justify-center items-center">
                <details className="dropdown mt-8 ">
                    <summary className="m-1 btn font-semibold bg-[#23BE0A] text-white ">Sort By<IoIosArrowDropdown className="text-xl" /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleBooksFilter('rating')}><a>Rating</a></li>
                        <li onClick={() => handleBooksFilter('number-of-pages')}><a>Number of pages</a></li>
                        <li onClick={() => handleBooksFilter('published-year')}><a> Published year</a></li>
                    </ul>

                </details>
            </div>
            <div>
                <ul className="flex">
                    <li onClick={() => setActiveTab('read')} className="rounded-2xl mr-4 "><NavLink className="p-4 rounded-xl" to="/listed-books/read-books">Read Books</NavLink></li>
                    <li onClick={() => setActiveTab('wishlist')} className="rounded-2xl"><NavLink className="p-4 rounded-xl" to="/listed-books/wishlist-books">Wishlist Books</NavLink></li>
                </ul>

            </div>

            <div>
                {


                    displayBooks.map(book => <ReadBooks key={book.bookId} book={book}></ReadBooks>)


                }
            </div>
        </div>
    );
};

export default ListedBooks;



