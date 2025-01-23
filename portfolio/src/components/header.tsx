import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { File } from "@phosphor-icons/react";

export function Header() {
    return (
        <div className="w-full">
            <div className="w-[1440px] m-auto flex justify-between items-center py-8">
                <img src={Logo} alt="portfolio-logo" />
                <ul className="flex gap-8 items-center text-[18px]">
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
            </div>
        </div>
    );
}
