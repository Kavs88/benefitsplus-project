'use client';

import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export function useAuthModal() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  const openSignIn = () => {
    setIsSignInOpen(true);
    setIsRegisterOpen(false);
  };

  const openRegister = () => {
    setIsRegisterOpen(true);
    setIsSignInOpen(false);
  };

  const closeModals = () => {
    setIsSignInOpen(false);
    setIsRegisterOpen(false);
  };

  const switchToSignIn = () => {
    setIsSignInOpen(true);
    setIsRegisterOpen(false);
  };

  const switchToRegister = () => {
    setIsRegisterOpen(true);
    setIsSignInOpen(false);
  };

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };

  // Redirect based on role after authentication
  useEffect(() => {
    if (session?.user && status === 'authenticated') {
      const role = (session.user as any).role;
      if (role === 'partner') {
        router.push('/dashboard/partner');
      } else if (role === 'member') {
        router.push('/dashboard/member');
      }
      closeModals();
    }
  }, [session, status, router]);

  return {
    isSignInOpen,
    isRegisterOpen,
    session,
    status,
    openSignIn,
    openRegister,
    closeModals,
    switchToSignIn,
    switchToRegister,
    handleSignOut,
  };
} 