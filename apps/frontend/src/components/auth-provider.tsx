'use client';

import { createContext, PropsWithChildren, useContext } from 'react';
import { useMe } from '../hooks/use-me.hook';

type AuthContextType = {
  authenticated: boolean;
  isLoading: boolean;
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: PropsWithChildren) {
  const { data, isLoading } = useMe();

  const onLogin = async () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`;
  };

  const onLogout = async () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`;
  };

  const value = {
    authenticated: !!data,
    isLoading,
    login: onLogin,
    logout: onLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
