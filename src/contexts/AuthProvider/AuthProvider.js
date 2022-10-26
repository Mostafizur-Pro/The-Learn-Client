import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   Create Email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   Profile photo and name update
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
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

  // Facebook add
  const facebookProvider = new FacebookAuthProvider();
  const createFacebook = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  //   Sign Out
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   email verify
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      //   console.log("inside auth state change", currentUser);

      if (currentUser === null || currentUser.emailVerified) {
        setUser(currentUser);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const [theme, setTheme] = useState("light");

  const authInfo = {
    user,
    createGoogle,
    createGithub,
    logout,
    createUser,
    updateUserProfile,
    verifyEmail,
    signIn,
    setTheme,
    createFacebook,
    theme,

    loading,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
