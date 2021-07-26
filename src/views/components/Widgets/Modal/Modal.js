import React from "react";
import "./Modal.scss";

const Popup = (props) => {
  const { title, children } = props;

  return (
    <div className="modal">
      <div className="modal__box">
        <div className="modal__content">
          <h3>{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
