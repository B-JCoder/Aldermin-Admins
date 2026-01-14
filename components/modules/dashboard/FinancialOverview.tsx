"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export function FinancialOverview() {
  return (
    <GlassCard className="p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h5 className="font-black text-foreground text-sm uppercase tracking-widest">
          Financial Overview
        </h5>
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="h-8 w-[110px] bg-white/50 border-white/40 text-xs font-bold">
              <SelectValue placeholder="2023-2024" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="23-24">2023-2024</SelectItem>
              <SelectItem value="22-23">2022-2023</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="h-8 w-[100px] bg-white/50 border-white/40 text-xs font-bold">
              <SelectValue placeholder="Annual" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="annual">Annual</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        {/* Income */}
        <div className="bg-secondary/10 p-6 rounded-[20px] relative text-foreground flex flex-col justify-end border border-secondary/20 overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>

          <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center absolute top-6 left-6 shadow-lg shadow-secondary/30">
            <BiTrendingUp className="text-white text-xl" />
          </div>

          <span className="absolute top-6 right-6 bg-green-100 text-green-700 border border-green-200 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
            ↑ 12%
          </span>
          <div className="mt-6 relative z-10">
            <h4 className="text-2xl font-black text-foreground mb-1 tracking-tight">
              PKR 29.5M
            </h4>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
              Total Income
            </p>
          </div>
        </div>

        {/* Expense */}
        <div className="bg-orange-50/50 p-6 rounded-[20px] relative text-foreground flex flex-col justify-end border border-orange-100 overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>

          <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center absolute top-6 left-6 shadow-lg shadow-orange-200">
            <BiTrendingDown className="text-white text-xl" />
          </div>

          <span className="absolute top-6 right-6 bg-red-100 text-red-700 border border-red-200 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
            ↓ 0.5%
          </span>
          <div className="mt-6 relative z-10">
            <h4 className="text-2xl font-black text-foreground mb-1 tracking-tight">
              PKR 19.2M
            </h4>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
              Total Expenses
            </p>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
