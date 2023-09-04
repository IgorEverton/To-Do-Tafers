"use server"

import { revalidatePath } from "next/cache"
import { headers } from "../../next.config"

export async function createImageBitmap(formData){
  const url="http://localhost:8080/api/tarefas"

  const data = {
    nome:"",
    categoria: ""
  }

  const options = {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
    headers:{
      "Content-Type" : "application/json"
    }
  }

  fetch(url, options)
  if(Response.status !== 201){
    const json= await Response.json()
    const erro = json.reduce((str, erro)=>{return str += erro.message}, "")
    return{mensagem:"Erro ao cadastrar tarefa" + JSON.stringify(json)}
  }
  revalidatePath("/tarefas")
}