import { useEffect, useState } from "react";

function App() {
  const [key, setKey] = useState("");
  useEffect(() => {
    console.log("i am useEffect");
  }, []);
  return (
    <div className="App">
      <h1>Hello useEffect</h1>
      <input
        type="text"
        onChange={(e) => {
          setKey(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
