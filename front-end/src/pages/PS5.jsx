import "../style/cards.css"
import  "../style/ps5.css"
import Ps1 from "../assets/Ps1.jpg"
import Ps2 from "../assets/Ps2.jpg"
import Ps3 from "../assets/Ps3.jpg"
import Ps4 from "../assets/Ps4.webp"
import Ps5 from "../assets/Ps5.webp"

import Card from "../components/Card"
function PS5() {

  const produtosPS5 = [
    { nome: "PS1", img: Ps1, preco: 500, desc: "Playstation 1" },
    { nome: "PS2", img: Ps2, preco: 700, desc: "Playstation 2" },
    { nome: "PS3", img: Ps3, preco: 1200, desc: "Playstation 3" },
    { nome: "PS4", img: Ps4, preco: 2500, desc: "Playstation 4" },
    { nome: "PS5", img: Ps5, preco: 4500, desc: "Playstation 5" },
  ]

  return (
    <div className="containePs5">
      {produtosPS5.map((jogo, index) => (
        <Card key={index} jogo={jogo} />
      ))}
    </div>
  )
}

export default PS5