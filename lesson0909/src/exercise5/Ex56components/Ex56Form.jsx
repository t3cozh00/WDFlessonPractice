import React from "react";
import { useState } from "react";

export default function Ex56Form({ saveButtonChildComponent }) {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    familyName: "",
    emailAddress: "",
  });

  function firstNameInputChanged(event) {
    setUserInfo({ ...userInfo, firstName: event.target.value });
  }
  function familyNameInputChanged(event) {
    setUserInfo({ ...userInfo, familyName: event.target.value });
  }
  function emailAddressInputChanged(event) {
    setUserInfo({ ...userInfo, emailAddress: event.target.value });
  }

  function handleSaveButton() {
    saveButtonChildComponent(userInfo);
  }

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

// if you want to pass data to parent component, you can use function as props
