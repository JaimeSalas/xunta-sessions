import React from "react";
import { useNavigate } from "react-router-dom";
import { FormLogin } from "@/components/form-login";
import { routes } from "core";
import { CenterLayout } from "@/layouts";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const isValidCredentials = (username: string, password: string) =>
    username === "admin" && password === "test";

  const handleNavigate = (username: string, password: string) => {
    if (isValidCredentials(username, password)) {
      // navigate("/list");
      navigate(routes.list);
    } else {
      alert("Username / Password wrong... admin / test");
    }
  };

  return (
    <CenterLayout>
      <FormLogin onSubmit={handleNavigate} />
    </CenterLayout>
  );
};
