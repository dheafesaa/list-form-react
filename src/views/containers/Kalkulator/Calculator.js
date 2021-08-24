import React, {useState} from "react";
import Display from "./Display/Display";
import KeyPad from "./KeyPad/KeyPad";

const Calculator = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "-", "+", "."];

  const updateCalc = (value) => {
    if (ops.includes(value) && (calc === "" || ops.includes(calc.slice(-1)))) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc("");
  };

  const clearAll = () => {
    setCalc("");
    setResult("");
  };

  return (
    <div className="calculator">
      <div className="calculator__body">
        <Display operation={calc} status={result} />
        <KeyPad
          handleKey={updateCalc}
          clearData={clearAll}
          equation={calculate}
        />
      </div>
    </div>
  );
};

export default Calculator;
