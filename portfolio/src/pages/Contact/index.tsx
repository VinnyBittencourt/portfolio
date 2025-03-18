import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import backgroundContact from "../../assets/fundo_contact.png";
import { Dribbble, Linkedin, Mail } from "react-feather";
import { Link } from "react-router-dom";
import Behance from "../../assets/ant-design_behance-outlined-dark.svg";

export function Contact() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                <section className="flex items-start flex-col md:flex-row justify-between mt-12 mb-24 mx-auto w-full 2xl:max-w-[1440px] lg:max-w-[1218px]">
                    <div className="flex flex-col gap-8 w-full p-4 md:p-0">
                        <h1 className="text-5xl text-start font-semibold mb-2">Let’s connect!</h1>
                        <div className="grid grid-cols-2 justify-stretch gap-6 max-w-[474px] ">
                            <Link to="#" className="flex rounded-lg shadow-(--container-shadow) bg-white gap-2 p-8 ">
                                <div className="flex flex-col gap-4 items-center justify-center w-full">
                                    <div className="bg-white rounded-full p-3 shadow-(--container-shadow) size-fit">
                                        <Mail className="text-(--text-dark)" size={24} />
                                    </div>
                                    <p className="">@vinisataides</p>
                                </div>
                            </Link>

                            <Link to="#" className="flex rounded-lg shadow-(--container-shadow) bg-white gap-2 p-8 ">
                                <div className="flex flex-col gap-4 items-center justify-center w-full">
                                    <div className="bg-white rounded-full p-3 shadow-(--container-shadow) size-fit">
                                        <img src={Behance} alt="Behance Logo" className="w-[24px]" />
                                    </div>
                                    <p className="">@vinisataides</p>
                                </div>
                            </Link>
                            <Link to="#" className="flex rounded-lg shadow-(--container-shadow) bg-white gap-2 p-8 ">
                                <div className="flex flex-col gap-4 items-center justify-center w-full">
                                    <div className="bg-white rounded-full p-3 shadow-(--container-shadow) size-fit">
                                        <Linkedin className="text-(--text-dark)" size={24} />
                                    </div>
                                    <p className="">@vinisataides</p>
                                </div>
                            </Link>
                            <Link to="#" className="flex rounded-lg shadow-(--container-shadow) bg-white gap-2 p-8">
                                <div className="flex flex-col gap-4 items-center justify-center w-full">
                                    <div className="bg-white rounded-full p-3 shadow-(--container-shadow) size-fit">
                                        <Dribbble className="text-(--text-dark)" size={24} />
                                    </div>
                                    <p className="">@vinisataides</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-center h-full w-full bg-contain bg-no-repeat bg-center min-h-[416px] mt-12"
                        style={{ backgroundImage: `url(${backgroundContact})` }}
                    >
                        <h4 className="text-5xl font-semibold  text-start p-8">
                            "A user interface is like a joke. If you have to explain it, it’s not that good."
                            <br /> <span className="text-lg font-light">– Martin LeBlanc</span>
                        </h4>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
