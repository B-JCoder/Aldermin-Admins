"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
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
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <AdminCard className="p-6 h-[400px] flex items-center justify-center">
        Loading...
      </AdminCard>
    );
  }

  return (
    <AdminCard className="p-6 h-[400px] flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h4 className="font-semibold text-foreground text-sm  ">Earning</h4>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-gray-500">
            <FaCircle className="text-[#016956]" size={8} /> Income
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-gray-500">
            <FaCircle className="text-orange-400" size={8} /> Expense
          </div>
        </div>
        <button>
          <BiDotsVerticalRounded
            size={22}
            className="text-gray-500 hover:text-foreground"
          />
        </button>
      </div>
      <div className="flex-1 w-full relative" style={{ minHeight: "300px" }}>
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
                  <stop offset="5%" stopColor="#016956" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#016956" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FB923C" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#FB923C" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9ca3af", fontSize: 11, fontWeight: 600 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9ca3af", fontSize: 11, fontWeight: 600 }}
                dx={-10}
              />
              <CartesianGrid
                vertical={false}
                stroke="#f3f4f6"
                strokeDasharray="0"
              />
              <Tooltip
                cursor={{ stroke: "#f3f4f6", strokeWidth: 2 }}
                contentStyle={{
                  borderRadius: "16px",
                  border: "1px solid #f3f4f6",
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(8px)",
                  fontSize: "12px",
                  fontWeight: "700",
                }}
              />
              <Area
                type="monotone"
                dataKey="income"
                stroke="#016956"
                strokeWidth={4}
                fillOpacity={1}
                fill="url(#colorIncome)"
              />
              <Area
                type="monotone"
                dataKey="expense"
                stroke="#FB923C"
                strokeWidth={4}
                fillOpacity={1}
                fill="url(#colorExpense)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </AdminCard>
  );
}
