"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import { FaCrown, FaChartLine, FaUsers } from "react-icons/fa";

export function ClassReportKPIs() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <GlassCard className="p-8 flex flex-col items-center text-center group hover:bg-secondary hover:text-white transition-all duration-500 cursor-pointer">
        <div className="p-4 bg-secondary/10 rounded-2xl mb-4 group-hover:bg-white/20 transition-colors">
          <FaCrown
            className="text-secondary group-hover:text-white"
            size={24}
          />
        </div>
        <div className="text-xs font-black text-muted-foreground group-hover:text-white/60 uppercase tracking-widest mb-2">
          Lead Tier
        </div>
        <div className="text-2xl font-black text-foreground group-hover:text-white font-serif italic tracking-tighter uppercase">
          Grade 10 (Alpha)
        </div>
      </GlassCard>

      <GlassCard className="p-8 flex flex-col items-center text-center group hover:bg-secondary hover:text-white transition-all duration-500 cursor-pointer">
        <div className="p-4 bg-secondary/10 rounded-2xl mb-4 group-hover:bg-white/20 transition-colors">
          <FaChartLine
            className="text-secondary group-hover:text-white"
            size={24}
          />
        </div>
        <div className="text-xs font-black text-muted-foreground group-hover:text-white/60 uppercase tracking-widest mb-2">
          Aggregate Velocity
        </div>
        <div className="text-2xl font-black text-foreground group-hover:text-white font-mono uppercase tracking-tighter">
          +8.4%
        </div>
      </GlassCard>

      <GlassCard className="p-8 flex flex-col items-center text-center group hover:bg-secondary hover:text-white transition-all duration-500 cursor-pointer">
        <div className="p-4 bg-secondary/10 rounded-2xl mb-4 group-hover:bg-white/20 transition-colors">
          <FaUsers
            className="text-secondary group-hover:text-white"
            size={24}
          />
        </div>
        <div className="text-xs font-black text-muted-foreground group-hover:text-white/60 uppercase tracking-widest mb-2">
          Sample Size
        </div>
        <div className="text-2xl font-black text-foreground group-hover:text-white font-mono tracking-tighter uppercase">
          125 Students
        </div>
      </GlassCard>
    </div>
  );
}
