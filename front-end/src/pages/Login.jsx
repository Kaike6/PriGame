import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/login.css";

function Login() {
    const [erros, setErros] = useState({});
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    function Enviar(e) {
        e.preventDefault();

        const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

        if (!usuarioSalvo) {
            alert("Nenhum usuário cadastrado");
            return;
        }

        let novosErros = {};

        if (!nome) novosErros.nome = true;
        if (!email) novosErros.email = true;
        if (!senha) novosErros.senha = true;

        setErros(novosErros);

        if (Object.keys(novosErros).length > 0) {
            alert("Preencha os campos corretamente");
            return;
        }

        if (
            nome === usuarioSalvo.nome &&
            email === usuarioSalvo.email &&
            senha === usuarioSalvo.senha
        ) {
            localStorage.setItem("logado", JSON.stringify(usuarioSalvo));

            alert("Login realizado ✅");

            navigate("/");
        } else {
            alert("Nome, email ou senha incorretos ❌");
        }
    }

    return (
        <form className="login" onSubmit={Enviar}>
            <div className="containerLogin">

                <h1>LOGIN</h1>

                <Label>Nome</Label>
                <Input
                    type="text"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => {
                        setNome(e.target.value);
                        setErros({ ...erros, nome: false });
                    }}
                    className={erros.nome ? "input input-erro" : "input"}
                />

                <Label>Email</Label>
                <Input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setErros({ ...erros, email: false });
                    }}
                    className={erros.email ? "input input-erro" : "input"}
                />

                <Label>Senha</Label>
                <Input
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => {
                        setSenha(e.target.value);
                        setErros({ ...erros, senha: false });
                    }}
                    className={erros.senha ? "input input-erro" : "input"}
                />

                <Button>Entrar</Button>

            </div>
        </form>
    );
}

export default Login;