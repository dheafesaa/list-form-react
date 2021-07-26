import React, { useState, useEffect } from "react";
import Button from "../../../components/Widgets/Button/Button";
import Popup from "../../../components/Widgets/Modal/Modal";
import "./Form.scss";

const Form = (props) => {
  const { addList, currentList, updateList, editing, setEditing, togglePopup } =props;

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    var obj = document.getElementsByClassName("popup-box")[0];
    document.addEventListener("click", function (e) {
      if (obj) {
        if (obj.contains(e.target)) {
          if (isOpen) {
            setIsOpen(false);
          }
        } else {
        }
      }
    });
    return () => {};
  }, [isOpen]);

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

  const handleReset = () => {
    setEditing(initialFormState);
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
            <Button color="BLUE" type="UPDATE">
              Update
            </Button>
            <Button color="GREY" type="UPDATE" onClick={handleReset}>
              Cancel
            </Button>
          </div>
        ) : (
          <div>
            <Button color="BLUE" type="SUBMIT" onClick={togglePopup}>
              Submit
            </Button>
            {isOpen && (
              <Popup title="Error!">
                <>
                  <p>Please fill out this field.</p>
                  <button className="closebtn" onClick={togglePopup}>
                    x
                  </button>
                  <Button color="CHERRY" type="OKE">
                    Oke
                  </Button>
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
