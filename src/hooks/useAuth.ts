import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithRedirect, User as FirebaseUser } from 'firebase/auth';
import { User } from '../types';
import { ADMIN_EMAIL } from '../constants/project-data';

export const useAuth = () => {
  const [authLoading, setAuthLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showSplash, setShowSplash] = useState(true);

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

  const formatUser = (firebaseUser: FirebaseUser): User => {
    const role = firebaseUser.email === ADMIN_EMAIL ? "admin" : "user";
    return {
      uid: firebaseUser.uid,
      name: firebaseUser.displayName || "Utilizador sem nome",
      email: firebaseUser.email || "",
      role
    };
  }

  const handleLogin = async (data: { name: string; email: string }) => {
    // Este método agora só é usado para o login "mock"
    setAuthLoading(true);
    setAuthError("");
    const role = data.email === ADMIN_EMAIL ? "admin" : "user";
    const user: User = {
      uid: "user-" + Date.now(),
      name: data.name,
      email: data.email,
      role
    };
    setCurrentUser(user);
    setAuthLoading(false);
    setShowSplash(true);
  };

  const handleGoogleLogin = async () => {
    setAuthLoading(true);
    setAuthError("");
    try {
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
      // O onAuthStateChanged tratará de definir o utilizador
    } catch (error: any) {
      console.error("Erro no login com Google:", error);
      setAuthError("Falha ao autenticar com o Google. Por favor, tente novamente.");
    }
    setAuthLoading(false);
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
    handleLogin, // Manter o login antigo, caso seja necessário
    handleGoogleLogin,
    handleLogout
  };
};