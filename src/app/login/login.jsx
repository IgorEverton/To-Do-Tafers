import { useState } from "react";
import { redirect } from "next/navigation";
import { login } from "@/api/auth"; // Importe a função de autenticação

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resposta = await login({ email, senha });
      if(email==resposta.email && senha===resposta.senha){
        redirect("/pages");
      } else {
        setErro("Credenciais inválidas. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setErro("Erro ao fazer login. Tente novamente mais tarde.");
    }
  };

  return (
    <div>
      <h1>Fazer Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
      {<p>{erro}</p>}
    </div>
  );
}
