import { useNavigate } from "react-router-dom"
import ps5black from "../assets/ps5black.jpg"
import xbox from "../assets/xbox black.jpg"
import Swhite from "../assets/Swhite.avif"
import PC from "../assets/PC.png"
import "../style/console.css"

function Console(){

    const navigate = useNavigate()

    function navegar(rota){
        navigate(rota)
    }

    return(
        <main className="main">

            <h1>Console</h1>

            <div className="cards">

                <button
                    onClick={() => navegar("/PS5")}
                    className="cardes">
                    <img src={ps5black} alt="PS5 Black" />
                </button>

                <button
                    onClick={() => navegar("/Xbox")}
                    className="cardes">
                    <img src={xbox} alt="Xbox" />
                </button>

                <button
                    onClick={() => navegar("/SWhite")}
                    className="cardes">
                    <img src={Swhite} alt="S White" />
                </button>

                <button
                    onClick={() => navegar("/PC")}
                    className="cardes">
                    <img src={PC} alt="PC" />
                </button>
            </div>
        </main>
    )
}

export default Console