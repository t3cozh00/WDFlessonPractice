import React from "react";
import { useState } from "react";

export default function Ex56Form({ saveButtonChildComponent }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  //const [saveInfo, setSaveInfo] = useState("");

  return (
    <div>
      <div>
        <input
          name="firstname"
          placeholder="Firstname"
          onChange={firstNameInputChanged}
        />
      </div>
      <div>
        <input
          name="lastname"
          placeholder="Familyname"
          onChange={familyNameInputChanged}
        />
      </div>
      <div>
        <input
          name="emailaddress"
          placeholder="Email address"
          onChange={emailAddressInputChanged}
        />
      </div>
      <div>
        <button onClick={handleSaveButton}>Save562</button>
      </div>
    </div>
  );
}
