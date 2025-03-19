import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { IguProject } from "./pages/ProjectDetails/Igu";
import { MonitoramentoBoxProject } from "./pages/ProjectDetails/MonitoramentoBox";
import { MinutaDigitalProject } from "./pages/ProjectDetails/MinutaDigital";
import { FutgptProject } from "./pages/ProjectDetails/Futgpt";
import { ConsultaDadosProject } from "./pages/ProjectDetails/ConsultaDados";
import { AcompanhaPedidosProject } from "./pages/ProjectDetails/AcompanhamentoPedidos";
import { Projects } from "./pages/Projects";

export function Router() {
    return (
        <Routes>
            <Route path="/portfolio/" element={<Home />} />
            <Route path="/portfolio/about" element={<About />} />
            <Route path="/portfolio/contact" element={<Contact />} />
            <Route path="/portfolio/projects/Igu" element={<IguProject />} />
            <Route path="/portfolio/projects/AcompanhaPedidos" element={<AcompanhaPedidosProject />} />
            <Route path="/portfolio/projects/ConsultaDados" element={<ConsultaDadosProject />} />
            <Route path="/portfolio/projects/Futgpt" element={<FutgptProject />} />
            <Route path="/portfolio/projects/MinutaDigital" element={<MinutaDigitalProject />} />
            <Route path="/portfolio/projects/MonitoramentoBox" element={<MonitoramentoBoxProject />} />
            <Route path="/portfolio/projects" element={<Projects />} />
            {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
    );
}
