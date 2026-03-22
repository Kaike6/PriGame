import Card from "./Card"
import "../style/jogos.css"


function Jogos({ jogos, comprar }) {

return (

<section className="homeLista">

{jogos.map((jogo, i) => (

<Card
key={i}
jogo={jogo}
comprar={comprar}
/>

))}

</section>

)

}

export default Jogos




