import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";
import { useState } from "react";
import "../style/login.css"


function Login() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function Enviar(e) {
        e.preventDefault();

        const usuarioSalvo = JSON.parse(
            localStorage.getItem("usuario")
        );

        if (!usuarioSalvo) {
            alert("Nenhum usuário cadastrado");
            return;
        }

        // verifica login
        if (
            nome === usuarioSalvo.nome &&
            email === usuarioSalvo.email &&
            senha === usuarioSalvo.senha
        ) {

            // salva usuário logado
            localStorage.setItem(
                "logado",
                JSON.stringify(usuarioSalvo)
            );

            alert("Login realizado ✅");

            // redirecionar (opcional)
            window.location.href = "/";

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