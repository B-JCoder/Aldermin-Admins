"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { AdminCard } from "@/components/common/AdminCard";

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
    <AdminCard
      className={cn("p-6 flex flex-col justify-between", className)}
      {...props}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        {icon && <div className="text-secondary opacity-80">{icon}</div>}
      </div>
      <div className="flex items-end justify-between">
        <div className="text-3xl font-bold text-gray-900">{value}</div>
        {trend && (
          <div
            className={cn(
              "text-xs font-semibold px-2 py-1 rounded-full",
              trendUp
                ? "bg-emerald-50 text-emerald-600"
                : "bg-red-50 text-red-600",
            )}
          >
            {trend}
          </div>
        )}
      </div>
    </AdminCard>
  );
}
