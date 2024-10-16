// Ex6b: Implement the above form exercise by using a single state variable to track the form field values, which should be of type object.

import React from "react";
import { useState } from "react";

export default function Ex56bUserInfo() {
  const [userInfo, setUserInfo] = useState({});
  const [dataSaved, setDataSaved] = useState(false);

  userInfo.firstName = "";
  userInfo.lastName = "";
  userInfo.emailAddress = "";

  return (
    <div>
      <p>Ex56bUserInfo</p>
      <div style={{ display: dataSaved ? "none" : "block" }}>input</div>
      <button style={{ display: dataSaved ? "block" : "none" }}>Save56b</button>
    </div>
  );
}
