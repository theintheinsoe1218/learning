import React, { useState } from "react";
import FormBox from "./Form";
import List from "./List";

const Main = () => {
  const [userinfos, setUserInfos] = useState([]);

  const getUserInfo = (userinfoObj) => {
    console.log(userinfoObj);
    setUserInfos([...userinfos, userinfoObj]);
  };

  return (
    <section className="main">
      <FormBox getUserInfo={getUserInfo} />
      <List userinfos={userinfos} />
    </section>
  );
};

export default Main;
