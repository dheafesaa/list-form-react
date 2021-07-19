import React, { useState } from "react";
import Popup from "./Modal";

const ListItem = (props) => {
  const { list, editRow, deleteList } = props;

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="full-list">
      <div className="list" key={list.id}>
        <b>{list.title}</b>
        <br />
        <span>{list.quantity}</span>
        <br />
        <span>{list.price}</span>
        <br />
      </div>
      <div className="list">
        <div className="flex-box-2">
          <button className="btn-edit" onClick={() => editRow(list)}>
            Edit
          </button>
          <button className="btn-delete" onClick={togglePopup}>
            Delete
          </button>
          {isOpen && (
            <Popup title="Delete List">
              <>
                <p>Please fill out this field.</p>
                <button className="closebtn" onClick={togglePopup}>
                  x
                </button>
                <button className="cancelbtn" onClick={togglePopup}>
                  Cancel
                </button>
                <button
                  className="deletebtn"
                  onClick={() => {
                    deleteList(list.id);
                    setIsOpen(!isOpen);
                  }}
                >
                  Delete
                </button>
              </>
            </Popup>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListItem;
