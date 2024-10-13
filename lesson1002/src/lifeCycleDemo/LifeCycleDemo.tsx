import { useEffect, useState } from "react";
import ChildComponent from "./ChildComponent";

export default function LifeCycleDemo() {
  const [showChild, setShowChild] = useState(false);
  const [counter, setCounter] = useState(0);

  // Lifecycle demo for Parent Component
  useEffect(() => {
    console.log("Parent Component: Mounted");

    return () => {
      console.log("Parent Component: Unmounted");
    };
  }, []); // this empty array is important to run the effect only once on mount

  useEffect(() => {
    console.log("Parent Component: Updated");
  }); // this effect runs on every update, also on the initial render (mount)

  return (
    <div>
      <h2>React Functional Component Lifecycle Demo</h2>
      <button onClick={() => setCounter(counter + 1)}>
        Update Parent (Counter: {counter})
      </button>
      <button
        onClick={() => {
          console.log("button clicked");
          setShowChild(!showChild);
        }}
      >
        {showChild ? "Remove Child Component" : "Add Child Component"}
      </button>
      {showChild && <ChildComponent number={counter} />}
      {/* showChild &&: This is a JavaScript logical && (AND) operator, which works as follows: 
      If showChild is true, then the expression after && (i.e., <ChildComponent number={counter} />) will be evaluated and rendered. 
      If showChild is false, React will not render anything after the &&. In other words, the ChildComponent will not be shown.
      <ChildComponent number={counter} />: This is the JSX element that will be rendered if showChild is true. It's a child component named ChildComponent, and you're passing the counter state from the parent
      component as a prop (number={counter}). */}
    </div>
  );
}
