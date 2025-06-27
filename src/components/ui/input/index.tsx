import * as React from "react";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className = "", ...props }, ref) => (
  <input
    ref={ref}
    className={
      "border border-gray-300 dark:border-zinc-700 rounded px-3 py-2 w-full bg-white dark:bg-zinc-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary " +
      className
    }
    {...props}
  />
));
Input.displayName = "Input";
