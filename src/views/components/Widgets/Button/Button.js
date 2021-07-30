import React from "react";
import "./Button.scss";

const Button = (props) => {
  const { color, type, onClick, children } = props;

  const BUTTON_COLOR = {
    RED: "btn-red",
    BLUE: "btn-blue",
    GREY: "btn-grey",
    CHERRY: "btn-cherry",
    LIGHT: "btn-light",
  };

  const BUTTON_TYPE = {
    SUBMIT: "submit",
    UPDATE: "update",
    ACTION: "action",
    OKE: "oke",
    CHOOSE: "choose",
  };

  const colorClassName = BUTTON_COLOR[color];
  const buttonClassName = BUTTON_TYPE[type];

  return (
    <>
      <button
        className={colorClassName + " " + buttonClassName}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
