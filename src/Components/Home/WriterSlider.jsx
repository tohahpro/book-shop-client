import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'







const WriterSlider = ({ data }) => {



    return (


        <div className=''>

            <div className=''>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={2}
                    autoplay={true}
                    navigation
                // pagination={{ clickable: true }}

                >

                    {
                        data.map((item, idx) =>
                            <SwiperSlide key={idx} className='px-16'>
                                <img className='w-full' src={item.image} alt="" />
                                <h3 className='text-lg pt-3 text-center font-bold'>{item.writer}</h3>
                                <div className="flex justify-center">
                                    <Rating
                                        style={{ maxWidth: 90 }}
                                        value={item.rating} readOnly
                                    />
                                </div>
                            </SwiperSlide>
                        )
                    }






                </Swiper>
            </div>



        </div >



    );
};

export default WriterSlider;