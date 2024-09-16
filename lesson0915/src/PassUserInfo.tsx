import { UserInfo } from "./Types";

interface PassUserInfoProps {
  userInfo: UserInfo;
}

export default function PassUserInfo({ userInfo }: PassUserInfoProps) {
  return (
    <div>
      {userInfo.firstName}, {userInfo.lastName}, {userInfo.age}
    </div>
  );
}
