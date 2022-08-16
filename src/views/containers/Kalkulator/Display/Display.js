import React from "react";
import "./Display.scss";

const Display = (props) => {
  const { status, operation } = props;

  return (
    <div className="calculator__display">
      <div className="calculator__display-input">{operation ? operation : 0}</div>
      <div className="calculator__display-result">{status}</div>
    </div>
  );
};

export default Display;
