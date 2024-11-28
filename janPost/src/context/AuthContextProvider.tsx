import React, { ReactNode, createContext, useState } from "react";

interface User {
  fname: string;
  lname: string;
  email: string;
}
interface Props {
  children: ReactNode;
}
const AuthContext = createContext(null);
const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState(null);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
