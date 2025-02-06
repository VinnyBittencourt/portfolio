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
                        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center md:text-start font-semibold mb-2">A little bit about me</h1>
                        <p className="text-base sm:text-lg md:text-xl text-center md:text-start">
                            Com uma sólida formação em Sistemas de Informação, tracei uma trajetória de três anos no setor de Tecnologia da Informação,
                            destacando-me como professor e desenvolvedor front-end/back-end, entregando produtos de qualidade excepcional. Atualmente, direciono
                            minha expertise para o campo de UX/UI e design de produtos, acumulando mais de 2 anos de experiência sólida e bem-sucedida nessa
                            área.
                            <br /> Buscando aprimorar minhas habilidades, participei do renomado curso UX Unicórnio do Leandro Rezende e do curso de UX Designer
                            Profissional da Google, onde adquiri expertise em conduzir pesquisas de campo abrangentes e criar soluções impactantes para produtos
                            web e mobile ao longo de dois anos. Ao longo de minha jornada, colaborei com diversas equipes, o que me proporcionou uma valiosa
                            compreensão prática do processo ágil SCRUM, garantindo entregas contínuas e validação sistemática de todas as hipóteses e soluções
                            propostas. Além disso, desempenhei um papel fundamental na concepção de produtos, navegando habilmente entre as necessidades
                            comerciais e as demandas do público-alvo. Realizei uma série de testes minuciosos com os usuários para validar cada etapa do
                            processo de desenvolvimento do produto.
                            <br /> Essas experiências proporcionaram uma compreensão abrangente de como alinhar as metas comerciais com as expectativas do
                            usuário, ao mesmo tempo em que me aprimorei na entrega de soluções de design centradas no usuário. Estou animado para aplicar essa
                            expertise e dedicação contínua para impulsionar o sucesso de projetos desafiadores e envolventes no futuro.
                        </p>
                    </div>
                </section>

                {/* Design Process Section */}
                <section className="flex flex-col items-start justify-between mt-12 mb-24 mx-auto w-full px-4 sm:px-8 2xl:max-w-[1440px] lg:max-w-[1218px] gap-8">
                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl text-center md:text-start font-semibold mb-2">My design process</h1>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-24">
                        {/* Strategy Blocks */}
                        <div className="flex flex-col gap-4 justify-start">
                            <h6 className="text-xl sm:text-2xl text-center md:text-start font-semibold mb-2">Estratégia</h6>
                            <p className="text-center md:text-start">
                                <span className="font-semibold">Empatize, defina e Idealize.</span> Antes de pensar em qualquer solução é substancial entender o
                                universo que engloba o projeto e quais são os seus desafios. Para isso é necessário a realização de pesquisas, verificação de
                                cenário, criação de personas e análise de soluções.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 justify-start">
                            <h6 className="text-xl sm:text-2xl text-center md:text-start font-semibold mb-2">Estratégia</h6>
                            <p className="text-center md:text-start">
                                <span className="font-semibold">Empatize, defina e Idealize.</span> Antes de pensar em qualquer solução é substancial entender o
                                universo que engloba o projeto e quais são os seus desafios. Para isso é necessário a realização de pesquisas, verificação de
                                cenário, criação de personas e análise de soluções.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 justify-start">
                            <h6 className="text-xl sm:text-2xl text-center md:text-start font-semibold mb-2">Estratégia</h6>
                            <p className="text-center md:text-start">
                                <span className="font-semibold">Empatize, defina e Idealize.</span> Antes de pensar em qualquer solução é substancial entender o
                                universo que engloba o projeto e quais são os seus desafios. Para isso é necessário a realização de pesquisas, verificação de
                                cenário, criação de personas e análise de soluções.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 justify-start">
                            <h6 className="text-xl sm:text-2xl text-center md:text-start font-semibold mb-2">Estratégia</h6>
                            <p className="text-center md:text-start">
                                <span className="font-semibold">Empatize, defina e Idealize.</span> Antes de pensar em qualquer solução é substancial entender o
                                universo que engloba o projeto e quais são os seus desafios. Para isso é necessário a realização de pesquisas, verificação de
                                cenário, criação de personas e análise de soluções.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
