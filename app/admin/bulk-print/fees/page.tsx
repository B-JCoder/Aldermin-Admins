"use client";

import React, { useState } from "react";
import {
  FaPrint,
  FaSearch,
  FaMoneyBillWave,
  FaCalendarAlt,
} from "react-icons/fa";

export default function BulkFeesPrintPage() {
  const [receipts, setReceipts] = useState([
    {
      id: 1,
      student: "Alice Johnson",
      class: "Class 10",
      amount: "$1,200",
      date: "2024-03-25",
      status: "Paid",
    },
    {
      id: 2,
      student: "Bob Smith",
      class: "Class 10",
      amount: "$1,200",
      date: "2024-03-24",
      status: "Paid",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-emerald-600 rounded-xl shadow-lg ring-4 ring-emerald-50">
            <FaMoneyBillWave className="text-white" size={20} />
          </div>
          Bulk Fee Receipt Printer
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-emerald-50/5">
            <h4 className="mb-6 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center justify-between">
              Receipt Configuration
              <div className="h-1 w-12 bg-emerald-100 rounded-full"></div>
            </h4>

            <form className="space-y-4 flex-1">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Academic Class
                  </label>
                  <select className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer">
                    <option>Class 10</option>
                    <option>Class 9</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Payment Date
                  </label>
                  <div className="relative">
                    <FaCalendarAlt
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <input
                      type="date"
                      className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-[10px] font-bold focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white shadow-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full relative overflow-hidden rounded-2xl bg-gray-900 border-b-4 border-gray-700 text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-black active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-gray-200"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <FaSearch className="italic" />
                    Find Receipts
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="flex items-center justify-between mb-8 relative">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
                Receipt Queue
              </h4>
              <button className="px-6 py-3 bg-emerald-600 text-white text-[10px] font-black rounded-xl uppercase tracking-widest hover:bg-emerald-700 transition-all flex items-center gap-2 shadow-lg shadow-emerald-100 active:scale-95">
                <FaPrint />
                Print Batch
              </button>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-50 relative">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50/70 text-gray-500 font-bold border-b border-gray-50">
                  <tr>
                    <th className="px-6 py-6 text-left w-12">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
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
                      className="group hover:bg-emerald-50/20 transition-all"
                    >
                      <td className="px-6 py-8">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                        />
                      </td>
                      <td className="px-6 py-8">
                        <div className="font-black text-gray-900 tracking-tight text-base font-serif italic uppercase leading-none mb-1">
                          {r.student}
                        </div>
                        <div className="text-[10px] font-mono text-emerald-500 font-bold">
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
          </div>
        </div>
      </div>
    </div>
  );
}
