import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-secondary selection:text-white dark:bg-input/30 border-white/40 h-12 w-full min-w-0 rounded-xl border bg-white/50 px-4 py-2 text-sm shadow-sm transition-all focus:bg-white outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-secondary focus-visible:ring-secondary/20 focus-visible:ring-4",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

export { Input };
