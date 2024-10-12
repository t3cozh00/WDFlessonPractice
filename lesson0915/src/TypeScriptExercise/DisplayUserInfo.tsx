import { UserInfo } from "./Types";

export default function DisplayUserInfo({
  firstName,
  lastName,
  age,
}: UserInfo) {
  return (
    <div>
      {firstName},{lastName},age: {age}
    </div>
  );
}
