"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import { BiDotsVerticalRounded } from "react-icons/bi";

export function StatCards() {
  return (
    <GlassCard className="p-4 h-full flex flex-col justify-between gap-4">
      {/* Students */}
      <div className="rounded-xl p-5 shadow-sm bg-yellow-100/50 border border-yellow-200 backdrop-blur-sm relative overflow-hidden group hover:scale-[1.02] transition-transform">
        <div className="flex justify-between items-center mb-2 relative z-10">
          <h6 className="font-black text-yellow-800 text-xs uppercase tracking-widest">
            Students
          </h6>
          <button className="text-yellow-800/60 hover:text-yellow-900">
            <BiDotsVerticalRounded size={20} />
          </button>
        </div>
        <h3 className="text-3xl font-black text-yellow-900 relative z-10">
          1,230
        </h3>
        <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-yellow-200/50 rounded-full blur-2xl"></div>
      </div>

      {/* Teachers */}
      <div className="rounded-xl p-5 shadow-sm bg-purple-100/50 border border-purple-200 backdrop-blur-sm relative overflow-hidden group hover:scale-[1.02] transition-transform">
        <div className="flex justify-between items-center mb-2 relative z-10">
          <h6 className="font-black text-purple-800 text-xs uppercase tracking-widest">
            Teachers
          </h6>
          <button className="text-purple-800/60 hover:text-purple-900">
            <BiDotsVerticalRounded size={20} />
          </button>
        </div>
        <h3 className="text-3xl font-black text-purple-900 relative z-10">
          60
        </h3>
        <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-purple-200/50 rounded-full blur-2xl"></div>
      </div>

      {/* Employee */}
      <div className="rounded-xl p-5 shadow-sm bg-orange-100/50 border border-orange-200 backdrop-blur-sm relative overflow-hidden group hover:scale-[1.02] transition-transform">
        <div className="flex justify-between items-center mb-2 relative z-10">
          <h6 className="font-black text-orange-800 text-xs uppercase tracking-widest">
            Employee
          </h6>
          <button className="text-orange-800/60 hover:text-orange-900">
            <BiDotsVerticalRounded size={20} />
          </button>
        </div>
        <h3 className="text-3xl font-black text-orange-900 relative z-10">
          100
        </h3>
        <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-orange-200/50 rounded-full blur-2xl"></div>
      </div>
    </GlassCard>
  );
}
