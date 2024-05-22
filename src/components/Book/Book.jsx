import { CiStar } from "react-icons/ci";
const Book = ({book}) => {
    const {image,bookName,tags,author,category,rating}=book;


    return (
        <div className="card p-10 bg-base-100 shadow-xl border">
            <figure className="bg-[#F3F3F3]">
                <img  src={image} alt="Shoes" className="rounded-xl w-40 h-48" />
            </figure>
            <div className="card-body p-0 space-y-2">
               <div className="flex gap-2 ">
               {
                    tags.map((tag,idx) => <p className="font-medium text-center rounded-3xl bg-[#23BE0A0D] text-[#23BE0A]" key={idx}>{tag}</p>)
                }
               </div>
                <h2 className="card-title">{bookName}</h2>
                <small className="font-medium">By: {author}</small>
                <div className="flex justify-between font-medium card-actions border-t border-dashed pt-6">
                    <small>{category}</small>
                    <small className="flex gap-2">{rating} <CiStar className="text-xl" /></small>
                </div>
            </div>
        </div>
    );
};

export default Book;