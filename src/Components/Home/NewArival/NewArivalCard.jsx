import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const NewArivalCard = ({ data }) => {

    const { bookName, writer, image, price, rating } = data

    console.log(data);

    return (
        <div className="flex shadow-2xl rounded-lg p-4">

            <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                <div className="w-1/2">
                    <img className="h-full w-full object-cover" src={image} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent group-hover:from-black/60 group-hover:to-black/60 group-hover:vai-black/60 group-hover:duration-700"></div>
                <div className="absolute inset-0 flex flex-col items-center px-9 text-center translate-y-[110%] group-hover:translate-y-[70%] transition-all group-hover:duration-500">
                    <button className="px-3 py-2 bg-white hover:bg-[#F44344] hover:text-white text-base font-medium rounded-3xl">Add To Cart</button>
                </div>
            </div>
            <div>
                <h4 className="text-center pt-2 pb-1">{bookName}</h4>
                <p className="text-center pb-1">{writer}</p>
                <p className="text-center pb-1">{price}</p>
                <div className="flex justify-center">
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