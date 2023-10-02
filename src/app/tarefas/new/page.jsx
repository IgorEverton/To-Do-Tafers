"use client";

import Botao from "@/components/Botao";
import NavBar from "@/components/NavBar";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function FormTarefa() {
  const [mensagem, setMensagem] = useState("");

  async function handleSubmit(formData) {
    const resp = await create(formData);
    setMensagem(resp.message);
    if (resp.message) {
      setMensagem(resp.message);
    }
    redirect("/tarefas");
  }

  return (
    <>
      <NavBar active="tarefas" />
      <main className="bg-slate-900 mt-20 p-12 rounded-xl max-w-lg m-auto">
        <h2 className="text-2x1 font-bold">Cadastrar Tarefa</h2>
        <form action={create}>
          <InputText id="titulo" label="titulo" />
          <InputText id="descricao" label="descrição" />
          <InputText id="data" label="data" type="date" />

          <div>
            <Botao elemento="">
              Cancelar
            </Botao>
            <Botao
              onClick={handleSubmit}
            >
              Salvar
            </Botao>
          </div>
        </form>
        {mensagem}
      </main>
    </>
  );
}
