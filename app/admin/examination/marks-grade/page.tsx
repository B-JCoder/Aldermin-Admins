"use client";

import React, { useState } from "react";
import {
  FaGraduationCap,
  FaEdit,
  FaTrash,
  FaCheckCircle,
  FaChartLine,
  FaInfoCircle,
} from "react-icons/fa";

export default function MarkGradePage() {
  const [grades, setGrades] = useState([
    {
      id: 1,
      name: "A+",
      gpa: "4.00",
      percentRange: "90% - 100%",
      gpaRange: "4.0 - 4.0",
      description: "Outstanding performance",
    },
    {
      id: 2,
      name: "A",
      gpa: "3.75",
      percentRange: "80% - 89%",
      gpaRange: "3.75 - 3.99",
      description: "Excellent achievement",
    },
    {
      id: 3,
      name: "B",
      gpa: "3.00",
      percentRange: "70% - 79%",
      gpaRange: "3.0 - 3.74",
      description: "Good understanding",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8 pb-32">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-indigo-600 rounded-xl shadow-lg ring-4 ring-indigo-50">
            <FaGraduationCap className="text-white" size={20} />
          </div>
          Graduation Standards
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Grade Definition Form */}
        <div className="lg:col-span-12 xl:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-indigo-50/5">
            <h4 className="mb-8 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center gap-2">
              Standard Architecture
              <div className="h-[1px] flex-1 bg-gray-100"></div>
            </h4>

            <form className="space-y-6 flex-1">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Grade Identity <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border-gray-100 p-4 text-sm font-black focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white shadow-sm italic uppercase"
                    placeholder="e.g. A+"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Base GPA <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border-gray-100 p-4 text-sm font-black focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white shadow-sm font-mono"
                    placeholder="4.00"
                  />
                </div>

                <div className="col-span-2 space-y-2">
                  <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest px-1 flex items-center gap-2">
                    <FaChartLine size={10} /> Percentage Boundary
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="number"
                      className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none bg-white shadow-sm"
                      placeholder="From %"
                    />
                    <input
                      type="number"
                      className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none bg-white shadow-sm"
                      placeholder="To %"
                    />
                  </div>
                </div>

                <div className="col-span-2 space-y-2">
                  <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest px-1 flex items-center gap-2">
                    <FaChartLine size={10} /> GPA Thresholds
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none bg-white shadow-sm font-mono"
                      placeholder="Min"
                    />
                    <input
                      type="text"
                      className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none bg-white shadow-sm font-mono"
                      placeholder="Max"
                    />
                  </div>
                </div>

                <div className="col-span-2">
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Qualitative Remark
                  </label>
                  <textarea
                    className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none bg-white shadow-sm min-h-[100px] italic"
                    placeholder="Enter academic feedback..."
                  ></textarea>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full relative overflow-hidden rounded-2xl bg-indigo-900 border-b-4 border-indigo-950 text-white px-8 py-5 text-xs font-black uppercase tracking-widest transition-all hover:brightness-110 active:translate-y-1 active:border-b-0 shadow-2xl shadow-indigo-100"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <FaCheckCircle className="italic" />
                    Commit To Standards
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Grade Index */}
        <div className="lg:col-span-12 xl:col-span-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden h-full">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-50/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <div className="flex items-center justify-between mb-8 relative">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center gap-2">
                Institutional Grade Index
                <div className="h-[1px] w-12 bg-indigo-100"></div>
              </h4>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-50 relative">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50/70 text-gray-500 font-black border-b border-gray-50">
                  <tr>
                    <th className="px-6 py-6 text-left w-12 text-[10px] uppercase tracking-widest">
                      SN
                    </th>
                    <th className="px-6 py-6 text-left text-[10px] uppercase tracking-widest">
                      Standard
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase tracking-widest">
                      Base GPA
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase tracking-widest">
                      Percentage Map
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase tracking-widest">
                      GPA Span
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase tracking-widest">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50/70">
                  {grades.map((g, index) => (
                    <tr
                      key={g.id}
                      className="hover:bg-indigo-50/10 transition-all group"
                    >
                      <td className="px-6 py-8 text-gray-300 font-mono text-xs italic">
                        {index + 1}
                      </td>
                      <td className="px-6 py-8">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-indigo-600 font-black text-sm border border-gray-100 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                            {g.name}
                          </div>
                          <div>
                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-indigo-600 transition-colors">
                              Class Standard
                            </div>
                            <div className="text-[9px] font-bold text-gray-300 italic max-w-[120px] truncate">
                              {g.description}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <div className="text-base font-black text-gray-800 font-mono italic tracking-tighter group-hover:scale-110 transition-transform inline-block">
                          {g.gpa}
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-black rounded-lg border border-indigo-100 shadow-sm italic">
                          {g.percentRange}
                        </span>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <div className="inline-flex items-center gap-2 text-[10px] font-black text-gray-400 bg-gray-50 px-3 py-1 rounded-lg border border-gray-100 font-mono">
                          {g.gpaRange}
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <div className="flex justify-center gap-1">
                          <button className="p-3 rounded-xl bg-gray-50 text-blue-500 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                            <FaEdit size={12} />
                          </button>
                          <button className="p-3 rounded-xl bg-gray-50 text-rose-500 hover:bg-rose-600 hover:text-white transition-all shadow-sm">
                            <FaTrash size={12} />
                          </button>
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
