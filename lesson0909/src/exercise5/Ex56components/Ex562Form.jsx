import React from "react";
import { useState } from "react";

export default function Ex562Form({ saveButtonChildComponent }) {
  const [firstName, setFirstName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  //const [saveInfo, setSaveInfo] = useState("");

  function firstNameInputChanged(event) {
    setFirstName(event.target.value);
  }
  function familyNameInputChanged(event) {
    setFamilyName(event.target.value);
  }
  function emailAddressInputChanged(event) {
    setEmailAddress(event.target.value);
  }

  function handleSaveButtonChildComponent() {
    saveButtonChildComponent(firstName, familyName, emailAddress);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          name="firstname"
          placeholder="Firstname"
          onChange={firstNameInputChanged}
        />
      </div>
      <div>
        <input
          type="text"
          name="lastname"
          placeholder="Familyname"
          onChange={familyNameInputChanged}
        />
      </div>
      <div>
        <input
          type="text"
          name="emailaddress"
          placeholder="Email address"
          onChange={emailAddressInputChanged}
        />
      </div>
      <div>
        <button onClick={handleSaveButtonChildComponent}>Save562</button>
      </div>
    </div>
  );
}
