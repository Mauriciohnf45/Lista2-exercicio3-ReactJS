import React from 'react';
import Tarefa from './components/Tarefa'; // Importando o novo componente

function App() {
  const tarefas = [
    "Estudar React",
    "Praticar JavaScript",
    "Desenvolver um projeto",
  ];

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ol>
        {tarefas.map((tarefa, index) => (
          <Tarefa key={index} nome={tarefa} />
        ))}
      </ol>
    </div>
  );
}

export default App;
