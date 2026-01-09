"use client";

import React, { useState } from "react";
import {
  FaLevelUpAlt,
  FaSearch,
  FaArrowRight,
  FaUserGraduate,
  FaCalendarAlt,
} from "react-icons/fa";

export default function StudentPromotePage() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Avery Sterling",
      rollNo: "10",
      currentClass: "Class 9",
      nextClass: "Class 10",
    },
    {
      id: 2,
      name: "Elara Vance",
      rollNo: "15",
      currentClass: "Class 9",
      nextClass: "Class 10",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tighter flex items-center gap-4">
            <div className="w-14 h-14 bg-indigo-600 rounded-[1.5rem] flex items-center justify-center shadow-2xl shadow-indigo-200">
              <FaLevelUpAlt className="text-white" size={28} />
            </div>
            Student Promotion Hub
          </h1>
          <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.4em] mt-3 ml-2">
            Academic Progression Management
          </p>
        </div>
      </div>

      {/* Strategic Filter */}
      <div className="rounded-[2.5rem] bg-white p-8 shadow-2xl shadow-gray-100 border border-gray-100/50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-end">
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Academic Session
            </label>
            <select className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 text-xs font-black outline-none focus:ring-4 focus:ring-indigo-500/10 focus:bg-white transition-all">
              <option>2023 - 2024</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Current Grade
            </label>
            <select className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 text-xs font-black outline-none focus:ring-4 focus:ring-indigo-500/10 focus:bg-white transition-all">
              <option>Class 9</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Sectional Unit
            </label>
            <select className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 text-xs font-black outline-none focus:ring-4 focus:ring-indigo-500/10 focus:bg-white transition-all">
              <option>All Sections</option>
            </select>
          </div>
          <button className="w-full bg-gray-900 border-b-4 border-gray-700 text-white rounded-[1.25rem] py-4 text-xs font-black uppercase tracking-[0.2em] hover:brightness-110 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-3">
            <FaSearch size={14} />
            Inspect Cohort
          </button>
        </div>
      </div>

      {/* Progression Registry */}
      <div className="rounded-[2.5rem] bg-white p-10 shadow-2xl shadow-gray-100 border border-gray-100/50 overflow-hidden relative">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-50/50 rounded-tl-[10rem] -mb-40 -mr-40 pointer-events-none"></div>

        <div className="relative overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-gray-50">
                <th className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-gray-400 w-20">
                  SN
                </th>
                <th className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Patron Information
                </th>
                <th className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Roll/Nº
                </th>
                <th className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Progression Path
                </th>
                <th className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Interaction
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50/70">
              {students.map((student, index) => (
                <tr
                  key={student.id}
                  className="group hover:bg-gray-50/50 transition-all"
                >
                  <td className="px-6 py-8 text-gray-300 font-mono text-xs italic">
                    {index + 1}
                  </td>
                  <td className="px-6 py-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                        <FaUserGraduate size={16} />
                      </div>
                      <div className="font-black text-gray-900 tracking-tight text-base font-serif italic">
                        {student.name}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-8 text-center">
                    <span className="px-3 py-1 bg-white text-gray-400 text-[10px] font-black rounded-lg border border-gray-100 uppercase tracking-widest shadow-sm">
                      {student.rollNo}
                    </span>
                  </td>
                  <td className="px-6 py-8">
                    <div className="flex items-center justify-center gap-6">
                      <div className="text-center">
                        <div className="text-[8px] font-black text-gray-300 uppercase tracking-widest mb-1">
                          From
                        </div>
                        <div className="px-3 py-1 bg-gray-50 text-gray-500 text-[10px] font-black rounded uppercase tracking-tighter">
                          {student.currentClass}
                        </div>
                      </div>
                      <FaArrowRight
                        className="text-indigo-200 animate-pulse"
                        size={12}
                      />
                      <div className="text-center">
                        <div className="text-[8px] font-black text-gray-300 uppercase tracking-widest mb-1 text-emerald-500">
                          To
                        </div>
                        <div className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black rounded uppercase tracking-tighter border border-emerald-100 italic">
                          {student.nextClass}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-8 text-center">
                    <button className="px-6 py-3 bg-indigo-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200 active:scale-95 flex items-center gap-2 mx-auto">
                      Promote & Update
                      <FaArrowRight
                        size={10}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
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
