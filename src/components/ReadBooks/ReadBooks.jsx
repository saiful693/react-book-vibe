

const ReadBooks = ({ book }) => {
    const {bookName,review,author,tags,image,publisher,yearOfPublishing,category,rating, totalPages}=book
    return (
        <div className="mb-5 card lg:card-side bg-base-100 shadow-xl h-64 mt-5">
            <figure className="bg-[#1313130D] "><img className="w-36 h-36" src={image} alt="Album" /></figure>
            <div className="card-body">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold">{bookName}</h2>
                    <p className="text-xl text-[#131313CC] font-medium border-b pb-2">By : {author}</p> 
                    <div className="flex justify-start pb-4 gap-3 border-b">
                        <p className="font-bold">Tag</p>
                        {
                            tags.map((tag, idx) => <p className="font-medium text-center rounded-3xl bg-[#23BE0A0D] text-[#23BE0A]" key={idx}>{tag}</p>)
                        }
                        <p>Year of Publishing: {yearOfPublishing}</p>
                    </div>
                    <div>
                        
                            <p className="flex gap-10 ">Number of Pages: <span className="font-semibold">{totalPages}</span></p>
                            <p className="flex gap-10">Publisher: <span className="font-semibold">{publisher}</span></p>
                            {/* <p className="flex gap-10">Year of Publishing: <span className="font-semibold">{yearOfPublishing}</span></p>
                            <p className="flex gap-10">Rating: <span className="font-semibold">{rating}</span></p> */}
                            
                     
                    </div>

                </div>
                <div className="card-actions justify-start  pb-4">
                    {/* <button onClick={handleReadBook} className="btn  bg-white">Read</button> */}
                </div>
            </div>
           
        </div>
    );
};

export default ReadBooks;