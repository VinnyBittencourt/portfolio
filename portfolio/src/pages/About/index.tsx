import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import profile from "../../assets/profile_pic.png";

export function About() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                {/* Hero Section */}
                <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 mt-4 sm:mt-12 mb-24 mx-auto w-full px-4 sm:px-8 2xl:max-w-[1440px] lg:max-w-[1218px]">
                    {/* Image appears first on mobile */}
                    <img src={profile} alt="Vinny Profile" className="w-48 sm:w-48 md:w-60 lg:w-72 " />

                    {/* Text Content */}
                    <div className="flex flex-col gap-8 max-w-[750px] mt-6 md:mt-0 md:ml-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl w-full text-start  font-semibold mb-2">A little bit about me</h1>
                        <p className="text-base sm:text-lg md:text-xl text-start ">
                            With a solid background in Information Systems, I have built a three-year career in the Information Technology sector, excelling as
                            a professor and front-end/back-end developer, delivering products of exceptional quality. Currently, I focus my expertise on UX/UI
                            and product design, accumulating over two years of solid and successful experience in this field.
                            <br />
                            Seeking to enhance my skills, I participated in the renowned UX Unicórnio course by Leandro Rezende and Google's UX Designer
                            Professional course, where I gained expertise in conducting comprehensive field research and creating impactful solutions for web
                            and mobile products over two years. Throughout my journey, I have collaborated with various teams, which provided me with valuable
                            hands-on experience with the agile SCRUM process, ensuring continuous deliveries and systematic validation of all hypotheses and
                            proposed solutions. Additionally, I played a key role in product conceptualization, skillfully navigating between business needs and
                            user demands. I conducted a series of in-depth user tests to validate each stage of the product development process.
                            <br />
                            These experiences have given me a broad understanding of how to align business goals with user expectations, while continuously
                            refining my ability to deliver user-centered design solutions. I am excited to apply this expertise and ongoing dedication to drive
                            the success of challenging and engaging projects in the future.
                        </p>
                    </div>
                </section>

                {/* Design Process Section */}
                <section className="flex flex-col items-start justify-between mt-12 mb-24 mx-auto w-full px-4 sm:px-8 2xl:max-w-[1440px] lg:max-w-[1218px] gap-8">
                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl text-start md:text-center font-semibold mb-2">My design process</h1>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-24">
                        {/* Strategy Blocks */}
                        <div className="flex flex-col gap-4 justify-start w-full">
                            <h6 className="text-xl sm:text-2xl text-left  font-semibold mb-2">Strategy</h6>
                            <p className="text-start">
                                <span className="font-semibold">Empathize, Define, and Ideate.</span> Before considering any solution, it is essential to
                                understand the universe surrounding the project and its challenges. This requires conducting research, assessing the current
                                scenario, creating personas, and analyzing potential solutions.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 justify-start">
                            <h6 className="text-xl sm:text-2xl text-start font-semibold mb-2">Prototyping</h6>
                            <p className="text-start">
                                <span className="font-semibold">Problem Solving.</span> With a defined objective and a deeper understanding of the field, low
                                and mid-fidelity prototypes are created and tested with the specific personas of the project to ensure an optimized user
                                experience.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 justify-start">
                            <h6 className="text-xl sm:text-2xl text-start font-semibold mb-2">Design</h6>
                            <p className="text-start">
                                <span className="font-semibold">Designing with Art.</span> At this stage, various techniques and visual communication principles
                                are applied to bring the prototype to life, ensuring that the user is effortlessly guided toward their goal.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 justify-start">
                            <h6 className="text-xl sm:text-2xl text-start font-semibold mb-2">Metrics</h6>
                            <p className="text-start">
                                <span className="font-semibold">Results Analysis.</span> Finally, the use of metrics is indispensable. Applying various types of
                                metrics is vital for analyzing the outcomes generated after the product enters the market.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
