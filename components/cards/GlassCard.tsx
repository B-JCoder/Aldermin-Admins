import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlassCard({ className, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-white/60 backdrop-blur-md border border-white/30 shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
