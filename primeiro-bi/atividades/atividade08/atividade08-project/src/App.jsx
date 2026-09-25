import { useState } from "react";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  function adicionarTarefa() {
    if (input.trim() === "") {
      return;
    }

    const novaTarefa = {
      id: Date.now(),
      text: input,
    };

    setTarefas([...tarefas, novaTarefa]);
    setInput("");
  }

  function removerTarefa(id) {
    const novaLista = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(novaLista);
  }

  return (
    <>
      <header>
        <h1>To-Do List</h1>
      </header>

      <main>
        <div className="adicionar-tarefa">
          <input
            id="tarefa"
            name="tarefa"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <button id="adicionar" onClick={adicionarTarefa}>
            Adicionar
          </button>
        </div>

        <ul id="lista">
          {tarefas.map((tarefa) => (
            <li key={tarefa.id}>
              <span>{tarefa.text}</span>

              <button onClick={() => removerTarefa(tarefa.id)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;