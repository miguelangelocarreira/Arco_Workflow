import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  User as FirebaseUser,
  AuthError
} from 'firebase/auth';
import { User } from '../types';
import { ADMIN_EMAIL } from '../constants/project-data';
import { upsertUserProfile, getUserProfile } from '../utils/db';

export const useAuth = () => {
  const [authLoading, setAuthLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showSplash, setShowSplash] = useState(true);
  const [resetSent, setResetSent] = useState(false);

  const formatUser = (firebaseUser: FirebaseUser): User => {
    const role = firebaseUser.email === ADMIN_EMAIL ? "admin" : "user";
    return {
      uid: firebaseUser.uid,
      name: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || "Utilizador",
      email: firebaseUser.email || "",
      role
    };
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async firebaseUser => {
      if (firebaseUser) {
        const user = formatUser(firebaseUser);

        // Check if user is deactivated in Firestore
        const profile = await getUserProfile(firebaseUser.uid);
        if (profile && profile.active === false) {
          await auth.signOut();
          setCurrentUser(null);
          setAuthLoading(false);
          setAuthError("A tua conta foi desativada. Contacta o administrador.");
          return;
        }

        // Upsert user profile in Firestore
        await upsertUserProfile({
          uid: user.uid,
          name: user.name,
          email: user.email,
          role: user.role,
          active: true,
          createdAt: profile?.createdAt ?? Date.now(),
          lastLoginAt: Date.now(),
        });

        setCurrentUser(user);
        setShowSplash(true);
      } else {
        setCurrentUser(null);
      }
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (data: { email: string; password: string }) => {
    setAuthLoading(true);
    setAuthError("");
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error: unknown) {
      const authErr = error as AuthError;
      if (authErr.code === 'auth/invalid-credential' || authErr.code === 'auth/wrong-password' || authErr.code === 'auth/user-not-found') {
        setAuthError("Email ou password incorretos.");
      } else if (authErr.code === 'auth/too-many-requests') {
        setAuthError("Demasiadas tentativas. Tenta mais tarde ou repõe a password.");
      } else {
        setAuthError("Erro ao entrar. Verifica os teus dados.");
      }
    } finally {
      setAuthLoading(false);
    }
  };

  const handleForgotPassword = async (email: string) => {
    if (!email) {
      setAuthError("Introduz o teu email para repor a password.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
      setAuthError("");
    } catch {
      setAuthError("Não foi possível enviar o email. Verifica o endereço.");
    }
  };

  const handleLogout = async () => {
    await auth.signOut();
    setCurrentUser(null);
    setShowSplash(false);
    setResetSent(false);
  };

  return {
    authLoading,
    authError,
    currentUser,
    showSplash,
    setShowSplash,
    resetSent,
    handleLogin,
    handleForgotPassword,
    handleLogout
  };
};
