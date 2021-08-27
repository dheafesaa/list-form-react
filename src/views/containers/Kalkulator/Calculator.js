import React, {useState} from "react";
import Display from "./Display/Display";
import KeyPad from "./KeyPad/KeyPad";

const Calculator = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const [final, setFinal] = useState("")

  const ops = ["/", "*", "-", "+", "."];

  const updateCalc = (value) => {
    var calcx = calc
    if (final == "done") {
      setCalc("");
      setResult("");
      setFinal("")
      calcx = ""
    }
    if (ops.includes(value) && (calcx === "" || ops.includes(calcx.slice(-1)))) {
      return;
    }
    setCalc(calcx + value);

    if (!ops.includes(value)) {
      setResult(eval(calcx + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
    setFinal("done")
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
