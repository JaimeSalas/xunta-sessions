import React from "react";

const MyChildComponent = () => {
    React.useEffect(() => {
        console.log('El componente se monta en el DOM');

        // http -> state less 
        // ws - TCP - mantener - chat
        return () => console.log('el component se va del DOM');
    }, []);

    return <h4>Hello from child component</h4>
};

export const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      {/* {visible && <h4>Hello</h4>} */}
      {visible && <MyChildComponent />}
      <button onClick={() => setVisible(!visible)}>Toggle Visible</button>
    </>
  );
};
