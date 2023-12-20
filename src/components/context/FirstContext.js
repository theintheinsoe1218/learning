import { createContext, useState } from "react";

export const FirstContext = createContext(null);

const FirstContextProvider = (props) => {
  const [userName, setUserName] = useState("theintheinsoe");
  return (
    <FirstContext.Provider value={{ userName }}>
      {props.children}
    </FirstContext.Provider>
  );
};

export default FirstContextProvider;
