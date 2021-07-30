import React, { useState, useEffect } from "react";
import Popup from "../../../../components/Widgets/Modal/Modal";
import Button from "../../../../components/Widgets/Button/Button";
import "./ListItem.scss";

const ListItem = (props) => {
  const { list, editRow, deleteList } = props;

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    var obj = document.getElementsByClassName("modal")[0];
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

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="list__data" key={list.id}>
        <div className="list__form">
          <b>{list.title}</b>
          <br />
          <span>{list.quantity}</span>
          <br />
          <span>{list.price}</span>
          <br />
        </div>

        <div className="list__action">
          <Button color="BLUE" type="CHOOSE" onClick={() => editRow(list)}>
            Edit
          </Button>
          <Button color="RED" type="CHOOSE" onClick={togglePopup}>
            Delete
          </Button>

          {isOpen && (
            <Popup title="Delete List">
              <>
                <p>Are you sure want to delete this?</p>
                <button className="closebtn" onClick={togglePopup}>
                  x
                </button>
                <div className="action-box">
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
