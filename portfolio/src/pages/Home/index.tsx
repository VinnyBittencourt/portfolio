import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import igulogo from "../../assets/thumb_igu.jpeg";
import { ArrowUpRight } from "react-feather";
import { Link } from "react-router-dom";
import logoGoog from "../../assets/icon_google-removebg-preview.png";

export function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                {/* Hero Section */}
                <section className="flex flex-col items-center justify-center max-w-[960px] mx-auto gap-4 mt-12 mb-24">
                    <span className="text-xl text-center tracking-wider">Hello, I’m Vinny Bittencourt</span>
                    <h1 className="text-7xl text-center font-semibold mb-2">I Build Captivating Web Experiences</h1>
                    <p className="text-xl text-center">UX/UI Designer & Front-end Developer</p>
                </section>

                {/* Card Grid Section */}
                <section className="w-full 2xl:max-w-[1440px] lg:max-w-[1318px] m-auto mb-24">
                    <div className="grid grid-cols-2 grid-flow-row gap-8">
                        {/* Card */}
                        <Link to="#" className="flex flex-col gap-4 justify-start group transition-all duration-300">
                            <img src={igulogo} alt="logo" className="rounded-xl shadow-[--container-shadow]" />
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

                        <Link to="#" className="flex flex-col gap-4 justify-start group transition-all duration-300">
                            <img src={igulogo} alt="logo" className="rounded-xl shadow-[--container-shadow]" />
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

                        <Link to="#" className="flex flex-col gap-4 justify-start group transition-all duration-300">
                            <img src={igulogo} alt="logo" className="rounded-xl shadow-[--container-shadow]" />
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

                        <Link to="#" className="flex flex-col gap-4 justify-start group transition-all duration-300">
                            <img src={igulogo} alt="logo" className="rounded-xl shadow-[--container-shadow]" />
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

                {/* Academic Section */}
                <section className="flex flex-col gap-12 items-center justify-center mb-24">
                    <h3 className="text-4xl font-semibold">Academic training</h3>
                    <div className="grid gap-8 grid-cols-4 mx-auto">
                        {/* Academic Card */}
                        <div className="flex rounded border border-(--border-color) bg-white gap-2 p-4 max-w-[200px]">
                            <img src={logoGoog} alt="Logo Google" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p>
                                    <span className="font-semibold">Google</span>
                                    <span> | Coursera UX Designer Professional Certificate</span>
                                </p>
                                <p className="text-(--text-light)">Fevereiro 2023</p>
                            </div>
                        </div>

                        <div className="flex rounded border border-(--border-color) bg-white gap-2 p-4 max-w-[200px]">
                            <img src={logoGoog} alt="Logo Google" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p>
                                    <span className="font-semibold">Google</span>
                                    <span> | Coursera UX Designer Professional Certificate</span>
                                </p>
                                <p className="text-(--text-light)">Fevereiro 2023</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-2 p-4 max-w-[200px]">
                            <img src={logoGoog} alt="Logo Google" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p>
                                    <span className="font-semibold">Google</span>
                                    <span> | Coursera UX Designer Professional Certificate</span>
                                </p>
                                <p className="text-(--text-light)">Fevereiro 2023</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-2 p-4 max-w-[200px]">
                            <img src={logoGoog} alt="Logo Google" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p>
                                    <span className="font-semibold">Google</span>
                                    <span> | Coursera UX Designer Professional Certificate</span>
                                </p>
                                <p className="text-(--text-light)">Fevereiro 2023</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tools */}
                <section className="flex flex-col gap-12 items-center justify-center mb-24">
                    <h3 className="text-4xl font-semibold">Tools</h3>
                    <div className="grid gap-8 grid-cols-3 mx-auto">
                        {/* Academic Card */}
                        <div className="flex rounded border border-(--border-color) bg-white gap-2 p-4 w-[300px]">
                            <img src={logoGoog} alt="Logo Google" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Figma</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-2 p-4 w-[300px]">
                            <img src={logoGoog} alt="Logo Google" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Figma</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-2 p-4 w-[300px]">
                            <img src={logoGoog} alt="Logo Google" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Figma</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-2 p-4 w-[300px]">
                            <img src={logoGoog} alt="Logo Google" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Figma</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-2 p-4 w-[300px]">
                            <img src={logoGoog} alt="Logo Google" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Figma</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-2 p-4 w-[300px]">
                            <img src={logoGoog} alt="Logo Google" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Figma</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                {/* Tools */}

                <section className="flex flex-col gap-12 items-center justify-center mb-24">
                    <h3 className="text-4xl font-semibold">Skills</h3>
                    <div className="grid gap-8 grid-cols-3 mx-auto">
                        {/* Academic Card */}
                        <div className="flex rounded border border-(--border-color) bg-white gap-2 p-4 w-[300px]">
                            <img src={logoGoog} alt="Logo Google" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Design Thinking</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-2 p-4 w-[300px]">
                            <img src={logoGoog} alt="Logo Google" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Design Thinking</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-2 p-4 w-[300px]">
                            <img src={logoGoog} alt="Logo Google" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Design Thinking</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-2 p-4 w-[300px]">
                            <img src={logoGoog} alt="Logo Google" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Design Thinking</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-2 p-4 w-[300px]">
                            <img src={logoGoog} alt="Logo Google" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Design Thinking</p>
                            </div>
                        </div>
                        <div className="flex rounded border border-(--border-color) bg-white gap-2 p-4 w-[300px]">
                            <img src={logoGoog} alt="Logo Google" className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-4 w-full">
                                <p className="">Design Thinking</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
