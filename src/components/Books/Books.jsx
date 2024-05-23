import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {


    const [books,setBooks]=useState([]);

    useEffect(() =>{
        fetch('/public/books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div className="mt-24">
            <h2 className="text-4xl font-bold text-center">Books</h2>
            <div className="mt-7 grid gap-6 grid-cols-3">
             {
                books.map(book => <Book key={book.bookId} book={book}></Book>)
             }


            </div>
        </div>
    );
};

export default Books;


