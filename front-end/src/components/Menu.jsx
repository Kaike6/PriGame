import "../style/menu.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom"


function Menu() {
  

  const [aberto, setAberto] = useState(false);
  
      const navigate = useNavigate()

      function navegar(){
        navigate("/")
      }

  return (
    <nav className="menu">

      <h1 className="logo" onClick={navegar}>
        PriGame
      </h1>

      <div
        className="hamburguer"
        onClick={() => setAberto(!aberto)}
      >
        ☰
      </div>

      <ul className={aberto ? "menuLista ativo" : "menuLista"}>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/Sobre">Sobre</Link>
        </li>

        <li>
          <Link to="/Compras">Compras</Link>
        </li>

        <li>
          <Link to="/Contato">Contato</Link>
        </li>

        <li>
          <Link to="/cadastro">Cadastro</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/Perfil">Perfil</Link>
        </li>

      </ul>

    </nav>
  );
}

export default Menu;