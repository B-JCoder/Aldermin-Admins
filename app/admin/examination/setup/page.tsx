"use client";

import React, { useState } from "react";
import {
  FaCogs,
  FaEdit,
  FaTrash,
  FaCheckCircle,
  FaChartBar,
  FaLayerGroup,
} from "react-icons/fa";

export default function ExamSetupPage() {
  const [examSetups, setExamSetups] = useState([
    {
      id: 1,
      title: "Mid-Term",
      className: "Class 10",
      section: "A",
      subject: "Mathematics",
      totalMark: 100,
      distribution: "Theory: 70, Practical: 30",
    },
    {
      id: 2,
      title: "Final Term",
      className: "Class 10",
      section: "A",
      subject: "Physics",
      totalMark: 100,
      distribution: "Theory: 60, Practical: 20, Viva: 20",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-indigo-600 rounded-xl shadow-lg ring-4 ring-indigo-50">
            <FaCogs className="text-white" size={20} />
          </div>
          Configuration Lab
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Configuration Form */}
        <div className="lg:col-span-12 xl:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-gray-50/10">
            <h4 className="mb-8 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center gap-2">
              Setup Architecture
              <div className="h-[1px] flex-1 bg-gray-100"></div>
            </h4>

            <form className="space-y-6 flex-1">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    System <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white shadow-sm appearance-none">
                    <option>Point System</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Type <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white shadow-sm italic"
                    placeholder="e.g. Theory"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Grade <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white shadow-sm">
                    <option>Class 10</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Unit <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white shadow-sm">
                    <option>Section A</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Discipline Subject <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full rounded-2xl border-gray-100 p-4 text-xs font-black text-indigo-600 outline-none bg-indigo-50/30">
                    <option>Theoretical Physics</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Pass Mark <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white shadow-sm"
                    placeholder="33"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Max Total
                  </label>
                  <input
                    type="number"
                    className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white shadow-sm"
                    placeholder="100"
                  />
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <div className="flex items-center gap-2 text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">
                  <FaChartBar size={12} />
                  Distribution Schema
                </div>
                <div className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      className="bg-white border-none rounded-xl p-3 text-xs font-bold shadow-sm"
                      placeholder="Component Title"
                    />
                    <input
                      type="number"
                      className="bg-white border-none rounded-xl p-3 text-xs font-bold shadow-sm"
                      placeholder="Mark"
                    />
                  </div>
                  <div className="flex justify-between items-center px-2">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic">
                      Cumulative Total:
                    </span>
                    <span className="text-xs font-black text-indigo-600 font-mono">
                      100
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full relative overflow-hidden rounded-2xl bg-indigo-600 px-8 py-5 text-white font-black text-xs uppercase tracking-widest transition-all hover:bg-indigo-700 active:scale-[0.98] shadow-2xl shadow-indigo-100"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <FaCheckCircle className="italic" />
                    Initialize Configuration
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Configuration Matrix */}
        <div className="lg:col-span-12 xl:col-span-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="flex items-center justify-between mb-8 relative">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
                Active Assessment Matrix
              </h4>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-50 relative">
              <table className="min-w-full text-[11px]">
                <thead className="bg-gray-50/70 text-gray-500 font-black border-b border-gray-50">
                  <tr>
                    <th className="px-5 py-6 text-left w-12 uppercase tracking-tighter">
                      SN
                    </th>
                    <th className="px-5 py-6 text-left uppercase tracking-tighter">
                      Exam Context
                    </th>
                    <th className="px-5 py-6 text-center uppercase tracking-tighter">
                      Total
                    </th>
                    <th className="px-5 py-6 text-left uppercase tracking-tighter">
                      Distribution Logic
                    </th>
                    <th className="px-5 py-6 text-center uppercase tracking-tighter">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50/70">
                  {examSetups.map((s, index) => (
                    <tr
                      key={s.id}
                      className="hover:bg-indigo-50/20 transition-all group"
                    >
                      <td className="px-5 py-6 text-gray-300 font-mono italic">
                        {index + 1}
                      </td>
                      <td className="px-5 py-6">
                        <div className="font-black text-gray-900 leading-tight text-xs uppercase italic tracking-tighter mb-1">
                          {s.title}
                        </div>
                        <div className="flex items-center gap-1 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                          {s.className} <span className="text-gray-200">/</span>{" "}
                          {s.section}
                        </div>
                        <div className="mt-1.5 flex items-center gap-1.5">
                          <div className="w-1 h-1 bg-indigo-400 rounded-full"></div>
                          <span className="text-[10px] font-black text-indigo-500 italic tracking-tight">
                            {s.subject}
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-6 text-center">
                        <div className="text-base font-black text-gray-700 italic font-mono tracking-tighter">
                          {s.totalMark}
                        </div>
                        <div className="text-[8px] font-black text-gray-300 uppercase tracking-widest mt-1">
                          Maximum
                        </div>
                      </td>
                      <td className="px-5 py-6">
                        <div className="bg-gray-50/50 p-3 rounded-xl border border-gray-100/50">
                          <div className="flex flex-wrap gap-2">
                            {s.distribution.split(", ").map((d, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 bg-white text-[9px] font-black text-gray-500 rounded border border-gray-100 shadow-sm lowercase italic"
                              >
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-6 text-center">
                        <div className="flex justify-center gap-1">
                          <button className="p-2.5 rounded-xl bg-gray-50 text-blue-500 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                            <FaEdit size={12} />
                          </button>
                          <button className="p-2.5 rounded-xl bg-gray-50 text-rose-500 hover:bg-rose-600 hover:text-white transition-all shadow-sm">
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
