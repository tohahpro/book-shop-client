import { CiLocationOn } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { PiEnvelopeLight } from "react-icons/pi";
import GoogleMap from "../Components/FooterMap/GoogleMap";

const Footer = () => {
    return (
        <div>
            <footer className=" grid lg:grid-cols-4 md:grid-cols-2 lg:px-56 py-16 bg-[#F7F7F7] text-base-content">
                <nav className="grid grid-cols-1 space-y-4 w-2/3">
                    <h6 className="text-2xl font-bold">EZONE BOOS</h6>
                    <div className="flex gap-2">
                        <CiLocationOn className="text-4xl" />
                        <a className="link link-hover">
                            77 Seventh Streeth, Banasree.
                            Dhaka -215568</a>
                    </div>

                    <div className="flex gap-2">
                        <TfiHeadphoneAlt className="text-xl gap-2" />
                        <a className="link link-hover">
                            +880 1955 387188</a>
                    </div>
                    <div className="flex gap-2">
                        <PiEnvelopeLight className="text-xl gap-2" />
                        <div>
                            <a className="link link-hover">
                                tohahpro@gmail.com
                            </a> <br />
                            <a className="link link-hover">
                                thpro0021@gmail.com
                            </a>
                        </div>
                    </div>

                </nav>
                <nav className="grid grid-cols-1 space-y-4 w-2/3">
                    <h6 className="text-2xl font-bold">USEFUL LINKS</h6>
                    <a className="link link-hover">
                        Privacy Policy</a>
                    <a className="link link-hover">
                        Contact</a>
                    <div>
                        <a className="link link-hover">
                            Register
                        </a>
                    </div>

                </nav>
                <nav className="grid grid-cols-1 space-y-4 w-2/3">
                    <h6 className="text-2xl font-bold">SHOPPING</h6>
                    <a className="link link-hover">
                        Payments</a>
                    <a className="link link-hover">
                        Terms & Condition</a>
                    <a className="link link-hover">
                        Shipment</a>


                </nav>
                <form>
                    <h6 className="text-2xl font-bold">FIND US</h6>
                    <div>
                        <GoogleMap />
                    </div>
                </form>
            </footer>
        </div>
    );
};

export default Footer;