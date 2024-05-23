import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { getStoredReadBook } from "../localStorage";



const PagesToRead = () => {

    const books = useLoaderData();
    const [readBook, setReadBooks] = useState([]);


    useEffect(() => {

        const storedBookIds = getStoredReadBook();

        if (books.length > 0) {
            const readBook = books.filter(book => storedBookIds.includes(book.bookId))
            setReadBooks(readBook)
        }

    }, [books])

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    return (
        <div style={{width: '100%', height: 800}} className="max-w-6xl bg-[#13131308] mt-20">
            <ResponsiveContainer>
            <BarChart
            
                data={readBook}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" label={{ position: 'top' }}>
                    {readBook.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
            </ResponsiveContainer>
           
        </div>
    );
};

export default PagesToRead;