import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/cadastro.css";

function Cadastro() {
    const navigate = useNavigate();

    const [erros, setErros] = useState({});

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTel] = useState("");
    const [senha, setSenha] = useState("");
    const [endereco, setEndereco] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [nacionalidade, setNacionalidade] = useState("");
    const [pais, setPais] = useState("");

    const [dia, setDia] = useState("");
    const [mes, setMes] = useState("");
    const [ano, setAno] = useState("");

    function Enviar(e) {
        e.preventDefault();

        let novosErros = {};

        // valida data
        if (!dia || !mes || !ano) {
            novosErros.dataNascimento = true;
        }
        if (!nome) {
            novosErros.nome = true;
        }
        if (!email || !email.includes("@")) {
            novosErros.email = true;
        }
        if (!telefone) {
            novosErros.telefone = true;
        }
        if (!senha) {
            novosErros.senha = true;
        }
        if (!endereco) {
            novosErros.endereco = true;
        }
        if (!estado) {
            novosErros.estado = true;
        }
        if (!cidade) {
            novosErros.cidade = true;
        }
        if (!nacionalidade) {
            novosErros.nacionalidade = true;
        }
        if (!pais) {
            novosErros.pais = true;
        }

        
    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      return;
    }

        // salva erros
        setErros(novosErros);

        // se tiver erro, para aqui
        if (Object.keys(novosErros).length > 0) return;
        // monta data
        const dataDenascimento = `${dia}/${mes}/${ano}`;

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

        localStorage.setItem("usuario", JSON.stringify(dados));

        alert("Cadastro salvo ✅");

        navigate("/login");
    }

    return (
        <form className="cadastramento" onSubmit={Enviar}>
            <div className="container">

                <h1>CADASTRO</h1>

                <Label>Nome</Label>
                <Input
                    type="text"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className={erros.nome ? "input input-erro" : "input"}
                />

                <Label>Email</Label>
                <Input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={erros.email ? "input input-erro" : "input"}
                />

                <Label>Telefone</Label>
                <Input
                    type="text"
                    placeholder="Digite seu telefone"
                    value={telefone}
                    onChange={(e) => setTel(e.target.value)}
                    className={erros.telefone ? "input input-erro" : "input"}
                />

                <Label>Data de nascimento</Label>
                <div className="data-row">

                    <select
                        value={dia}
                        onChange={(e) => setDia(e.target.value)}
                        className={erros.dataNascimento ? "input input-erro" : "input"}
                    >
                        <option value="">Dia</option>
                        {[...Array(31)].map((_, i) => (
                            <option key={i} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>

                    <select
                        value={mes}
                        onChange={(e) => setMes(e.target.value)}
                        className={erros.dataNascimento ? "input input-erro" : "input"}
                    >
                        <option value="">Mês</option>
                        <option>Jan</option>
                        <option>Fev</option>
                        <option>Mar</option>
                        <option>Abr</option>
                        <option>Mai</option>
                        <option>Jun</option>
                        <option>Jul</option>
                        <option>Ago</option>
                        <option>Set</option>
                        <option>Out</option>
                        <option>Nov</option>
                        <option>Dez</option>
                    </select>

                    <select
                        value={ano}
                        onChange={(e) => setAno(e.target.value)}
                        className={erros.dataNascimento ? "input input-erro" : "input"}
                    >
                        <option value="">Ano</option>
                        {[...Array(50)].map((_, i) => (
                            <option key={i} value={2025 - i}>
                                {2025 - i}
                            </option>
                        ))}
                    </select>
                </div>

                {/* ERRO VISUAL */}

                <Label>Endereço</Label>
                <Input
                    type="text"
                    placeholder="Digite seu endereço"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    className={erros.endereco ? "input input-erro" : "input"}
                />

                <Label>País</Label>
                <Input
                    type="text"
                    placeholder="Digite seu país"
                    value={pais}
                    onChange={(e) => setPais(e.target.value)}
                    className={erros.pais ? "input input-erro" : "input"}
                />

                <Label>Cidade</Label>
                <Input
                    type="text"
                    placeholder="Digite sua cidade"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    className={erros.cidade ? "input input-erro" : "input"}
                />

                <Label>Estado</Label>
                <Input
                    type="text"
                    placeholder="Digite seu estado"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    className={erros.estado ? "input input-erro" : "input"}
                />

                <Label>Nacionalidade</Label>
                <Input
                    type="text"
                    placeholder="Digite sua nacionalidade"
                    value={nacionalidade}
                    onChange={(e) => setNacionalidade(e.target.value)}
                    className={erros.nacionalidade ? "input input-erro" : "input"}
                />

                <Label>Senha</Label>
                <Input
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className={erros.senha ? "input input-erro" : "input"}
                />
            </div>

            <div className="btnCadastra">
                <Button>Cadastrar</Button>
            </div>
        </form>
    );
}

export default Cadastro;