import React from "react";
import { useState } from "react";
import Ex56Form from "./Ex56components/Ex56Form";
import Ex56SaveMessage from "./Ex56components/Ex56SaveMessage";

export default function () {
  const [dataSaved, setDataSaved] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    familyName: "",
    emailAddress: "",
  });

  function saveButtonParentComponent(formData) {
    setUserInfo(formData);
    setDataSaved(true);
  }

  let output = (
    <Ex56Form saveButtonChildComponent={saveButtonParentComponent} />
  );

  if (dataSaved == true) {
    output = (
      <Ex56SaveMessage
        firstName={userInfo.firstName}
        familyName={userInfo.familyName}
        emailAddress={userInfo.emailAddress}
      />
    );
  }

  return <div>{output}</div>;
}
