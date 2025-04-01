import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import igulogo from "../../assets/thumb_igu.jpeg";
import futgptthumb from "../../assets/projects/futgpt/futgptthumb.webp";
import minutathumb from "../../assets/projects/minuta/minutathumb.webp";
import monitoramentothumb from "../../assets/projects/monitoramento/monitoramentothumb.webp";
import adobexd from "../../assets/icons/adobexd.png";
import azure from "../../assets/icons/azure.png";
import firebase from "../../assets/icons/firebase.png";
import googleanal from "../../assets/icons/googleanal.png";
import hotjar from "../../assets/icons/hotjar.png";
import illustrator from "../../assets/icons/illustrator.png";
import afftereffec from "../../assets/icons/aftereffe.png";
import maze from "../../assets/icons/maze.png";
import meiuca from "../../assets/icons/meiuca.png";
import miro from "../../assets/icons/miro.png";
import notion from "../../assets/icons/notion.png";
import photoshop from "../../assets/icons/photoshop.png";
import similianweb from "../../assets/icons/similiarweb.png";
import trell from "../../assets/icons/trell.png";
import unicornio from "../../assets/icons/unicornio.png";
import unifoa from "../../assets/icons/unifoa.png";
import usebe from "../../assets/icons/usebe.png";
import figma from "../../assets/icons/figma.png";
import { ArrowUpRight, Check } from "react-feather";
import { Link } from "react-router-dom";
import logoGoog from "../../assets/icon_google-removebg-preview.png";

export function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                {/* Hero Section */}
                <section className="flex flex-col items-start md:items-center  justify-start md:justify-center max-w-[960px] mx-auto gap-4 mt-12 mb-24 px-4 sm:px-0">
                    <span className="text-xl text-left md:text-center tracking-wider">Hello, I’m Vinny Bittencourt</span>
                    <h1 className="text-4xl sm:text-7xl text-left md:text-center font-semibold mb-2">I Build Captivating Web Experiences</h1>
                    <p className="text-xl text-start md:text-center">UX/UI Designer & Front-end Developer</p>
                </section>

                {/* Projects Grid Section */}
                <section id="projects" className="w-full 2xl:max-w-[1440px] lg:max-w-[1218px] m-auto mb-24 flex items-center flex-col gap-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-8 px-4 sm:px-0">
                        {/* Card */}
                        <Link to="/portfolio/projects/Igu" className="flex flex-col gap-4 justify-start group transition-all duration-300">
                            <img src={igulogo} alt="logo" className="rounded-xl shadow-(--container-shadow)" />
                            <div className="flex justify-between items-center pr-1">
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-wrap gap-2 w-full mt-0 md:mt-2">
                                        <p className="px-2 py-0.5 bg-amber-200 rounded text-sm text-nowrap">UX Strategy</p>
                                        <p className="px-2 py-0.5 bg-blue-200 rounded text-sm text-nowrap">UX Research</p>
                                        <p className="px-2 py-0.5 bg-purple-200  rounded text-sm text-nowrap">UX/UI</p>
                                        <p className="px-2 py-0.5 bg-indigo-200  rounded text-sm text-nowrap">User Testing</p>
                                        <p className="px-2 py-0.5 bg-gray-200  rounded text-sm text-nowrap">Freelance</p>
                                    </div>
                                    <h2 className="text-3xl font-semibold">iGU Finances</h2>
                                    <span>Finances</span>
                                </div>
                                <ArrowUpRight
                                    size={40}
                                    className="transform transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
                                />
                            </div>
                        </Link>

                        <Link to="/portfolio/projects/futgpt" className="flex flex-col gap-4 justify-start group transition-all duration-300">
                            <img src={futgptthumb} alt="logo" className="rounded-xl shadow-(--container-shadow)" />
                            <div className="flex justify-between items-center pr-1">
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-wrap gap-2 w-full mt-0 md:mt-2">
                                        <p className="px-2 py-0.5 bg-amber-200 rounded text-sm text-nowrap">UX Strategy</p>
                                        <p className="px-2 py-0.5 bg-blue-200 rounded text-sm text-nowrap">UX Research</p>
                                        <p className="px-2 py-0.5 bg-purple-200  rounded text-sm text-nowrap">UX/UI</p>
                                        <p className="px-2 py-0.5 bg-indigo-200  rounded text-sm text-nowrap">User Testing</p>
                                        <p className="px-2 py-0.5 bg-gray-200  rounded text-sm text-nowrap">Freelance</p>
                                    </div>
                                    <h2 className="text-3xl font-semibold">FutGPT</h2>
                                    <span>Betting, Sports, Finances, AI</span>
                                </div>
                                <ArrowUpRight
                                    size={40}
                                    className="transform transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
                                />
                            </div>
                        </Link>

                        <Link to="/portfolio/projects/MinutaDigital" className="flex flex-col gap-4 justify-start group transition-all duration-300">
                            <img src={minutathumb} alt="logo" className="rounded-xl shadow-(--container-shadow)" />
                            <div className="flex justify-between items-center pr-1">
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-wrap gap-2 w-full mt-0 md:mt-2">
                                        <p className="px-2 py-0.5 bg-amber-200 rounded text-sm text-nowrap">UX Strategy</p>
                                        <p className="px-2 py-0.5 bg-blue-200 rounded text-sm text-nowrap">UX Research</p>
                                        <p className="px-2 py-0.5 bg-purple-200  rounded text-sm text-nowrap">UX/UI</p>
                                        <p className="px-2 py-0.5 bg-indigo-200  rounded text-sm text-nowrap">User Testing</p>
                                        <p className="px-2 py-0.5 bg-green-200  rounded text-sm text-nowrap">Mapping</p>
                                    </div>
                                    <h2 className="text-3xl font-semibold">Minuta Digital</h2>
                                    <span>Logistics</span>
                                </div>
                                <ArrowUpRight
                                    size={40}
                                    className="transform transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
                                />
                            </div>
                        </Link>

                        <Link to="/portfolio/projects/MonitoramentoBox" className="flex flex-col gap-4 justify-start group transition-all duration-300">
                            <img src={monitoramentothumb} alt="logo" className="rounded-xl shadow-(--container-shadow)" />
                            <div className="flex justify-between items-center pr-1">
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-wrap gap-2 w-full mt-0 md:mt-2">
                                        <p className="px-2 py-0.5 bg-amber-200 rounded text-sm text-nowrap">UX Strategy</p>
                                        <p className="px-2 py-0.5 bg-blue-200 rounded text-sm text-nowrap">UX Research</p>
                                        <p className="px-2 py-0.5 bg-purple-200  rounded text-sm text-nowrap">UX/UI</p>
                                        <p className="px-2 py-0.5 bg-indigo-200  rounded text-sm text-nowrap">User Testing</p>
                                        <p className="px-2 py-0.5 bg-green-200  rounded text-sm text-nowrap">Mapping</p>
                                    </div>
                                    <h2 className="text-3xl font-semibold">Dock Monitoring</h2>
                                    <span>Logistics</span>
                                </div>
                                <ArrowUpRight
                                    size={40}
                                    className="transform transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="w-full flex items-center justify-center  px-4">
                        <Link
                            to="/portfolio/projects"
                            className="flex mx-auto text-center items-center justify-center gap-1 bg-(--brand-default) w-full md:w-[200px] text-white px-6 py-3 rounded-sm hover:font-semibold shadow-(--container-shadow)"
                        >
                            View More Work
                        </Link>
                    </div>
                </section>

                {/* Academic Section */}
                <section className="flex flex-col gap-12 items-center justify-center mb-24 px-4 w-full max-w-[1024px] mx-auto">
                    <h3 className="text-4xl font-semibold text-left md:text-center w-full">Academic training</h3>
                    <div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-4 w-full">
                        {/* Academic Card */}
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full">
                            <img src={logoGoog} alt="Logo Google" className="w-[24px] h-[24px] rounded-md" />
                            <div className="flex flex-col gap-4 w-full justify-between">
                                <p>
                                    <span className="font-semibold">Google</span>
                                    <span> | Coursera UX Designer Professional Certificate</span>
                                </p>
                                <p className="text-(--text-light)">Fevereiro 2023</p>
                            </div>
                        </div>

                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full">
                            <img src={unicornio} alt="Logo unicornio" className="w-[24px] h-[24px] rounded-md" />
                            <div className="flex flex-col gap-4 w-full justify-between">
                                <p>
                                    <span className="font-semibold">UX Unicórnio</span>
                                    <span> | UX/UI & Product Designer</span>
                                </p>
                                <p className="text-(--text-light)">Dezembro 2021</p>
                            </div>
                        </div>

                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full">
                            <img src={meiuca} alt="Logo meiuca" className="w-[24px] h-[24px] rounded-md" />
                            <div className="flex flex-col gap-4 w-full justify-between">
                                <p>
                                    <span className="font-semibold">Meiuca</span>
                                    <span> | Design System Specialist</span>
                                </p>
                                <p className="text-(--text-light)">Fevereiro 2022</p>
                            </div>
                        </div>

                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full">
                            <img src={unifoa} alt="Logo unifoa" className="w-[24px] h-[24px] rounded-md" />
                            <div className="flex flex-col gap-4 w-full justify-between">
                                <p>
                                    <span className="font-semibold">UniFOA</span>
                                    <span> | Bacharelado em Sistemas de Informação</span>
                                </p>
                                <p className="text-(--text-light)">2016 ~ 2020</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tools */}
                <section className="flex flex-col gap-12 items-center justify-center mb-24 px-4">
                    <h3 className="text-4xl font-semibold text-left md:text-center w-full">Tools</h3>
                    <div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-3 mx-auto  sm:px-0 max-w-screen-lg place-items-center w-full">
                        {/* Academic Card */}
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <img src={figma} alt="Logo Figma" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Figma</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <img src={adobexd} alt="Logo Adobe XD" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Adobe XD</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <img src={miro} alt="Logo Miro" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Miro</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <img src={notion} alt="Logo Notion" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Notion</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <img src={hotjar} alt="Logo Hotjar" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Hotjar</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <img src={googleanal} alt="Logo Google Analytics" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Google Analytics</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <img src={maze} alt="Logo Maze.co" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Maze.co</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <img src={usebe} alt="Logo Useberry" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Useberry</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <img src={trell} alt="Logo Trello" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Trello</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <img src={azure} alt="Logo Microsoft Azure" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Microsoft Azure</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <img src={similianweb} alt="Logo Similarweb" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Similarweb</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <img src={firebase} alt="Logo Firebase" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Firebase</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <img src={photoshop} alt="Logo Adobe Photoshop" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Adobe Photoshop</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <img src={illustrator} alt="Logo Adobe Illustrator" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Adobe Illustrator</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <img src={afftereffec} alt="Logo Adobe After Effects" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Adobe After Effects</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="flex flex-col gap-12 items-center justify-center mb-24 px-4 ">
                    <h3 className="text-4xl font-semibold text-left md:text-center w-full">Skills</h3>
                    <div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-3 mx-auto sm:px-0 max-w-screen-lg place-items-center w-full">
                        {/* Academic Card */}
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <Check className="text-(--brand-dark)" size={24} />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Design Thinking</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <Check className="text-(--brand-dark)" size={24} />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Design Sprint</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <Check className="text-(--brand-dark)" size={24} />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Double Diamond</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <Check className="text-(--brand-dark)" size={24} />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Usability Test</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <Check className="text-(--brand-dark)" size={24} />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">UI Design</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <Check className="text-(--brand-dark)" size={24} />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">UX Research</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <Check className="text-(--brand-dark)" size={24} />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Wireframes</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <Check className="text-(--brand-dark)" size={24} />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Design System</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <Check className="text-(--brand-dark)" size={24} />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Data Analysis</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <Check className="text-(--brand-dark)" size={24} />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Prototyping</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <Check className="text-(--brand-dark)" size={24} />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">SEO</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <Check className="text-(--brand-dark)" size={24} />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Advanced English</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full md:w-[300px]">
                            <Check className="text-(--brand-dark)" size={24} />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">A/B Test</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
