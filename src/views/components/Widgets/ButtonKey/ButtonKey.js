import React from "react";

const ButtonKey = (props) => {
  const { keyValue, keyPad } = props;

  return (
    <>
      <button onClick={() => keyPad(keyValue)}>{keyValue}</button>
    </>
  );
};

export default ButtonKey;
