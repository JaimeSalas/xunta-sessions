import React from "react";
import { useNavigate } from "react-router-dom";
import { FormLogin } from "@/components/form-login";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const isValidCredentials = (username: string, password: string) =>
    username === "admin" && password === "test";

  const handleNavigate = (username: string, password: string) => {
    if (isValidCredentials(username, password)) {
      navigate("/list");
    } else {
      alert("Username / Password wrong... admin / test");
    }
  };

  return <FormLogin onSubmit={handleNavigate} />;
};
