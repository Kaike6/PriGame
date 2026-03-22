import { useEffect, useState } from "react";

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
        <div>
            <h1>Perfil</h1>

            <p>Nome: {usuario.nome}</p>
            <p>Email: {usuario.email}</p>
            <p>Telefone: {usuario.telefone}</p>
            <p>Data de nascimento: {usuario.dataDenascimento}</p>
            <p>Endereço: {usuario.endereco}</p>
            <p>País: {usuario.pais}</p>
            <p>Cidade: {usuario.cidade}</p>
            <p>Estado: {usuario.estado}</p>
            <p>Nacionalidade: {usuario.nacionalidade}</p>
            <p>Senha: {usuario.senha}</p>
            <p>Estado: {usuario.estado}</p>

        </div>
    )
}

export default Perfil;