import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";

export function Router() {
    return (
        <Routes>
            <Route path="/portfolio/" element={<Home />} />
            {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
    );
}
