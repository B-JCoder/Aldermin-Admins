"use client";

import React, { useState } from "react";
import {
  FaFileInvoiceDollar,
  FaSearch,
  FaUserGraduate,
  FaCalendarDay,
  FaMoneyCheckAlt,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

export default function FeeInvoiceReportPage() {
  const [invoices, setInvoices] = useState([
    {
      id: 1,
      admissionNo: "ADM-2023-001",
      studentName: "Avery Sterling",
      amount: "1,200",
      paid: "1,200",
      dueDate: "2023-10-15",
      status: "Paid",
    },
    {
      id: 2,
      admissionNo: "ADM-2023-042",
      studentName: "Elara Vance",
      amount: "1,200",
      paid: "0",
      dueDate: "2023-11-01",
      status: "Unpaid",
    },
    {
      id: 3,
      admissionNo: "ADM-2023-098",
      studentName: "Julian Reed",
      amount: "800",
      paid: "400",
      dueDate: "2023-10-20",
      status: "Partial",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-emerald-600 rounded-xl shadow-lg ring-4 ring-emerald-50">
            <FaFileInvoiceDollar className="text-white" size={20} />
          </div>
          Invoice Analytics
        </h1>
        <div className="flex gap-2">
          <button className="px-6 py-2.5 bg-gray-900 text-white text-[10px] font-semibold   rounded-xl hover:bg-black transition-all shadow-lg shadow-gray-200 active:scale-95">
            Generate Batch
          </button>
        </div>
      </div>

      {/* Strategic Filter */}
      <div className="rounded-[2rem] bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          <div>
            <label className="block text-[10px] font-semibold text-gray-400   mb-3 ml-1">
              Time Dimension
            </label>
            <select className="w-full bg-gray-50/50 border-gray-100 rounded-2xl p-4 text-xs font-bold outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all">
              <option>Current Semester</option>
              <option>Last Quarter</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-semibold text-gray-400   mb-3 ml-1">
              Financial Status
            </label>
            <select className="w-full bg-gray-50/50 border-gray-100 rounded-2xl p-4 text-xs font-bold outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all">
              <option>All Invoices</option>
              <option>Unpaid Arrears</option>
              <option>Partial Liquidation</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-semibold text-gray-400   mb-3 ml-1">
              Search ID/Name
            </label>
            <div className="relative">
              <FaSearch
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                size={12}
              />
              <input
                type="text"
                placeholder="ADM-..."
                className="w-full bg-gray-50/50 border-gray-100 rounded-2xl p-4 pl-10 text-xs font-bold outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all"
              />
            </div>
          </div>
          <button className="w-full bg-emerald-600 text-white rounded-2xl py-4 text-xs font-semibold   hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 active:scale-[0.98]">
            Query Matrix
          </button>
        </div>
      </div>

      {/* Results Index */}
      <div className="rounded-[2.5rem] bg-white p-10 shadow-2xl shadow-gray-100 border border-gray-100/50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-50/30 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none"></div>

        <div className="relative overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100/50">
                <th className="px-6 py-8 text-left text-[10px] font-semibold   text-gray-400 w-16">
                  SN
                </th>
                <th className="px-6 py-8 text-left text-[10px] font-semibold   text-gray-400">
                  Patron Information
                </th>
                <th className="px-6 py-8 text-center text-[10px] font-semibold   text-gray-400">
                  Fiscal Details
                </th>
                <th className="px-6 py-8 text-center text-[10px] font-semibold   text-gray-400">
                  Chronology
                </th>
                <th className="px-6 py-8 text-center text-[10px] font-semibold   text-gray-400">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50/70">
              {invoices.map((inv, index) => (
                <tr
                  key={inv.id}
                  className="group hover:bg-emerald-50/10 transition-all"
                >
                  <td className="px-6 py-10 text-gray-300  text-xs ">
                    {index + 1}
                  </td>
                  <td className="px-6 py-10">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm border border-gray-100">
                        <FaUserGraduate size={16} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 tracking-tight text-base    leading-none mb-1">
                          {inv.studentName}
                        </div>
                        <div className="text-[9px]  text-gray-400  tracking-tighter ">
                          ADM: {inv.admissionNo}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-10 text-center">
                    <div className="inline-flex flex-col">
                      <span
                        className="font-semibold text-gray-900  text-lg tracking-tighter cursor-help"
                        title="Invoice Amount"
                      >
                        ${inv.amount}
                      </span>
                      <span className="text-[10px] font-bold text-gray-400   mt-1">
                        ${inv.paid} Settled
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-10 text-center">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 rounded-lg border border-gray-100">
                        <FaCalendarDay size={10} className="text-gray-300" />
                        <span className="text-[11px] font-semibold  text-gray-500 ">
                          {inv.dueDate}
                        </span>
                      </div>
                      <span className="text-[8px] font-semibold text-gray-300   mt-2  ">
                        Deadline Horizon
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-10 text-center">
                    <span
                      className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-semibold   shadow-sm ring-1 ring-inset ${
                        inv.status === "Paid"
                          ? "bg-emerald-50 text-emerald-700 ring-emerald-100"
                          : inv.status === "Partial"
                          ? "bg-amber-50 text-amber-700 ring-amber-100"
                          : "bg-rose-50 text-rose-700 ring-rose-100 animate-pulse"
                      }`}
                    >
                      {inv.status === "Paid" && <FaCheckCircle size={10} />}
                      {inv.status === "Unpaid" && (
                        <FaExclamationCircle size={10} />
                      )}
                      {inv.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

