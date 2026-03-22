import { useEffect, useState } from "react"
import "../style/compras.css"
import Button from "../components/Button"

function Compras() {

  const [produtos, setProdutos] = useState([])

  function ExcluirCompra(index){

    const novosProdutos =
    produtos.filter((_, i) => i !== index)

    setProdutos(novosProdutos)

    localStorage.setItem(
      "produtos",
      JSON.stringify(novosProdutos)
    )
  }

  useEffect(() => {

    const dados =
    JSON.parse(localStorage.getItem("produtos")) || []

    setProdutos(dados)

  }, [])


  return (

    <div className="compra-container">

      <h1>Compras</h1>

      {produtos.length > 0 ? (

        produtos.map((produto, i) => (

          <div key={i} className="produto-card">

            <h2>{produto.nome}</h2>

            <img src={produto.img} alt={produto.nome} />

            <p>{produto.desc}</p>


            <p>
              Parcelado em {produto.parcelas || 1}x de R$
              {(produto.preco / (produto.parcelas || 1)).toFixed(2)}
            </p>


            <p>Preço: R$ {produto.preco}</p>


            <Button onClick={() => ExcluirCompra(i)}>
              Excluir
            </Button>

          </div>

        ))

      ) : (

        <p>Nenhum produto selecionado</p>

      )}

    </div>

  )

}

export default Compras