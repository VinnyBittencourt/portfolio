import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import backgroundContact from "../../assets/fundo_contact.png";
import plugLeft from "../../assets/Left Plug.svg";
import plugRight from "../../assets/Right Plug.svg";

export function NotFoundPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <img src={plugLeft} alt="Left plug" className="absolute top-1/2 left-0 transform -translate-y-1/2 w-32 md:w-105 z-10" />
            <img src={plugRight} alt="Right plug" className="absolute top-1/2 right-0 transform -translate-y-1/2 w-32 md:w-105 z-10" />
            <div className="flex-grow flex items-center justify-center flex-col ">
                <section
                    className="w-full 2xl:max-w-[1440px] lg:max-w-[1218px] m-auto mb-24 flex items-center justify-center flex-col min-h-[320px] md:min-h-[300px] 2xl:min-h-[650px] gap-4 bg-contain bg-no-repeat bg-center"
                    style={{ backgroundImage: `url(${backgroundContact})` }}
                >
                    <span className="text-xl text-left md:text-center tracking-wider font-semibold">Oh no...</span>
                    <h1 className="text-4xl sm:text-9xl text-left md:text-center font-semibold ">
                        404<span className="text-(--brand-default)">.</span>
                    </h1>
                    <p className="text-xl text-start md:text-center">Sorry, that page does not exist.</p>
                </section>
                <section>
                    <p className="text-xl text-start md:text-center font-medium italic max-w-[623px] mb-8">
                        "Failure is instructive. The person who really thinks learns quite as much from his failures as from his successes."{" "}
                        <span className="font-light">– John Dewey</span>
                    </p>
                </section>
            </div>
            <Footer />
        </div>
    );
}
