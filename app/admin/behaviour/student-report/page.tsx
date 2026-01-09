"use client";

import React, { useState } from "react";
import {
  FaUserShield,
  FaSearch,
  FaCalendarAlt,
  FaLayerGroup,
  FaUsers,
  FaUserGraduate,
  FaFileAlt,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

export default function StudentReportPage() {
  const [studentIncidentList, setStudentIncidentList] = useState([
    {
      id: 1,
      admissionNo: "ADM-2024-001",
      name: "Alice Johnson",
      gender: "Female",
      class: "Grade 10 (Alpha)",
      phone: "+1 234 567 890",
      points: 45,
      incidents: 3,
    },
    {
      id: 2,
      admissionNo: "ADM-2024-005",
      name: "Bob Smith",
      gender: "Male",
      class: "Grade 10 (Alpha)",
      phone: "+1 234 567 893",
      points: -5,
      incidents: 1,
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-violet-600 rounded-xl shadow-lg ring-4 ring-violet-50">
            <FaUserShield className="text-white" size={20} />
          </div>
          Institutional Conduct Logs
        </h1>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 bg-gradient-to-br from-white to-violet-50/5 relative overflow-hidden">
        <form className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
              Academic Cycle
            </label>
            <div className="relative">
              <FaCalendarAlt
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                size={12}
              />
              <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-violet-500/10 outline-none transition-all bg-white shadow-sm appearance-none">
                <option>2023-2024</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
              Tier Analysis
            </label>
            <div className="relative">
              <FaLayerGroup
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                size={12}
              />
              <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-violet-500/10 outline-none transition-all bg-white shadow-sm appearance-none">
                <option>Grade 10</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
              Unit Scope
            </label>
            <div className="relative">
              <FaUsers
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                size={12}
              />
              <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-violet-500/10 outline-none transition-all bg-white shadow-sm appearance-none">
                <option>Alpha</option>
              </select>
            </div>
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full relative overflow-hidden rounded-2xl bg-gray-900 border-b-4 border-gray-700 text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-black active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-gray-200"
            >
              <div className="relative z-10 flex items-center justify-center gap-2">
                <FaSearch className="italic" />
                Query Conduct Logs
              </div>
            </button>
          </div>
        </form>
      </div>

      <div className="rounded-3xl bg-white shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-gray-50/30">
          <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
            Subject Behavioural Dossier
          </h4>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50/50 text-gray-400 font-bold border-b border-gray-50">
              <tr>
                <th className="px-8 py-6 text-left w-16 text-[10px] uppercase font-black">
                  SN
                </th>
                <th className="px-8 py-6 text-left text-[10px] uppercase font-black tracking-widest">
                  Subject Profile
                </th>
                <th className="px-8 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                  Enrollment Node
                </th>
                <th className="px-8 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                  Aggregate Merit
                </th>
                <th className="px-8 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                  Interaction
                </th>
                <th className="px-8 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                  Governance
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {studentIncidentList.map((s, index) => (
                <tr
                  key={s.id}
                  className="hover:bg-violet-50/10 transition-all group"
                >
                  <td className="px-8 py-8 text-gray-300 font-mono text-xs italic">
                    {index + 1}
                  </td>
                  <td className="px-8 py-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 ring-4 ring-violet-50">
                        <FaUserGraduate size={16} />
                      </div>
                      <div>
                        <div className="font-black text-gray-900 tracking-tight text-base font-serif italic uppercase leading-none mb-1">
                          {s.name}
                        </div>
                        <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                          {s.gender} • {s.class}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-8 text-center text-gray-400 font-mono text-[10px]">
                    {s.admissionNo}
                  </td>
                  <td className="px-8 py-8 text-center">
                    <span
                      className={`inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm ring-1 ring-inset ${
                        s.points >= 0
                          ? "bg-emerald-50 text-emerald-700 ring-emerald-100"
                          : "bg-rose-50 text-rose-700 ring-rose-100"
                      }`}
                    >
                      {s.points >= 0 ? `+${s.points}` : s.points} Merit
                    </span>
                  </td>
                  <td className="px-8 py-8 text-center text-gray-400 font-bold italic">
                    {s.incidents} Entries
                  </td>
                  <td className="px-8 py-8 text-center">
                    <div className="flex justify-center gap-1">
                      <button className="p-3 rounded-xl bg-gray-50 text-blue-500 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                        <FaFileAlt size={14} />
                      </button>
                      <button className="p-3 rounded-xl bg-gray-50 text-emerald-500 hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
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
  );
}
