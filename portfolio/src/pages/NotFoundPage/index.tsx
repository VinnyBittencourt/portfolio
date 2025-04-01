import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import backgroundContact from "../../assets/fundo_contact.png";
import plugLeft from "../../assets/Left Plug.svg";
import plugRight from "../../assets/Right Plug.svg";
import { Link } from "react-router-dom";

export function NotFoundPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <img
                src={plugLeft}
                alt="Left plug"
                className="absolute top-[33%] md:top-1/2 left-0 transform -translate-y-1/2 w-20 sm:w-32 md:w-58 lg:w-105 z-10"
            />
            <img
                src={plugRight}
                alt="Right plug"
                className="absolute top-[33%]  md:top-1/2 right-0 transform -translate-y-1/2 w-20 sm:w-32 md:w-58 lg:w-105 z-10"
            />
            <div
                className="flex-grow flex items-center justify-center flex-col bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${backgroundContact})` }}
            >
                <section className="w-full 2xl:max-w-[1440px] lg:max-w-[1218px] m-auto mb-24 mt-0 md:mt-12 2xl:mt-0 px-4 sm:px-0 flex items-center justify-center flex-col min-h-[320px] md:min-h-[300px] 2xl:min-h-[650px] gap-4 ">
                    <span className="text-xl text-center tracking-wider font-semibold">Oh no...</span>
                    <h1 className="text-8xl sm:text-9xl text-center font-semibold ">
                        404<span className="text-(--brand-default)">.</span>
                    </h1>
                    <p className="text-xl text-start md:text-center">Sorry, that page does not exist.</p>
                    <div className="w-full flex items-center justify-center  px-4">
                        <Link
                            to="/portfolio/"
                            className="flex mt-4 mx-auto text-center items-center justify-center gap-1 bg-(--brand-default) w-full md:w-[200px] text-white px-6 py-3 rounded-sm hover:font-semibold shadow-(--container-shadow)"
                        >
                            Back to Home Page
                        </Link>
                    </div>
                </section>
                <section className="px-4 md:px-0">
                    <p className="text-xl text-center font-medium italic max-w-[623px] mb-8">
                        "Failure is instructive. The person who really thinks learns quite as much from his failures as from his successes."{" "}
                        <span className="font-light">– John Dewey</span>
                    </p>
                </section>
            </div>
            <Footer />
        </div>
    );
}
