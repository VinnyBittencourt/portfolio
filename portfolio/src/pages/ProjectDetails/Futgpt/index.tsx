import { Footer } from "../../../components/footer";
import { Header } from "../../../components/header";
import futgptcapa from "../../../assets/projects/futgpt/futgptcapa.webp";
import futgptthumb from "../../../assets/projects/futgpt/futgptthumb.webp";
import futgpt1 from "../../../assets/projects/futgpt/futgpt1.webp";
import futgpt2 from "../../../assets/projects/futgpt/futgpt2.webp";
import futgpt3 from "../../../assets/projects/futgpt/futgpt3.webp";
import futgpt4 from "../../../assets/projects/futgpt/futgpt4.webp";
import futgpt5 from "../../../assets/projects/futgpt/futgpt5.webp";
import futgpt6 from "../../../assets/projects/futgpt/futgpt6.webp";
import futgpt7 from "../../../assets/projects/futgpt/futgpt7.webp";
import futgpt8 from "../../../assets/projects/futgpt/futgpt8.webp";
import futgpt9 from "../../../assets/projects/futgpt/futgpt9.webp";
import futgpt10 from "../../../assets/projects/futgpt/futgpt10.webp";
import futgpt11 from "../../../assets/projects/futgpt/futgpt11.webp";
import { Info } from "react-feather";

export function FutgptProject() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <section className="grid w-full h-[200px] md:h-[30vh] max-h-[280px]">
                <img
                    src={futgptcapa}
                    loading="lazy"
                    alt="Igu Project Background"
                    className="block object-cover rounded-none w-full h-[200px] md:h-[30vh] max-h-[280px] opacity-100 object-[center_50%] border-t-1 border-b-1 border-(--border-color)"
                />
            </section>
            <section className="w-full lg:max-w-[710px] m-auto mt-8 md:mt-12 mb-24  flex items-center flex-col gap-6 px-4 md:px-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-left w-full ">FutGPT - Sports Betting AI</h1>
                <div className="flex flex-wrap gap-2 w-full mt-0 md:mt-2">
                    <p className="px-2 py-0.5 bg-amber-200 rounded text-sm text-nowrap">UX Strategy</p>
                    <p className="px-2 py-0.5 bg-blue-200 rounded text-sm text-nowrap">UX Research</p>
                    <p className="px-2 py-0.5 bg-purple-200  rounded text-sm text-nowrap">UX/UI</p>
                    <p className="px-2 py-0.5 bg-indigo-200  rounded text-sm text-nowrap">User Testing</p>
                    <p className="px-2 py-0.5 bg-gray-200  rounded text-sm text-nowrap">Freelance</p>
                </div>
                <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full ">
                    <Info size={24} className="mt-1 text-(--brand-dark)" />
                    <div className="flex flex-col gap-4 w-full">
                        <p className="">
                            For confidentiality reasons regarding corporate information, specific details about this product and its creation will not be
                            disclosed.
                        </p>
                    </div>
                </div>
                <div className="w-full">
                    <img
                        src={futgptthumb}
                        loading="lazy"
                        alt="FutGPT Project Thumbnail"
                        className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                    />
                </div>
                <div className="w-full">
                    <h5 className="text-2xl font-semibold mb-2 mt-2">Start</h5>
                    <p>
                        This was another freelance work opportunity where I was recommended by the development team members to act as a UX/UI specialist. In
                        this project, I played a comprehensive role, embracing every stage of the creation process, from logo design to strategy formulation, as
                        the company was in its early stages and faced significant uncertainties regarding its business potential.
                        <br /> <br />
                        Initially, I was informed that the company owner aimed to develop a platform that could integrate sports metrics with an artificial
                        intelligence feature to guide surebet betting. As part of my responsibilities, I had to develop effective solutions alongside the
                        development team to meet these specific demands.
                        <br /> <br />
                        Additionally, I actively participated in defining the platform's monetization model, which was structured around a subscription system
                        optimized through multi-level marketing strategies to maximize the platform’s earning potential.
                    </p>
                    <h5 className="text-2xl font-semibold mb-4 mt-8">Research</h5>
                    <p>
                        I started the project with market research to validate whether our venture addressed a real user need. Furthermore, I sought to
                        understand our target audience and determine whether we were operating in a blue ocean or red ocean market.
                    </p>
                    <h6 className="text-xl font-semibold mt-4 mb-2">Competitor Analysis</h6>
                    <p>
                        After confirming the real necessity of our project, I began analyzing competitors, cataloging both direct and indirect ones along with
                        their respective value propositions and key features. I presented this analysis to the company owner, allowing them to understand the
                        market landscape in which the company would operate and decide whether to proceed with platform development.
                    </p>
                    <h6 className="text-xl font-semibold mb-2 mt-4">Benchmarking</h6>
                    <p>
                        With the CEO’s approval, I conducted a benchmarking analysis to list all essential features of each competitor and understand how they
                        delivered their value propositions. Additionally, I sought to deepen my knowledge of the betting industry, as this was my first
                        experience in this market.
                    </p>
                </div>
                <div className="w-full">
                    <img
                        src={futgpt1}
                        loading="lazy"
                        alt="Futgpt Project Benchmark"
                        className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                    />
                </div>
                <div className="w-full">
                    <h5 className="text-2xl font-semibold mb-4 mt-2">Definition</h5>
                    <p>
                        For the definition phase, I established closer communication with the CEO to better understand his vision for the project based on the
                        insights I had already gathered during my research.
                        <br /> <br /> After a few discussions, we organized a meeting with the entire development team and investors. During this session, we
                        conducted activities on MIRO to precisely define our value proposition and determine which features would be included in the first
                        release of the project, along with the metrics to monitor the performance of each functionality.
                    </p>
                    <h6 className="text-xl font-semibold mt-4 mb-2">Ideation</h6>
                    <p>
                        During the ideation phase, I used all the information collected from the benchmarking analysis to explore different possibilities for
                        organizing and presenting information within the layout. Once I developed a few well-defined concepts, I presented them to the CEO and
                        arrived at an idea that would serve as the foundation for the entire first product release.
                    </p>
                    <h6 className="text-xl font-semibold mb-2 mt-4">Prototyping</h6>
                    <p>
                        For the prototyping phase, I developed a mood board in collaboration with the CEO to align with the visual style the client wanted. The
                        CEO requested a modern and futuristic design that could present all information in a minimalist way.
                    </p>
                </div>
                <div className="w-full">
                    <img
                        src={futgpt2}
                        loading="lazy"
                        alt="Futgpt Project2"
                        className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                    />
                </div>
                <p>
                    To resolve any issues before the launch and ensure that the platform was intuitive and accessible for everyone, we conducted a series of
                    user tests.
                </p>
                <div className="w-full">
                    <img
                        src={futgpt3}
                        loading="lazy"
                        alt="Futgpt Project3"
                        className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                    />
                </div>
                <p>Some of the desktop and mobile screens:</p>
                <div className="w-full">
                    <img
                        src={futgpt4}
                        loading="lazy"
                        alt="Futgpt Project4"
                        className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                    />
                </div>
                <div className="w-full">
                    <img
                        src={futgpt5}
                        loading="lazy"
                        alt="Futgpt Project5"
                        className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                    />
                </div>
                <div className="w-full">
                    <img
                        src={futgpt6}
                        loading="lazy"
                        alt="Futgpt Project6"
                        className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                    />
                </div>
                <div className="w-full">
                    <img
                        src={futgpt7}
                        loading="lazy"
                        alt="Futgpt Project7"
                        className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                    />
                </div>
                <div className="w-full">
                    <img
                        src={futgpt8}
                        loading="lazy"
                        alt="Futgpt Project8"
                        className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                    />
                </div>
                <div className="w-full">
                    <img
                        src={futgpt9}
                        loading="lazy"
                        alt="Futgpt Project9"
                        className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                    />
                </div>
                <div className="w-full">
                    <img
                        src={futgpt10}
                        loading="lazy"
                        alt="Futgpt Project10"
                        className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                    />
                </div>
                <div className="w-full">
                    <img
                        src={futgpt11}
                        loading="lazy"
                        alt="Futgpt Project11"
                        className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                    />
                </div>
                <div className="w-full">
                    <h5 className="text-2xl font-semibold mb-4 mt-2">Conclusion</h5>
                    <p>
                        The platform is currently in the development phase, and I am actively collaborating with the CEO and the marketing team to implement
                        data collection tools, such as Google Analytics, to monitor performance and incorporate improvements whenever necessary
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
}
