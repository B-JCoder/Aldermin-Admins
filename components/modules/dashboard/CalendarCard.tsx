"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Button } from "@/components/ui/button";

export function CalendarCard() {
  return (
    <GlassCard className="h-full p-6 flex flex-col items-center justify-center text-center">
      <div className="w-full flex-1 flex flex-col items-center justify-center min-h-[250px]">
        <div className="w-full max-w-[280px]">
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full hover:bg-secondary/10 hover:text-secondary"
            >
              <BiChevronLeft size={24} />
            </Button>
            <span className="font-black text-foreground text-lg tracking-tight">
              May 2024
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full hover:bg-secondary/10 hover:text-secondary"
            >
              <BiChevronRight size={24} />
            </Button>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-xs mb-3 text-muted-foreground font-black uppercase tracking-wider">
            <span>Su</span>
            <span>Mo</span>
            <span>Tu</span>
            <span>We</span>
            <span>Th</span>
            <span>Fr</span>
            <span>Sa</span>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-foreground">
            {/* Mock Days */}
            {[...Array(31)].map((_, i) => (
              <span
                key={i}
                className={`h-8 w-8 flex items-center justify-center rounded-full cursor-pointer transition-all ${
                  i === 11
                    ? "bg-secondary text-white shadow-lg shadow-secondary/30 scale-110"
                    : "hover:bg-secondary/10 hover:text-secondary"
                }`}
              >
                {i + 1}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Button
        variant="secondary"
        className="mt-4 w-3/4 rounded-xl text-xs font-black uppercase tracking-widest shadow-md"
      >
        Manage Calendar
      </Button>
    </GlassCard>
  );
}
