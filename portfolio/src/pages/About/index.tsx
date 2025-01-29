import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import profile from "../../assets/profile_pic.png";

export function About() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                {/* Hero Section */}
                <section className="flex items-start justify-between mt-12 mb-24 mx-auto w-full 2xl:max-w-[1440px] lg:max-w-[1318px]">
                    <div className="flex flex-col gap-8 max-w-[750px]">
                        <h1 className="text-5xl text-start font-semibold mb-2">A little bit about me</h1>
                        <p className="text-xl text-start">
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
                    <img src={profile} alt="Vinny Profile" />
                </section>

                {/* Design Process Section */}
                <section className="flex flex-col items-start justify-between mt-12 mb-24 mx-auto w-full 2xl:max-w-[1440px] lg:max-w-[1318px] gap-8">
                    <h1 className="text-5xl text-start font-semibold mb-2">My design process</h1>
                    <div className="grid grid-cols-2 gap-24">
                        <div className="flex flex-col gap-4 justify-start">
                            <h6 className="text-2xl text-start font-semibold mb-2">Estratégia</h6>
                            <p>
                                <span className="font-semibold">Empatize, defina e Idealize.</span> Antes de pensar em qualquer solução é substancial entender o
                                universo que engloba o projeto e quais são os seus desafios. Para isso é necessário a realização de pesquisas, verificação de
                                cenário, criação de personas e análise de soluções.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 justify-start">
                            <h6 className="text-2xl text-start font-semibold mb-2">Estratégia</h6>
                            <p>
                                <span className="font-semibold">Empatize, defina e Idealize.</span> Antes de pensar em qualquer solução é substancial entender o
                                universo que engloba o projeto e quais são os seus desafios. Para isso é necessário a realização de pesquisas, verificação de
                                cenário, criação de personas e análise de soluções.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 justify-start">
                            <h6 className="text-2xl text-start font-semibold mb-2">Estratégia</h6>
                            <p>
                                <span className="font-semibold">Empatize, defina e Idealize.</span> Antes de pensar em qualquer solução é substancial entender o
                                universo que engloba o projeto e quais são os seus desafios. Para isso é necessário a realização de pesquisas, verificação de
                                cenário, criação de personas e análise de soluções.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 justify-start">
                            <h6 className="text-2xl text-start font-semibold mb-2">Estratégia</h6>
                            <p>
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
