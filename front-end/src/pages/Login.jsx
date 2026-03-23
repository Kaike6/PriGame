import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/login.css"

function Login() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    function Enviar(e) {
        e.preventDefault();

        const usuarioSalvo = JSON.parse(
            localStorage.getItem("usuario")
        );

        if (!usuarioSalvo) {
            alert("Nenhum usuário cadastrado");
            return;
        }

        if (
            nome === usuarioSalvo.nome &&
            email === usuarioSalvo.email &&
            senha === usuarioSalvo.senha
        ) {

            localStorage.setItem(
                "logado",
                JSON.stringify(usuarioSalvo)
            );

            alert("Login realizado ✅");

            navigate("/"); // ✅ CORRETO

        } else {
            alert("Nome, Email ou senha incorretos ❌");
        }
    }

    return (
        <form className="login" onSubmit={Enviar}>
            <div className="containerLogin">

                <h1>LOGIN</h1>

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

                <Label>Senha</Label>
                <Input
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <Button>Entrar</Button>

            </div>
        </form>
    );
}

export default Login;