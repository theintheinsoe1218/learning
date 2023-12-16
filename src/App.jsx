import { useState } from "react";

function App() {
  const [id, setId] = useState("");
  const [error, setError] = useState(false);
  const [todo, setTodo] = useState(null);
  const getId = async (e) => {
    e.preventDefault();

    if (id < 1) {
      setError(true);
      setId("");
      return;
    }
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    const data = await response.json();
    setError(false);
    setTodo(data);

    setId("");
  };
  return (
    <div className="App">
      <h1>Fetch Api Using UseEffect With Input </h1>

      <form onSubmit={getId}>
        <input
          type="number"
          name=""
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <button type="submit">Get Data</button>
      </form>
      <div>
        {error && <h1>Please Enter an valid id. (eg. 1,2,3,...)</h1>}
        {todo && (
          <div key={todo.id}>
            <h1>title - {todo.title}</h1>
            <h1>userId - {todo.userId}</h1>
            <h1>
              completed -{" "}
              {todo.completed ? (
                <span>Completed</span>
              ) : (
                <span>Not Complete</span>
              )}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
