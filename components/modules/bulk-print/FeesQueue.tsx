"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import { Button } from "@/components/ui/button";
import { FaPrint } from "react-icons/fa";

interface Receipt {
  id: number;
  student: string;
  class: string;
  amount: string;
  date: string;
  status: string;
}

interface FeesQueueProps {
  receipts: Receipt[];
}

export function FeesQueue({ receipts }: FeesQueueProps) {
  return (
    <GlassCard className="h-full bg-white/60 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="p-8 pb-0 flex items-center justify-between mb-8 relative">
        <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
          Receipt Queue
        </h4>
        <Button className="px-6 py-3 bg-secondary hover:bg-secondary/90 text-white text-[10px] font-black rounded-xl uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg shadow-secondary/10 active:scale-95">
          <FaPrint />
          Print Batch
        </Button>
      </div>

      <div className="p-8 pt-0 overflow-x-auto relative">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50/70 text-gray-500 font-bold border-b border-gray-50">
            <tr>
              <th className="px-6 py-6 text-left w-12">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-secondary focus:ring-secondary/20"
                />
              </th>
              <th className="px-6 py-6 text-left text-[10px] uppercase font-black tracking-widest">
                Payee
              </th>
              <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                Amount
              </th>
              <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {receipts.map((r) => (
              <tr
                key={r.id}
                className="group hover:bg-secondary/5 transition-all"
              >
                <td className="px-6 py-8">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-secondary focus:ring-secondary/20"
                  />
                </td>
                <td className="px-6 py-8">
                  <div className="font-black text-gray-900 tracking-tight text-base font-serif italic uppercase leading-none mb-1">
                    {r.student}
                  </div>
                  <div className="text-[10px] font-mono text-secondary font-bold">
                    {r.class}
                  </div>
                </td>
                <td className="px-6 py-8 text-center">
                  <div className="text-[10px] font-black uppercase text-gray-500 font-mono">
                    {r.amount}
                  </div>
                </td>
                <td className="px-6 py-8 text-center">
                  <div className="text-[10px] font-black uppercase text-gray-400 font-mono">
                    {r.date}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  );
}
