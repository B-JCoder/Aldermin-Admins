"use client";

import React, { useState } from "react";
import {
  FaLayerGroup,
  FaTrophy,
  FaUsers,
  FaChartLine,
  FaCrown,
  FaPrint,
  FaArrowUp,
} from "react-icons/fa";

export default function ClassReportPage() {
  const [classRankList, setClassRankList] = useState([
    { id: 1, rank: 1, class: "Grade 10 (Alpha)", students: 42, points: 1250 },
    { id: 2, rank: 2, class: "Grade 11 (Beta)", students: 38, points: 1120 },
    { id: 3, rank: 3, class: "Grade 10 (Beta)", students: 45, points: 980 },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-violet-600 rounded-xl shadow-lg ring-4 ring-violet-50">
            <FaLayerGroup className="text-white" size={20} />
          </div>
          Institutional Tier Analytics
        </h1>
        <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-[10px] font-black rounded-xl uppercase tracking-[0.2em] hover:bg-black transition-all shadow-xl active:scale-95">
          <FaPrint /> Export Tier Report
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* KPI Cards */}
        <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col items-center text-center group hover:bg-violet-600 transition-all duration-500">
          <div className="p-4 bg-violet-50 rounded-2xl mb-4 group-hover:bg-white/20 transition-colors">
            <FaCrown
              className="text-violet-600 group-hover:text-white"
              size={24}
            />
          </div>
          <div className="text-xs font-black text-gray-400 group-hover:text-white/60 uppercase tracking-widest mb-2">
            Lead Tier
          </div>
          <div className="text-2xl font-black text-gray-900 group-hover:text-white font-serif italic tracking-tighter uppercase">
            Grade 10 (Alpha)
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col items-center text-center group hover:bg-violet-600 transition-all duration-500">
          <div className="p-4 bg-violet-50 rounded-2xl mb-4 group-hover:bg-white/20 transition-colors">
            <FaChartLine
              className="text-violet-600 group-hover:text-white"
              size={24}
            />
          </div>
          <div className="text-xs font-black text-gray-400 group-hover:text-white/60 uppercase tracking-widest mb-2">
            Aggregate Velocity
          </div>
          <div className="text-2xl font-black text-gray-900 group-hover:text-white font-mono uppercase tracking-tighter">
            +8.4%
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col items-center text-center group hover:bg-violet-600 transition-all duration-500">
          <div className="p-4 bg-violet-50 rounded-2xl mb-4 group-hover:bg-white/20 transition-colors">
            <FaUsers
              className="text-violet-600 group-hover:text-white"
              size={24}
            />
          </div>
          <div className="text-xs font-black text-gray-400 group-hover:text-white/60 uppercase tracking-widest mb-2">
            Sample Size
          </div>
          <div className="text-2xl font-black text-gray-900 group-hover:text-white font-mono tracking-tighter uppercase">
            125 Students
          </div>
        </div>
      </div>

      <div className="rounded-3xl bg-white shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-gray-50/30">
          <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
            Tier Merit Standings
          </h4>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50/50 text-gray-400 font-bold border-b border-gray-50">
              <tr>
                <th className="px-8 py-6 text-left w-24 text-[10px] uppercase font-black">
                  Standing
                </th>
                <th className="px-8 py-6 text-left text-[10px] uppercase font-black tracking-widest">
                  Organizational Tier
                </th>
                <th className="px-8 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                  Subject Magnitude
                </th>
                <th className="px-8 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                  Aggregate Merit
                </th>
                <th className="px-8 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                  Governance
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {classRankList.map((c) => (
                <tr
                  key={c.id}
                  className="hover:bg-violet-50/10 transition-all group"
                >
                  <td className="px-8 py-10">
                    <div className="flex items-center gap-3 font-mono font-black italic text-gray-400 group-hover:text-violet-600 transition-colors">
                      #{c.rank}
                    </div>
                  </td>
                  <td className="px-8 py-10">
                    <div className="font-black text-gray-900 tracking-tight text-lg font-serif italic uppercase leading-none mb-1">
                      {c.class}
                    </div>
                    <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                      Verified Institutional Grade
                    </div>
                  </td>
                  <td className="px-8 py-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-50 rounded-xl border border-gray-100 group-hover:bg-white transition-all">
                      <FaUsers
                        className="text-gray-300 group-hover:text-violet-500"
                        size={10}
                      />
                      <span className="text-[10px] font-black text-gray-600">
                        {c.students} Subjects
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-10 text-center">
                    <div className="inline-flex items-center gap-1 text-xl font-black font-mono text-emerald-600">
                      {c.points}
                      <FaArrowUp size={10} className="mb-2" />
                    </div>
                  </td>
                  <td className="px-8 py-10 text-center">
                    <button className="px-5 py-2.5 bg-violet-50 text-violet-700 text-[9px] font-black rounded-xl uppercase tracking-widest hover:bg-violet-600 hover:text-white transition-all shadow-sm border border-violet-100">
                      Drill Down
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
