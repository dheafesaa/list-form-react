import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Form from "./Form/Form";
import Header from "../../components/Header/Header";
import List from "./List/List";

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
  };

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
      price: list.price,
    });
  };

  return (
    <div className="home">
      <Header />
      <>
        <Form
          addList={addList}
          editing={editing}
          setEditing={setEditing}
          currentList={currentList}
          updateList={updateList}
        />
      </>
      <List lists={lists} deleteList={deleteList} editRow={editRow} />
      <Footer />
    </div>
  );
};

export default Home;
