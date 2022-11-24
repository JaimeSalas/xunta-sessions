import React from "react";

interface UserInfo {
    name: string;
    lastname: string;
}

export const MyComponent: React.FC = () => {
  const [userInfo, setUserInfo] = React.useState<UserInfo>({
    name: 'Jane',
    lastname: 'Doe',
  });

  return (
    <>
      <h4>{userInfo.name} {userInfo.lastname}</h4>
      <input
        type="text"
        value={userInfo.name}
        onChange={(e) => {
            // setMyName(e.target.value); 
            // console.log(myName);
            // userInfo.name = e.target.value;
            setUserInfo({
                ...userInfo,
                name: e.target.value
            });
        }}
      />
    </>
  );
};
