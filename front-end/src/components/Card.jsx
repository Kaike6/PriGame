import { useState } from "react"
import Button from "./Button"
import Pix from "../components/Pix"
import Parcelas from "../pages/Parcelas"
import "../style/cards.css"
import { useNavigate } from "react-router-dom"

function Card({ jogo }) {
const [parcelas, setParcelas] = useState(1)
const [flip, setFlip] = useState(false)

const navigate = useNavigate()

return (

<div className={`card ${flip ? "flip" : ""}`}>

<div className="cardInner">


{/* ================= FRENTE ================= */}

<div className="cardFront">

<img src={jogo.img} alt={jogo.nome} />

<div className="info">
<h3>{jogo.nome}</h3>
<p>{jogo.desc}</p>

<div className="infoButoon">
<Button onClick={() => setFlip(true)}>
Formas de pagamento
</Button>
</div>

</div>

</div>



{/* ================= VERSO ================= */}

<div className="cardBack">

<h2>Formas de pagamento</h2>


{/* À vista */}
<h3>À vista</h3>
<p>R$ {jogo.preco}</p>


{/* Crédito */}
<h3>Cartão de crédito</h3>

<Parcelas
preco={jogo.preco}
setParcelas={setParcelas}
/>


{/* PIX */}
<h3>Pix</h3>

<div className="pixselect">
<Button onClick={Pix}>
Pagar com Pix
</Button>
</div>


{/* BOTÕES */}
<div className="voltar">
<Button onClick={() => setFlip(false)}>
Voltar
</Button>
</div>
<div className="comprar">
<Button onClick={() => {

const produtosAtuais =
JSON.parse(localStorage.getItem("produtos")) || []

const novoProduto = {
  ...jogo,
  parcelas: parcelas
}

localStorage.setItem(
"produtos",
JSON.stringify([...produtosAtuais, novoProduto])
)

navigate("/Compras")

}}>
Comprar
</Button>
</div>


</div>


</div>

</div>

)

}

export default Card