import { Link } from "react-router-dom";
import Logo from "../assets/LogoLight.svg";
import { Mail, Linkedin, Dribbble } from "react-feather";
import Behance from "../assets/behancer-vector.svg";

export function Footer() {
    return (
        <div className="w-full bg-(--background-color-dark-dark)">
            <div className="2xl:max-w-[1440px] lg:max-w-[1318px] flex-col lg:flex-row  m-auto flex justify-between items-start pt-8 pb-12 lg:pb-24 px-4 lg:px-0 gap-12 lg:gap-0">
                <img src={Logo} alt="portfolio-logo" />
                <div className="flex gap-12 lg:gap-24 flex-col lg:flex-row ">
                    <ul className="flex text-white flex-col gap-4">
                        <li>
                            <Link to="/portfolio/" className="hover:font-semibold">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/portfolio/about" className="hover:font-semibold">
                                About me
                            </Link>
                        </li>
                        <li>
                            <Link to="/portfolio/contact" className="hover:font-semibold">
                                Contact me
                            </Link>
                        </li>
                    </ul>
                    <div className="flex space-x-4">
                        <Link to="#" className="bg-(--background-color-dark-medium) rounded-full p-3 shadow-(--container-shadow) size-fit">
                            <Mail className="text-white" size={24} />
                        </Link>
                        <Link to="#" className="bg-(--background-color-dark-medium) rounded-full p-3 shadow-(--container-shadow) size-fit">
                            <img src={Behance} alt="Behance Logo" className="w-[24px]" />
                        </Link>
                        <Link to="#" className="bg-(--background-color-dark-medium) rounded-full p-3 shadow-(--container-shadow) size-fit">
                            <Linkedin className="text-white" size={24} />
                        </Link>
                        <Link to="#" className="bg-(--background-color-dark-medium) rounded-full p-3 shadow-(--container-shadow) size-fit">
                            <Dribbble className="text-white" size={24} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full bg-(--background-color-dark-darker) flex justify-center items-center py-3 px-4">
                <p className="text-(--text-light) text-sm">All rights reserved © 2025</p>
            </div>
        </div>
    );
}
