import { useState, useEffect } from "react";
import Ex102UserFilter from "./Ex102UserFilter";
import Ex102UserList from "./Ex102UserList";

interface User {
  firstName: string;
  lastName: string;
}

export default function Ex102UserData() {
  const [usersList, setUsersList] = useState<User[]>([]);
  const [input, setInput] = useState("");

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

  function userDataFilterLogic(users: User) {
    if (input == " ") {
      return true;
    }
    if (input == users.lastName || input == users.firstName) {
      return true;
    }
    return false;
  }

  return (
    <div>
      <h2>Ex10.2 UserData</h2>
      <Ex102UserFilter giveFilterValueToParent={receiveFilterValueFromChild} />
      <Ex102UserList users={usersList.filter(userDataFilterLogic)} />
    </div>
  );
}
