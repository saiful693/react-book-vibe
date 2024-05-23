import { IoPersonOutline } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import PropTypes from 'prop-types';

const ReadBooks = ({ book }) => {
    const { bookName, author, tags, image, publisher, yearOfPublishing, category, rating, totalPages } = book
    return (
        <div className="my-10 md:my-5 card lg:card-side bg-base-100 shadow-xl md:h-72 ">
            <figure className="bg-[#1313130D] "><img className="md:w-36 md:h-44" src={image} alt="Album" /></figure>
            <div className="card-body">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold">{bookName}</h2>
                    <p className="text-xl text-[#131313CC] font-medium pb-2">By : {author}</p>
                    <div className="flex  items-center pb-4 gap-2 md:gap-3">
                        <p className="font-medium md:font-bold">Tag</p>
                        {
                            tags.map((tag, idx) => <p className="font-medium text-sm md:text-lg text-center rounded-3xl bg-[#23BE0A0D] text-[#23BE0A]" key={idx}>{tag}</p>)
                        }
                        <p className="flex items-center gap-2"><IoLocationOutline />Year of Publishing: <span className="font-semibold text-sm md:text-base">{yearOfPublishing}</span></p>
                    </div>
                    <div className="flex gap-0 border-b pb-5">
                        <p className="flex gap-2 items-center"><IoPersonOutline />Publisher:<span className="font-semibold text-sm md:text-base">{publisher}</span></p>
                        <p className="flex gap-2 items-center"><RiPagesLine />Page:<span className="font-semibold text-sm md:text-base">{totalPages}</span></p>

                    </div>

                </div>
                <div className="card-actions justify-center md:justify-start  pb-4">
                    <a className="w-56 p-3 rounded-3xl bg-[#92bef3] text-[#328EFF] text-center">Category:{category}</a>
                    <a className="w-56 p-3 rounded-3xl bg-[#f3d3a3] text-[#FFAC33] text-center">Rating:{rating}</a>
                    <button  className="w-56 btn rounded-3xl bg-[#23BE0A] text-white">View Details</button>
                </div>
            </div>

        </div>
    );
};

ReadBooks.propTypes = {
    book:PropTypes.object
}

export default ReadBooks;