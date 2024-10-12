import { PassUserInfoProps } from "./Types";

export default function PassUserInfo({ userInfo }: PassUserInfoProps) {
  return (
    <div>
      {userInfo.firstName}, {userInfo.lastName}, {userInfo.age}
    </div>
  );
}
