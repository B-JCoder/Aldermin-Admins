"use client";

import React, { useState } from "react";
import {
  FaMoneyBillWave,
  FaSearch,
  FaFileInvoice,
  FaCheckCircle,
  FaTimesCircle,
  FaHourglassHalf,
} from "react-icons/fa";

export default function PayrollPage() {
  const [payrollList, setPayrollList] = useState([
    {
      id: 1,
      staffName: "Marcus Aurelius",
      role: "Lead Teacher",
      department: "Academic",
      month: "December",
      year: "2023",
      grossSalary: "4500",
      netSalary: "4200",
      status: "Paid",
    },
    {
      id: 2,
      staffName: "Seneca Minor",
      role: "Accountant",
      department: "Finance",
      month: "December",
      year: "2023",
      grossSalary: "3800",
      netSalary: "3500",
      status: "Generated",
    },
    {
      id: 3,
      staffName: "Epictetus Slave",
      role: "Librarian",
      department: "Library",
      month: "December",
      year: "2023",
      grossSalary: "3200",
      netSalary: "3000",
      status: "Processing",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h4 className="text-xl font-bold text-gray-800 tracking-tight">
            Staff Payroll Management
          </h4>
          <p className="text-xs text-gray-500 font-medium italic">
            Monitor salary disbursements and tax deductions
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-2.5 text-white font-black text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-100 uppercase tracking-widest">
            <FaMoneyBillWave size={14} /> Generate Payroll
          </button>
        </div>
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 group hover:shadow-md transition-shadow">
          <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all">
            <FaCheckCircle size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-2">
              Total Paid
            </p>
            <h3 className="text-2xl font-black text-gray-800 tracking-tighter">
              $128,450
            </h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 group hover:shadow-md transition-shadow">
          <div className="p-4 bg-amber-50 text-amber-600 rounded-2xl group-hover:bg-amber-600 group-hover:text-white transition-all">
            <FaHourglassHalf size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-2">
              Pending
            </p>
            <h3 className="text-2xl font-black text-gray-800 tracking-tighter">
              14 Records
            </h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 group hover:shadow-md transition-shadow">
          <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
            <FaFileInvoice size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-2">
              Current Month
            </p>
            <h3 className="text-2xl font-black text-gray-800 tracking-tighter">
              Dec 2023
            </h3>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 ring-1 ring-black/5">
        <div className="flex items-center justify-between mb-8">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">
            Payroll Registry
          </h4>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FaSearch size={12} />
            </span>
            <input
              type="text"
              placeholder="Search staff..."
              className="pl-9 pr-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-xs focus:ring-1 focus:ring-blue-500 outline-none w-64 transition-all focus:bg-white"
            />
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50/50 text-gray-500 font-bold border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-left w-16 uppercase tracking-tighter text-[10px]">
                  SN
                </th>
                <th className="px-6 py-4 text-left uppercase tracking-tighter text-[10px]">
                  Staff Member
                </th>
                <th className="px-6 py-4 text-left uppercase tracking-tighter text-[10px]">
                  Role / Dept
                </th>
                <th className="px-6 py-4 text-center uppercase tracking-tighter text-[10px]">
                  Month
                </th>
                <th className="px-6 py-4 text-right uppercase tracking-tighter text-[10px]">
                  Gross Pay
                </th>
                <th className="px-6 py-4 text-right uppercase tracking-tighter text-[10px]">
                  Net Pay
                </th>
                <th className="px-6 py-4 text-center uppercase tracking-tighter text-[10px]">
                  Status
                </th>
                <th className="px-6 py-4 text-center uppercase tracking-tighter text-[10px]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {payrollList.map((item, index) => (
                <tr
                  key={item.id}
                  className="hover:bg-blue-50/10 transition-colors group"
                >
                  <td className="px-6 py-4 text-gray-400 font-mono text-xs">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-black text-gray-900 tracking-tight text-base font-serif italic">
                      {item.staffName}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-xs font-bold text-gray-700">
                      {item.role}
                    </div>
                    <div className="text-[10px] text-gray-400 uppercase font-black">
                      {item.department}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-bold text-gray-600">
                      {item.month}
                    </span>
                    <span className="text-[10px] text-gray-400 ml-1 font-mono">
                      {item.year}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right tabular-nums font-bold text-gray-400">
                    ${item.grossSalary}
                  </td>
                  <td className="px-6 py-4 text-right tabular-nums font-black text-gray-900 text-base">
                    ${item.netSalary}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      <span
                        className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ring-1 ring-inset ${
                          item.status === "Paid"
                            ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
                            : item.status === "Generated"
                            ? "bg-blue-50 text-blue-700 ring-blue-200"
                            : "bg-amber-50 text-amber-700 ring-amber-200"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="p-2 rounded-lg bg-gray-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                      <FaFileInvoice size={14} />
                    </button>
                  </td>
                </tr>
              ))}
              {payrollList.length === 0 && (
                <tr>
                  <td
                    colSpan={8}
                    className="px-6 py-12 text-center text-gray-300 font-bold uppercase tracking-widest text-[10px]"
                  >
                    No payroll records found for the current cycle.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
