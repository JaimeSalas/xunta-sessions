import React from "react";
import { UserProfile, createDefaultUserName } from "./profile.vm";

interface Context extends UserProfile {
  setUserProfile: (userProfile: UserProfile) => void;
}

export const ProfileContext = React.createContext<Context>({
  userName: "no user login",
  setUserProfile: () => console.warn("Not provider injected"),
});

interface Props {
  children: React.ReactNode;
}

export const ProfileProvider: React.FC<Props> = ({ children }) => {
  const [userProfile, setUserProfile] = React.useState<UserProfile>(
    createDefaultUserName
  );

  return (
    <ProfileContext.Provider
      value={{ userName: userProfile.userName, setUserProfile }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
