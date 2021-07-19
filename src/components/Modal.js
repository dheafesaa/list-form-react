import React from "react";
import "../scss/Modal.scss";

const Popup = (props) => {
  const { title, children } = props;

  return (
    <div className="popup-box">
      <div className="box">
        <div className="content">
          <h3>{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
