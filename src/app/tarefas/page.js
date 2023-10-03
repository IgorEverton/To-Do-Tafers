import NavBar from "@/components/NavBar";
import TarefaData from "./tarefaData";
import Botao from "@/components/Botao";

async function getTarefas() {
  // Use dados falsos durante o processo de compilação
  if (process.env.NODE_ENV === 'production') {
    const url = "http://localhost:8080/api/tarefas";
    const resp = await fetch(url);
    if (!resp.ok) throw new Error("Erro: Dados não carregados");
    return resp.json();
  } else {
    // Use dados falsos para desenvolvimento
    return [
      // Objetos de tarefa falsos
      { id: 1, title: "Tarefa Falsa 1" },
      { id: 2, title: "Tarefa Falsa 2" },
      // Adicione mais dados falsos conforme necessário
    ];
  }
}


export default async function Tarefas() {
  const data = await getTarefas();
  return (
    <>
      <NavBar active={"tarefas"} />
      <main className="bg-green-500 m-20 p-12 rounded-x1">
        <div className="flex justify-between items-center">
          <h2>Tarefas</h2>
          <Botao href="/tarefa/new">Cadastrar tarefa</Botao>
        </div>
        <div id="data" className="text-slate-300 m-1">
          <div
            id="data-row"
            className="flex justify-between hover:bg-slate-800 p-2 rounded"
          >
            <div className="flex gap-1">
              {data.map((tarefa) => (
                <TarefaData tarefa={tarefa} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
