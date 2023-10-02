"use client";

import Botao from "@/components/Botao";
import NavBar from "@/components/NavBar";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function FormTarefa() {
  const [mensagem, setMensagem] = useState("");
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    data: "",
  });

  async function handleSubmit() {
    try {
      const resp = await create(formData);
      setMensagem(resp.message);
      if (resp.message) {
        setMensagem(resp.message);
      }
      redirect("/tarefas");
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
    }
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  return (
    <>
      <NavBar active="tarefas" />
      <main className="bg-slate-900 mt-20 p-12 rounded-xl max-w-lg m-auto">
        <h2 className="text-2xl font-bold">Cadastrar Tarefa</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <InputText
            id="titulo"
            label="titulo"
            value={formData.titulo}
            onChange={handleChange}
          />
          <InputText
            id="descricao"
            label="descrição"
            value={formData.descricao}
            onChange={handleChange}
          />
          <InputText
            id="data"
            label="data"
            type="date"
            value={formData.data}
            onChange={handleChange}
          />

          <div>
            <Botao elemento="">Cancelar</Botao>
            <Botao type="submit">Salvar</Botao>
          </div>
        </form>
        {mensagem}
      </main>
    </>
  );
}
