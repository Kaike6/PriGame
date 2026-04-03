import { useEffect, useState } from "react";
import EditarPerfil from "../components/EditarPerfil";
import  "../style/perfil.css"

function Perfil(){

    const [usuario, setUsuario] = useState(null);

    useEffect(() => {

        const dados = JSON.parse(
            localStorage.getItem("usuario")
        );

        setUsuario(dados);

    }, []);

    
    if(!usuario){
        return <h2>Nenhum usuário logado</h2>
    }

    return(
        <>
        <div className="perfil">
            <h1>Perfil</h1>

        
        <EditarPerfil  setUsuario={setUsuario}/>
        </div>
        </>
    )
}

export default Perfil;