"use client";

import React, { useState } from "react";
import {
  FaChartBar,
  FaSearch,
  FaShieldAlt,
  FaCalendarAlt,
  FaLayerGroup,
  FaUsers,
  FaTrophy,
  FaUserGraduate,
  FaCrown,
  FaPrint,
} from "react-icons/fa";

export default function BehaviourReportPage() {
  const [behaviourRankList, setBehaviourRankList] = useState([
    {
      id: 1,
      rank: 1,
      admissionNo: "ADM-2024-001",
      name: "Alice Johnson",
      class: "Grade 10 (Alpha)",
      gender: "Female",
      phone: "+1 234 567 890",
      points: 150,
    },
    {
      id: 2,
      rank: 2,
      admissionNo: "ADM-2024-012",
      name: "Charlie Davis",
      class: "Grade 10 (Alpha)",
      gender: "Male",
      phone: "+1 234 567 891",
      points: 120,
    },
    {
      id: 3,
      rank: 3,
      admissionNo: "ADM-2024-009",
      name: "Emma Wilson",
      class: "Grade 10 (Alpha)",
      gender: "Female",
      phone: "+1 234 567 892",
      points: 95,
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-violet-600 rounded-xl shadow-lg ring-4 ring-violet-50">
            <FaChartBar className="text-white" size={20} />
          </div>
          Conduct Excellence Ledger
        </h1>
        <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-[10px] font-black rounded-xl uppercase tracking-[0.2em] hover:bg-black transition-all shadow-xl active:scale-95">
          <FaPrint /> Broadcast Standings
        </button>
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
              className="w-full relative overflow-hidden rounded-2xl bg-violet-600 border-b-4 border-violet-800 text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-violet-700 active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-violet-100"
            >
              <div className="relative z-10 flex items-center justify-center gap-2">
                <FaSearch className="italic" />
                Analyze Standings
              </div>
            </button>
          </div>
        </form>
      </div>

      <div className="rounded-3xl bg-white shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-gray-50/30">
          <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
            Conduct Distinction Stream
          </h4>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>
              <span className="text-[9px] font-black text-gray-400 uppercase">
                Legacy Tier
              </span>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50/50 text-gray-400 font-bold border-b border-gray-50">
              <tr>
                <th className="px-8 py-6 text-left w-24 text-[10px] uppercase font-black">
                  Standing
                </th>
                <th className="px-8 py-6 text-left text-[10px] uppercase font-black tracking-widest">
                  Subject Profile
                </th>
                <th className="px-8 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                  Enrollment Node
                </th>
                <th className="px-8 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                  Interaction
                </th>
                <th className="px-8 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                  Aggregate Merit
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {behaviourRankList.map((s) => (
                <tr
                  key={s.id}
                  className="hover:bg-violet-50/10 transition-all group"
                >
                  <td className="px-8 py-10">
                    <div className="flex items-center gap-3">
                      {s.rank === 1 ? (
                        <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 shadow-lg shadow-amber-50 ring-2 ring-amber-50 relative overflow-hidden">
                          <FaCrown className="relative z-10" />
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 font-mono font-black italic border border-gray-100 uppercase text-[10px]">
                          #{s.rank}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-8 py-10">
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
                  <td className="px-8 py-10 text-center">
                    <span className="px-3 py-1 bg-violet-50 text-violet-700 text-[10px] font-mono font-black rounded border border-violet-100 italic tracking-tighter shadow-sm">
                      {s.admissionNo}
                    </span>
                  </td>
                  <td className="px-8 py-10 text-center text-[10px] font-mono font-bold text-gray-400 italic">
                    {s.phone}
                  </td>
                  <td className="px-8 py-10 text-center">
                    <div className="inline-flex flex-col items-center">
                      <div className="text-xl font-black font-mono text-emerald-600 leading-none mb-1">
                        + {s.points}
                      </div>
                      <div className="text-[8px] font-black uppercase text-gray-300 tracking-[0.2em]">
                        Alpha Merit
                      </div>
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
