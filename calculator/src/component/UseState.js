import React, { useState } from "react";
// import  from "react-router-dom";
// web simplifier Learn useState in 15 mi React Hooks Explained
// How to use

function LearnUseState() {
  //   const [count, setCount] = useState(4);
  const [state, setState] = useState({ count: 4, theme: "blue" });
  const count = state.count;
  const theme = state.theme;

  function decrementation() {
    // setCount((prevCount) => prevCount - 1);
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  }
  function incremetation() {
    // setCount((prevCount) => prevCount + 1);
  }
  return (
    <div>
      <button onClick={decrementation}>-</button>
      <span>{count}</span>
      <span>{theme}</span>

      <button onClick={incremetation}>+</button>
    </div>
  );
}

export default LearnUseState;
