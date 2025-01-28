import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

export function Details() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                <h1>Details Page</h1>
            </div>
            <Footer />
        </div>
    );
}
