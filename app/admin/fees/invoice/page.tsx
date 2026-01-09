"use client";

import React, { useState } from "react";
import {
  FaFileInvoiceDollar,
  FaSearch,
  FaFilter,
  FaPrint,
} from "react-icons/fa";

export default function FeeInvoicePage() {
  const [invoices, setInvoices] = useState([
    {
      id: 1,
      admissionNo: "ADM001",
      studentName: "Marcus Aurelius",
      amount: "5000",
      paid: "5000",
      dueDate: "2023-12-01",
      status: "Paid",
    },
    {
      id: 2,
      admissionNo: "ADM042",
      studentName: "Seneca Minor",
      amount: "5000",
      paid: "2000",
      dueDate: "2023-12-05",
      status: "Partial",
    },
    {
      id: 3,
      admissionNo: "ADM108",
      studentName: "Epictetus Slave",
      amount: "4500",
      paid: "0",
      dueDate: "2023-12-10",
      status: "Unpaid",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h4 className="text-xl font-bold text-gray-800 tracking-tight">
            Fee Invoice Management
          </h4>
          <p className="text-xs text-gray-500 font-medium">
            Track and manage student payment liabilities
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-lg bg-gray-50 px-4 py-2 text-gray-600 font-bold text-sm border border-gray-200 hover:bg-gray-100 transition shadow-sm">
            <FaPrint size={14} /> Export
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-white font-black text-sm hover:bg-emerald-700 transition shadow-lg shadow-emerald-100 uppercase tracking-widest">
            <FaFileInvoiceDollar size={14} /> New Invoice
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-emerald-500 p-4 rounded-xl text-white shadow-emerald-100 shadow-lg border border-emerald-400">
          <h6 className="text-[10px] font-black uppercase opacity-80 tracking-widest mb-1">
            Total Collected
          </h6>
          <div className="text-2xl font-black tabular-nums font-mono">
            $12,450.00
          </div>
        </div>
        <div className="bg-amber-500 p-4 rounded-xl text-white shadow-amber-100 shadow-lg border border-amber-400">
          <h6 className="text-[10px] font-black uppercase opacity-80 tracking-widest mb-1">
            Total Outstanding
          </h6>
          <div className="text-2xl font-black tabular-nums font-mono">
            $4,200.00
          </div>
        </div>
        <div className="bg-rose-500 p-4 rounded-xl text-white shadow-rose-100 shadow-lg border border-rose-400">
          <h6 className="text-[10px] font-black uppercase opacity-80 tracking-widest mb-1">
            Overdue Invoices
          </h6>
          <div className="text-2xl font-black tabular-nums font-mono">14</div>
        </div>
      </div>

      {/* List Section */}
      <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 ring-1 ring-black/5">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-none">
            Fee Invoice Ledger
          </h4>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FaSearch size={12} />
            </span>
            <input
              type="text"
              placeholder="Search Student..."
              className="pl-9 pr-4 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs focus:ring-1 focus:ring-emerald-500 outline-none w-64"
            />
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50/50 text-gray-500 font-bold">
              <tr>
                <th className="px-6 py-4 text-left w-16 uppercase tracking-tighter text-[10px]">
                  SN
                </th>
                <th className="px-6 py-4 text-left uppercase tracking-tighter text-[10px]">
                  Admission No
                </th>
                <th className="px-6 py-4 text-left uppercase tracking-tighter text-[10px]">
                  Student Details
                </th>
                <th className="px-6 py-4 text-right uppercase tracking-tighter text-[10px]">
                  Amount
                </th>
                <th className="px-6 py-4 text-right uppercase tracking-tighter text-[10px]">
                  Paid
                </th>
                <th className="px-6 py-4 text-center uppercase tracking-tighter text-[10px]">
                  Due Date
                </th>
                <th className="px-6 py-4 text-center uppercase tracking-tighter text-[10px]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {invoices.map((item, index) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50/40 transition-colors group"
                >
                  <td className="px-6 py-4 text-gray-400 font-mono text-xs">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[10px] font-black bg-gray-100 px-2 py-1 rounded text-gray-500">
                      {item.admissionNo}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-gray-800 tracking-tight">
                      {item.studentName}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right font-black text-gray-900 tabular-nums">
                    ${item.amount}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="font-bold text-emerald-600 tabular-nums">
                      ${item.paid}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-500 font-medium text-xs font-mono">
                      {item.dueDate}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ring-1 ring-inset ${
                          item.status === "Paid"
                            ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
                            : item.status === "Partial"
                            ? "bg-amber-50 text-amber-700 ring-amber-200"
                            : "bg-rose-50 text-rose-700 ring-rose-200"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
              {invoices.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-20 text-center text-gray-300 font-black uppercase tracking-widest text-xs"
                  >
                    No invoices found.
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
