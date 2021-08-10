import React from "react";

const KeyPad = (props) => {
  const { keyValue, keyPad } = props;
  
  return (
  <button onClick={() => keyPad(keyValue)}>{keyValue}</button>
  ) 
};

export default KeyPad;
