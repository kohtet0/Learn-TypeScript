import React, { useReducer } from "react";

type Props = {};

type stateType = {
  count: number;
};

type actionType = {
  type: string;
  payload: number;
};

const initialState = {
  count: 0,
};

const reducer = (state: stateType, action: actionType) => {
  switch (action.type) {
    case "increase":
      return {
        count: state.count + action.payload,
      };

    case "decrease":
      return {
        count: state.count - action.payload,
      };

    default:
      return state;
  }
};

const CountPage = (props: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>Count - {state.count}</h3>
      <button onClick={() => dispatch({ type: "increase", payload: 1 })}>
        increase
      </button>
      <button onClick={() => dispatch({ type: "decrease", payload: 1 })}>
        decrease
      </button>
    </div>
  );
};

export default CountPage;
