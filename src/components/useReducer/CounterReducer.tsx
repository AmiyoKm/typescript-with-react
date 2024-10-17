import React, { useReducer } from "react";
type state = {
  count: number;
  timesChanged: number;
};
const initialState: state = {
  count: 0,
  timesChanged: 0,
};
type Action = {
  type: "increment" | "decrement" | "reset";
};
const reducer = (state: state, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1, timesChanged: state.timesChanged + 1 };

    case "decrement":
      return { count: state.count - 1, timesChanged: state.timesChanged + 1 };
    case "reset":
      return { count: 0, timesChanged: 0 };
  }
};

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Counter</h1>
      <p>Count:{state.count}</p>
      <p>TimesChanged:{state.timesChanged}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default CounterReducer;
