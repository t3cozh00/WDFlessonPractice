import React from "react";
import { useState } from "react";

export default function () {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [saveInfo, setSaveInfo] = useState("");

  function firstNameInputChanged(event) {
    setFirstName(event.target.value);
  }
  function lastNameInputChanged(event) {
    setLastName(event.target.value);
  }
  function emailAddressInputChanged(event) {
    setEmailAddress(event.target.value);
  }

  function saveButton() {
    const formattedInfo = `${firstName} ${lastName} (${emailAddress})`;
    setSaveInfo(formattedInfo);
  }

  return (
    <div>
      <form>
        <div>
          <input
            name="firstname"
            placeholder="Firstname"
            value={firstName}
            onChange={firstNameInputChanged}
          />
          <input
            name="lastname"
            placeholder="Familyname"
            value={lastName}
            onChange={lastNameInputChanged}
          />
          <input
            name="emailaddress"
            placeholder="Email address"
            value={emailAddress}
            onChange={emailAddressInputChanged}
          />
        </div>
      </form>
      <button onClick={saveButton}>Save</button>
      <div>Saved {saveInfo}</div>
    </div>
  );
}
