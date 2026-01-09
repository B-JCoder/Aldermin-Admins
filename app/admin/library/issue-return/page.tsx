"use client";

import React, { useState } from "react";
import {
  FaExchangeAlt,
  FaIdCard,
  FaUserGraduate,
  FaPhone,
  FaEnvelope,
  FaSearch,
  FaFilter,
  FaArrowRight,
  FaHistory,
  FaCheckCircle,
} from "react-icons/fa";

export default function IssueReturnPage() {
  const [memberStream, setMemberStream] = useState([
    {
      id: 1,
      name: "Julian Sterling",
      type: "Student",
      memberId: "LIB-STD-001",
      email: "julian.s@academy.edu",
      mobile: "+1 234 567 890",
    },
    {
      id: 2,
      name: "Prof. Vance",
      type: "Staff",
      memberId: "LIB-STF-015",
      email: "vance.p@academy.edu",
      mobile: "+1 234 567 891",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-emerald-600 rounded-xl shadow-lg ring-4 ring-emerald-50">
            <FaExchangeAlt className="text-white" size={20} />
          </div>
          Asset Circulation Matrix
        </h1>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 bg-gradient-to-br from-white to-emerald-50/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/10 rounded-full blur-3xl pointer-events-none"></div>

        <form className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className="md:col-span-1">
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
              Archetype Filter
            </label>
            <div className="relative">
              <FaFilter
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                size={12}
              />
              <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white shadow-sm appearance-none">
                <option>All Archetypes</option>
                <option>Student</option>
                <option>Staff</option>
              </select>
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1 text-nowrap">
              Member Identifier / Name Search
            </label>
            <div className="relative drop-shadow-sm">
              <FaSearch
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={12}
              />
              <input
                type="text"
                className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white shadow-sm italic"
                placeholder="Enter Member ID or full legal name..."
              />
            </div>
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full relative overflow-hidden rounded-2xl bg-gray-900 border-b-4 border-gray-700 text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-black active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-gray-100"
            >
              <div className="relative z-10 flex items-center justify-center gap-2">
                Query Registry
                <FaArrowRight className="italic" />
              </div>
            </button>
          </div>
        </form>
      </div>

      <div className="rounded-3xl bg-white shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-gray-50/30">
          <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
            Circulation Engagement Stream
          </h4>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50/50 text-gray-400 font-bold border-b border-gray-50 uppercase tracking-widest text-[9px]">
              <tr>
                <th className="px-8 py-6 text-left w-20">SN</th>
                <th className="px-8 py-6 text-left">Industrial Identity</th>
                <th className="px-8 py-6 text-left">Communication Nodes</th>
                <th className="px-8 py-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {memberStream.map((m, index) => (
                <tr
                  key={m.id}
                  className="hover:bg-emerald-50/10 transition-all group"
                >
                  <td className="px-8 py-10 text-gray-300 font-mono text-xs italic">
                    {index + 1}
                  </td>
                  <td className="px-8 py-10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500 ring-4 ring-emerald-50 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm relative overflow-hidden">
                        <FaUserGraduate size={16} />
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                      </div>
                      <div>
                        <div className="font-black text-gray-900 tracking-tight text-base font-serif italic uppercase leading-none mb-1">
                          {m.name}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">
                            {m.type} Archetype
                          </span>
                          <span className="h-1 w-1 bg-gray-200 rounded-full"></span>
                          <span className="text-[9px] font-mono font-bold text-gray-400">
                            {m.memberId}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-10">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-[10px] text-gray-500 italic">
                        <FaEnvelope className="text-gray-300" size={10} />
                        <span>{m.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono font-medium">
                        <FaPhone className="text-gray-300" size={10} />
                        <span>{m.mobile}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-10 text-center">
                    <div className="flex justify-center gap-2">
                      <button className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white text-[9px] font-black rounded-xl uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-lg active:scale-95 group/btn">
                        <FaExchangeAlt
                          size={10}
                          className="group-hover/btn:rotate-180 transition-transform duration-500"
                        />
                        Issue / Return
                      </button>
                      <button className="p-2.5 bg-gray-50 text-gray-400 rounded-xl hover:bg-white hover:text-emerald-600 transition-all border border-gray-100 shadow-sm">
                        <FaHistory size={12} />
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
