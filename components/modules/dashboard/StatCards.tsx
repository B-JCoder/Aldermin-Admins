"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { BiDotsVerticalRounded } from "react-icons/bi";

export function StatCards() {
  const stats = [
    { label: "Students", value: "1,230", color: "yellow" },
    { label: "Teachers", value: "60", color: "purple" },
    { label: "Employee", value: "100", color: "orange" },
  ];

  return (
    <AdminCard className="h-full overflow-hidden">
      <div className="p-4 sm:p-5 h-full flex flex-col justify-between gap-4 sm:gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={cn(
              "rounded-2xl p-4 shadow-sm border backdrop-blur-sm relative overflow-hidden group hover:scale-[1.02] transition-all duration-300",
              stat.color === "yellow" && "bg-yellow-50/50 border-yellow-100",
              stat.color === "purple" && "bg-purple-50/50 border-purple-100",
              stat.color === "orange" && "bg-orange-50/50 border-orange-100",
            )}
          >
            <div className="flex justify-between items-center mb-1 relative z-10 gap-4">
              <h6
                className={cn(
                  "font-bold uppercase tracking-widest text-[10px]",
                  stat.color === "yellow" && "text-yellow-700",
                  stat.color === "purple" && "text-purple-700",
                  stat.color === "orange" && "text-orange-700",
                )}
              >
                {stat.label}
              </h6>
              <button className="opacity-40 hover:opacity-100 transition-opacity">
                <BiDotsVerticalRounded size={18} />
              </button>
            </div>
            <h3
              className={cn(
                "text-2xl sm:text-3xl font-bold relative z-10",
                stat.color === "yellow" && "text-yellow-900",
                stat.color === "purple" && "text-purple-900",
                stat.color === "orange" && "text-orange-900",
              )}
            >
              {stat.value}
            </h3>
          </div>
        ))}
      </div>
    </AdminCard>
  );
}

import { cn } from "@/lib/utils";
