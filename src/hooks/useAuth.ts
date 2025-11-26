import { useState, useEffect } from 'react';
import { User } from '../types';
import { ADMIN_EMAIL } from '../constants/project-data';

export const useAuth = () => {
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState("");
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showSplash, setShowSplash] = useState(false);

  const handleLogin = async (data: { name: string; email: string }) => {
    setAuthLoading(true);
    setAuthError("");
    
    const role = data.email === ADMIN_EMAIL ? "admin" : "user";
    
    // For demo purposes, we'll create a mock user
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

  const handleLogout = () => {
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
    handleLogout
  };
};