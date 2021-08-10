import React from "react";
import "./Display.scss";

const Display = (props) => {
  const { status } = props;

  return (
    <div className="calculator__output">
      <div className="calculator__answer">{status === null ? "0" : status}</div>
    </div>
  );
};

export default Display;
