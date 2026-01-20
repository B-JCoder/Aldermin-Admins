"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backUrl?: string;
  action?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  subtitle,
  backUrl,
  action,
  icon,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-4 mb-10", className)}>
      {backUrl && (
        <Link
          href={backUrl}
          className="flex items-center gap-1 text-xs font-bold text-muted-foreground hover:text-secondary transition-colors uppercase tracking-widest w-fit"
        >
          <FaChevronLeft size={10} />
          Back
        </Link>
      )}

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3">
            {icon && <div className="text-secondary">{icon}</div>}
            <h1 className="text-3xl font-black text-foreground tracking-tighter">
              {title}
            </h1>
          </div>
          {subtitle && (
            <p className="text-sm text-muted-foreground font-bold uppercase tracking-[0.2em] mt-2">
              {subtitle}
            </p>
          )}
        </div>
        {action && <div className="flex items-center gap-2">{action}</div>}
      </div>
    </div>
  );
}
