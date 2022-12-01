import React from "react";
import { Link } from 'react-router-dom';

export const MenuComponent: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", 
      }}
    >
        <Link style={{}} to="/game">Game</Link>
        <Link style={{}} to="/config">Configuration</Link>
    </div>
  );
};
