import React from "react";
import { useState } from "react";

export default function Ex91ControlledForm() {
  const [firstName, setFirstName] = useState("Hello World");

  function handleFirstNameChange(event) {
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
            placeholder="First Name"
            onChange={handleFirstNameChange}
          />
        </div>
        <div>
          <input type="text" placeholder="Last Name" />
        </div>
        <div>
          <input type="text" placeholder="Email" />
        </div>
        <div>
          <input type="text" placeholder="Password" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
