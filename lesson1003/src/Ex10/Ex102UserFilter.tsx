import { useState } from "react";

export default function Ex102UserFilter({
  giveFilterValueToParent,
}: {
  giveFilterValueToParent: (value: string) => void;
}) {
  const [filterValue, setFilterValue] = useState("");

  const okClicked = (e: React.FormEvent) => {
    e.preventDefault();
    giveFilterValueToParent(filterValue);
    setFilterValue("");
  };

  return (
    <div>
      <h3>UserFilter</h3>
      {/* <div>
        <label>UserName</label>
        <input type="radio" name="userName" value="userName" />
        <label>Address</label>
        <input type="radio" name="age" value="age" />
      </div> */}
      <div
        style={{
          display: "flex",
          gap: "8px", // 在 input 和 button 之间添加间距
        }}
      >
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
