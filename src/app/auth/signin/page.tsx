'use client';
import Providers from "@/components/Providers";
import SignInModal from "@/components/ui/auth/SignInModal";
import { useState } from "react";

export default function SignInPage() {
  // Always open the modal on this page
  const [open, setOpen] = useState(true);

  return (
    <Providers>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <SignInModal
          isOpen={open}
          onClose={() => setOpen(false)}
          onSwitchToRegister={() => {}}
        />
      </div>
    </Providers>
  );
} 