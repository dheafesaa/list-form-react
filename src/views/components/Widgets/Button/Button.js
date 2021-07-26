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
    SUBMIT: "btn form form__submit",
    UPDATE: "btn form form__update",
    ACTION: "btn popup popup__action",
    OKE: "btn popup popup__oke",
    CHOOSE: "btn btn__choose",
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
