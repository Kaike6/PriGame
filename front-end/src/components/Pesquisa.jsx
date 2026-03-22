import { useState } from "react"
import "../style/PesquisaJogo.css"


function Pesquisa({setPesquisa}){

const [texto, setTexto] = useState("")

function pesquisar(){
setPesquisa(texto)
}

return(

<div className="PesquisarJogo">

<input
type="text"
placeholder="Pesquisar jogo"
value={texto}
onChange={(e)=>setTexto(e.target.value)}
/>

<button onClick={pesquisar}>
Pesquisar
</button>

</div>

)

}

export default Pesquisa