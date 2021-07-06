import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import UpdateList from "./components/UpdateList";

const Home = () => {
  const initialFormState = {
    id: null,
    title: "",
    quantity: "",
    price: "",
  };

  const [lists, setLists] = useState("");
  const [currentList, setCurrentList] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const addList = (list) => {
    list.id = lists.length + 1;
    setLists([...lists, list]);
  };

  const deleteList = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  }

  const updateList = (id, updateList) => {
    setEditing(false);

    setLists(lists.map((list) => (list.id === id ? updateList : list)));
  };

  const editRow = (list) => {
    setEditing(true);

    setCurrentList({
      id: list.id,
      title: list.title,
      quantity: list.quantity,
      price: list.price
    });
  };

  return (
    <div>
      {editing ? (
        <>
          <UpdateList
            editing={editing}
            setEditing={setEditing}
            currentList={currentList}
            updateList={updateList}
          />
        </>
      ) : (
        <>
          <Form addList={addList} />
        </>
      )}
      <List lists={lists} deleteList={deleteList} editRow={editRow} />
    </div>
  );
};

export default Home;
