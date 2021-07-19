import React, { useState, useEffect } from "react";
import Popup from "./Modal";
import "../scss/Form.scss";

const Form = (props) => {
  const { addList, currentList, updateList, editing, setEditing, togglePopup } = props;

  const [isOpen, setIsOpen] = useState(false);

  const initialFormState = {
    id: null,
    title: "",
    quantity: "",
    price: "",
  };

  const [list, setList] = useState(initialFormState);

  useEffect(() => {
    setList(currentList);
  }, [currentList]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setList({ ...list, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    for (const [keyItem, value] of Object.entries(list)) {
      if (keyItem !== "id" && !value) {
        setIsOpen(!isOpen);
        return;
      }
    }

    editing ? updateList(list.id, list) : addList(list);
    setList(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
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
        {editing ? (
          <div className="flex-container">
            <button className="btn btn-update">Update</button>
            <button
              onClick={() => setEditing(false)}
              className="btn btn-cancel"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <button className="btn btn-submit" onClick={togglePopup}>
              Submit
            </button>
            {isOpen && (
              <Popup title="Error!">
                <>
                  <p>Please fill out this field.</p>
                  <button className="closebtn" onClick={togglePopup}>
                    x
                  </button>
                  <button className="btnErr">Oke</button>
                </>
              </Popup>
            )}
          </div>
        )}
      </div>
    </form>
  );
};

export default Form;
