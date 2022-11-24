import React from "react";

// -> props
// -> new Satate
// -> hooks - sorted
export const MyComponent: React.FC = () => {
  const [myName, setMyName] = React.useState("");

  React.useEffect(() => {
    setTimeout(() => {
      setMyName("Jane Doe");
    }, 1500);
  }, []);

  return (
    <>
      <h4>{myName}</h4>
      <input
        type="text"
        value={myName}
        onChange={(e) => {
          setMyName(e.target.value);
        }}
      />
    </>
  );
};