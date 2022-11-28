import React from 'react';
import { MyContext } from './11-use-context';

export const MyComponent: React.FC = () => {
    const { username } = React.useContext(MyContext);

    return(
        <>
            <h3>{username}</h3>
        </>
    );
};


// HOC = (C) => <ComponentWitProvider /> 