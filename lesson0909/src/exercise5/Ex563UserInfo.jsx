import React from "react";
import { useState } from "react";
import Ex562Form from "./Ex56components/Ex56Form";
import Ex56SaveMessage from "./Ex56components/Ex56SaveMessage";

export default function () {
  const [dataSaved, setDataSaved] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [familyName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  function saveButtonParentComponent(firstName, familyName, emailAddress) {
    //setUserInfo(formData);
    setFirstName(firstName);
    setLastName(familyName);
    setEmailAddress(emailAddress);
    setDataSaved(true);
  }

  let output = (
    <Ex562Form saveButtonChildComponent={saveButtonParentComponent} />
    //give the saveButtonParentComponent function as props to the child component
  );

  if (dataSaved == true) {
    output = (
      <Ex56SaveMessage
        firstName={firstName}
        familyName={familyName}
        emailAddress={emailAddress}
      />
    );
  }

  return <div>{output}</div>;
}
