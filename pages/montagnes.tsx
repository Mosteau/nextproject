import Header from "../components/Header";
import "../app/globals.css";
import { useEffect, useState } from "react";
import Form from "../components/Form";
interface Task {
  id: number;
  task: string;
}

export default function Montagnes() {
  const [tache, setTache] = useState<string>("");
  const [tab, setTab] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTache(e.target.value);
  };

  const addValue = () => {
    setTab((prev) => {
      return [...prev, { id: prev.length + 1, task: tache }];
    });
  };

  const deleteTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = Number(e.currentTarget.getAttribute("data-id"));
    const newTab = tab.filter((tache) => tache.id !== id);
    setTab(newTab);
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-white font-bold flex justify-center pt-3 text-2xl opacity-90">
          La todolist{" "}
        </h1>
        <label
          htmlFor="task"
          className="text-white font-bold flex justify-start pt-3 text-xl opacity-90"
        >
          Ajouter une tache
        </label>
        <input
          className="p-2"
          type="text"
          placeholder="Entrer une tâche.."
          id="task"
          onChange={handleChange}
        />

        <button
          onClick={addValue}
          className=" m-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Ajouter la tâche
        </button>

        <h3 className="text-white font-bold flex justify-start pt-3 text-xl opacity-90">
          Liste des taches
        </h3>
        <ul>
          {tab.map((tache) => (
            <li
              key={tache.id}
              className="text-white font-bold flex justify-start pt-3 text-xl opacity-90"
            >
              {tache.task}
              <button
                data-id={tache.id}
                onClick={deleteTask}
                className="m-2 bg-white hover:bg-red-700 text-black font-bold py-2 px-4 rounded"
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-20">
          <Form />
        </div>
      </div>
    </div>
  );
}
