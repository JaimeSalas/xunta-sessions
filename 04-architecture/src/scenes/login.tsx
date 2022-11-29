import React from "react";
import { useNavigate } from "react-router-dom";
import { FormLogin } from "@/components/form-login";
import { routes } from "@/core";
import { CenterLayout } from "@/layouts";
import { ProfileContext } from '@/core/profile';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { setUserProfile } = React.useContext(ProfileContext);

  const isValidCredentials = (username: string, password: string) =>
    username === "admin" && password === "test";

  const handleNavigate = (username: string, password: string) => {
    if (isValidCredentials(username, password)) {
      // navigate("/list");
      setUserProfile({ userName: username });
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
