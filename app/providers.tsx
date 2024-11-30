"use client";
import { User } from "@/utils/types/user";
import { createContext, Dispatch, useState } from "react";

interface IUserContext {
  user: User | null;
  setUser: Dispatch<React.SetStateAction<User | null>>;
}
export const UserContext = createContext<IUserContext>({
  user: null,
  setUser: () => {},
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default Providers;
