import React from "react";
// import { MyComponent } from "./01-use-state";
// import { MyComponent } from './02-use-state-object';
// import { MyComponent } from './03-component-did-load';
// import { MyComponent } from './04-component-unmount';
// import { MyComponent } from './05-component-update-render';
// import { MyComponent } from './06-ajax-field-change';
// import { MyComponent } from './07-custom-hook';
// import { MyComponent } from './08-pure-component';
// import { MyComponent } from './09-pure-component-callback';
import { MyComponent } from "./my-component";
import { MyContextProvider } from "./11-use-context";

export const App = () => {
  return (
    <>
      <MyContextProvider>
        <MyComponent />
      </MyContextProvider>
      {/* <MyComponent /> */}
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
