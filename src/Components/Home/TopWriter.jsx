import { useEffect, useState } from "react";
import SectionTitle from "../Title/SectionTitle";
import WriterSlider from "./WriterSlider";
import img from '../../assets/images/book-5.png';

const TopWriter = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        fetch('WriterSlider.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    console.log(data);

    return (
        <div className="lg:mx-56">
            <SectionTitle heading={'Top Sell In This Month'} />

            <div className="flex justify-between pt-20  pb-40">
                <div className="">
                    <img className="flex justify-center" src={img} alt="" />
                </div>
                <div className="w-3/5">
                    <WriterSlider data={data} />
                </div>
            </div>
        </div>
    );
};

export default TopWriter;