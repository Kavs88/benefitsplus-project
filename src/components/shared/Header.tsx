'use client';

import React from 'react';
import { useAuthModal } from '../../hooks/useAuthModal';
import { useSession } from 'next-auth/react';
import Link from "next/link";
import SignInModal from '../ui/auth/SignInModal';
import RegisterModal from '../ui/auth/RegisterModal';

export default function Header() {
  const { 
    isSignInOpen, 
    isRegisterOpen, 
    openSignIn, 
    openRegister, 
    closeModals, 
    switchToSignIn, 
    switchToRegister,
    handleSignOut 
  } = useAuthModal();
  const { data: session, status } = useSession();

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  BenefitPlus
                </h1>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="font-semibold text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/events" className="font-semibold text-gray-600 hover:text-blue-600 transition-colors">Events</Link>
              <Link href="/discounts" className="font-semibold text-gray-600 hover:text-blue-600 transition-colors">Discounts</Link>
            </nav>

            {/* Auth Buttons / User Profile */}
            <div className="flex items-center">
              {status === 'loading' ? (
                <div className="animate-pulse bg-gray-200 h-10 w-36 rounded-lg"></div>
              ) : session?.user ? (
                <div className="flex items-center space-x-4">
                  <Link href="/events/create" className="font-semibold text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 text-sm">
                    Create Event
                  </Link>
                  <Link href="/dashboard/my-events" className="font-semibold text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 text-sm">
                    My Events
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={openSignIn}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Login
                  </button>
                  <button
                    onClick={openRegister}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Register
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {isSignInOpen && (
        <SignInModal
          isOpen={isSignInOpen}
          onClose={closeModals}
          onSwitchToRegister={switchToRegister}
        />
      )}

      {isRegisterOpen && (
        <RegisterModal
          isOpen={isRegisterOpen}
          onClose={closeModals}
          onSwitchToSignIn={switchToSignIn}
        />
      )}
    </>
  );
} 