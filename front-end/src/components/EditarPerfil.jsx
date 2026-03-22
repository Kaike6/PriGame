import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";
import { useState, useEffect } from "react";

function EditarPerfil(){

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTel] = useState("");
    const [senha, setSenha] = useState("");
    const [dataNascimento, setData] = useState("");
    const [endereco, setEndereco] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [nacionalidade, setNacionalidade] = useState("");
    const [pais, setPais] = useState("");


    // ✅ carregar dados
    useEffect(() => {

        const usuarioSalvo = JSON.parse(
            localStorage.getItem("usuario")
        );

        if(usuarioSalvo){

            setNome(usuarioSalvo.nome || "");
            setEmail(usuarioSalvo.email || "");
            setTel(usuarioSalvo.telefone || "");
            setSenha(usuarioSalvo.senha || "");
            setData(usuarioSalvo.dataNascimento || "");
            setEndereco(usuarioSalvo.endereco || "");
            setEstado(usuarioSalvo.estado || "");
            setCidade(usuarioSalvo.cidade || "");
            setNacionalidade(usuarioSalvo.nacionalidade || "");
            setPais(usuarioSalvo.pais || "");

        }

    }, []);



    // ✅ salvar de novo
    function salvar(e){

        e.preventDefault();

        const usuario = {

            nome,
            email,
            telefone,
            senha,
            dataNascimento,
            endereco,
            estado,
            cidade,
            nacionalidade,
            pais

        };

        localStorage.setItem(
            "usuario",
            JSON.stringify(usuario)
        );

        alert("Dados atualizados ✅");

    }



    return(

        <form onSubmit={salvar}>



            <div>
                <Label>Nome</Label>
                <Input
                    type="text"
                    value={nome}
                    onChange={(e)=> setNome(e.target.value)}
                />
            </div>



            <div>
                <Label>Email</Label>
                <Input
                    type="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />
            </div>



            <div>
                <Label>Telefone</Label>
                <Input
                    type="text"
                    value={telefone}
                    onChange={(e)=> setTel(e.target.value)}
                />
            </div>



            <div>
                <Label>Data nascimento</Label>
                <Input
                    type="date"
                    value={dataNascimento}
                    onChange={(e)=> setData(e.target.value)}
                />
            </div>



            <div>
                <Label>Endereço</Label>
                <Input
                    type="text"
                    value={endereco}
                    onChange={(e)=> setEndereco(e.target.value)}
                />
            </div>



            <div>
                <Label>Estado</Label>
                <Input
                    type="text"
                    value={estado}
                    onChange={(e)=> setEstado(e.target.value)}
                />
            </div>



            <div>
                <Label>Cidade</Label>
                <Input
                    type="text"
                    value={cidade}
                    onChange={(e)=> setCidade(e.target.value)}
                />
            </div>



            <div>
                <Label>Nacionalidade</Label>
                <Input
                    type="text"
                    value={nacionalidade}
                    onChange={(e)=> setNacionalidade(e.target.value)}
                />
            </div>



            <div>
                <Label>País</Label>
                <Input
                    type="text"
                    value={pais}
                    onChange={(e)=> setPais(e.target.value)}
                />
            </div>



            <div>
                <Label>Senha</Label>
                <Input
                    type="password"
                    value={senha}
                    onChange={(e)=> setSenha(e.target.value)}
                />
            </div>



            <Button type="submit">
                Salvar alterações
            </Button>



        </form>

    );

}

export default EditarPerfil;