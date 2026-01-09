"use client";

import React, { useState } from "react";
import {
  FaChartLine,
  FaSearch,
  FaCalendarAlt,
  FaLayerGroup,
  FaUsers,
  FaUserGraduate,
  FaCheckCircle,
  FaExclamationCircle,
  FaPrint,
} from "react-icons/fa";

export default function HomeworkReportPage() {
  const [reportList, setReportList] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      class: "Grade 10 (Alpha)",
      subject: "Advanced Physics",
      marks: 24,
      submissionDate: "2024-03-24",
      evaluationDate: "2024-03-27",
      status: "Complete",
    },
    {
      id: 2,
      name: "Bob Smith",
      class: "Grade 10 (Alpha)",
      subject: "Advanced Physics",
      marks: 0,
      submissionDate: "-",
      evaluationDate: "-",
      status: "Incomplete",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-rose-600 rounded-xl shadow-lg ring-4 ring-rose-50">
            <FaChartLine className="text-white" size={20} />
          </div>
          Pedagogical Evaluation stream
        </h1>
        <button className="flex items-center gap-2 px-6 py-3 bg-white text-rose-600 text-[10px] font-black rounded-xl uppercase tracking-widest hover:bg-rose-50 transition-all shadow-lg border border-rose-100 active:scale-95">
          <FaPrint /> Export Evaluation Matrix
        </button>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 bg-gradient-to-br from-white to-rose-50/5 relative overflow-hidden">
        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-1">
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
              Class Tier
            </label>
            <div className="relative">
              <FaLayerGroup
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                size={12}
              />
              <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-rose-500/10 outline-none transition-all bg-white shadow-sm appearance-none">
                <option>Grade 10</option>
              </select>
            </div>
          </div>
          <div className="lg:col-span-1">
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
              Unit
            </label>
            <div className="relative">
              <FaUsers
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                size={12}
              />
              <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-rose-500/10 outline-none transition-all bg-white shadow-sm appearance-none">
                <option>Alpha</option>
              </select>
            </div>
          </div>
          <div className="lg:col-span-1">
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
              Domain
            </label>
            <div className="relative">
              <select className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-rose-500/10 outline-none transition-all bg-white shadow-sm appearance-none">
                <option>Advanced Physics</option>
              </select>
            </div>
          </div>
          <div className="lg:col-span-1">
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
              Reference Date
            </label>
            <div className="relative">
              <FaCalendarAlt
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                size={12}
              />
              <input
                type="date"
                className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-[10px] font-bold focus:ring-4 focus:ring-rose-500/10 outline-none transition-all bg-white shadow-sm"
              />
            </div>
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full relative overflow-hidden rounded-2xl bg-gray-900 border-b-4 border-gray-700 text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-black active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-gray-200"
            >
              <div className="relative z-10 flex items-center justify-center gap-2">
                <FaSearch className="italic" />
                Query Results
              </div>
            </button>
          </div>
        </form>
      </div>

      <div className="rounded-3xl bg-white shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-gray-50/30">
          <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
            Subject Engagement Registry
          </h4>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50/50 text-gray-400 font-bold border-b border-gray-50">
              <tr>
                <th className="px-8 py-6 text-left w-20 text-[10px] uppercase font-black">
                  SN
                </th>
                <th className="px-8 py-6 text-left text-[10px] uppercase font-black tracking-widest">
                  Subject Profile
                </th>
                <th className="px-8 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                  Mark Valence
                </th>
                <th className="px-8 py-6 text-left text-[10px] uppercase font-black tracking-widest">
                  Temporal Nodes
                </th>
                <th className="px-8 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                  Compliance
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {reportList.map((r, index) => (
                <tr
                  key={r.id}
                  className="hover:bg-rose-50/10 transition-all group"
                >
                  <td className="px-8 py-10 text-gray-300 font-mono text-xs italic">
                    {index + 1}
                  </td>
                  <td className="px-8 py-10">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 ring-4 ring-rose-50">
                        <FaUserGraduate size={16} />
                      </div>
                      <div>
                        <div className="font-black text-gray-900 tracking-tight text-base font-serif italic uppercase leading-none mb-1">
                          {r.name}
                        </div>
                        <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                          {r.class} • {r.subject}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-10 text-center">
                    <div className="text-xl font-black font-mono text-gray-900">
                      {r.marks}
                      <span className="text-[10px] text-gray-300 ml-1">
                        pts
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-10">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[9px]">
                        <span className="font-black text-gray-400 uppercase w-20 tracking-tighter">
                          Submitted:
                        </span>
                        <span className="font-bold text-gray-600 font-mono">
                          {r.submissionDate}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[9px]">
                        <span className="font-black text-gray-400 uppercase w-20 tracking-tighter">
                          Evaluated:
                        </span>
                        <span className="font-bold text-gray-600 font-mono">
                          {r.evaluationDate}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-10 text-center">
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-sm ring-1 ring-inset ${
                        r.status === "Complete"
                          ? "bg-emerald-50 text-emerald-700 ring-emerald-100"
                          : "bg-rose-50 text-rose-700 ring-rose-100"
                      }`}
                    >
                      {r.status === "Complete" ? (
                        <FaCheckCircle />
                      ) : (
                        <FaExclamationCircle />
                      )}
                      {r.status}
                    </div>
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
