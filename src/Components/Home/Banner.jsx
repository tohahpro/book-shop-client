import BannerImage from '../../assets/images/Book-banner.png'


const Banner = () => {
    return (
        <div>
            <div className='relative'>
                <div className='absolute top-4 md:top-10 lg:top-40 left-4 md:left-10 lg:left-56 w-40 md:w-[20rem] lg:w-[30rem] space-y-1 md:space-y-4'>
                    <div>
                        <h1 className='uppercase text-base md:text-3xl lg:text-6xl'><span className='text-[#F44344]'>Knowledge</span> Is <span className='font-bold'>Power</span></h1>
                    </div>
                    <div>
                        <p className='text-xs md:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dicta quibusdam provident.</p>
                    </div>
                    <button className='px-3 md:px-10 py-1 lg:py-3 rounded-lg md:rounded-3xl text-sm md:text-base font-bold text-white bg-[#F44344] hover:shadow-2xl hover:shadow-[#F44344]'>More Books</button>
                </div>
                <img className='-z-40 h-44 md:h-fit' src={BannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;