import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/list");
  };

  return (
    <>
      <h2>Hello from Login Page</h2>
      {/* <Link to="/list">Navigate to list page</Link> */}
      <button onClick={handleNavigate}>Login</button>
    </>
  );
};
