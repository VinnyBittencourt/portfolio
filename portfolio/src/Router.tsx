import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Details } from "./pages/Details";
import { Projects } from "./pages/Projects";

export function Router() {
    return (
        <Routes>
            <Route path="/portfolio/" element={<Home />} />
            <Route path="/portfolio/about" element={<About />} />
            <Route path="/portfolio/contact" element={<Contact />} />
            <Route path="/portfolio/details" element={<Details />} />
            <Route path="/portfolio/projects" element={<Projects />} />
            {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
    );
}
