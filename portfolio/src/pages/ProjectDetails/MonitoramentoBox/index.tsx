import { CheckSquare, Info } from "react-feather";
import { Footer } from "../../../components/footer";
import { Header } from "../../../components/header";
import moniramentocapa from "../../../assets/projects/monitoramento/monitoramentocapa.webp";
import moniramentothumb from "../../../assets/projects/monitoramento/monitoramentothumb.webp";
import monitoramento1 from "../../../assets/projects/monitoramento/monitoramento1.webp";
import monitoramento2 from "../../../assets/projects/monitoramento/monitoramento2.webp";
import monitoramento3 from "../../../assets/projects/monitoramento/monitoramento3.webp";
import monitoramento4 from "../../../assets/projects/monitoramento/monitoramento4.webp";

export function MonitoramentoBoxProject() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <section className="grid w-full h-[200px] md:h-[30vh] max-h-[280px]">
                <img
                    src={moniramentocapa}
                    loading="lazy"
                    alt="Monitoramento Project Background"
                    className="block object-cover rounded-none w-full h-[200px] md:h-[30vh] max-h-[280px] opacity-100 object-[center_50%] border-t-1 border-b-1 border-(--border-color)"
                />
            </section>
            <section className="w-full lg:max-w-[710px] m-auto mt-8 md:mt-12 mb-24  flex items-center flex-col gap-6 px-4 md:px-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-left w-full ">Box monitoring</h1>
                <div className="flex flex-wrap gap-2 w-full mt-0 md:mt-2">
                    <p className="px-2 py-0.5 bg-amber-200 rounded text-sm text-nowrap">UX Strategy</p>
                    <p className="px-2 py-0.5 bg-blue-200 rounded text-sm text-nowrap">UX Research</p>
                    <p className="px-2 py-0.5 bg-purple-200  rounded text-sm text-nowrap">UX/UI</p>
                    <p className="px-2 py-0.5 bg-indigo-200  rounded text-sm text-nowrap">User Testing</p>
                    <p className="px-2 py-0.5 bg-green-200  rounded text-sm text-nowrap">Mapping</p>
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
                        src={moniramentothumb}
                        loading="lazy"
                        alt="Dock Monitoring Project Thumbnail"
                        className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                    />
                </div>
                <div className="w-full">
                    <h5 className="text-2xl font-semibold mb-2 mt-2">Start</h5>
                    <p>
                        The UX team at Havan Logística received an urgent request from the business area responsible for cargo receiving at the distribution
                        center. According to them, operational leaders managing truck arrivals face multiple challenges due to the exclusive use of Excel
                        spreadsheets and informal communication for handling receiving operations.
                        <br /> <br />
                        Additionally, it was observed that both leaders and field employees are constantly moving around the loading and unloading areas. Given
                        this dynamic environment, it is crucial to develop a solution that can meet their needs and facilitate communication, even while they
                        are on the move.
                    </p>
                    <h5 className="text-2xl font-semibold mb-4 mt-8">Research</h5>
                    <h6 className="text-xl font-semibold mt-4 mb-2">Mapping Process</h6>
                    <p>
                        Since I had limited knowledge of the receiving operations, another UX Designer from the team and I thoroughly mapped the entire process
                        and identified potential issues that could arise during its execution.
                        <br /> <br />
                        To achieve this, we conducted comprehensive interviews, engaging both the PCL team (responsible for process management) and the sector’s
                        employees and leaders. Our objective was to map all process steps along with their respective variables, to obtain a broad and holistic
                        understanding of the business needs.
                    </p>
                    <h6 className="text-xl font-semibold mt-4 mb-2">User Interviews</h6>
                    <p>
                        To address the real needs of our users, we conducted a series of interviews with the leaders and employees of the sector. The goal was
                        to thoroughly document their daily routines and identify the main challenges they faced during the cargo receiving process.
                    </p>
                    <h5 className="text-2xl font-semibold mb-2 mt-8">Definition</h5>
                    <p>
                        To ensure that the scope of the new solution met both business area and user needs, we organized a comprehensive meeting with all
                        stakeholders.
                        <br /> <br />
                        During this session, we presented all insights gathered in the research phase and conducted an interactive workshop on FIGMA to
                        collaboratively define the project scope with everyone involved.
                    </p>
                </div>
                <div className="w-full">
                    <img
                        src={monitoramento1}
                        loading="lazy"
                        alt="Dock Monitoring Project 1"
                        className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                    />
                </div>
                <div className="w-full">
                    <h5 className="text-2xl font-semibold mb-2 mt-2">Ideation</h5>
                    <p>
                        Together with another UX Designer from the logistics team and the Product Owner in charge of the receiving team, we explored various
                        solution possibilities that aligned with the scope defined during the initial meeting.
                        <br /> <br />
                        Afterward, we dedicated time to in-depth discussions and user testing to carefully evaluate all proposed models, aiming to present the
                        most suitable and effective solution for the business area.
                        <br /> <br />
                        For the solution, we decided to implement a real-time monitoring system for all docks in the receiving sector. This system will be
                        accessible to leaders via tablets, allowing them to make adjustments related to receiving allocation at different docks. Additionally,
                        the system will provide continuous visibility into the status of each receiving process, in real time and from any location.
                    </p>
                    <h5 className="text-2xl font-semibold mb-2 mt-2">Prototyping</h5>
                </div>
                <div className="w-full">
                    <img
                        src={monitoramento2}
                        loading="lazy"
                        alt="Dock Monitoring Project 2"
                        className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                    />
                </div>
                <div className="w-full">
                    <img
                        src={monitoramento3}
                        loading="lazy"
                        alt="Dock Monitoring Project 3"
                        className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                    />
                </div>
                <div className="w-full">
                    <img
                        src={monitoramento4}
                        loading="lazy"
                        alt="Dock Monitoring Project 4"
                        className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                    />
                </div>
                <div className="w-full">
                    <h5 className="text-2xl font-semibold mb-2 mt-2">Conclusion</h5>
                    <p>
                        The product was successfully developed and implemented. The Dock Monitoring system, as the application was named, brought significant
                        benefits, including:
                    </p>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full ">
                        <CheckSquare size={24} className="text-(--brand-dark)" />
                        <div className="flex flex-col gap-4 w-full">
                            <p className="">Streamlined the cargo receiving process at the distribution center.</p>
                        </div>
                    </div>
                    <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full ">
                        <CheckSquare size={24} className="mt-1.5 text-(--brand-dark)" />
                        <div className="flex flex-col gap-4 w-full">
                            <p className="">Systematized the entire process managed by sector leaders.</p>
                        </div>
                    </div>
                    <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full ">
                        <CheckSquare size={24} className="mt-1.5 text-(--brand-dark)" />
                        <div className="flex flex-col gap-4 w-full">
                            <p className="">Reduced the number of process errors during receiving.</p>
                        </div>
                    </div>
                    <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full ">
                        <CheckSquare size={24} className="mt-1.5 text-(--brand-dark)" />
                        <div className="flex flex-col gap-4 w-full">
                            <p className="">Improved the quality of life for leaders and employees.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
