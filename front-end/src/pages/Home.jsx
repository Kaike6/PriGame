import "../style/home.css"
import "../style/console.css"
// import Console from "../pages/Console"

import Console from "../pages/Console"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Jogos from "../components/Jogos"
import Pesquisa from "../components/Pesquisa"

import godOFwar from "../assets/godOFwar.avif"
import mortalkombat from "../assets/mortalkombat.png"
import gta6 from "../assets/gta6.webp"
import resident from "../assets/resident.png"
import spider from "../assets/spider.webp"
import assasino from "../assets/assasino.png"
import warzone from "../assets/warzone.png"
import forza from "../assets/forza.png"
import diablo from "../assets/diablo.webp"
import reddead from "../assets/reddead.png"
import kong from "../assets/kong.png"
import futebol from "../assets/futebol.png"
import Footer from "./Footer"

function Home() {
  const [pesquisa, setPesquisa] = useState("")
  const navigate = useNavigate()

  function comprar(jogo) {
    localStorage.setItem("produto", JSON.stringify(jogo))
    navigate("/Compras")
  }

const jogosVisiveis = [
  { nome: "Spider-Man 2", img: spider, preco: 299, desc: "Aventura" },
  { nome: "Assassin's Creed", img: assasino, preco: 299, desc: "Ação" },
  { nome: "Warzone", img: warzone, preco: 299, desc: "Battle Royale" },
  { nome: "Forza", img: forza, preco: 299, desc: "Corrida" },
  { nome: "God of War Ragnarok", img: godOFwar, preco: 299, desc: "Ação e Aventura" },
  { nome: "Mortal Kombat ", img: mortalkombat, preco: 299, desc: "Luta" },
  { nome: "GTA 6", img: gta6, preco: 299, desc: "Ação e Mundo Aberto" },
  { nome: "Resident Evil", img: resident, preco: 299, desc: "Terror" },
  { nome: "Diablo IV", img: diablo, preco: 299, desc: "RPG" },
  { nome: "Red Dead Redemption", img: reddead, preco: 299, desc: "Aventura e Faroeste" },
  { nome: "Black Myth: Wukong", img: kong, preco: 299, desc: "Ação e Fantasia" },
  { nome: "FIFA / EA Sports FC", img: futebol, preco: 299, desc: "Esporte" },
];


  const jogosOcultos = [
    { nome:"God of War", img: godOFwar, preco:299, desc:"Kratos enfrenta deuses e monstros" },
    { nome:"Diablo IV", img: diablo, preco:299, desc:"RPG sombrio" },
    { nome:"Red Dead Redemption 2", img: reddead, preco:299, desc:"Velho oeste em mundo aberto" },
    { nome:"Black Myth Wukong", img: kong, preco:299, desc:"Aventura do rei macaco" },
    { nome:"EA Sports FC 24", img: futebol, preco:299, desc:"Simulador de futebol" },
    { nome:"Resident Evil 4", img: resident, preco:299, desc:"Terror com ação" },
    { nome:"GTA 6", img: gta6, preco:299, desc:"Mundo aberto criminal" },
    { nome:"Mortal Kombat 1", img: mortalkombat, preco:299, desc:"Jogo de luta" },
    { nome:"Forza Horizon 5", img: forza, preco:299, desc:"Corrida em mundo aberto" },
    { nome:"Call of Duty", img: warzone, preco:299, desc:"Tiro em primeira pessoa" },
    { nome:"Spider-Man Miles Morales", img: spider, preco:299, desc:"Herói da Marvel" },
    { nome:"Assassin Creed Mirage", img: assasino, preco:299, desc:"Ação stealth" },
    { nome:"The Witcher 3", img: reddead, preco:299, desc:"RPG fantasia" },
    { nome:"Cyberpunk 2077", img: gta6, preco:299, desc:"Futuro cyberpunk" },
    { nome:"Elden Ring", img: diablo, preco:299, desc:"RPG difícil" },
    { nome:"Hogwarts Legacy", img: kong, preco:299, desc:"Magia e aventura" },
    { nome:"Need for Speed", img: forza, preco:299, desc:"Corrida arcade" },
    { nome:"Battlefield", img: warzone, preco:299, desc:"Guerra online" },
    { nome:"Far Cry 6", img: assasino, preco:299, desc:"Ação em mundo aberto" },
    { nome:"Minecraft", img: futebol, preco:299, desc:"Construção e sobrevivência" },
  ]

  ////////////////////////
  /// TODOS (para pesquisa)
  ////////////////////////
  const todosJogos = [...jogosVisiveis, ...jogosOcultos]
  const jogosFiltrados = todosJogos.filter(j =>
    j.nome.toLowerCase().includes(pesquisa.toLowerCase())
  )

  return (
    <main className="home">
      <h1>CATÁLOGO</h1>

      <section className="homeHeader">
        <div className="god"><img src={godOFwar} /></div>
        <div className="mortal"><img src={mortalkombat} /></div>
        <div className="gta"><img src={gta6} /></div>
        <div className="resid"><img src={resident} /></div>
      </section>

      <h2>JOGOS POPULARES</h2>
      <div className="jogos">
      <Jogos jogos={jogosVisiveis} comprar={comprar} />
      <h4>JOGOS DISPONÍVEIS</h4>
      <div className="pesquisa"><Pesquisa setPesquisa={setPesquisa} /></div></div>
      {pesquisa && (
        <>
          <h1>RESULTADO</h1>
          <div className="jogosInvisivel">
          <Jogos jogos={jogosFiltrados} comprar={comprar} />
          </div>
        </>
      )}
      <Console/>
      <Footer/>
    </main>
  )
}

export default Home