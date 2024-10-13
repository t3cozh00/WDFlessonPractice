interface User {
  firstName: string;
  lastName: string;
}

export default function Ex102UserList({ users }: { users: User[] }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px 0",
        textAlign: "left",
      }}
    >
      <h3>UserList</h3>

      {users.map((user, index) => (
        <div key={index}>
          {user.firstName} {user.lastName}
        </div>
      ))}
    </div>
  );
}
