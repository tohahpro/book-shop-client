import { NavLink } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";
import { BiMenuAltRight, BiMenu } from 'react-icons/bi';
import { useState } from "react";
import logo from '../assets/images/book-logo.png'

const Navbar = () => {

    const [open, setOpen] = useState(false)



    return (
        <div>
            <nav className="flex lg:items-center justify-between lg:px-56 lg:py-8 bg-white">

                {/* brand logo  */}
                <div>
                    <img src={logo} alt="" />
                </div>


                {/* mobile view icon  */}

                <div className="flex lg:hidden justify-end text-2xl pr-2 text-slate-400 mt-4" onClick={() => setOpen(!open)}>
                    {
                        open === true ? <BiMenuAltRight></BiMenuAltRight> : <BiMenu></BiMenu>
                    }
                </div>

                <div
                    className={`absolute lg:flex mt-12 w-full px-6 py-5 bg-black lg:m-0  lg:p-0 duration-2000
                     ${open ? ' ' : 'hidden'} lg:static 
                     lg:bg-transparent text-center space-y-2 z-50`}
                >
                    <ul className="mx-auto text-lg font-semibold lg:flex gap-20">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF3811] hover:scale-90" : "hover:scale-90"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF3811] hover:scale-90" : "hover:scale-90"
                                }
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF3811] hover:scale-90" : "hover:scale-90"
                                }
                            >
                                Contact
                            </NavLink>
                        </li>

                    </ul>


                    {/* large view hidden and mobile view flex  */}
                    <div className="lg:hidden lg:gap-5 space-y-2 text-white">
                        <div className="flex justify-center">
                            <PiShoppingCart className="text-2xl" />
                        </div>


                        <div className="flex justify-center">
                            <NavLink
                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF3811] hover:scale-90" : "hover:scale-90"
                                }
                            >
                                Login | Resister
                            </NavLink>
                        </div>
                    </div>

                </div>

                {/* mobile view hidden  */}
                <div className="hidden w-60 lg:flex items-center lg:gap-5 ">
                    <PiShoppingCart className="text-3xl" />
                    <div className="flex justify-center items-center">
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF3811] hover:scale-90" : "hover:scale-90"
                            }
                        >
                            Login | Register
                        </NavLink>
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;