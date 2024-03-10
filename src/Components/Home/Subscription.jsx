import bg from '../../assets/images/testimonials-bg.png'

const Subscription = () => {
    return (
        <div className=''>
            <div className='h-60 lg:px-56' style={{ backgroundImage: `url(${bg})` }}>
                <div className='flex h-60 items-center'>
                    <div className='text-white flex-1'>
                        <h3 className='text-3xl font-bold'>SUBSCRIBE TO OUTR NEWSLETTER</h3>
                        <p className='text-[#9F9285] text-lg w-4/6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy</p>
                    </div>
                    <div className=''>
                        <div className='border rounded-full'>
                            <input className='w-96 py-3 border-none bg-transparent focus:outline-none text-[#9F9285] pl-7' placeholder='Enter Your E-mail' type="text" />
                            <button className='uppercase text-white px-10 border-l hover:text-[#F44344] hover:duration-700'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;