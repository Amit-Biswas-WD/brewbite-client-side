import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
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

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = new onAuthStateChanged(auth, (currentUser) => {
      console.log("Current User", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const valueInfo = {
    user,
    loading,
    google,
    createUser,
    signInUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={valueInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
