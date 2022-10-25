import React, { Children, createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ displayName: "Sohan" });
  const [loading, setLoading] = useState(true);

  //   Create Email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Signin Email and password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Google Sign In
  const googleProvider = new GoogleAuthProvider();
  const createGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   GitHub sign In
  const githubProvider = new GithubAuthProvider();
  const createGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  //   Sign Out
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("inside auth state change", currentUser);

      if (currentUser === null || currentUser.emailVerified) {
        setUser(currentUser);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createGoogle,
    createGithub,
    logout,
    createUser,
    signIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
