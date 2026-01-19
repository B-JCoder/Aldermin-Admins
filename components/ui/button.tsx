import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold uppercase tracking-widest transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-4 focus-visible:ring-secondary/20 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-secondary text-white shadow-lg shadow-secondary/20 hover:bg-secondary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 shadow-lg shadow-destructive/20",
        outline:
          "border border-white/40 bg-white/50 shadow-sm hover:bg-white hover:text-secondary",
        secondary:
          "bg-white text-secondary hover:bg-secondary/5 border border-secondary/20",
        ghost: "hover:bg-secondary/10 hover:text-secondary",
        link: "text-secondary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8",
        sm: "h-10 px-6 text-[11px]",
        lg: "h-14 px-10 text-base",
        icon: "size-12 rounded-xl",
        "icon-sm": "size-9 rounded-xl", // 36px
        "icon-xs": "size-8 rounded-lg", // 32px
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
