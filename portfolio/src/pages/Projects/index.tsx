import { Link } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { ArrowUpRight } from "react-feather";
import igulogo from "../../assets/thumb_igu.jpeg";
import futgptthumb from "../../assets/projects/futgpt/futgptthumb.webp";
import minutathumb from "../../assets/projects/minuta/minutathumb.webp";

export function Projects() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                <section className="w-full 2xl:max-w-[1440px] lg:max-w-[1218px] m-auto mt-12 mb-24  flex items-center flex-col gap-12">
                    <h3 className="text-5xl font-semibold text-left w-full px-4 md:px-0">My Work</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-8 px-4 sm:px-0">
                        {/* Card */}
                        <Link to="/portfolio/projects/Igu" className="flex flex-col gap-4 justify-start group transition-all duration-300">
                            <img src={igulogo} alt="logo" className="rounded-xl shadow-(--container-shadow)" />
                            <div className="flex justify-between items-center pr-1">
                                <div className="flex flex-col gap-1">
                                    <div className="flex flex-wrap gap-2 w-full mt-0 md:mt-2">
                                        <p className="px-2 py-0.5 bg-amber-200 rounded text-sm text-nowrap">UX Strategy</p>
                                        <p className="px-2 py-0.5 bg-blue-200 rounded text-sm text-nowrap">UX Research</p>
                                        <p className="px-2 py-0.5 bg-purple-200  rounded text-sm text-nowrap">UX/UI</p>
                                        <p className="px-2 py-0.5 bg-indigo-200  rounded text-sm text-nowrap">User Testing</p>
                                        <p className="px-2 py-0.5 bg-gray-200  rounded text-sm text-nowrap">Freelance</p>
                                    </div>
                                    <h5 className="text-3xl font-semibold">iGU Finances</h5>
                                    <span>Finances, Management</span>
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
                                <div className="flex flex-col gap-1">
                                    <div className="flex flex-wrap gap-2 w-full mt-0 md:mt-2">
                                        <p className="px-2 py-0.5 bg-amber-200 rounded text-sm text-nowrap">UX Strategy</p>
                                        <p className="px-2 py-0.5 bg-blue-200 rounded text-sm text-nowrap">UX Research</p>
                                        <p className="px-2 py-0.5 bg-purple-200  rounded text-sm text-nowrap">UX/UI</p>
                                        <p className="px-2 py-0.5 bg-indigo-200  rounded text-sm text-nowrap">User Testing</p>
                                        <p className="px-2 py-0.5 bg-gray-200  rounded text-sm text-nowrap">Freelance</p>
                                    </div>
                                    <h5 className="text-3xl font-semibold">FutGPT - Sports Betting AI</h5>
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
                                <div className="flex flex-col gap-1">
                                    <div className="flex flex-wrap gap-2 w-full mt-0 md:mt-2">
                                        <p className="px-2 py-0.5 bg-amber-200 rounded text-sm text-nowrap">UX Strategy</p>
                                        <p className="px-2 py-0.5 bg-blue-200 rounded text-sm text-nowrap">UX Research</p>
                                        <p className="px-2 py-0.5 bg-purple-200  rounded text-sm text-nowrap">UX/UI</p>
                                        <p className="px-2 py-0.5 bg-indigo-200  rounded text-sm text-nowrap">User Testing</p>
                                        <p className="px-2 py-0.5 bg-green-200  rounded text-sm text-nowrap">Mapping</p>
                                    </div>
                                    <h5 className="text-3xl font-semibold">Minuta Digital - Logistical control</h5>
                                    <span>Logistics</span>
                                </div>
                                <ArrowUpRight
                                    size={40}
                                    className="transform transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
                                />
                            </div>
                        </Link>

                        <Link to="#" className="flex flex-col gap-4 justify-start group transition-all duration-300">
                            <img src={igulogo} alt="logo" className="rounded-xl shadow-(--container-shadow)" />
                            <div className="flex justify-between items-center pr-1">
                                <div className="flex flex-col gap-1">
                                    <div className="flex gap-2">
                                        <p className="px-2 py-0.5 bg-amber-200 rounded text-sm">UX Design</p>
                                        <p className="px-2 py-0.5 bg-blue-200 rounded text-sm">UX Design</p>
                                    </div>
                                    <h5 className="text-3xl font-semibold">Provenance</h5>
                                    <span>Finances</span>
                                </div>
                                <ArrowUpRight
                                    size={40}
                                    className="transform transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
                                />
                            </div>
                        </Link>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
