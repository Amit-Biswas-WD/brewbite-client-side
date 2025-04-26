import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const valueInfo = {
    name: "Amit",
  };
  return (
    <AuthContext.Provider value={valueInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
