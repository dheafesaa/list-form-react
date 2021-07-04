import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

const Home = () => {
  const [lists, setLists] = useState("");

  const addList = (list) => {
    list.id = lists.length + 1;
    setLists([...lists, list]);
  };
  
   function deleteList(id){
    setLists(lists.filter((list) => list.id !== id));
  };

  return (
    <div>
      <Form addList={addList} />
      <List lists={lists} deleteList={deleteList}/>
    </div>
  );
};

export default Home;
