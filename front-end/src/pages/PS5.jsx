import "../style/home.css"
import "../style/cards.css"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Ps1 from "../assets/Ps1.jpg"
import Ps2 from "../assets/Ps2.jpg"
import Ps3 from "../assets/Ps3.jpg"
import Ps4 from "../assets/Ps4.webp"
import Ps5 from "../assets/Ps5.webp"

import capaProtecao from "../assets/capaProtecao.webp"
import caregadorPs5 from "../assets/caregadorPs5.png"
import estojoPs5 from "../assets/estojoPs5.jpg"
import foneBluttof from "../assets/foneBluttof.jpg"
import fonefio from "../assets/fonefio.jpg"

import Jogos from "../components/Jogos"
import Pesquisa from "../components/Pesquisa"

function PS5() {

  const [pesquisa, setPesquisa] = useState("")
  const navigate = useNavigate()

  function comprar(produto) {
    localStorage.setItem("produto", JSON.stringify(produto))
    navigate("/Compras")
  }

  const produtosPS5 = [
    { nome: "PS1", img: Ps1, preco: 500, desc: "Playstation 1" },
    { nome: "PS2", img: Ps2, preco: 700, desc: "Playstation 2" },
    { nome: "PS3", img: Ps3, preco: 1200, desc: "Playstation 3" },
    { nome: "PS4", img: Ps4, preco: 2500, desc: "Playstation 4" },
    { nome: "PS5", img: Ps5, preco: 4500, desc: "Playstation 5" },

    { nome: "Capa Proteção", img: capaProtecao, preco: 100, desc: "Capa controle" },
    { nome: "Carregador", img: caregadorPs5, preco: 150, desc: "Carregador PS5" },
    { nome: "Estojo", img: estojoPs5, preco: 80, desc: "Estojo controle" },
    { nome: "Fone Bluetooth", img: foneBluttof, preco: 200, desc: "Fone gamer" },
    { nome: "Fone com fio", img: fonefio, preco: 90, desc: "Fone gamer" }
  ]

  const produtospesquisar = [
    { nome: "PS4", img: Ps4, preco: 2500, desc: "Playstation 4" },
    { nome: "PS5", img: Ps5, preco: 4500, desc: "Playstation 5" },

  ]

  const produtosFiltrados = produtosPS5 && produtospesquisar.filter(p =>
    p.nome.toLowerCase().includes(pesquisa.toLowerCase())
  )

  return (

    <main className="home">

      <h1>CATÁLOGO PS5</h1>
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
        <Jogos jogos={produtosPS5} comprar={comprar} />
      </div>


      <h4>PESQUISAR</h4>






    </main>
  )
}

export default PS5