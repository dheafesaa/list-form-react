import React from "react";
import "./Button.scss";

const Button = (props) => {
  const { color, type, onClick, children } = props;

  const BUTTON_TYPE = {
    SUBMIT: "btn btn-submit",
    UPDATE: "btn btn-update",
    ACTION: "btn btn-action",
    OKE: "btn btn-oke",
    CHOOSE: "btn btn-choose",
  };

  const BUTTON_COLOR = {
    RED: "btn-red",
    BLUE: "btn-blue",
    GREY: "btn-grey",
    CHERRY: "btn-cherry",
    LIGHT: "btn-light",
  };

  const buttonClassName = BUTTON_TYPE[type];
  const colorClassName = BUTTON_COLOR[color];

  return (
    <>
      <button
        className={buttonClassName + " " + colorClassName}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
