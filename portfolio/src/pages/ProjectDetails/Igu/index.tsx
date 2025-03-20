import { Footer } from "../../../components/footer";
import { Header } from "../../../components/header";
import igucapa from "../../../assets/projects/igu/capaigu.webp";
import iguthumb from "../../../assets/projects/igu/iguthumb.webp";
import igu1 from "../../../assets/projects/igu/igu1.webp";
import igu2 from "../../../assets/projects/igu/igu2.webp";
import igu3 from "../../../assets/projects/igu/igu3.webp";
import igu4 from "../../../assets/projects/igu/igu4.webp";
import igu5 from "../../../assets/projects/igu/igu5.webp";
import igu6 from "../../../assets/projects/igu/igu6.webp";
import { Info, Tool } from "react-feather";

export function IguProject() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                <section className="grid w-full h-[200px] md:h-[30vh] max-h-[280px]">
                    <img
                        src={igucapa}
                        loading="lazy"
                        alt="Igu Project Background"
                        className="block object-cover rounded-none w-full h-[200px] md:h-[30vh] max-h-[280px] opacity-100 object-[center_50%] border-t-1 border-b-1 border-(--border-color)"
                    />
                </section>
                <section className="w-full lg:max-w-[710px] m-auto mt-8 md:mt-12 mb-24  flex items-center flex-col gap-6 px-4 md:px-0">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-left w-full ">iGU Finances</h1>
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
                            src={iguthumb}
                            loading="lazy"
                            alt="Igu Project Thumbnail"
                            className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                        />
                    </div>
                    <div className="w-full">
                        <h5 className="text-2xl font-semibold mb-2 mt-2">Start</h5>
                        <p>
                            This was a freelance work opportunity where I was recommended by the development team members to act as a UX/UI specialist in the
                            creation of the iGU app. As is common in this type of project, the product owner had already outlined a preliminary idea. However,
                            in our first meeting, I emphasized the importance of conducting comprehensive research to understand the user base and assess the
                            viability of the digital product. <br /> <br /> iGU is a company focused on financial organization services, with a value
                            proposition similar to Serasa's personal loan and credit offerings. However, the product owner wanted to significantly improve the
                            user experience, simplifying the journey and providing differentiated services that competitors did not offer.
                            <br /> <br /> During the initial meetings, the product owner highlighted his vision of creating a modern approach, integrating a
                            gamification system, establishing personalized and humanized customer interactions, and encouraging users to share the app.
                        </p>
                        <h5 className="text-2xl font-semibold mb-4 mt-8">Research</h5>
                        <h6 className="text-xl font-semibold mb-2">Persona</h6>
                        <p>
                            Given my emphasis on understanding our users, I started the research phase with the primary goal of identifying who our users would
                            be and whether there was genuine demand for creating the application. To achieve this, I chose to develop a proto-persona and
                            conduct interviews to validate this initial representation.
                            <br /> <br /> After completing the field research, I was able to validate our persona while also identifying several opportunities
                            to enhance the app. These insights were based on the frustrations expressed by users during their experiences in resolving financial
                            issues.
                        </p>
                        <h6 className="text-xl font-semibold mb-2 mt-4">Benchmarking</h6>
                        <p>
                            Next, I focused on gaining a deeper understanding of our competitors, leading me to conduct a comparative analysis (benchmarking) to
                            examine their value propositions and key features. <br /> <br /> The benchmarking results were highly insightful, allowing me to
                            present the development team and the product owner with a comprehensive analysis of the strengths and weaknesses of each competitor.
                            Additionally, I highlighted some key features that we could explore when creating our own solution.
                        </p>
                    </div>
                    <div className="w-full">
                        <img
                            src={igu1}
                            loading="lazy"
                            alt="Igu Project Benchmark"
                            className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                        />
                    </div>
                    <div className="w-full">
                        <h5 className="text-2xl font-semibold mb-2 mt-2">Definition</h5>
                        <p>
                            Time constraints posed a significant challenge throughout all phases of the app's development, as the product owner was under
                            pressure and the initial resources were limited. Given this reality, I repeatedly emphasized the importance of collaboration between
                            the entire development team and the product owner, especially during the crucial meeting to define the project scope.
                            <br /> <br /> During this meeting, I once again presented the research phase results and encouraged everyone's participation in
                            creating an impact vs. effort matrix. By the end of this process, we reached a consensus on the features to be implemented in the
                            MVP and established our approach for customer interactions.
                        </p>
                        <h5 className="text-2xl font-semibold mb-2 mt-8">Ideation</h5>
                        <p>The ideation phase for this product was particularly challenging, as I had to:</p>
                        <div className="flex flex-col gap-2 mt-4">
                            <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full ">
                                <Tool size={24} className="text-(--brand-dark)" />
                                <div className="flex flex-col gap-4 w-full">
                                    <p className="">Address user needs in a simple and effective manner.</p>
                                </div>
                            </div>
                            <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full ">
                                <Tool size={24} className="mt-1.5 text-(--brand-dark)" />
                                <div className="flex flex-col gap-4 w-full">
                                    <p className="">Develop a gamification system with rewards that were appealing to both users and the business.</p>
                                </div>
                            </div>
                            <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full ">
                                <Tool size={24} className="mt-1.5 text-(--brand-dark)" />
                                <div className="flex flex-col gap-4 w-full">
                                    <p className="">
                                        Implement a promotion method that encouraged voluntary sharing of the app by users rather than forcing the action.
                                    </p>
                                </div>
                            </div>
                            <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full ">
                                <Tool size={24} className="mt-1.5 text-(--brand-dark)" />
                                <div className="flex flex-col gap-4 w-full">
                                    <p className="">Ensure the app provided a humanized experience, creating a close connection with the customer.</p>
                                </div>
                            </div>
                        </div>
                        <p className="mt-4">
                            Through a series of meetings and tests, our team was able to develop a comprehensive solution capable of addressing all the
                            previously identified needs.
                            <br /> <br />
                            By the end of the ideation phase, we had created a detailed flowchart and a medium-fidelity prototype, which were then rigorously
                            tested with the users I had mapped during the research phase.
                        </p>
                        <h5 className="text-2xl font-semibold mb-2 mt-8">Prototyping</h5>
                        <p>
                            In this phase, I integrated the company’s pre-existing visual identity into the medium-fidelity prototype that had already been
                            developed.
                        </p>
                    </div>
                    <div className="w-full">
                        <img
                            src={igu2}
                            loading="lazy"
                            alt="Igu Project Images 1"
                            className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                        />
                    </div>
                    <div className="w-full">
                        <img
                            src={igu3}
                            loading="lazy"
                            alt="Igu Project Images 2"
                            className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                        />
                    </div>
                    <div className="w-full">
                        <img
                            src={igu4}
                            loading="lazy"
                            alt="Igu Project Images 3"
                            className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                        />
                    </div>
                    <div className="w-full">
                        <img
                            src={igu5}
                            loading="lazy"
                            alt="Igu Project Images 4"
                            className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                        />
                    </div>
                    <div className="w-full">
                        <img
                            src={igu6}
                            loading="lazy"
                            alt="Igu Project Images 5"
                            className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                        />
                    </div>
                    <div className="w-full">
                        <p>
                            To ensure flawless usability, I conducted a series of specific usability tests for each app flow. This meticulous approach was
                            essential in guaranteeing that users could complete their tasks without facing any major obstacles or significant difficulties.
                        </p>
                        <h5 className="text-2xl font-semibold mb-2 mt-8">Conclusion</h5>
                        <p>
                            The app development is still in progress, and I plan to closely monitor its performance and conduct data analysis as soon as the app
                            is launched.
                        </p>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
