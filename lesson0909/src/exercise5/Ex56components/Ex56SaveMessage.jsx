import React from "react";

export default function Ex56SaveMessage({
  firstName,
  familyName,
  emailAddress,
}) {
  return (
    <div>
      <div>
        Saved {firstName} {familyName} ({emailAddress})
      </div>
    </div>
  );
}
