interface User {
  id: number;
  firstName: string;
  lastName: string;
}

export default function Ex102UserList({ users }: { users: User[] }) {
  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          {user.firstName} {user.lastName}
        </div>
      ))}
    </div>
  );
}
