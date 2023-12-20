import React, { useContext } from "react";
import { FirstContext } from "./context/FirstContext";

const Child3 = () => {
  const { userName } = useContext(FirstContext);
  return (
    <>
      <div>Child3</div>
      <div>
        From Child 3 <br /> {userName}
      </div>
    </>
  );
};

export default Child3;
