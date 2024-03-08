import Banner from "../Components/Home/Banner";
import BestProducts from "../Components/Home/BestProducts";
import Testimonials from "../Components/Home/Testimonials";
import TopWriter from "../Components/Home/TopWriter";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <BestProducts />
            <TopWriter />
            <Testimonials />
        </div>
    );
};

export default HomePage;