import { CheckSquare, Info } from "react-feather";
import { Footer } from "../../../components/footer";
import { Header } from "../../../components/header";
import minutacapa from "../../../assets/projects/minuta/minutacapa.webp";
import minutathumb from "../../../assets/projects/minuta/minutathumb.webp";
import minuta1 from "../../../assets/projects/minuta/minuta1.webp";
import minuta2 from "../../../assets/projects/minuta/minuta2.webp";
import minuta3 from "../../../assets/projects/minuta/minuta3.webp";
import minuta4 from "../../../assets/projects/minuta/minuta4.webp";

export function MinutaDigitalProject() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <section className="grid w-full h-[200px] md:h-[30vh] max-h-[280px]">
                <img
                    src={minutacapa}
                    loading="lazy"
                    alt="Igu Project Background"
                    className="block object-cover rounded-none w-full h-[200px] md:h-[30vh] max-h-[280px] opacity-100 object-[center_50%] border-t-1 border-b-1 border-(--border-color)"
                />
            </section>
            <section className="w-full lg:max-w-[710px] m-auto mt-8 md:mt-12 mb-24  flex items-center flex-col gap-6 px-4 md:px-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-left w-full ">Minuta Digital - Logistical control</h1>
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
                        src={minutathumb}
                        loading="lazy"
                        alt="Minuta Digital Project Thumbnail"
                        className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                    />
                </div>
                <div className="w-full">
                    <h5 className="text-2xl font-semibold mb-2 mt-2">Start</h5>
                    <p>
                        One of the main goals of the company's logistics sector in 2021 was to simplify the documentary and operational process in the branch
                        warehouses as well as in the distribution center. In this context, the Freight team, responsible for issuing, sending, and controlling
                        fiscal documents throughout the entire product movement, dedicated itself to investigating possible improvements to fully optimize and
                        simplify the procedure.
                    </p>
                    <h5 className="text-2xl font-semibold mb-4 mt-8">Research</h5>
                    <p>
                        At first, the Product Owner (PO) in charge of the Freight team requested the UX team, responsible for the logistics sector, to create an
                        application with a simple form to fix a fiscal documentation issue. However, I emphasized to the PO the need to conduct research to
                        fully understand the root of the problem and the needs of the system's users.
                        <br /> <br />
                        As a first step, I conducted field research with the warehouse employees at the branches to fully understand the product movement flow
                        and their respective fiscal documents. This phase uncovered several scenarios and complexities in the current draft creation system,
                        identifying various systemic and procedural errors that occurred daily.
                        <br /> <br />
                        After gathering valuable insights from the employees, I redirected the research to the company's headquarters, aiming to understand the
                        complexity of the draft creation process and product movement, particularly its interdependence with other areas of the company.
                        <br /> <br />I documented all the findings in Figma and presented them to the PO, who immediately called a meeting with representatives
                        from all the areas affected by the issue. During the meeting, it became clear to everyone how extensive the problems affecting fiscal
                        document creation were. Consequently, we agreed to restructure some processes and implement a solution to streamline the documentation
                        process, thus initiating a comprehensive mapping of all processes related to draft creation and product movement.
                    </p>
                    <h6 className="text-xl font-semibold mt-4 mb-2">Mapping Process</h6>
                    <p>
                        At this point, I received the support of another UX professional, Tássio dos Reis, who joined the team to collaborate with me on process
                        mapping. Together, we decided it was essential to develop detailed blueprints of each step, clearly illustrating how each process was
                        interconnected and highlighting the failures and opportunities for improvement through these artifacts.
                    </p>
                </div>
                <div className="w-full">
                    <img
                        src={minuta1}
                        loading="lazy"
                        alt="Minuta Digital Project 1"
                        className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                    />
                </div>
                <div className="w-full">
                    <p>
                        After drafting the blueprints and validating them with the business area and branch employees, we presented the identified problems and
                        opportunities in a joint meeting, which included representatives from all involved areas as well as their respective managers.
                    </p>
                    <h5 className="text-2xl font-semibold mb-4 mt-8">Definition</h5>
                    <p>
                        We took advantage of having all stakeholders present in the meeting to initiate the definition process. During this phase, we presented
                        the problems and opportunities identified during the research and conducted an impact vs. effort matrix exercise to define the product
                        scope.
                        <br /> <br />
                        With the matrix in hand, we determined which problems would be addressed in the solution development, establishing them as key pillars
                        for future testing. This approach ensured that we could validate the effectiveness of the proposed solution through measurable metrics
                        in solving the identified issues.
                        <br /> <br />
                    </p>
                    <h5 className="text-2xl font-semibold mb-2 mt-2">Ideation</h5>
                    <p>
                        The ideation process was conducted with great caution, taking into account the entire process mapping, as both customer support (SAC)
                        and e-commerce would be impacted by the operational changes and the digitalization of processes in the branch warehouses.
                        <br /> <br />
                        To ensure that the proposed solution addressed all the issues identified during the definition phase and to prevent negative impacts on
                        the processes of the involved areas, we conducted multiple tests and held detailed meetings with the stakeholders.
                    </p>
                </div>
                <div className="w-full">
                    <img
                        src={minuta2}
                        loading="lazy"
                        alt="Minuta Digital Project 2"
                        className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                    />
                </div>
                <div className="w-full">
                    <h5 className="text-2xl font-semibold mb-2 mt-2">High-Fidelity Design</h5>
                    <p>
                        After completing a series of tests, we began the transition of the prototype to the high-fidelity phase, facing the crucial challenge of
                        embedding the company’s identity and voice into the new application.
                        <br /> <br />
                        At this stage, the company had not yet established a design system, and there was a lack of apps specifically designed for employee use.
                        Therefore, our approach focused on strategically applying our interface design expertise, ensuring that the app was intuitive and easy
                        to use.
                        <br /> <br />
                        Additionally, accessibility was a central concern. During the initial field research, I observed that some employees interviewed were
                        colorblind or had difficulty with newer technologies. As a result, we conducted multiple usability tests to ensure that the application
                        was inclusive, meeting the needs of all users, regardless of their abilities or limitations.
                    </p>
                </div>
                <div className="w-full">
                    <img
                        src={minuta3}
                        loading="lazy"
                        alt="Minuta Digital Project3"
                        className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                    />
                </div>
                <div className="w-full">
                    <h5 className="text-2xl font-semibold mb-2 mt-2">Usability Testing</h5>
                    <p>
                        During usability testing, we ensured that the application was accessible to all users, regardless of their abilities or limitations.
                        Additionally, we kept in mind that the design of this application would serve as a visual reference for future applications.
                        <br /> <br />
                        Therefore, we paid special attention to the creation of design tokens and components, ensuring consistency and cohesion across the
                        entire design system.
                    </p>
                </div>
                <div className="w-full">
                    <img
                        src={minuta4}
                        loading="lazy"
                        alt="Minuta Digital Project4"
                        className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                    />
                </div>
                <div className="w-full">
                    <h5 className="text-2xl font-semibold mb-2 mt-2">Conclusion</h5>
                    <p>
                        What initially started as a simple form request grew exponentially into a super app that centralizes a large portion of the processes
                        carried out in the branch warehouses. The Minuta Digital, as the application was named, brought significant benefits, including:
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full ">
                        <CheckSquare size={24} className="text-(--brand-dark)" />
                        <div className="flex flex-col gap-4 w-full">
                            <p className="">Streamlined multiple daily processes, increasing efficiency.</p>
                        </div>
                    </div>
                    <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full ">
                        <CheckSquare size={24} className="mt-1.5 text-(--brand-dark)" />
                        <div className="flex flex-col gap-4 w-full">
                            <p className="">Resolved numerous issues from the previous system.</p>
                        </div>
                    </div>
                    <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full ">
                        <CheckSquare size={24} className="mt-1.5 text-(--brand-dark)" />
                        <div className="flex flex-col gap-4 w-full">
                            <p className="">Drastically reduced paper usage, contributing to sustainability.</p>
                        </div>
                    </div>
                    <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full ">
                        <CheckSquare size={24} className="mt-1.5 text-(--brand-dark)" />
                        <div className="flex flex-col gap-4 w-full">
                            <p className="">Improved employees' quality of life by simplifying and automating tasks.</p>
                        </div>
                    </div>
                    <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full ">
                        <CheckSquare size={24} className="mt-1.5 text-(--brand-dark)" />
                        <div className="flex flex-col gap-4 w-full">
                            <p className="">Substantially reduced operational costs related to the purchase of computers and data collection devices.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
