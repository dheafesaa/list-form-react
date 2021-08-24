import React from "react";
import "./TextInput.scss";

const TextInput = (props) => {
  const { ...rest } = props;

  return (
    <div className="text__input">
      <input {...rest} />
    </div>
  );
};

export default TextInput;
