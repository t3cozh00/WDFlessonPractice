import React from "react";
import { useState } from "react";
import Ex562Form from "./Ex56components/Ex562Form";
import Ex56SaveMessage from "./Ex56components/Ex56SaveMessage";

export default function Ex562UserInfo() {
  const [dataSaved, setDataSaved] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  function saveButtonParentComponent(first_Name, family_Name, email_Address) {
    setDataSaved(true);
    setFirstName(first_Name);
    setFamilyName(family_Name);
    setEmailAddress(email_Address);
  }

  let output = (
    <Ex562Form saveButtonChildComponent={saveButtonParentComponent} />
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

  return (
    <div>
      <p>Ex562UserInfo</p>
      {output}
    </div>
  );
}
