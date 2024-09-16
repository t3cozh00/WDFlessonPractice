import React from "react";
import { useState } from "react";

export default function () {
  const [firstName, setFirstName] = useState(""); //array destructuring, the first element is the current state value, the second element is the function that lets you update it
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  //const [saveInfo, setSaveInfo] = useState("");
  const [dataSaved, setDataSaved] = useState(false);

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
    //const formattedInfo = `${firstName} ${lastName} (${emailAddress})`;
    //setSaveInfo(formattedInfo);
    setDataSaved(true);
  }

  //   let formVisibliity = "block";
  //   let savedVisibility = "none";
  //   if (dataSaved == true) {
  //     formVisibliity = "none";
  //     savedVisibility = "block";
  //   }

  let output = (
    <div>
      <div>
        <input
          name="firstname"
          placeholder="Firstname"
          value={firstName}
          onChange={firstNameInputChanged}
        />
      </div>
      <div>
        <input
          name="lastname"
          placeholder="Familyname"
          value={lastName}
          onChange={lastNameInputChanged}
        />
      </div>
      <div>
        <input
          name="emailaddress"
          placeholder="Email address"
          value={emailAddress}
          onChange={emailAddressInputChanged}
        />
      </div>
      <div>
        <button onClick={saveButton}>Save56</button>
      </div>
    </div>
  );

  if (dataSaved == true) {
    output = (
      <div>
        Saved {firstName} {lastName} ({emailAddress})
      </div>
    );
  }

  return <div>{output}</div>;
}
