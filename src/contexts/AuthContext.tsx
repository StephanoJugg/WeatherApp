import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

type IProps = {
  children?: React.ReactNode;
};

type IAuthContext = {
  user: string;
  signup: (email: string, password: string) => void | Promise<any>;
  login: (email: string, password: string) => void | Promise<any>;
};

const emptyUser = {
  user: "",
  signup: (email: string, password: string) => {},
  login: (email: string, password: string) => {},
};

const AuthContext = React.createContext<IAuthContext>(emptyUser);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: IProps) {
  const [currentUser, setCurrentUser] = React.useState<string>("");
  const [loading, setLoading] = useState(true);

  function signup(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setLoading(false);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user: currentUser, signup, login }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
