import React from "react";

export const MyComponent: React.FC = () => {
//   let myName = "Jane Doe";
  const [myName, setMyName] = React.useState("Jane Doe");

  return (
    <>
      <h4>{myName}</h4>
      <input
        type="text"
        value={myName}
        onChange={(e) => {
            setMyName(e.target.value); 
            // console.log(myName);
        }}
      />
    </>
  );
};
