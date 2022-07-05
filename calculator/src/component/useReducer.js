import React, { useState, useReducer } from "react";
// import  from "react-router-dom";
// web simplifier Learn useState in 15 mi React Hooks Explained
// How to use

// function reducer(state,action)

function useReducerHook() {
  // const [] = useReducer(reducer, {count: 0})
  // const [count, setCount] = useState(4);

  function decrementation() {
    // setCount((prevCount) => prevCount - 1);
    // setState((prevState) => {
    //   return { ...prevState, count: prevState.count - 1 };
    // });
  }
  function incremetation() {
    // setCount((prevCount) => prevCount + 1);
  }
  return (
    <div>
      <button onClick={decrementation}>-</button>
      {/* <span>{count}</span>
      <span>{theme}</span> */}

      <button onClick={incremetation}>+</button>
    </div>
  );
}

export default useReducerHook;
