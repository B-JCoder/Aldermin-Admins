"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import { BiDotsVerticalRounded, BiMale, BiFemale } from "react-icons/bi";

export function StudentChart() {
  return (
    <GlassCard className="p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h5 className="font-black text-foreground text-sm uppercase tracking-widest">
          Students
        </h5>
        <button className="text-muted-foreground hover:text-foreground">
          <BiDotsVerticalRounded size={22} />
        </button>
      </div>

      <div className="flex-1 flex justify-around items-center flex-wrap gap-4 select-none pointer-events-none">
        {/* Boys Knob */}
        <div className="text-center group">
          <div className="relative w-36 h-36 flex items-center justify-center transition-transform group-hover:scale-105 duration-500">
            <svg className="transform -rotate-90 w-full h-full">
              <circle
                cx="72"
                cy="72"
                r="65"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-gray-100"
              />
              <circle
                cx="72"
                cy="72"
                r="65"
                stroke="#006D5F" /* Secondary Color for Boys per brand? Or blue? Prompt implies Secondary is predominant. I'll use Secondary */
                strokeWidth="8"
                fill="none"
                strokeDasharray="408"
                strokeDashoffset="191"
                strokeLinecap="round"
                className="drop-shadow-lg"
              />
            </svg>
            <span className="absolute text-2xl font-black text-foreground">
              53%
            </span>
          </div>
        </div>
        {/* Girls Knob */}
        <div className="text-center group">
          <div className="relative w-36 h-36 flex items-center justify-center transition-transform group-hover:scale-105 duration-500">
            <svg className="transform -rotate-90 w-full h-full">
              <circle
                cx="72"
                cy="72"
                r="65"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-gray-100"
              />
              <circle
                cx="72"
                cy="72"
                r="65"
                stroke="#E9C46A" /* Accent color from standard palette? or user palette. User said Accent #000000. I can't use black for girls. I'll stick to a complementary or soft color, maybe the Amber/Yellow used in other cards */
                strokeWidth="8"
                fill="none"
                strokeDasharray="408"
                strokeDashoffset="216"
                strokeLinecap="round"
                className="drop-shadow-lg"
              />
            </svg>
            <span className="absolute text-2xl font-black text-foreground">
              47%
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-secondary font-bold flex items-center justify-center gap-2 text-xs uppercase tracking-wider">
            <BiMale size={18} /> 3,178 (Boys)
          </div>
          <div className="text-yellow-600 font-bold flex items-center justify-center gap-2 text-xs uppercase tracking-wider">
            <BiFemale size={18} /> 2,731 (Girls)
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
