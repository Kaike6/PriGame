import { useNavigate } from "react-router-dom"
import ps5 from "../assets/ps5.png"
import Xbox from "../assets/Xbox.png"
import Swhitch from "../assets/Swhitch.jpg"
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
                    <img src={ps5} alt="PS5" />
                </button>

                <button
                    onClick={() => navegar("/Xbox")}
                    className="cardes">
                    <img src={Xbox} alt="Xbox" />
                </button>

                <button
                    onClick={() => navegar("/Swhitch")}
                    className="cardes">
                    <img src={Swhitch} alt="Swhitch" />
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