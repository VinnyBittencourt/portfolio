import { Footer } from "../../../components/footer";
import { Header } from "../../../components/header";

export function ConsultaDadosProject() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                <h1>Consulta de Dados - Page</h1>
            </div>
            <Footer />
        </div>
    );
}
