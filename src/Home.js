import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

const Home = () => {
  const [lists, setLists] = useState("");

  const addUser = (list) => {
    list.id = lists.length + 1;
    setLists([...lists, list]);
  };

  // const deleteUser = (id) => {
  //   setLists(lists.filter((list) => list.id !== id));
  // };

  return (
    <div>
      <Form addUser={addUser} />
      <List lists={lists}/>
    </div>
  );
};

export default Home;
