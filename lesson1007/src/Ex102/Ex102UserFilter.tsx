import { useState } from "react";

export default function Ex102UserFilter({
  giveFilterValueToParent,
  giveFilterkeyToParent,
}: {
  giveFilterValueToParent: (value: string) => void;
  giveFilterkeyToParent: (key: string) => void;
}) {
  const [filterValue, setFilterValue] = useState("");
  const [filterKey, setFilterKey] = useState("");

  const okClicked = (e: React.FormEvent) => {
    e.preventDefault();
    giveFilterValueToParent(filterValue);
    giveFilterkeyToParent(filterKey);
    setFilterValue("");
  };

  const handleFilterKeyChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFilterKey(e.currentTarget.value);
    console.log("filterKey:", filterKey);
  };

  return (
    <div>
      <h3 style={{ textAlign: "left" }}>UserFilter</h3>
      <div>
        <input
          type="radio"
          name="filterKey"
          value="userName"
          onClick={handleFilterKeyChange}
        />
        <label>UserName</label>
        <input
          type="radio"
          name="filterKey"
          value="address"
          onClick={handleFilterKeyChange}
        />
        <label>Address</label>
        <input
          type="radio"
          name="filterKey"
          value="minimumAge"
          onClick={handleFilterKeyChange}
        />
        <label>Minimum Age</label>
        <input
          type="radio"
          name="filterKey"
          value="minimumHeight"
          onClick={handleFilterKeyChange}
        />
        <label>Minimum Height</label>
      </div>
      <div>
        <input
          type="text"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />

        <button type="submit" onClick={okClicked}>
          OK
        </button>
      </div>
    </div>
  );
}
