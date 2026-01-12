"use client";

import React, { useState } from "react";
import {
  FaClipboardList,
  FaPlus,
  FaTrash,
  FaEdit,
  FaCheck,
  FaFileAlt,
  FaCalendarAlt,
  FaUsers,
  FaCloudDownloadAlt,
  FaGraduationCap,
} from "react-icons/fa";

export default function AssignmentPage() {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "Algebra Problem Set 1",
      class: "Class 10 - A",
      subject: "Mathematics",
      deadline: "2024-04-01",
      submitted: 24,
      total: 30,
    },
    {
      id: 2,
      title: "Physics Lab Report",
      class: "Class 10 - B",
      subject: "Physics",
      deadline: "2024-03-30",
      submitted: 15,
      total: 28,
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-rose-600 rounded-xl shadow-lg ring-4 ring-rose-50">
            <FaClipboardList className="text-white" size={20} />
          </div>
          Academic Task Force
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Assignment Form */}
        <div className="lg:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-rose-50/5">
            <h4 className="mb-6 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center justify-between">
              Deploy Assignment
              <div className="h-1 w-12 bg-rose-100 rounded-full"></div>
            </h4>

            <form className="space-y-4 flex-1">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Task Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-rose-500/10 outline-none transition-all bg-white shadow-sm"
                    placeholder="e.g. Chapter 4 Exercises"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                      Academic Class <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FaGraduationCap
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                        size={12}
                      />
                      <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-rose-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer">
                        <option>Class 10</option>
                        <option>Class 9</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                      Subject
                    </label>
                    <div className="relative">
                      <FaFileAlt
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                        size={12}
                      />
                      <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-rose-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer">
                        <option>Maths</option>
                        <option>Physics</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Submission Deadline
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

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Task Document
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      className="hidden"
                      id="assignment-file"
                    />
                    <label
                      htmlFor="assignment-file"
                      className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-[10px] font-black uppercase tracking-widest bg-gray-50 border border-dashed border-gray-200 cursor-pointer hover:bg-white flex items-center truncate"
                    >
                      <FaCloudDownloadAlt
                        className="mr-2 text-rose-400"
                        size={14}
                      />
                      Attach PDF/DOC
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full relative overflow-hidden rounded-2xl bg-gray-900 border-b-4 border-gray-700 text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-black active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-gray-200"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <FaCheck className="italic" />
                    Publish Task
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Assignment List */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-50/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="flex items-center justify-between mb-8 relative">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
                Active Assignment Queue
              </h4>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-50 relative">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50/70 text-gray-500 font-bold border-b border-gray-50">
                  <tr>
                    <th className="px-6 py-6 text-left w-16 text-[10px] uppercase font-black">
                      SN
                    </th>
                    <th className="px-6 py-6 text-left text-[10px] uppercase font-black tracking-widest">
                      Task Identity
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Deadline
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Submission
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {assignments.map((a, index) => (
                    <tr
                      key={a.id}
                      className="hover:bg-rose-50/20 transition-all group"
                    >
                      <td className="px-6 py-8 text-gray-300 font-mono text-xs italic">
                        {index + 1}
                      </td>
                      <td className="px-6 py-8">
                        <div className="font-black text-gray-900 tracking-tight text-base font-serif italic uppercase leading-none mb-2">
                          {a.title}
                        </div>
                        <div className="text-[10px] font-mono text-rose-500 font-bold flex items-center gap-2">
                          <span className="px-1.5 py-0.5 bg-rose-50 rounded border border-rose-100 text-[8px] uppercase tracking-tighter">
                            {a.subject}
                          </span>
                          <span className="text-gray-400 uppercase tracking-widest text-[8px]">
                            {a.class}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <div className="text-[10px] font-black uppercase text-gray-500 font-mono">
                          {a.deadline}
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <div className="flex flex-col items-center">
                          <div className="text-xs font-black text-gray-900">
                            {a.submitted}
                            <span className="text-gray-400">/{a.total}</span>
                          </div>
                          <div className="w-16 h-1 mt-1 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-rose-500"
                              style={{
                                width: `${(a.submitted / a.total) * 100}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <div className="flex justify-center gap-1">
                          <button className="p-3 rounded-xl bg-gray-50 text-blue-500 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                            <FaEdit size={14} />
                          </button>
                          <button className="p-3 rounded-xl bg-gray-50 text-rose-500 hover:bg-rose-600 hover:text-white transition-all shadow-sm">
                            <FaTrash size={14} />
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
