import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/cadastro.css";

function Cadastro() {
    const navigate = useNavigate(); 

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTel] = useState("");
    const [senha, setSenha] = useState("");
    const [dataDenascimento, setData] = useState("");
    const [endereco, setEndereco] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [nacionalidade, setNacionalidade] = useState("");
    const [pais, setPais] = useState("");


function Enviar(e) {
    
    e.preventDefault();

    if (
        nome === "" ||
        email === "" ||
        telefone === "" ||
        senha === "" ||
        dataDenascimento === "" ||
        endereco === "" ||
        estado === "" ||
        cidade === "" ||
        nacionalidade === "" ||
        pais === ""
    ) {
        alert("Preencha todos os campos");
        return;
    }

    const dados = {
        nome,
        email,
        telefone,
        senha,
        dataDenascimento,
        endereco,
        estado,
        cidade,
        nacionalidade,
        pais
    };

    // salva cadastro
    localStorage.setItem(
        "usuario",
        JSON.stringify(dados)
    );

    alert("Cadastro salvo ✅");

    // vai para login
    navigate("/login");
}


    return (
        <form className="cadastramento" onSubmit={Enviar}>
            <div className="container">

                <h1>CADASTRO</h1>

                <Label>Nome</Label>
                <Input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <Label>Email</Label>
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Label>Telefone</Label>
                <Input
                    type="text"
                    value={telefone}
                    onChange={(e) => setTel(e.target.value)}
                />

                <Label>Data de nascimento</Label>
                <Input
                    type="date"
                    value={dataDenascimento}
                    onChange={(e) => setData(e.target.value)}
                />

                <Label>Endereço</Label>
                <Input
                    type="text"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                />

                <Label>País</Label>
                <Input
                    type="text"
                    value={pais}
                    onChange={(e) => setPais(e.target.value)}
                />

                <Label>Cidade</Label>
                <Input
                    type="text"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                />

                <Label>Estado</Label>
                <Input
                    type="text"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                />

                <Label>Nacionalidade</Label>
                <Input
                    type="text"
                    value={nacionalidade}
                    onChange={(e) => setNacionalidade(e.target.value)}
                />

                <Label>Senha</Label>
                <Input
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <Button>Cadastrar</Button>

            </div>
        </form>
    );
}

export default Cadastro;