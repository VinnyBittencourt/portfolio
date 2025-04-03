import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import profile from "../../assets/profile_pic.png";

export function About() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                {/* Hero Section */}
                <section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-4 sm:mt-12 mb-24 mx-auto w-full px-4 lg:px-0 sm:px-8 2xl:max-w-[1440px] lg:max-w-[1218px]">
                    {/* Text Content */}
                    <div className="flex flex-col gap-8 max-w-[750px]">
                        <h1 className="text-5xl w-full text-start font-semibold mb-2">About me</h1>
                        <p className="text-base text-start ">
                            With a strong foundation in Information Systems and over five years of experience in technology, I’ve built a
                            career that bridges the gap between design and development. I began as a professor and full-stack developer,
                            delivering high-quality digital products, and gradually transitioned into what truly drives me: crafting
                            intuitive, user-centered experiences.
                            <br />
                            <br />
                            For the past two years, I’ve specialized in UX/UI and product design, combining design thinking with front-end
                            development to turn complex problems into meaningful solutions. I’ve deepened my expertise through the UX
                            Unicórnio course by Leandro Rezende and Google’s UX Design Professional Certificate, mastering user research,
                            prototyping, and usability testing for both web and mobile platforms.
                            <br />
                            <br />
                            Throughout my journey, I’ve collaborated with cross-functional teams in agile environments, applying SCRUM to
                            ensure iterative delivery, fast feedback loops, and validated results. I’m often involved from the earliest
                            stages—aligning user needs with business goals, leading product conceptualization, and conducting in-depth user
                            testing to guide decisions.
                            <br />
                            <br />
                            These experiences have sharpened my ability to connect strategy, design, and technology. I'm passionate about
                            turning insights into interfaces that not only look good, but work beautifully. I'm excited to bring this
                            mindset to new and challenging projects—always aiming to create products that people love to use.
                        </p>
                    </div>
                    {/* Image appears first on mobile */}
                    <img src={profile} alt="Vinny Profile" className="w-full sm:w-48 md:w-60 lg:w-72 mt-8 lg:mt-16 " />
                </section>

                {/* Design Process Section */}
                <section className="flex flex-col items-start justify-between mt-12 mb-24 mx-auto w-full px-4 lg:px-0 sm:px-8 2xl:max-w-[1440px] lg:max-w-[1218px] gap-8">
                    {/* Title */}
                    <h1 className="text-5xl text-start md:text-center font-semibold mb-2">My design process</h1>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-24">
                        {/* Strategy Blocks */}
                        <div className="flex flex-col gap-4 justify-start w-full">
                            <h6 className="text-xl sm:text-2xl text-left  font-semibold mb-2">Strategy</h6>
                            <p className="text-start">
                                <span className="font-semibold">Empathize, Define, and Ideate.</span> Before considering any solution, it is
                                essential to understand the universe surrounding the project and its challenges. This requires conducting
                                research, assessing the current scenario, creating personas, and analyzing potential solutions.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 justify-start">
                            <h6 className="text-xl sm:text-2xl text-start font-semibold mb-2">Prototyping</h6>
                            <p className="text-start">
                                <span className="font-semibold">Problem Solving.</span> With a defined objective and a deeper understanding
                                of the field, low and mid-fidelity prototypes are created and tested with the specific personas of the
                                project to ensure an optimized user experience.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 justify-start">
                            <h6 className="text-xl sm:text-2xl text-start font-semibold mb-2">Design</h6>
                            <p className="text-start">
                                <span className="font-semibold">Designing with Art.</span> At this stage, various techniques and visual
                                communication principles are applied to bring the prototype to life, ensuring that the user is effortlessly
                                guided toward their goal.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 justify-start">
                            <h6 className="text-xl sm:text-2xl text-start font-semibold mb-2">Metrics</h6>
                            <p className="text-start">
                                <span className="font-semibold">Results Analysis.</span> Finally, the use of metrics is indispensable.
                                Applying various types of metrics is vital for analyzing the outcomes generated after the product enters the
                                market.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
