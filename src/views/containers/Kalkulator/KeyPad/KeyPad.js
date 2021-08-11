import React from "react";
import ButtonKey from "../../../components/Widgets/ButtonKey/ButtonKey";
import "./KeyPad.scss";

const KeyPad = (props) => {
  const { handleKey, equation, clearData } = props;

  return (
    <div className="calculator__key">
      <div className="calculator__key-operators">
        <ButtonKey keyValue={"C"} keyPad={clearData} />
        <ButtonKey keyValue={"/"} keyPad={handleKey} />
        <ButtonKey keyValue={"*"} keyPad={handleKey} />
        <ButtonKey keyValue={"-"} keyPad={handleKey} />
        <ButtonKey keyValue={"+"} keyPad={handleKey} />
      </div>
      <div className="calculator__key-digits">
        <ButtonKey keyValue={"."} keyPad={handleKey} />
        <ButtonKey keyValue={0} keyPad={handleKey} />
        <ButtonKey keyValue={"="} keyPad={equation} />
        <ButtonKey keyValue={1} keyPad={handleKey} />
        <ButtonKey keyValue={2} keyPad={handleKey} />
        <ButtonKey keyValue={3} keyPad={handleKey} />
        <ButtonKey keyValue={4} keyPad={handleKey} />
        <ButtonKey keyValue={5} keyPad={handleKey} />
        <ButtonKey keyValue={6} keyPad={handleKey} />
        <ButtonKey keyValue={7} keyPad={handleKey} />
        <ButtonKey keyValue={8} keyPad={handleKey} />
        <ButtonKey keyValue={9} keyPad={handleKey} />
      </div>
    </div>
  );
};

export default KeyPad;
