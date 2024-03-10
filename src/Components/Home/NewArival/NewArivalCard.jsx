import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { GrCart } from "react-icons/gr";

const NewArivalCard = ({ data }) => {

    const { bookName, writer, image, price, rating } = data

    console.log(data);

    return (
        <div className="flex shadow-2xl rounded-lg p-4 h-60">

            <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                <div className="w-full">
                    <img className="rounded-lg object-cover" src={image} alt="" />
                </div>
                <div className="absolute rounded-lg inset-0 bg-gradient-to-b from-transparent group-hover:from-black/60 group-hover:to-black/60 group-hover:vai-black/60 translate-x-[110%] group-hover:translate-x-[0%] transition-all duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center px-9 text-center translate-x-[110%] group-hover:translate-x-[0%] transition-all duration-700">
                    <div className="pt-20">
                        <button className="px-3 py-2 bg-white hover:bg-[#F44344] hover:text-white text-base font-medium rounded-3xl "><GrCart className="text-xl" /></button>
                    </div>
                </div>
            </div>
            <div className="w-full pl-5">
                <h4 className="pt-2 pb-1 font-semibold">{bookName}</h4>
                <p className="pb-1">Dr. {writer}</p>
                <p className="pb-1">$ {price}</p>
                <div className="">
                    <Rating
                        style={{ maxWidth: 90 }}
                        value={rating} readOnly
                    />
                </div>
            </div>
        </div>
    );
};

export default NewArivalCard;