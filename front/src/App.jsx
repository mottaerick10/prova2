import { useEffect, useState } from "react";

function App() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div className="p-5">
      <h1>📚 Lista de Turmas</h1>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Turno</th>
            <th>Capacidade</th>
            <th>Data de Início</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.shift}</td>
              <td>{c.capacity}</td>
              <td>{c.start_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
