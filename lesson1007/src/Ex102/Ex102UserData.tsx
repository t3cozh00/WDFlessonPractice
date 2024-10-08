import { useState, useEffect } from "react";
import Ex102UserFilter from "./Ex102UserFilter";
import Ex102UserList from "./Ex102UserList";

import { User } from "./Ex102DataType";

export default function Ex102UserData() {
  const [usersList, setUsersList] = useState<User[]>([]);
  const [input, setInput] = useState("");
  const [filterKey, setFilterKey] = useState("userName");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("data.users:", data.users);
        setUsersList(data.users);
      });
  }, []);

  function receiveFilterValueFromChild(newFilterValue: string) {
    setInput(newFilterValue);
  }

  function receiveFilterKeyFromChild(newFilterKey: string) {
    setFilterKey(newFilterKey);
  }

  function userDataFilterLogic(users: User) {
    if (input == " ") {
      return true;
    }
    if (filterKey == "userName") {
      return (
        input.toLowerCase() === users.lastName.toLowerCase() ||
        input.toLowerCase() === users.firstName.toLowerCase()
      );
    } else if (filterKey == "address") {
      return users.address.address.toLowerCase().includes(input.toLowerCase());
    } else if (filterKey == "minimumAge") {
      return users.age >= Number(input);
    } else if (filterKey == "minimumHeight") {
      return users.height >= Number(input);
    }

    return false;
  }

  return (
    <div>
      <h2>Ex10.2 UserData</h2>
      <Ex102UserFilter
        giveFilterValueToParent={receiveFilterValueFromChild}
        giveFilterkeyToParent={receiveFilterKeyFromChild}
      />
      <Ex102UserList users={usersList.filter(userDataFilterLogic)} />
    </div>
  );
}
