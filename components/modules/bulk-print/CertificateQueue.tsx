"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { Button } from "@/components/ui/button";
import { FaPrint } from "react-icons/fa";

interface Student {
  id: number;
  name: string;
  admissionNo: string;
  class: string;
  section: string;
  certificate: string;
  status: string;
}

interface CertificateQueueProps {
  students: Student[];
}

export function CertificateQueue({ students }: CertificateQueueProps) {
  return (
    <AdminCard className="h-full bg-white relative overflow-hidden">
      <div className="p-4 md:p-8 pb-0 flex flex-col md:flex-row items-start md:items-center justify-between mb-8 relative gap-4">
        <h4 className="text-xs font-semibold text-gray-400 leading-none">
          Print Queue
        </h4>
        <Button className="w-full md:w-auto px-6 py-3 bg-secondary hover:bg-secondary/90 text-white text-[10px] font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-secondary/10 active:scale-95">
          <FaPrint />
          Print Selected ({students.length})
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
                Candidate
              </th>
              <th className="px-3 py-4 md:px-6 md:py-6 text-center text-[10px] font-semibold">
                Details
              </th>
              <th className="px-3 py-4 md:px-6 md:py-6 text-center text-[10px] font-semibold">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {students.map((s) => (
              <tr
                key={s.id}
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
                    {s.name}
                  </div>
                  <div className="text-[10px] text-secondary font-bold">
                    {s.admissionNo}
                  </div>
                </td>
                <td className="px-3 py-4 md:px-6 md:py-8 text-center text-gray-400">
                  <div className="text-[10px] font-semibold text-gray-500">
                    {s.class} {s.section}
                  </div>
                  <div className="text-[9px] font-bold text-gray-300 tracking-wider">
                    {s.certificate}
                  </div>
                </td>
                <td className="px-3 py-4 md:px-6 md:py-8 text-center">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-semibold shadow-sm ring-1 ring-inset ${
                      s.status === "Ready"
                        ? "bg-emerald-50 text-emerald-700 ring-emerald-100"
                        : "bg-red-50 text-red-700 ring-red-100"
                    }`}
                  >
                    {s.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminCard>
  );
}
