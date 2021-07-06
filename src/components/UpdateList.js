import React, { useState, useEffect } from "react";
import "../scss/Form.scss";

const UpdateList = (props) => {
  const [list, setList] = useState(props.currentList);

  useEffect(() => {
    setList(props.currentList);
  }, [props]);

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

        props.updateList(list.id, list);
      }}
    >
      <div className="container">
        <div>
          <input
            type="text"
            name="title"
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
            value={list.price}
            onChange={handleInputChange}
            className="input-data"
          />
        </div>
        <div className="flex-container">
          <button className="btn btn-update">Update</button>
          <button onClick={() => props.setEditing(false)} className="btn btn-cancel">Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default UpdateList;
