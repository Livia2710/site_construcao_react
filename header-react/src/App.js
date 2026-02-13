// Importação dos componentes necessarios
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Produtos from "./Pages/Produtos";
import Contact from "./Pages/Contact";

// Componente Funcional principal App
function App() {
    return (
        <div className="App">
            <Router>

                {/* Componente Header */}
                <Header />

                {/* Definição das rotas */}
                <Routes>

                    {/* Rota para página inicial */}
                    <Route path="/" element={<Home />} />

                    {/* Rota para produtos */}
                    <Route path="/produtos" element={<Produtos />} />

                    {/* Rota para contato */}
                    <Route path="/contact" element={<Contact />} />

                </Routes>

            </Router>
        </div>
    );
}

export default App;
