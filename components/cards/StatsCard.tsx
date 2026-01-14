"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";

interface StatsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: string;
  trendUp?: boolean;
}

export function StatsCard({
  title,
  value,
  icon,
  trend,
  trendUp,
  className,
  ...props
}: StatsCardProps) {
  return (
    <GlassCard
      className={cn("p-6 flex flex-col justify-between", className)}
      {...props}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          {title}
        </h3>
        {icon && <div className="text-secondary opacity-80">{icon}</div>}
      </div>
      <div className="flex items-end justify-between">
        <div className="text-3xl font-bold text-accent">{value}</div>
        {trend && (
          <div
            className={cn(
              "text-xs font-semibold px-2 py-1 rounded-full",
              trendUp
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            )}
          >
            {trend}
          </div>
        )}
      </div>
    </GlassCard>
  );
}
