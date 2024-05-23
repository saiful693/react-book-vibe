import { useEffect, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { NavLink, useLoaderData } from "react-router-dom";
import { getStoredReadBook, getStoredWishList } from "../localStorage";
import ReadBooks from "../ReadBooks/ReadBooks";
const ListedBooks = () => {
  
    const handleNav = filter => {
        if (filter === 'read-book') {
            setReadBooks(readBook);
        }
        else if (filter === 'wish-list') {
            // const remoteJobs=appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            // setWishList(wishList);
            setReadBooks(wishList);
        }

    }


    const books = useLoaderData();
    const [readBook, setReadBooks] = useState([]);
    const [wishList, setWishList] = useState([]);

    // console.log(readBook)





    useEffect(() => {
        const storedWishlistIds = getStoredWishList();
        if (books.length > 0) {
            const wishList = books.filter(book => storedWishlistIds.includes(book.bookId))
            setWishList(wishList)

        }

    }, [books])

    useEffect(() => {
        const storedBookIds = getStoredReadBook();
        if (books.length > 0) {
            const readBook = books.filter(book => storedBookIds.includes(book.bookId))
            setReadBooks(readBook)

        }

    }, [books])





    return (
        <div>
            <div>
                <h2 className="h-28 flex items-center justify-center w-full text-3xl font-bold bg-[#1313130D]">Books</h2>
            </div>
            <div className="flex justify-center items-center">
                <details className="dropdown mt-8 ">
                    <summary className="m-1 btn font-semibold bg-[#23BE0A] text-white ">Sort By<IoIosArrowDropdown className="text-xl" /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">

                    </ul>

                </details>
            </div>
            <div>
                <ul className="flex border-b">
                    <li onClick={() => handleNav('read-book')} className="border p-4 rounded-2xl mr-4"><NavLink to="/listed-books/read-books">Read Books</NavLink></li>
                    <li onClick={() => handleNav('wish-list')} className="border p-4 rounded-2xl"><NavLink to="/listed-books/wishlist-books">Wishlist Books</NavLink></li>
                </ul>

            </div>

            <div>
                {


                    readBook.map(book => <ReadBooks key={book.bookId} book={book}></ReadBooks>)


                }
            </div>
        </div>
    );
};

export default ListedBooks;


{/* <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                        <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li> */}