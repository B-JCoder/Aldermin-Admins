"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "Jan", income: 1200, expense: 800 },
  { month: "Feb", income: 1500, expense: 1100 },
  { month: "Mar", income: 1700, expense: 1200 },
  { month: "Apr", income: 1400, expense: 1000 },
  { month: "May", income: 1900, expense: 1300 },
  { month: "Jun", income: 2000, expense: 1600 },
  { month: "Jul", income: 2100, expense: 1700 },
  { month: "Aug", income: 2300, expense: 1800 },
  { month: "Sep", income: 2200, expense: 1500 },
  { month: "Oct", income: 2500, expense: 1900 },
  { month: "Nov", income: 2700, expense: 2000 },
  { month: "Dec", income: 3000, expense: 2200 },
  // Adding small random variation to ensure chart renders
];

export function EarningChart() {
  return (
    <GlassCard className="p-6 h-[400px] flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h4 className="font-black text-foreground text-sm uppercase tracking-widest">
          Earning
        </h4>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            <FaCircle className="text-secondary" size={8} /> Income
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            <FaCircle className="text-gray-300" size={8} /> Expense
          </div>
        </div>
        <button>
          <BiDotsVerticalRounded
            size={22}
            className="text-muted-foreground hover:text-foreground"
          />
        </button>
      </div>
      <div className="flex-1 w-full min-h-0 relative">
        {/* Explicitly adding width/height to container or using 99% to avoid float math issues sometimes in rechart */}
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#006D5F" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#006D5F" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#e5e7eb" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#e5e7eb" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9ca3af", fontSize: 10, fontWeight: 700 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9ca3af", fontSize: 10, fontWeight: 700 }}
                dx={-10}
              />
              <CartesianGrid
                vertical={false}
                stroke="#f3f4f6"
                strokeDasharray="3 3"
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(4px)",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              />
              <Area
                type="monotone"
                dataKey="income"
                stroke="#006D5F"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorIncome)"
              />
              <Area
                type="monotone"
                dataKey="expense"
                stroke="#d1d5db"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorExpense)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </GlassCard>
  );
}
