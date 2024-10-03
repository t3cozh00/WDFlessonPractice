import { useEffect, useState } from "react";
import Ex102UserFilter from "./Ex102UserFilter";
import Ex102UserList from "./Ex102UserList";

export default function Ex102UserData() {
  const [usersList, setUsersList] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(usersList);
  const [input, setInput] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsersList(data.users);
      });
  }, []);

  useEffect(() => {
    const filtered = usersList.filter((users: { firstName: string }) =>
      users.firstName.includes(input)
    );
    setFilteredUsers(filtered);
  }, [submittedText, usersList]);

  const handleSubmit = (newSubmittedText: string) => {
    setSubmittedText(newSubmittedText);
  };

  return (
    <div>
      <h2>Ex10.2 UserData</h2>
      <Ex102UserFilter
        inputText={input}
        onInputChange={setInput}
        onSubmit={handleSubmit}
      />
      <Ex102UserList users={filteredUsers} />
    </div>
  );
}
