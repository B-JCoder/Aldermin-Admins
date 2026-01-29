"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { FaTrophy, FaStar, FaChartLine } from "react-icons/fa";

export function TeacherStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <AdminCard className="p-6 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
        <FaTrophy
          className="absolute -right-4 -bottom-4 text-secondary/5 rotate-12"
          size={120}
        />
        <div className="relative z-10">
          <h3 className="text-[10px] font-semibold   text-gray-500 mb-1">
            Top Performer
          </h3>
          <div className="text-2xl font-semibold  text-foreground">
            Prof. Silas Vance
          </div>
          <div className="mt-4 inline-flex items-center gap-1 bg-secondary/10 rounded-lg px-2 py-1 text-[10px] font-bold text-secondary border border-secondary/20">
            <FaStar className="text-amber-400" /> 4.8 Rating
          </div>
        </div>
      </AdminCard>

      <AdminCard className="p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-4 -mt-4"></div>
        <h3 className="text-[10px] font-semibold text-gray-500   mb-1 relative z-10">
          Avg Institutional Rating
        </h3>
        <div className="text-4xl font-semibold text-foreground tracking-tighter relative z-10">
          4.2<span className="text-lg text-gray-500">/5.0</span>
        </div>
        <div className="mt-4 relative z-10 text-[10px] font-bold text-emerald-600 flex items-center gap-1">
          <FaChartLine /> +0.4 vs Last Term
        </div>
      </AdminCard>

      <AdminCard className="p-6 relative overflow-hidden">
        <h3 className="text-[10px] font-semibold text-gray-500   mb-1 relative z-10">
          Total Evaluations
        </h3>
        <div className="text-4xl font-semibold text-foreground tracking-tighter relative z-10">
          1,248
        </div>
        <div className="mt-4 relative z-10 text-[10px] font-bold text-gray-500  ">
          Across 45 Faculty
        </div>
      </AdminCard>
    </div>
  );
}
