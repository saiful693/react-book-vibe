import { useLoaderData, useParams } from "react-router-dom";
import { saveReadBook, saveWishList } from "../localStorage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {

    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);


    const book = books.find(book => book.bookId === idInt)


    const handleReadBook=()=>{
        saveReadBook(idInt);
        
    }

    const handleWishlist=()=>{
        saveWishList(idInt)
    }

    return (
        <div className="mb-5 card lg:card-side bg-base-100 shadow-xl mt-10">
            <figure className="bg-[#1313130D]"><img src={book.image} alt="Album" /></figure>
            <div className="card-body">
                <div className="space-y-10">
                    <h2 className="text-4xl font-bold">{book.bookName}</h2>
                    <p className="text-xl text-[#131313CC] font-medium border-b pb-7">By : {book.author}</p>
                    <p className="text-xl text-[#131313CC] font-medium border-b pb-7">{book.category}</p>
                    <p><span className="font-bold">Review: </span>{book.review}</p>
                    <div className="flex justify-start pb-4 gap-3 border-b">
                        <p className="font-bold">Tag</p>
                        {
                            book.tags.map((tag, idx) => <p className="font-medium text-center rounded-3xl bg-[#23BE0A0D] text-[#23BE0A]" key={idx}>{tag}</p>)
                        }
                    </div>
                    <div>
                        
                            <p className="flex gap-10 ">Number of Pages: <span className="font-semibold">{book.totalPages}</span></p>
                            <p className="flex gap-10">Publisher: <span className="font-semibold">{book.publisher}</span></p>
                            <p className="flex gap-10">Year of Publishing: <span className="font-semibold">{book.yearOfPublishing}</span></p>
                            <p className="flex gap-10">Rating: <span className="font-semibold">{book.rating}</span></p>
                            
                     
                    </div>

                </div>
                <div className="card-actions justify-start mt-10 pb-4">
                    <button onClick={handleReadBook} className="btn  bg-white">Read</button>
                    <button onClick={handleWishlist} className="btn bg-[#50B1C9] text-white">Wishlist</button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default BookDetails; 