import Link from "next/link";

export default function NavBar({ active }) {
  return (
    <nav className="bg-green-300 p-6 flex justify-between items-center">
      <ul className="flex gap-16 items-end text-slate-400 text-sm">
        <li>
          <Link href="/">
            <h1 className="text-2xl font-bold text-slate-100">To-do Tarefs</h1>
          </Link>
        </li>
        <li>
          <Link
            className={active == "tarefas" && "text-slate-300"}
            href="/tarefas"
          >
            Tarefas
          </Link>
        </li>
      </ul>
      <div className="h-12 w-12 rounded-full overflow-hidden">
        <Link href="/perfil">
          <img src="https://i.pravatar.cc/100" alt="avatar usuario" />
        </Link>
      </div>
    </nav>
  );
}
