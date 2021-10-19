import "./CalcBody.css";
import ScreenResult from "../screen/Screen";
// import NumberFunctionHanderl from "./../buttons/NumberButton";
import { useState } from "react";
const CalcBody = () => {
  const [enterdInput, setEnterdInput] = useState("");
  let fullNumber = "";
  fullNumber = "" + enterdInput;

  const eventHandeler = () => {
    setEnterdInput(fullNumber + "0");
  };
  const eventHandeler1 = () => {
    setEnterdInput(fullNumber + "1");
  };
  const eventHandeler2 = () => {
    setEnterdInput(fullNumber + "2");
  };
  const eventHandeler3 = () => {
    setEnterdInput(fullNumber + "3");
  };
  const eventHandeler4 = () => {
    setEnterdInput(fullNumber + "4");
  };
  const eventHandeler5 = () => {
    setEnterdInput(fullNumber + "5");
  };
  const eventHandeler6 = () => {
    setEnterdInput(fullNumber + "6");
  };
  const eventHandeler7 = () => {
    setEnterdInput(fullNumber + "7");
  };
  const eventHandeler8 = () => {
    setEnterdInput(fullNumber + "8");
  };
  const eventHandeler9 = () => {
    setEnterdInput(fullNumber + "9");
  };
  const eventHandelerplus = () => {
    setEnterdInput(fullNumber + "+");
  };
  const eventHandelerNegat = () => {
    setEnterdInput(fullNumber + "-");
  };
  const eventHandelerDivi = () => {
    setEnterdInput(fullNumber + "/");
  };
  const eventHandelerMultiblaction = () => {
    setEnterdInput(fullNumber + "*");
  };
  const eventHandelerClear = () => {
    setEnterdInput("");
  };

  const resultHandeler = () => {
    fullNumber = eval(fullNumber);
    setEnterdInput(fullNumber);
  };

  return (
    <div className="calc-body">
     <ScreenResult numb={fullNumber}/>
      <button className="button-number" onClick={eventHandeler}>0</button>
      <button className="button-number" onClick={eventHandeler1}>1</button>
      <button className="button-number" onClick={eventHandeler2}>2</button>
      <button className="button-number" onClick={eventHandeler3}>3</button>
      <button className="button-number" onClick={eventHandeler4}>4</button>
      <button className="button-number" onClick={eventHandeler5}>5</button>
      <button className="button-number" onClick={eventHandeler6}>6</button>
      <button className="button-number" onClick={eventHandeler7}>7</button>
      <button className="button-number" onClick={eventHandeler8}>8</button>
      <button className="button-number" onClick={eventHandeler9}>9</button>
      <button className="button-number" onClick={eventHandelerNegat}>-</button>
      <button className="button-number" onClick={eventHandelerplus}>+</button>
      <button className="button-number" onClick={eventHandelerDivi}>/</button>
      <button className="button-number" onClick={eventHandelerMultiblaction}>*</button>
      <button className="button-number" onClick={resultHandeler}>=</button>
      <button className="button-number " onClick={eventHandelerClear}>Clear</button>
    </div>
  );

  //   const resultOutbutHandler = (event) => {
  //     setEnterdInput(event.target.value);
  //   };

  //   const resultEvalHandeler = () => {
  //     const finelResult = eval(enterdInput);
  //     console.log(finelResult);
  //   };

  //   useEffect (() => { // did mount
  //     console.log("did mount")
  // }, [enterdInput])
};

export default CalcBody;

// <div className="calc-body  ">

// <div className="d-flex justify-content-center ">
//   <NumberFunctionHanderl typeInside="1" > </NumberFunctionHanderl>
//   <NumberFunctionHanderl typeInside="2" />
//   <NumberFunctionHanderl typeInside="3" />
//   <NumberFunctionHanderl typeInside="4" />
// </div>
// <div className="d-flex justify-content-center ">
//   <NumberFunctionHanderl typeInside="5" />
//   <NumberFunctionHanderl typeInside="6" />
//   <NumberFunctionHanderl typeInside="7" />
//   <NumberFunctionHanderl typeInside="8" />
// </div>
// <div className="d-flex justify-content-center ">
//   <NumberFunctionHanderl typeInside="9" />
//   <button className="button-number" >
//    =
//   </button>
//   <NumberFunctionHanderl typeInside="-" />
//   <NumberFunctionHanderl typeInside="+" />
//   <NumberFunctionHanderl typeInside="*" />
//   <NumberFunctionHanderl typeInside="/" />
// </div>
// </div>
