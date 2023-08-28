import NavBar from "@/components/NavBar";
import TarefaData from "./tarefaData";


async function getContas(){
  const url = "http://localhost:8080/api/tarefas"
  const resp = await fetch(url, { next: { revalidate: 0 } })
  if (!resp.ok) throw new Error("Erro Dados não carregado")
  return resp.json()
}

export default async function Tarefas() {
  const data = await getContas()
  return (
    <>
      <NavBar active={"tarefas"}/>
      <main className="bg-green-500 m-20 p-12 rounded-x1">
        <h2>Tarefas</h2>

        <div id="data" className="text-slate-300 m-1">
          <div id="data-row" className="flex justify-between hover:bg-slate-800 p-2 rounded">
            <div className="flex gap-1">
            {data.map(tarefa => <TarefaData tarefa={tarefa} /> )}
            </div>
          </div>
        </div>
      </main>
    </>

    
  )
}
