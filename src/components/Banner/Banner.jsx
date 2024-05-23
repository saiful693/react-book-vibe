import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero max-h-[554px] bg-[#1313130D] rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/bPLwcqP/banner-img.png" className="max-w-80 rounded-lg " />
                <div>
                    <h1 className="text-5xl font-bold mb-12">Books to freshen up <br /> your bookshelf</h1>
                    <NavLink className="btn btn-primary border-none text-xl font-bold bg-[#23BE0A]" to="/listed-books">View The List</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;