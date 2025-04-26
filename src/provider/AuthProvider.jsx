import { createContext, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "./../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const googleProvider = new GoogleAuthProvider();

  const google = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const valueInfo = {
    user,
    loading,
    google,
  };
  return (
    <AuthContext.Provider value={valueInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
