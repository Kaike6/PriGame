import "../style/cards.css"
import "../style/ps5.css"

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

import Button from "../components/Button"
import Input from "../components/Input"
import Jogos from "../components/Jogos"
import Label from "../components/Label"

function PS5() {

  const [pesquisa, setPesquisa] = useState("")
  const [texto, setTexto] = useState("")

  const navigate = useNavigate()

  function comprar(produto) {
    localStorage.setItem("produto", JSON.stringify(produto))
    navigate("/Compras")
  }

  function pesquisar() {
    setPesquisa(texto)
  }

  const produtosPS5 = [
    { nome: "PS1", img: Ps1, preco: 500, desc: "Playstation 1" },
    { nome: "PS2", img: Ps2, preco: 700, desc: "Playstation 2" },
    { nome: "PS3", img: Ps3, preco: 1200, desc: "Playstation 3" },
    { nome: "PS4", img: Ps4, preco: 2500, desc: "Playstation 4" },
    { nome: "PS5", img: Ps5, preco: 4500, desc: "Playstation 5" },
  {
    nome: "Capa Proteção",
    img: capaProtecao,
    preco: 100,
    desc: "Capa proteção controle Playstation 5"
  },

  {
    nome: "Carregador PS5",
    img: caregadorPs5,
    preco: 150,
    desc: "Carregador para controle PS5"
  },

  {
    nome: "Estojo PS5",
    img: estojoPs5,
    preco: 80,
    desc: "Estojo para guardar controle"
  },

  {
    nome: "Fone Bluetooth",
    img: foneBluttof,
    preco: 200,
    desc: "Fone sem fio gamer"
  },

  {
    nome: "Fone com fio",
    img: fonefio,
    preco: 90,
    desc: "Fone gamer com fio"
  }

]
  

  const produtosInvisivel = [
    {
      nome: "capaProtecao",
      img: capaProtecao,
      preco: 100,
      desc: "Capa proteção controle Playstation 5"
    }
  ]

  const todosProdutos = [...produtosPS5, ...produtosInvisivel]

  const produtosFiltrados = todosProdutos.filter(p =>
    p.nome.toLowerCase().includes(pesquisa.toLowerCase())
  )

  return (
    <div className="containerPs5">

      <Label>Pesquisar produtos</Label>

      {/* INPUT + BOTÃO */}
      <div className="pesquisa">

        <Input
          type="text"
          placeholder="Pesquisar..."
          onChange={(e) => setTexto(e.target.value)}
        />

        <Button onClick={pesquisar}>
          Pesquisar
        </Button>

      </div>


      {pesquisa && (
        <>
          <h3>Resultado</h3>

          <div className="produtosinvisivel">
            <Jogos jogos={produtosFiltrados} comprar={comprar} />
          </div>
        </>
      )}

      <h2>PRODUTOS MAIS VENDIDOS</h2>

      <div className="produtosPs5">
        <Jogos jogos={produtosPS5} comprar={comprar} />
      </div>

    </div>
  )
}

export default PS5