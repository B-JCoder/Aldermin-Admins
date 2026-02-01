"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { BiDotsVerticalRounded, BiMale, BiFemale } from "react-icons/bi";

export function StudentChart() {
  return (
    <AdminCard className="p-4 md:p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h5 className="font-semibold text-foreground text-sm  ">Students</h5>
        <button className="text-gray-500 hover:text-foreground">
          <BiDotsVerticalRounded size={22} />
        </button>
      </div>

      <div className="flex-1 flex justify-around items-center flex-wrap gap-4 select-none pointer-events-none">
        {/* Boys Knob */}
        <div className="text-center group">
          <div className="relative w-32 h-32 md:w-36 md:h-36 flex items-center justify-center transition-transform group-hover:scale-105 duration-500">
            <svg className="transform -rotate-90 w-full h-full">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-gray-100"
              />
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="#006D5F" /* Secondary Color for Boys */
                strokeWidth="8"
                fill="none"
                strokeDasharray="280" /* Approx circumference of r=45% ~64px -> 402px but relative to size? SVG scaling handles it. Let's assume standard viewbox 0 0 144 144 */
                strokeDashoffset="130"
                strokeLinecap="round"
                className="drop-shadow-lg"
              />
            </svg>
            <span className="absolute text-xl md:text-2xl font-semibold text-foreground">
              53%
            </span>
          </div>
        </div>
        {/* Girls Knob */}
        <div className="text-center group">
          <div className="relative w-32 h-32 md:w-36 md:h-36 flex items-center justify-center transition-transform group-hover:scale-105 duration-500">
            <svg className="transform -rotate-90 w-full h-full">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-gray-100"
              />
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="#E9C46A"
                strokeWidth="8"
                fill="none"
                strokeDasharray="280"
                strokeDashoffset="150"
                strokeLinecap="round"
                className="drop-shadow-lg"
              />
            </svg>
            <span className="absolute text-xl md:text-2xl font-semibold text-foreground">
              47%
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-secondary font-bold flex items-center justify-center gap-2 text-xs  tracking-wider">
            <BiMale size={18} /> 3,178 (Boys)
          </div>
          <div className="text-yellow-600 font-bold flex items-center justify-center gap-2 text-xs  tracking-wider">
            <BiFemale size={18} /> 2,731 (Girls)
          </div>
        </div>
      </div>
    </AdminCard>
  );
}
