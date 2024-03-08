import bg from '../../assets/images/testimonials-bg.png'
import logo from '../../assets/images/testimonials-logo.png'

import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import { useEffect, useState } from 'react';


const Testimonials = () => {


    const [data, setData] = useState([])


    useEffect(() => {
        fetch('Testimonials.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    // console.log(data[0].bookName);
    return (
        <div className='relative'>
            {/* <img className='-z-30' src={bg} alt="" /> */}

            <div>

            </div>

            <div
                style={{ backgroundImage: `url(${bg})` }}
                className='lg:h-[37rem] right-3 z-50'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    // autoplay={true}
                    navigation
                    // pagination={{ clickable: true }}
                    className="w-3/5 top-16"
                >



                    {
                        data.map((review, idx) =>
                            <SwiperSlide key={idx} className='py-10 text-white'>
                                <div className="w-2/3 mx-auto space-y-2">

                                    <div className="flex justify-center">
                                        <img className='w-32' src={logo} alt="" />
                                    </div>
                                    <p className="text-center text-3xl font-lg">{review.bookName}</p>
                                    <h4 className="text-center text-2xl font-bold">{review.writer}</h4>
                                </div>
                            </SwiperSlide>
                        )
                    }






                </Swiper>
            </div>

        </div>
    );
};

export default Testimonials;