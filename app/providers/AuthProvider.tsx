"use client";

import { SessionProvider } from "next-auth/react";
type AuthProviderType = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<AuthProviderType> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
