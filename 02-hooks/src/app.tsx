import React from "react";
// import { MyComponent } from "./01-use-state";
// import { MyComponent } from './02-use-state-object';
import { MyComponent } from './03-component-did-load';

export const App = () => {
  return (
    <>
      <MyComponent />
    </>
  );
};

// Immutable
// const obj = { num: 7, nested: {  } };
// const copy = {...obj};
// -> obj
// obj.num = 8;
// const num2 = 8;
// -> objM = Map(obj)
// Redux
