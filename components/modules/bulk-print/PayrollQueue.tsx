"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { Button } from "@/components/ui/button";
import { FaPrint } from "react-icons/fa";

interface Payroll {
  id: number;
  staff: string;
  designation: string;
  month: string;
  netPay: string;
  status: string;
}

interface PayrollQueueProps {
  payrolls: Payroll[];
}

export function PayrollQueue({ payrolls }: PayrollQueueProps) {
  return (
    <AdminCard className="h-full bg-white relative overflow-hidden">
      
      <div className="p-8 pb-0 flex items-center justify-between mb-8 relative">
        <h4 className="text-xs font-semibold text-gray-400   leading-none">
          Payslip Batch
        </h4>
        <Button className="px-6 py-3 bg-secondary hover:bg-secondary/90 text-white text-[10px] font-semibold rounded-xl   transition-all flex items-center gap-2 shadow-lg shadow-secondary/10 active:scale-95">
          <FaPrint />
          Print Slips
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
              <th className="px-6 py-6 text-left text-[10px]  font-semibold ">
                Staff Member
              </th>
              <th className="px-6 py-6 text-center text-[10px]  font-semibold ">
                Period
              </th>
              <th className="px-6 py-6 text-center text-[10px]  font-semibold ">
                Net Pay
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {payrolls.map((p) => (
              <tr
                key={p.id}
                className="group hover:bg-secondary/5 transition-all"
              >
                <td className="px-6 py-8">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-secondary focus:ring-secondary/20"
                  />
                </td>
                <td className="px-6 py-8">
                  <div className="font-semibold text-gray-900 tracking-tight text-base    leading-none mb-1">
                    {p.staff}
                  </div>
                  <div className="text-[10px]  text-secondary font-bold">
                    {p.designation}
                  </div>
                </td>
                <td className="px-6 py-8 text-center">
                  <div className="text-[10px] font-semibold  text-gray-400 ">
                    {p.month}
                  </div>
                </td>
                <td className="px-6 py-8 text-center">
                  <div className="text-[10px] font-semibold  text-gray-900 ">
                    {p.netPay}
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
