import { useEffect, useState } from 'react';
import photo from '../../../assets/images/New-Arrival.png'
import NewArivalCard from './NewArivalCard';

const NewArrival = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        fetch('NewArrival.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='py-32'>
            <h3 className='text-center text-3xl font-bold py-10'>NEW ARRIVAL</h3>
            <div className='grid grid-cols-12'>
                <div className='col-span-4'>
                    <img src={photo} alt="" />
                    <div>
                        <p className='text-3xl font-bold text-center pb-4'>Photo Realistic</p>
                        <div className='flex justify-center'>
                            <button className='px-8 py-2 bg-black text-white text-lg font-semibold rounded-3xl hover:shadow-2xl hover:shadow-black hover:scale-110 hover:duration-700'>Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className='col-span-7 grid grid-cols-2 gap-10'>

                    {
                        data.map((item, idx) =>
                            <NewArivalCard key={idx} data={item} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default NewArrival;