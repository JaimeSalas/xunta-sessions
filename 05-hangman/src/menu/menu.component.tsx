import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Alert {
  alert?: boolean;
}

const H1 = styled.h1<Alert>`
  color: ${(props: Alert) => (props.alert ? "pink" : "blue")};
  text-align: center;
`;

const H2 = styled.h2`
  background: gray;
  color: green;
`;

const H2Alert = styled(H1)`
  color: red;
`;

//......................
interface Props {
  children?: React.ReactNode;
  className?: string;
}

const MyLink: React.FC<Props> = ({ className, children }) => {
  // return <a className={className}>{children}</a>;
  return (
    <div className={className}>
      <a>{children}</a>
    </div>
  );
};

const StyledLink = styled(MyLink)`
  background-color: gray;
  & > a {
    color: blue;
  }
`;

export const MenuComponent: React.FC = () => {
  return (
    <div>
      {/* <h1>Welcome to Hangman</h1> */}
      {/* <h1 style={{ color: 'red', textAlign: 'center' }}>Welcome to Hangman</h1> */}
      <H1>Welcome to Hangman</H1>
      <H1 alert>Welcome to Hangman</H1>
      <H2>Write in React</H2>
      <H2Alert>Vive JSX</H2Alert>
      <MyLink>Soy un enlace</MyLink>
      <StyledLink>Estoy estilado</StyledLink>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link style={{}} to="/game">
          Game
        </Link>
        <Link style={{}} to="/config">
          Configuration
        </Link>
      </div>
    </div>
  );
};
