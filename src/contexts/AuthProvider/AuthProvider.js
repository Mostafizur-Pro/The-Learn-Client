import React, { Children, createContext } from "react";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const authInfo = {};

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
