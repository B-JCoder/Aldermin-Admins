"use client";

import React, { useState } from "react";
import {
  FaPaperPlane,
  FaCalendarAlt,
  FaFileAlt,
  FaCheck,
  FaUserTie,
  FaHistory,
  FaClock,
} from "react-icons/fa";

export default function ApplyLeavePage() {
  const [leaveHistory, setLeaveHistory] = useState([
    {
      id: 1,
      type: "Sick Leave",
      from: "2024-03-01",
      to: "2024-03-03",
      days: 3,
      reason: "Viral Fever",
      status: "Approved",
    },
    {
      id: 2,
      type: "Casual Leave",
      from: "2024-03-15",
      to: "2024-03-15",
      days: 1,
      reason: "Personal Work",
      status: "Pending",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-cyan-600 rounded-xl shadow-lg ring-4 ring-cyan-50">
            <FaPaperPlane className="text-white" size={20} />
          </div>
          Leave Application Portal
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Application Form */}
        <div className="lg:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-cyan-50/5">
            <h4 className="mb-6 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center justify-between">
              New Request
              <div className="h-1 w-12 bg-cyan-100 rounded-full"></div>
            </h4>

            <form className="space-y-4 flex-1">
              <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                      Applied Date
                    </label>
                    <div className="relative">
                      <FaCalendarAlt
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                        size={12}
                      />
                      <input
                        type="date"
                        className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-[10px] font-bold focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all bg-white shadow-sm"
                        defaultValue="2024-03-25"
                        readOnly
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                      Leave Type
                    </label>
                    <select className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer">
                      <option>Sick Leave</option>
                      <option>Casual Leave</option>
                      <option>Earned Leave</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                      From Date
                    </label>
                    <input
                      type="date"
                      className="w-full rounded-2xl border-gray-100 p-4 text-[10px] font-bold focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all bg-white shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                      To Date
                    </label>
                    <input
                      type="date"
                      className="w-full rounded-2xl border-gray-100 p-4 text-[10px] font-bold focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all bg-white shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Reason / Context
                  </label>
                  <textarea
                    className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all bg-white shadow-sm min-h-[80px]"
                    placeholder="Explanation for absence..."
                  ></textarea>
                </div>

                <div className="relative">
                  <input type="file" className="hidden" id="leave-file" />
                  <label
                    htmlFor="leave-file"
                    className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-[10px] font-black uppercase tracking-widest bg-gray-50 border border-dashed border-gray-200 cursor-pointer hover:bg-white flex items-center truncate"
                  >
                    <FaFileAlt className="mr-2 text-cyan-400" size={14} />
                    Attach Document
                  </label>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full relative overflow-hidden rounded-2xl bg-gray-900 border-b-4 border-gray-700 text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-black active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-gray-200"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <FaCheck className="italic" />
                    Submit Request
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* History List */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-50/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="flex items-center justify-between mb-8 relative">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
                My Leave History
              </h4>
              <div className="flex gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
                <span>
                  Available: <span className="text-emerald-500">12 Days</span>
                </span>
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-50 relative">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50/70 text-gray-500 font-bold border-b border-gray-50">
                  <tr>
                    <th className="px-6 py-6 text-left text-[10px] uppercase font-black tracking-widest">
                      Leave Type
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Duration
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Dates
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {leaveHistory.map((l) => (
                    <tr
                      key={l.id}
                      className="group hover:bg-cyan-50/20 transition-all"
                    >
                      <td className="px-6 py-8">
                        <div className="font-black text-gray-900 tracking-tight text-base font-serif italic uppercase leading-none mb-1">
                          {l.type}
                        </div>
                        <div className="text-[10px] font-mono text-cyan-600 font-bold">
                          Reason: {l.reason}
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <div className="text-[10px] font-black uppercase text-gray-500 font-mono">
                          {l.days} Day(s)
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center text-gray-400">
                        <div className="text-[10px] font-black uppercase text-gray-400 font-mono">
                          {l.from} - {l.to}
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm ring-1 ring-inset ${
                            l.status === "Approved"
                              ? "bg-emerald-50 text-emerald-700 ring-emerald-100"
                              : "bg-amber-50 text-amber-700 ring-amber-100"
                          }`}
                        >
                          {l.status}
                        </span>
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
