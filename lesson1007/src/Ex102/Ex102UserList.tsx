import { User } from "./Ex102DataType";
import classes from "./Ex102TableStyle.module.css";

export default function Ex102UserList({ users }: { users: User[] }) {
  return (
    <div className={classes.userList}>
      <h3>UserList</h3>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Age</th>
            <th>Height</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                {user.firstName} {user.lastName}
              </td>
              <td>{user.address.address}</td>
              <td>{user.age}</td>
              <td>{user.height}</td>
              <td>
                <img src={user.image} alt="user" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
