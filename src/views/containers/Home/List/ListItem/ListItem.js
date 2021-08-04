import React, { useState } from "react";
import Popup from "../../../../components/Widgets/Modal/Modal";
import Button from "../../../../components/Widgets/Button/Button";
import "./ListItem.scss";

const ListItem = (props) => {
  const { list, editRow, deleteList } = props;

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="list__data" key={list.id}>
        <div className="list__data--item">
          <b>{list.title}</b>
          <br />
          <span>{list.quantity}</span>
          <br />
          <span>{list.price}</span>
          <br />
        </div>

        <div className="list__data--action">
          <Button color="BLUE" type="CHOOSE" onClick={() => editRow(list)}>
            Edit
          </Button>
          <Button color="RED" type="CHOOSE" onClick={togglePopup}>
            Delete
          </Button>
          {isOpen && (
            <Popup title="Delete List" close={togglePopup}>
              <>
                <p>Are you sure want to delete this?</p>
                <button className="modal__close" onClick={togglePopup}>
                  x
                </button>
                <div className="modal__action">
                  <Button color="LIGHT" type="ACTION" onClick={togglePopup}>
                    Cancel
                  </Button>
                  <Button
                    color="CHERRY"
                    type="ACTION"
                    onClick={() => {
                      deleteList(list.id);
                      setIsOpen(!isOpen);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </>
            </Popup>
          )}
        </div>
      </div>
    </>
  );
};

export default ListItem;
