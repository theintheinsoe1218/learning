import { useEffect, useReducer, useState } from "react";

const firstReducer = (state, action) => {
  switch (action.type) {
    case ACTION.MINUS:
      return { ...state, count: state.count - 1 };
    case ACTION.PLUS:
      return { ...state, count: state.count + 1 };
    case ACTION.UPDATE_KEY:
      return { ...state, key: action.payload };
    default:
      throw new Error();
  }
};

const ACTION = {
  PLUS: "plus",
  MINUS: "minus",
  UPDATE_KEY: "updatekey",
};
function App() {
  // const [key, setKey] = useState("");
  // const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(firstReducer, { count: 0, key: "" });

  return (
    <div className="App">
      <h1>Hello useReducer</h1>
      <input
        type="text"
        onChange={(e) =>
          dispatch({ type: ACTION.UPDATE_KEY, payload: e.target.value })
        }
      />

      <h2>Your key is - {state.key}</h2>
      <button
        onClick={() => {
          dispatch({ type: ACTION.MINUS });
        }}
      >
        -
      </button>
      <span>{state.count}</span>
      <button
        onClick={() => {
          dispatch({ type: ACTION.PLUS });
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
