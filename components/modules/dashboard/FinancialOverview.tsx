"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { BiTrendingDown, BiTrendingUp } from "react-icons/bi";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export function FinancialOverview() {
  return (
    <AdminCard className="h-full flex flex-col overflow-hidden">
      <div className="p-4 md:p-6 flex flex-col h-full ">
        <div className="flex justify-between items-center mb-6 ">
          <h5 className="font-semibold text-foreground text-sm tracking-tight">
            Financial Overview
          </h5>
          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="h-8 w-[115px] bg-white border-gray-200 text-[11px] font-bold rounded-lg shadow-sm">
                <SelectValue placeholder="2023-2024" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-gray-100">
                <SelectItem value="23-24">2023-2024</SelectItem>
                <SelectItem value="22-23">2022-2023</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="h-8 w-[90px] bg-white border-gray-200 text-[11px] font-bold rounded-lg shadow-sm">
                <SelectValue placeholder="Annual" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-gray-100">
                <SelectItem value="annual">Annual</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 min-h-[160px]">
          {/* Income */}
          <div
            style={{ borderRadius: "32px" }}
            className="bg-secondary/10 p-5 md:p-6 relative text-foreground flex flex-col border border-secondary/20 overflow-hidden group hover:shadow-md transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-md shadow-secondary/40">
                <BiTrendingUp className="text-white text-xl" />
              </div>
              <span className="bg-green-100 text-green-700 border border-green-200 text-[12px] font-bold px-5 py-1 rounded-full tracking-wider">
                ↑ 12%
              </span>
            </div>

            <div className="mt-auto">
              <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-0.5 tracking-tight">
                PKR 29.5M
              </h4>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                Total Income
              </p>
            </div>
          </div>

          {/* Expense */}
          <div
            style={{ borderRadius: "32px" }}
            className="bg-orange-50/50 p-5 md:p-6 relative text-foreground flex flex-col border border-orange-100 overflow-hidden group hover:shadow-md transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center shadow-md shadow-orange-400/40">
                <BiTrendingDown className="text-white text-xl" />
              </div>
              <span className="bg-green-100 text-green-700 border border-green-200 text-[12px] font-bold px-5 py-1 rounded-full tracking-wider">
                ↓ 0.5%
              </span>
            </div>

            <div className="mt-auto">
              <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-0.5 tracking-tight">
                PKR 19.2M
              </h4>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                Total Expenses
              </p>
            </div>
          </div>
        </div>
      </div>
    </AdminCard>
  );
}
