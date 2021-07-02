import React, { useState } from "react";
import './Form.scss';

const AddList = (props) => {
  const initialFormState = {
    id: null,
    title: "",
    quantity: "",
    price: "",
  };

  const [list, setList] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setList({ ...list, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!list.title || !list.quantity || !list.price) {
          alert("Error!");
          return;
        }

        props.addUser(list);
        setList(initialFormState);
      }}
    >
      <div className="container">
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={list.title}
            onChange={handleInputChange}
            className="input-data"
          />
        </div>

        <div>
          <input
            type="number"
            min="0"
            name="quantity"
            placeholder="Quantity"
            value={list.quantity}
            onChange={handleInputChange}
            className="input-data"
          />
        </div>

        <div>
          <input
            type="number"
            min="0"
            name="price"
            placeholder="Price"
            value={list.price}
            onChange={handleInputChange}
            className="input-data"
          />
        </div>
        <div>
          <button type="submit" className="button-sub">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddList;
