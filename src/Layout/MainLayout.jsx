import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="">
                <Outlet />
            </div>

        </div>
    );
};

export default MainLayout;