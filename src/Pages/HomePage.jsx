import Banner from "../Components/Home/Banner";
import BestProducts from "../Components/Home/BestProducts";
import NewArrival from "../Components/Home/NewArival/NewArrival";
import Testimonials from "../Components/Home/Testimonials";
import TopWriter from "../Components/Home/TopWriter";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <BestProducts />
            <TopWriter />
            <Testimonials />
            <NewArrival />

        </div>
    );
};

export default HomePage;