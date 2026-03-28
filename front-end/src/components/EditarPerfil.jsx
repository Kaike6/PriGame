import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";
import { useState, useEffect } from "react";

function EditarPerfil({setUsuario }){

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

    const [editando, setEditando] = useState(false);

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
    function editar(e){

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
                setUsuario(usuario);
                    setEditando(false);



        alert("Dados atualizados ✅");

    }



    return(

        <form onSubmit={editar}>



            <div>
                <Label>Nome</Label>
                <Input
                    type="text"
                    value={nome}
                    disabled={!editando}
                    onChange={(e)=> setNome(e.target.value)}
                />
            </div>



            <div>
                <Label>Email</Label>
                <Input
                    type="email"
                    value={email}
                    disabled={!editando}
                    onChange={(e)=> setEmail(e.target.value)}
                />
            </div>



            <div>
                <Label>Telefone</Label>
                <Input
                    type="text"
                    value={telefone}
                    disabled={!editando}
                    onChange={(e)=> setTel(e.target.value)}
                />
            </div>



            <div>
                <Label>Data nascimento</Label>
                <Input
                    type="date"
                    value={dataNascimento}
                    disabled={!editando}
                    onChange={(e)=> setData(e.target.value)}
                />
            </div>



            <div>
                <Label>Endereço</Label>
                <Input
                    type="text"
                    value={endereco}
                    disabled={!editando}
                    onChange={(e)=> setEndereco(e.target.value)}
                />
            </div>



            <div>
                <Label>Estado</Label>
                <Input
                    type="text"
                    value={estado}
                    disabled={!editando}
                    onChange={(e)=> setEstado(e.target.value)}
                />
            </div>



            <div>
                <Label>Cidade</Label>
                <Input
                    type="text"
                    value={cidade}
                    disabled={!editando}
                    onChange={(e)=> setCidade(e.target.value)}
                />
            </div>



            <div>
                <Label>Nacionalidade</Label>
                <Input
                    type="text"
                    value={nacionalidade}
                    disabled={!editando}
                    onChange={(e)=> setNacionalidade(e.target.value)}
                />
            </div>



            <div>
                <Label>País</Label>
                <Input
                    type="text"
                    value={pais}
                    disabled={!editando}
                    onChange={(e)=> setPais(e.target.value)}
                />
            </div>



            <div>
                <Label>Senha</Label>
                <Input
                    type="password"
                    value={senha}
                    disabled={!editando}
                    onChange={(e)=> setSenha(e.target.value)}
                />
            </div>



<div>
    
    <Button type="button" onClick={() => setEditando(true)}>
        Editar
    </Button>

    <Button type="submit" disabled={!editando}>
        Salvar
    </Button>
    <Button 
    type="button" 
    onClick={() => setEditando(false)}
    disabled={!editando}
>
    Cancelar
</Button>

</div>


        </form>

    );

}

export default EditarPerfil;