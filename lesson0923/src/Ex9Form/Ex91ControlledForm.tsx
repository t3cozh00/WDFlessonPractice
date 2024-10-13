// controlled form is a form that is controlled by React and not by the DOM
import { useState } from "react";

export default function Ex91ControlledForm() {
  const [firstName, setFirstName] = useState("Hello World");

  function handleFirstNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFirstName(event.target.value);
  }

  return (
    <div>
      <h2>Ex91ControlledForm</h2>
      <form>
        <div>
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div>
          <input type="text" />
        </div>
        <div>
          <input type="text" />
        </div>
        <div>
          <input type="text" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
