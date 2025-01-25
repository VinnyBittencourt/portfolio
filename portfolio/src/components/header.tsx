import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { File, List, X } from "@phosphor-icons/react";
import { useState } from "react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className="w-full">
            <div className="2xl:max-w-[1440px] lg:max-w-[1318px] m-auto flex justify-between items-center py-8 px-4 lg:px-0">
                <img src={Logo} alt="portfolio-logo" />
                {/* Hamburger Icon */}
                <button className="lg:hidden text-black focus:outline-none" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={32} /> : <List size={32} />}
                </button>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex gap-8 items-center text-[18px]">
                    <li>
                        <Link to="/portfolio/">Home</Link>
                    </li>
                    <li>
                        <Link to="/portfolio/">Projects</Link>
                    </li>
                    <li>
                        <Link to="/portfolio/about">About me</Link>
                    </li>
                    <li>
                        <Link to="/portfolio/contact">Contact me</Link>
                    </li>
                    <li>
                        <Link
                            to="https://drive.google.com/file/d/1bYtF3hXwOA7z8UsCEFT9wETv-niPyQG9/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-1 border border-text-dark px-6 py-3 rounded-sm"
                        >
                            Curriculum <File size={24} />
                        </Link>
                    </li>
                </ul>
                {/* Mobile Menu */}
                <div
                    className={`fixed top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
                        isMenuOpen ? "translate-x-0" : "-translate-x-[100%]"
                    } lg:hidden w-[85%]`}
                >
                    <ul className="flex flex-col gap-4 items-center py-16 text-[18px] font-bold">
                        <li className="py-4">
                            <Link to="/portfolio/" onClick={toggleMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="py-4">
                            <Link to="/portfolio/" onClick={toggleMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className="py-4">
                            <Link to="/portfolio/about" onClick={toggleMenu}>
                                About me
                            </Link>
                        </li>
                        <li className="py-4">
                            <Link to="/portfolio/contact" onClick={toggleMenu}>
                                Contact me
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="https://drive.google.com/file/d/1bYtF3hXwOA7z8UsCEFT9wETv-niPyQG9/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex gap-1 border border-text-dark px-6 py-3 rounded-sm"
                                onClick={toggleMenu}
                            >
                                Curriculum <File size={24} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
