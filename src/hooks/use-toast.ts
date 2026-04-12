import { toast as sonnerToast } from "sonner";
import * as React from "react";

// Maintain types for compatibility with existing components
type ToastProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: "default" | "destructive";
  action?: React.ReactNode;
};

/**
 * Compatibility wrapper for the 'toast' function.
 * Maps the old Radix toast calls to Sonner.
 */
function toast({ title, description, variant, action, ...props }: ToastProps) {
  const options = {
    description: description,
    action: action ? { label: "Action", onClick: () => {} } : undefined,
    ...props,
  };

  if (variant === "destructive") {
    return sonnerToast.error(title, options);
  }

  return sonnerToast(title, options);
}

/**
 * Compatibility hook for 'useToast'.
 * This allows Lovable-generated components to continue using:
 * const { toast } = useToast();
 */
function useToast() {
  return {
    toast,
    dismiss: (toastId?: string | number) => sonnerToast.dismiss(toastId),
  };
}

export { useToast, toast };