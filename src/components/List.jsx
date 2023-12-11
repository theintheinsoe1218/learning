import React from "react";
import Card from "./Card";

const List = (props) => {
  console.log(props.userinfos);
  return (
    <>
      {props.userinfos.length > 0 ? (
        props.userinfos.map((info) => (
          <Card css={"card-mt"} key={info.email}>
            <div>
              <p>Name : {info.name}</p>
              <p>Live : {info.live}</p>
              <p>Email : {info.email}</p>
            </div>
          </Card>
        ))
      ) : (
        <>
          <p>Add a new user</p>
        </>
      )}
    </>
  );
};

export default List;
