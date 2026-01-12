"use client";

import React, { useState } from "react";
import {
  FaBookOpen,
  FaPlus,
  FaTrash,
  FaEdit,
  FaCheck,
  FaFileAlt,
  FaCalendarAlt,
  FaGraduationCap,
  FaCloudDownloadAlt,
} from "react-icons/fa";

export default function SyllabusPage() {
  const [syllabusList, setSyllabusList] = useState([
    {
      id: 1,
      title: "Annual Curriculum 2024",
      class: "Class 10",
      type: "Academic",
      date: "2024-01-15",
      file: "annual_curr_10.pdf",
    },
    {
      id: 2,
      title: "First Term Syllabus",
      class: "Class 9",
      type: "Academic",
      date: "2024-01-20",
      file: "term1_curr_9.pdf",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-emerald-600 rounded-xl shadow-lg ring-4 ring-emerald-50">
            <FaBookOpen className="text-white" size={20} />
          </div>
          Curriculum Distribution
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Creation Form */}
        <div className="lg:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-emerald-50/5">
            <h4 className="mb-6 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center justify-between">
              Upload Syllabus
              <div className="h-1 w-12 bg-emerald-100 rounded-full"></div>
            </h4>

            <form className="space-y-4 flex-1">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Syllabus Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white shadow-sm"
                    placeholder="e.g. Final Term Syllabus"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                      Academic Grade
                    </label>
                    <div className="relative">
                      <FaGraduationCap
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                        size={12}
                      />
                      <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer">
                        <option>Class 10</option>
                        <option>Class 9</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                      Type
                    </label>
                    <select className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer">
                      <option>Academic</option>
                      <option>Extra-Curricular</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Description
                  </label>
                  <textarea
                    className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white shadow-sm min-h-[80px]"
                    placeholder="Details..."
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                      Date
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
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                      Syllabus File
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        className="hidden"
                        id="syllabus-file"
                      />
                      <label
                        htmlFor="syllabus-file"
                        className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-[10px] font-black uppercase tracking-widest bg-gray-50 border border-dashed border-gray-200 cursor-pointer hover:bg-white flex items-center truncate"
                      >
                        <FaCloudDownloadAlt
                          className="mr-2 text-emerald-400"
                          size={14}
                        />
                        Browse
                      </label>
                    </div>
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
                    Upload Syllabus
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* List Index */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="flex items-center justify-between mb-8 relative">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
                Syllabus Archive
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
                      Metadata
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Classification
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Date
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {syllabusList.map((s, index) => (
                    <tr
                      key={s.id}
                      className="hover:bg-emerald-50/20 transition-all group"
                    >
                      <td className="px-6 py-8 text-gray-300 font-mono text-xs italic">
                        {index + 1}
                      </td>
                      <td className="px-6 py-8">
                        <div className="font-black text-gray-900 tracking-tight text-base font-serif italic uppercase leading-none mb-2">
                          {s.title}
                        </div>
                        <div className="text-[10px] font-mono text-emerald-600 font-bold flex items-center gap-2">
                          <FaGraduationCap size={10} /> {s.class}
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[9px] font-black rounded-xl uppercase tracking-[0.2em] shadow-sm">
                          {s.type}
                        </span>
                      </td>
                      <td className="px-6 py-8 text-center text-gray-400">
                        <div className="text-[10px] font-black uppercase text-gray-500 font-mono">
                          {s.date}
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <div className="flex justify-center gap-1">
                          <button className="p-3 rounded-xl bg-gray-50 text-emerald-500 hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
                            <FaCloudDownloadAlt size={14} />
                          </button>
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
