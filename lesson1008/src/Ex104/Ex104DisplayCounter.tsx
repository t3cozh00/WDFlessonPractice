import Ex104IncreaseCounter from "./Ex104IncreaseCounter";
import Ex104DecreaseCounter from "./Ex104DecreaseCounter";
import Ex104ResetCounter from "./Ex104ResetCounter";
import Ex104ButtonSetValue from "./Ex104ButtonSetValue";
import { useReducer } from "react";

function handleButton(state, action) {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  } else if (action.type === "RESET") {
    return 0;
  } else if (action.type === "SET") {
    return action.value;
  }
  throw Error("Unknown action.");
}

export default function Ex104DisplayCounter() {
  const [state, dispatch] = useReducer(handleButton, 0);
  return (
    <div>
      <h2>Ex104DisplayCounter</h2>
      <p>Counter:{state}</p>
      <Ex104IncreaseCounter dispatch={dispatch} />
      <Ex104DecreaseCounter dispatch={dispatch} />
      <Ex104ResetCounter dispatch={dispatch} />
      <Ex104ButtonSetValue dispatch={dispatch} />
    </div>
  );
}
