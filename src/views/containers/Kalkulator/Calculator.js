import React, { useState, useEffect } from "react";
import ButtonPanel from "../Kalkulator/ButtonPanel/ButtonPanel";
import Display from "./Display/Display";
import "./Display/Display.scss";

const Calculator = () => {
  const [prevValue, setPrevValue] = useState(null);
  const [nextValue, setNextValue] = useState("0");
  const [op, setOp] = useState(null);

  useEffect(() => {}, [nextValue, op, prevValue]);

  const CalculatorOperations = {
    "÷": (firstValue, secondValue) => firstValue / secondValue,
    x: (firstValue, secondValue) => firstValue * secondValue,
    "+": (firstValue, secondValue) => firstValue + secondValue,
    "-": (firstValue, secondValue) => firstValue - secondValue,
    "=": (firstValue, secondValue) => secondValue,
  };

  const performOperation = () => {
    let temp = CalculatorOperations[op](
      parseFloat(prevValue),
      parseFloat(nextValue)
    );
    setOp(null);
    setNextValue(String(temp));
    setPrevValue(null);
  };

  const handleNum = (number) => {
    setNextValue(nextValue === "0" ? String(number) : nextValue + number);
  };

  const insertDot = () => {
    if (!/\./.test(nextValue)) {
      setNextValue(nextValue + ".");
    }
  };

  const percentage = () => {
    setNextValue(parseFloat(nextValue) / 100);
    if (prevValue && nextValue === "") {
      setPrevValue(parseFloat(prevValue) / 100);
    }
  };

  const changeSign = () => {
    setNextValue(parseFloat(nextValue) * -1);
  };

  const clearData = () => {
    setNextValue("0");
    setPrevValue(0);
  };

  const handleOperation = (value) => {
    if (Number.isInteger(value)) {
      handleNum(parseInt(value, 10));
    } else if (value in CalculatorOperations) {
      if (op === null) {
        setOp(value);
        setPrevValue(nextValue);
        setNextValue("");
      }
      if (op) {
        setOp(value);
      }
      if (prevValue && op && nextValue) {
        performOperation();
      }
    } else if (value === "c") {
      clearData();
    } else if (value === "\xB1") {
      changeSign();
    } else if (value === ".") {
      insertDot();
    } else if (value === "%") {
      percentage();
    }
  };

  return (
    <div className="calculator">
      <Display status={nextValue} />
      <ButtonPanel handleKey={handleOperation} />
    </div>
  );
};

export default Calculator;
