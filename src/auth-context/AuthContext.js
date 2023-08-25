import React, { useContext, createContext, useState, useEffect } from "react";

import {
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebaseConfig";

const AuthContext = createContext({
  createUser: () => {},
  loginUser: () => {},
  isSignup: null,
  isSignupHandler: () => {},
  token: null,
  tokenHandler: () => {},
  user: {},
  emailVerify: {},
  emailVerified: null,
  updateUser: () => {},
  logoutUser: () => {},
});

export const AuthProvider = (props) => {
  const [isSignup, setIsSignup] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});

  const isSignupHandler = (signup) => {
    setIsSignup(signup);
  };

  const tokenHandler = (token) => {
    setToken(token);
  };

  useEffect(() => {
    const getUser = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => getUser();
  }, []);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const emailVerify = (user) => {
    return sendEmailVerification(user);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (user, displayName, photoUrl) => {
    return updateProfile(user, {
      displayName: displayName,
      photoURL: photoUrl,
    });
  };

  const logoutUser = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        createUser,
        loginUser,
        isSignup,
        isSignupHandler,
        token,
        tokenHandler,
        emailVerify,
        user,
        updateUser,
        logoutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => useContext(AuthContext);
