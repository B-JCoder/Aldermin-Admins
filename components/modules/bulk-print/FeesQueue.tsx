"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
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
    <AdminCard className="h-full bg-white relative overflow-hidden">
      <div className="p-4 md:p-8 pb-0 flex flex-col md:flex-row items-start md:items-center justify-between mb-8 relative gap-4">
        <h4 className="text-xs font-semibold text-gray-400 leading-none">
          Receipt Queue
        </h4>
        <Button className="w-full md:w-auto px-6 py-3 bg-secondary hover:bg-secondary/90 text-white text-[10px] font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-secondary/10 active:scale-95">
          <FaPrint />
          Print Batch
        </Button>
      </div>

      <div className="p-4 md:p-8 pt-0 overflow-x-auto relative">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50/70 text-gray-500 font-bold border-b border-gray-50">
            <tr>
              <th className="px-3 py-4 md:px-6 md:py-6 text-left w-12">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-secondary focus:ring-secondary/20"
                />
              </th>
              <th className="px-3 py-4 md:px-6 md:py-6 text-left text-[10px] font-semibold">
                Payee
              </th>
              <th className="px-3 py-4 md:px-6 md:py-6 text-center text-[10px] font-semibold">
                Amount
              </th>
              <th className="px-3 py-4 md:px-6 md:py-6 text-center text-[10px] font-semibold">
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
                <td className="px-3 py-4 md:px-6 md:py-8">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-secondary focus:ring-secondary/20"
                  />
                </td>
                <td className="px-3 py-4 md:px-6 md:py-8">
                  <div className="font-semibold text-gray-900 tracking-tight text-base leading-none mb-1">
                    {r.student}
                  </div>
                  <div className="text-[10px] text-secondary font-bold">
                    {r.class}
                  </div>
                </td>
                <td className="px-3 py-4 md:px-6 md:py-8 text-center">
                  <div className="text-[10px] font-semibold text-gray-500">
                    {r.amount}
                  </div>
                </td>
                <td className="px-3 py-4 md:px-6 md:py-8 text-center">
                  <div className="text-[10px] font-semibold text-gray-400">
                    {r.date}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminCard>
  );
}
