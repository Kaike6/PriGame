import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/cadastro";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Compras from "./pages/Compras";
import Contato from "./pages/Contato"
import Sobre from "./pages/Sobre"
import PS5 from "./pages/PS5";
import Xbox from "./pages/Xbox";
import SWhite from "./pages/swhite";
import PC from "./pages/pc";


function App(){
  return(
        <Router>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Contato" element={<Contato />} />        
        <Route path="/Compras" element={<Compras />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/PS5" element={<PS5/>} />
        <Route path="/Xbox" element={<Xbox/>} />
        <Route path="/SWhite" element={<SWhite/>} />
        <Route path="/PC" element={<PC/>} />

      </Routes>
    </Router>
    
  )
}

export default App
