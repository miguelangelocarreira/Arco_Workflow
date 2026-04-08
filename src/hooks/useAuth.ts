import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup, User as FirebaseUser, AuthError } from 'firebase/auth';
import { User } from '../types';
import { ADMIN_EMAIL } from '../constants/project-data';

export const useAuth = () => {
  const [authLoading, setAuthLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showSplash, setShowSplash] = useState(true);

  const formatUser = (firebaseUser: FirebaseUser): User => {
    const role = firebaseUser.email === ADMIN_EMAIL ? "admin" : "user";
    return {
      uid: firebaseUser.uid,
      name: firebaseUser.displayName || "Utilizador sem nome",
      email: firebaseUser.email || "",
      role
    };
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        const user = formatUser(firebaseUser);
        setCurrentUser(user);
        setShowSplash(true);
      } else {
        setCurrentUser(null);
      }
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async (data: { name: string; email: string }) => {
    setAuthLoading(true);
    setAuthError("");
    const role = data.email === ADMIN_EMAIL ? "admin" : "user";
    const user: User = {
      uid: crypto.randomUUID(),
      name: data.name,
      email: data.email,
      role
    };
    setCurrentUser(user);
    setAuthLoading(false);
    setShowSplash(true);
  };

  const handleGoogleLogin = async () => {
    setAuthError("");
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error: unknown) {
      const authErr = error as AuthError;
      if (authErr.code === 'auth/popup-closed-by-user') {
        setAuthError("O login foi cancelado (janela fechada).");
      } else if (authErr.code === 'auth/popup-blocked') {
        setAuthError("O navegador bloqueou a janela de login. Por favor, permita popups para este site.");
      } else {
        setAuthError(authErr.message || "Erro ao conectar com Google.");
      }
    }
  };

  const handleLogout = async () => {
    await auth.signOut();
    setCurrentUser(null);
    setShowSplash(false);
  };

  return {
    authLoading,
    authError,
    currentUser,
    showSplash,
    setShowSplash,
    handleLogin,
    handleGoogleLogin,
    handleLogout
  };
};
