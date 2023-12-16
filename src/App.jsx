import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await response.json();
    setTodos(data);
  };
  return (
    <div className="App">
      <h1>Fetch Api Using UseEffect</h1>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? <p>Done</p> : <p>Not Complete</p>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
