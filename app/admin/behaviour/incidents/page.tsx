"use client";

import React, { useState } from "react";
import {
  FaExclamationTriangle,
  FaPlus,
  FaTrash,
  FaEdit,
  FaCheck,
  FaBolt,
  FaFileAlt,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";

export default function IncidentsPage() {
  const [incidentList, setIncidentList] = useState([
    {
      id: 1,
      title: "Exceptional Scholarly Pursuit",
      points: 10,
      description: "Demonstrated advanced comprehension and peer mentorship.",
    },
    {
      id: 2,
      title: "Integrity Violation - Assessment",
      points: -15,
      description: "Unauthorized assistance during formal examination.",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-violet-600 rounded-xl shadow-lg ring-4 ring-violet-50">
            <FaShieldAlt className="text-white" size={20} />
          </div>
          Conduct Taxonomy
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Definition Form */}
        <div className="lg:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-violet-50/5">
            <h4 className="mb-6 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center justify-between">
              Define Conduct Node
              <div className="h-1 w-12 bg-violet-200 rounded-full"></div>
            </h4>

            <form className="space-y-4 flex-1">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Designation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-violet-500/10 outline-none transition-all bg-white shadow-sm italic"
                    placeholder="Incident Title"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Merit Magnitude <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaStar
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <input
                      type="number"
                      className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-mono font-bold focus:ring-4 focus:ring-violet-500/10 outline-none transition-all bg-white shadow-sm"
                      placeholder="Points"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Qualitative Narrative
                  </label>
                  <textarea
                    className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-violet-500/10 outline-none transition-all bg-white shadow-sm min-h-[120px]"
                    placeholder="Detailed scope of the conduct..."
                  ></textarea>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full relative overflow-hidden rounded-2xl bg-gray-900 border-b-4 border-gray-700 text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-black active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-gray-200"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <FaBolt className="italic" />
                    Initialize Taxonomy
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Taxonomy Index */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-50/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="flex items-center justify-between mb-8 relative">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
                Conduct Registry Index
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
                      Conduct Profile
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Merit Alpha
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Interaction
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {incidentList.map((i, index) => (
                    <tr
                      key={i.id}
                      className="hover:bg-violet-50/20 transition-all group"
                    >
                      <td className="px-6 py-8 text-gray-300 font-mono text-xs italic">
                        {index + 1}
                      </td>
                      <td className="px-6 py-8">
                        <div className="font-black text-gray-900 tracking-tight text-base font-serif italic uppercase leading-none mb-2">
                          {i.title}
                        </div>
                        <div className="text-[10px] text-gray-400 font-medium leading-relaxed max-w-sm line-clamp-1">
                          {i.description}
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <span
                          className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl text-xs font-black shadow-inner border ${
                            i.points >= 0
                              ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                              : "bg-rose-50 text-rose-600 border-rose-100"
                          }`}
                        >
                          {i.points >= 0 ? `+${i.points}` : i.points}
                        </span>
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
