import "../style/cards.css"
import "../style/home.css"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Swhitch from "../assets/Swhitch.jpg"

import Jogos from "../components/Jogos"
import Pesquisa from "../components/Pesquisa"

function Swhite() {
    

  const [pesquisa, setPesquisa] = useState("")
  const navigate = useNavigate()

  function comprar(produto) {
    localStorage.setItem("produto", JSON.stringify(produto))
    navigate("/Compras")
  }

  const produtosSwhite = [
    { nome: "Swhitch", img: Swhitch, preco: 4500, desc: "Console Swhite" },

  ]

  const produtospesquisar = [
    { nome: "Swhitch", img: Swhitch, preco: 4500, desc: "Console Swhite" },
    
    

  ]

  const produtosFiltrados = produtosSwhite && produtospesquisar.filter(p =>
    p.nome.toLowerCase().includes(pesquisa.toLowerCase())
  )

  return (

    <main className="home">

      <h1>CATÁLOGO Swhite</h1>
            <div className="pesquisa">
        <Pesquisa setPesquisa={setPesquisa} />
      </div>
            {pesquisa && (
        <>
          <h2>RESULTADO</h2>



          <div className="jogosInvisivel">
            <Jogos jogos={produtosFiltrados} comprar={comprar} />
          </div>
        </>
      )}


      <h2>PRODUTOS</h2>

      <div className="jogos">
        <Jogos jogos={produtosSwhite} comprar={comprar} />
      </div>








    </main>
  )
}

export default Swhite