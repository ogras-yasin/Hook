import React from "react";

const Calculator = () => {
  return (
    <div className="App">
      hii i am a cat
      <div className="calculator-grid">
        <div className="output">
          44
          <div className="previous-operand"></div>
          <div className="current-operand"></div>
        </div>
        <button className="span-two">AC</button>
        <button>Del</button>
        <button>/</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button className="span-two">=</button>
      </div>
    </div>
  );
};

export default Calculator;
