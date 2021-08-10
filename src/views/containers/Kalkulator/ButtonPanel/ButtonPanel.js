import React from "react";
import KeyPad from "../../../components/Widgets/KeyPad/KeyPad";
import "./ButtonPanel.scss";

const ButtonPanel = (props) => {
  const { handleKey } = props;
  
  return (
    <div className="calculator__body">
      <div className="calculator__side-menu">
        <KeyPad keyValue={"c"} keyPad={handleKey} />
        <KeyPad keyValue={"x"} keyPad={handleKey} />
        <KeyPad keyValue={"÷"} keyPad={handleKey} />
        <KeyPad keyValue={"%"} keyPad={handleKey} />
        <KeyPad keyValue={"-"} keyPad={handleKey} />
        <KeyPad keyValue={"+"} keyPad={handleKey} />
      </div>
      <div className="calculator__main">
        <KeyPad keyValue={7} keyPad={handleKey} />
        <KeyPad keyValue={8} keyPad={handleKey} />
        <KeyPad keyValue={9} keyPad={handleKey} />
        <KeyPad keyValue={4} keyPad={handleKey} />
        <KeyPad keyValue={5} keyPad={handleKey} />
        <KeyPad keyValue={6} keyPad={handleKey} />
        <KeyPad keyValue={1} keyPad={handleKey} />
        <KeyPad keyValue={2} keyPad={handleKey} />
        <KeyPad keyValue={3} keyPad={handleKey} />
        <KeyPad keyValue={"."} keyPad={handleKey} />
        <KeyPad keyValue={0} keyPad={handleKey} />
        <KeyPad keyValue={"="} keyPad={handleKey} />
      </div>
    </div>
  );
};

export default ButtonPanel;
