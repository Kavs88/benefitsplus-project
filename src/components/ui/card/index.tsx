import * as React from "react";

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={
      "bg-white dark:bg-zinc-900 rounded-lg shadow border border-border p-4 " +
      className
    }
    {...props}
  />
));
Card.displayName = "Card";
