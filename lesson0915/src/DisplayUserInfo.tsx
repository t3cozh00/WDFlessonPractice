//import { DisplayUserInfoProps } from "./Types";

interface DisplayUserInfoProps {
  firstName: string;
  lastName: string;
  age: number;
}

export default function DisplayUserInfo({
  firstName,
  lastName,
  age,
}: DisplayUserInfoProps) {
  return (
    <div>
      {firstName},{lastName},age: {age}
    </div>
  );
}
