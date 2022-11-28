import React from "react";

interface Props {
  name: string;
}

const DisplayName = React.memo((props: Props) => {
  console.log("only rerendered when name gets updated");

  return <h3>{props.name}</h3>;
});

// const DisplayName = (props: Props) => {
//   console.log("only rerendered when name gets updated");

//   return <h3>{props.name}</h3>;
// };

export const MyComponent = () => {
  const [userInfo, setUserInfo] = React.useState({
    name: "Jai",
    lastname: "Sal",
  });

  return (
    <>
      <DisplayName name={userInfo.name} />
      <input
        type="text"
        value={userInfo.name}
        onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
      />
      <input
        type="text"
        value={userInfo.lastname}
        onChange={(e) => setUserInfo({ ...userInfo, lastname: e.target.value })}
      />
    </>
  );
};

// x => x + 2
// side effects N concurrentes
// Dicc {2, 4} -> memoize
// Dicc {3, 5} -> memoize

// const obj = {};

// const memo = (func) => {
//   const obj = {};
//   return (arg) => {
//     obj[arg] = obj[arg] ? obj[arg] : func(arg);
//     obj[arg];
//   };
// };

// const add2 = x => x + 2;

// const o = memo(add2);
// o(2);
