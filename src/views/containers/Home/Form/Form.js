import React, { useState, useEffect } from "react";
import Button from "../../../components/Widgets/Button/Button";
import Popup from "../../../components/Widgets/Modal/Modal";
import TextInput from "../../../components/Widgets/TextInput/TextInput";
import "./Form.scss";

const Form = (props) => {
  const { addList, currentList, updateList, editing } = props;

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

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
    setList(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form__input">
        <TextInput
          type="text"
          name="title"
          placeholder="Title"
          value={list.title}
          onChange={handleInputChange}
        />
        <TextInput
          type="number"
          min="0"
          name="quantity"
          placeholder="Quantity"
          value={list.quantity}
          onChange={handleInputChange}
        />
        <TextInput
          type="number"
          min="0"
          name="price"
          placeholder="Price"
          value={list.price}
          onChange={handleInputChange}
        />
        {editing ? (
          <div className="form__update">
            <Button color="BLUE" type="UPDATE">
              Update
            </Button>
            <Button color="GREY" type="UPDATE" onClick={handleReset}>
              Cancel
            </Button>
          </div>
        ) : (
          <div className="form__submit">
            <Button color="BLUE" type="SUBMIT">
              Submit
            </Button>
            {isOpen && (
              <Popup title="Error!" close={togglePopup}>
                <>
                  <p>Please fill out this field.</p>
                  <button className="modal__close" onClick={togglePopup}>
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
