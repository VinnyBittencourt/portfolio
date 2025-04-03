import { Link } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { ArrowUpRight } from "react-feather";
import igulogo from "../../assets/thumb_igu.jpeg";
import futgptthumb from "../../assets/projects/futgpt/futgptthumb.webp";
import minutathumb from "../../assets/projects/minuta/minutathumb.webp";
import monitoramentothumb from "../../assets/projects/monitoramento/monitoramentothumb.webp";

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
                            <div className="w-full aspect-[16/9]">
                                <img
                                    src={igulogo}
                                    alt="logo igu"
                                    className="w-full h-full object-cover rounded-xl shadow-(--container-shadow)"
                                />
                            </div>
                            <div className="flex justify-between items-center pr-1">
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-wrap gap-2 w-full mt-0 md:mt-2">
                                        <p className="px-2 py-0.5 bg-amber-200 rounded text-sm text-nowrap">UX Strategy</p>
                                        <p className="px-2 py-0.5 bg-blue-200 rounded text-sm text-nowrap">UX Research</p>
                                        <p className="px-2 py-0.5 bg-indigo-200  rounded text-sm text-nowrap">User Testing</p>
                                        <p className="px-2 py-0.5 bg-purple-200  rounded text-sm text-nowrap">UX/UI</p>
                                    </div>
                                    <h2 className="text-3xl font-semibold">iGU Finances</h2>
                                    <span>Finances</span>
                                </div>
                                <ArrowUpRight
                                    size={40}
                                    className="hidden lg:block transform transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
                                />
                            </div>
                        </Link>

                        <Link
                            to="/portfolio/projects/futgpt"
                            className="flex flex-col gap-4 justify-start group transition-all duration-300"
                        >
                            <div className="w-full aspect-[16/9]">
                                <img
                                    src={futgptthumb}
                                    alt="logo futgpt"
                                    className="w-full h-full object-cover rounded-xl shadow-(--container-shadow)"
                                />
                            </div>

                            <div className="flex justify-between items-center pr-1">
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-wrap gap-2 w-full mt-0 md:mt-2">
                                        <p className="px-2 py-0.5 bg-amber-200 rounded text-sm text-nowrap">UX Strategy</p>
                                        <p className="px-2 py-0.5 bg-blue-200 rounded text-sm text-nowrap">UX Research</p>
                                        <p className="px-2 py-0.5 bg-indigo-200  rounded text-sm text-nowrap">User Testing</p>
                                        <p className="px-2 py-0.5 bg-purple-200  rounded text-sm text-nowrap">UX/UI</p>
                                    </div>
                                    <h2 className="text-3xl font-semibold">FutGPT</h2>
                                    <span>Betting, Sports, Finances, AI</span>
                                </div>
                                <ArrowUpRight
                                    size={40}
                                    className="hidden lg:block transform transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
                                />
                            </div>
                        </Link>

                        <Link
                            to="/portfolio/projects/MinutaDigital"
                            className="flex flex-col gap-4 justify-start group transition-all duration-300"
                        >
                            <div className="w-full aspect-[16/9]">
                                <img
                                    src={minutathumb}
                                    alt="logo minuta"
                                    className="w-full h-full object-cover rounded-xl shadow-(--container-shadow)"
                                />
                            </div>

                            <div className="flex justify-between items-center pr-1">
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-wrap gap-2 w-full mt-0 md:mt-2">
                                        <p className="px-2 py-0.5 bg-amber-200 rounded text-sm text-nowrap">UX Strategy</p>
                                        <p className="px-2 py-0.5 bg-blue-200 rounded text-sm text-nowrap">UX Research</p>
                                        <p className="px-2 py-0.5 bg-green-200  rounded text-sm text-nowrap">Mapping</p>
                                    </div>
                                    <h2 className="text-3xl font-semibold">Minuta Digital</h2>
                                    <span>Logistics</span>
                                </div>
                                <ArrowUpRight
                                    size={40}
                                    className="hidden lg:block transform transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
                                />
                            </div>
                        </Link>

                        <Link
                            to="/portfolio/projects/MonitoramentoBox"
                            className="flex flex-col gap-4 justify-start group transition-all duration-300"
                        >
                            <div className="w-full aspect-[16/9]">
                                <img
                                    src={monitoramentothumb}
                                    alt="logo Monitoramento"
                                    className="w-full h-full object-cover rounded-xl shadow-(--container-shadow)"
                                />
                            </div>
                            <div className="flex justify-between items-center pr-1">
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-wrap gap-2 w-full mt-0 md:mt-2">
                                        <p className="px-2 py-0.5 bg-amber-200 rounded text-sm text-nowrap">UX Strategy</p>
                                        <p className="px-2 py-0.5 bg-blue-200 rounded text-sm text-nowrap">UX Research</p>
                                        <p className="px-2 py-0.5 bg-indigo-200  rounded text-sm text-nowrap">User Testing</p>
                                        <p className="px-2 py-0.5 bg-green-200  rounded text-sm text-nowrap">Mapping</p>
                                    </div>
                                    <h2 className="text-3xl font-semibold">Dock Monitoring</h2>
                                    <span>Logistics</span>
                                </div>
                                <ArrowUpRight
                                    size={40}
                                    className="hidden lg:block transform transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
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
