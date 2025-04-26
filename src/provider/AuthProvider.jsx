import { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "./../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const google = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const valueInfo = {
    user,
    loading,
    google,
    createUser,
    signInUser,
  };
  return (
    <AuthContext.Provider value={valueInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
