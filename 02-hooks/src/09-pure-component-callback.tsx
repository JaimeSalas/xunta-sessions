import React from "react";

interface Props {
    onReset: () => void;
}

const ResetValue: React.FC<Props> = React.memo((props: Props) => {
    console.log(
        "Hey I'm only rendered the first time, check React.memo + callback"
    );

    return <button onClick={props.onReset}>Reset Value</button>
})

const myResetNameCallback = (setter: Function) => () => {
    setter("");
  };

export const MyComponent = () => {
  const [username, setUsername] = React.useState("John");
  const [lastname, setLastname] = React.useState("Doe");

  const resetNameCallback = React.useCallback(() => {
    setUsername("");
  }, []);

  return (
    <>
      <h3>{username} {lastname}</h3>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />
      <ResetValue onReset={resetNameCallback} />
      {/* <ResetValue onReset={myResetNameCallback(setUsername)} /> */}
    </>
  );
};
