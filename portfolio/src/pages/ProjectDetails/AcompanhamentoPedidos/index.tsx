import { Footer } from "../../../components/footer";
import { Header } from "../../../components/header";

export function AcompanhaPedidosProject() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                <h1>Acompanhamento de pedidos - Page</h1>
            </div>
            <Footer />
        </div>
    );
}
