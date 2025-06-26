"use client";

import * as React from "react";
import { Toaster as SonnerToaster, toast as sonnerToast, ToastOptions } from "sonner";

export function Toaster(props: React.ComponentProps<typeof SonnerToaster>) {
  return <SonnerToaster {...props} />;
}

// Re-export the toast function for convenience
export const toast: typeof sonnerToast = sonnerToast; 