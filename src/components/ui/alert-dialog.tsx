import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// Local implementations for missing exports
function DialogDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-600 mb-4">{children}</p>;
}
function DialogFooter({ children }: { children: React.ReactNode }) {
  return <div className="flex justify-end gap-2 mt-6">{children}</div>;
}

// Context to manage open state
const AlertDialogContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
} | null>(null);

export function AlertDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return (
    <AlertDialogContext.Provider value={{ open, setOpen }}>
      <Dialog open={open} onOpenChange={setOpen}>
        {children}
      </Dialog>
    </AlertDialogContext.Provider>
  );
}

export function AlertDialogTrigger({ asChild, children }: { asChild?: boolean; children: React.ReactNode }) {
  const context = React.useContext(AlertDialogContext);
  if (!context) throw new Error("AlertDialogTrigger must be used within AlertDialog");
  const { setOpen } = context;
  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<any, any>;
    const originalOnClick = child.props?.onClick;
    return React.cloneElement(child, {
      ...child.props,
      onClick: (e: any) => {
        if (typeof originalOnClick === 'function') originalOnClick(e);
        setOpen(true);
      },
    });
  }
  return <button onClick={() => setOpen(true)}>{children}</button>;
}

export function AlertDialogContent({ children }: { children: React.ReactNode }) {
  return <DialogContent>{children}</DialogContent>;
}

export function AlertDialogHeader({ children }: { children: React.ReactNode }) {
  return <DialogHeader>{children}</DialogHeader>;
}

export function AlertDialogTitle({ children }: { children: React.ReactNode }) {
  return <DialogTitle>{children}</DialogTitle>;
}

export function AlertDialogDescription({ children }: { children: React.ReactNode }) {
  return <DialogDescription>{children}</DialogDescription>;
}

export function AlertDialogFooter({ children }: { children: React.ReactNode }) {
  return <DialogFooter>{children}</DialogFooter>;
}

export function AlertDialogAction({ children, ...props }: React.ComponentProps<typeof Button>) {
  const context = React.useContext(AlertDialogContext);
  if (!context) throw new Error("AlertDialogAction must be used within AlertDialog");
  const { setOpen } = context;
  return (
    <Button {...props} onClick={(e) => { if (props.onClick) props.onClick(e); setOpen(false); }}>
      {children}
    </Button>
  );
}

export function AlertDialogCancel({ children, ...props }: React.ComponentProps<typeof Button>) {
  const context = React.useContext(AlertDialogContext);
  if (!context) throw new Error("AlertDialogCancel must be used within AlertDialog");
  const { setOpen } = context;
  return (
    <Button variant="outline" {...props} onClick={(e) => { if (props.onClick) props.onClick(e); setOpen(false); }}>
      {children}
    </Button>
  );
} 