import "../style/home.css"
import "../style/cards.css"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

import paddiesxbox from "../assets/paddiesxbox.jpg"
import xbox360 from "../assets/xbox360.avif";
import xboxCapa from "../assets/xboxcapa.jpg";
import xboxCarregador from "../assets/xboxcaregador.jpg";
import xboxControle from "../assets/xboxcontrole.webp";
import xboxMicrofone from "../assets/xboxmicrofone.webp";
import xboxOne from "../assets/xboxone.png";
import xboxOneFat from "../assets/xboxonefat.jpg";
import xboxOnes from "../assets/xboxones.jpg";
import xboxSeriex from "../assets/xboxseriex.jpg"; 
import xboxSeries from "../assets/xboxseries.jpg";

import Jogos from "../components/Jogos"
import Pesquisa from "../components/Pesquisa"

function Xbox() {

  const [pesquisa, setPesquisa] = useState("")
  const navigate = useNavigate()

  function comprar(produto) {
    localStorage.setItem("produto", JSON.stringify(produto))
    navigate("/Compras")
  }


const produtosPS5 = [
  { nome: "Xbox 360", img: xbox360, preco: 800, desc: "Console Xbox 360" },
  { nome: "Xbox One", img: xboxOne, preco: 1800, desc: "Console Xbox One" },
  { nome: "Xbox One S", img: xboxOnes, preco: 2200, desc: "Console Xbox One S" },
  { nome: "Xbox One Fat", img: xboxOneFat, preco: 1500, desc: "Modelo clássico do Xbox One" },
  { nome: "Xbox Series S", img: xboxSeries, preco: 2800, desc: "Console Xbox Series S" },
  { nome: "Xbox Series X", img: xboxSeriex, preco: 4200, desc: "Console Xbox Series X" },

  {
    nome: "Capa Proteção",
    img: xboxCapa,
    preco: 90,
    desc: "Capa proteção para controle Xbox"
  },

  {
    nome: "Carregador Xbox",
    img: xboxCarregador,
    preco: 140,
    desc: "Carregador para controle Xbox"
  },

  {
    nome: "Controle Xbox",
    img: xboxControle,
    preco: 300,
    desc: "Controle sem fio Xbox"
  },

  {
    nome: "Microfone Gamer",
    img: xboxMicrofone,
    preco: 180,
    desc: "Headset com microfone para jogos"
  }
];


  const produtospesquisar = [
    { nome: "paddies para xbox", img: paddiesxbox, preco: 2500, desc: "xbox serie" },
  ]

  const produtosFiltrados = produtosPS5 && produtospesquisar.filter(p =>
    p.nome.toLowerCase().includes(pesquisa.toLowerCase())
  )

  return (

    <main className="home">

      <h1>CATÁLOGO XBOX</h1>
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






    </main>
  )
}

export default Xbox