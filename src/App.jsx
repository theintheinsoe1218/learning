import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import Child3 from "./components/Child3";
import FirstContextProvider from "./components/context/FirstContext";

function App() {
  return (
    <div className="App">
      <h1>Fetch Api Using useContext</h1>
      <FirstContextProvider>
        <Child1 />
        <Child2 />
        <Child3 />
      </FirstContextProvider>
    </div>
  );
}

export default App;
