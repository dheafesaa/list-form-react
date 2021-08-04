import React from "react";
import "./TextInput.scss";

const TextInput = (props) => {
  const { ...rest } = props;

  return (
    <div className="form__input--list">
      <input {...rest} />
    </div>
  );
};

export default TextInput;
