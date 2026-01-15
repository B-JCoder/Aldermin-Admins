"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  subtitle,
  icon,
  action,
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8",
        className
      )}
    >
      <div>
        <h1 className="text-3xl font-black text-foreground tracking-tighter flex items-center gap-3">
          {icon && (
            <div className="p-2 bg-secondary rounded-xl shadow-lg ring-4 ring-white/50 text-white flex items-center justify-center">
              {icon}
            </div>
          )}
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm text-muted-foreground font-bold uppercase tracking-[0.2em] mt-2 ml-1">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="flex items-center gap-2">{action}</div>}
    </div>
  );
}
