import { useEffect, useState } from "react";
import EditarPerfil from "../components/EditarPerfil";

function Perfil(){

    const [usuario, setUsuario] = useState(null);

    useEffect(() => {

        const dados = JSON.parse(
            localStorage.getItem("logado")
        );

        setUsuario(dados);

    }, []);

    if(!usuario){
        return <h2>Nenhum usuário logado</h2>
    }

    return(
        <>
        <div>
            <h1>Perfil</h1>

        </div>
        <EditarPerfil />
        </>
    )
}

export default Perfil;