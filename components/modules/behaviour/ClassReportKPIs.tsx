"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { FaCrown, FaChartLine, FaUsers } from "react-icons/fa";

export function ClassReportKPIs() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <AdminCard className="p-8 flex flex-col items-center text-center group hover:bg-secondary hover:text-white transition-all duration-500 cursor-pointer">
        <div className="p-4 bg-secondary/10 rounded-2xl mb-4 group-hover:bg-white/20 transition-colors">
          <FaCrown
            className="text-secondary group-hover:text-white"
            size={24}
          />
        </div>
        <div className="text-xs font-semibold text-gray-500 group-hover:text-white/60   mb-2">
          Lead Tier
        </div>
        <div className="text-2xl font-semibold text-foreground group-hover:text-white   tracking-tighter ">
          Grade 10 (Alpha)
        </div>
      </AdminCard>

      <AdminCard className="p-8 flex flex-col items-center text-center group hover:bg-secondary hover:text-white transition-all duration-500 cursor-pointer">
        <div className="p-4 bg-secondary/10 rounded-2xl mb-4 group-hover:bg-white/20 transition-colors">
          <FaChartLine
            className="text-secondary group-hover:text-white"
            size={24}
          />
        </div>
        <div className="text-xs font-semibold text-gray-500 group-hover:text-white/60   mb-2">
          Aggregate Velocity
        </div>
        <div className="text-2xl font-semibold text-foreground group-hover:text-white   tracking-tighter">
          +8.4%
        </div>
      </AdminCard>

      <AdminCard className="p-8 flex flex-col items-center text-center group hover:bg-secondary hover:text-white transition-all duration-500 cursor-pointer">
        <div className="p-4 bg-secondary/10 rounded-2xl mb-4 group-hover:bg-white/20 transition-colors">
          <FaUsers
            className="text-secondary group-hover:text-white"
            size={24}
          />
        </div>
        <div className="text-xs font-semibold text-gray-500 group-hover:text-white/60   mb-2">
          Sample Size
        </div>
        <div className="text-2xl font-semibold text-foreground group-hover:text-white  tracking-tighter ">
          125 Students
        </div>
      </AdminCard>
    </div>
  );
}
