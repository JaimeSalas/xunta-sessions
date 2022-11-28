import React from "react";

interface UserContext {
  username: string;
  setUsername?: (value: string) => void;
}

export const MyContext = React.createContext<UserContext>({
  setUsername: (value) => {
    console.log('Provider is not injected')
  },
  username: "Provider is not injected",
});


interface Props {
    children?: React.ReactElement 
}

export const MyContextProvider: React.FC<Props> = (props: Props) => {
  const [username, setUsername] = React.useState("Jane Doe");

  return (
    <MyContext.Provider value={{ username, setUsername }}>
      {props.children}
    </MyContext.Provider>
  );
};
/*
<Provider>
    <MyComponent />
</Provider>
*/
