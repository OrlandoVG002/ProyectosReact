import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarComp } from "./Global/Navbar.jsx";
import { Desafio01_01Carta as D01_01Carta} from "./Components/Desafio1/Index.jsx"
import { Desafio02_01API as D02_01API } from "./Components/Desafio2/Index.jsx";
import { Desafio03_01Map as D03_01Map } from "./Components/Desafio3/Index.jsx";
import { Desafio04_01Router as D04_01Router } from "./Components/Desafio4/Index.jsx";
import { Desafio04_01Details as D04_01Details } from "./Components/Desafio4/Detalles.jsx";
import { Desafio05_01Context as D05_01Context } from "./Components/Desafio5/Index.jsx";

import "./Global/Main.css"

/* Configuracion del router principal y rutas de navegacion*/
function App() {
    return (
        <BrowserRouter>
            <NavbarComp />
            <main className="contenido-principal">
                <Routes>
                    <Route path="/"             element={<D01_01Carta />} />
                    <Route path="/D02_01API"    element={<D02_01API />} />
                    <Route path="/D03_01Map"    element={<D03_01Map />} />
                    <Route path="/D04_01Router" element={<D04_01Router />} />
                    <Route path="/D04_01User/user/:id" element={<D04_01Details />} />
                    <Route path="/D05_01Context" element={<D05_01Context />} />
                </Routes>
            </main>
        </BrowserRouter>
);
}

export default App;
