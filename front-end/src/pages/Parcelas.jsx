import { useState } from "react"

function Parcelas({ preco, setParcelas }) {

const [valor, setValor] = useState(1)

function mudar(e) {
  const p = Number(e.target.value)
  setValor(p)
  setParcelas(p)
}

return (

<select
className="parcelasSelect"
onChange={mudar}
>

<option value={1}>
1x R$ {preco}
</option>

<option value={2}>
2x R$ {(preco / 2).toFixed(2)}
</option>

<option value={3}>
3x R$ {(preco / 3).toFixed(2)}
</option>

<option value={4}>
4x R$ {(preco / 4).toFixed(2)}
</option>

<option value={5}>
5x R$ {(preco / 5).toFixed(2)}
</option>

</select>

)

}

export default Parcelas