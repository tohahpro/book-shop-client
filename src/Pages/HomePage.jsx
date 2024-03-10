import Banner from "../Components/Home/Banner";
import BestProducts from "../Components/Home/BestProducts";
import NewArrival from "../Components/Home/NewArival/NewArrival";
import Subscription from "../Components/Home/Subscription";
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
            <Subscription />

        </div>
    );
};

export default HomePage;