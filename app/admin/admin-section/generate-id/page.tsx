"use client";

import React, { useState } from "react";
import {
  FaPrint,
  FaSearch,
  FaIdCard,
  FaUsers,
  FaLayerGroup,
  FaGripVertical,
  FaCheck,
  FaUserGraduate,
  FaUserTie,
} from "react-icons/fa";

export default function GenerateIDPage() {
  const [students, setStudents] = useState([
    {
      id: 1,
      admissionNo: "ADM-2024-001",
      name: "Alice Johnson",
      class: "Grade 10",
      section: "Alpha",
      selected: false,
    },
    {
      id: 2,
      admissionNo: "ADM-2024-005",
      name: "Bob Smith",
      class: "Grade 10",
      section: "Alpha",
      selected: false,
    },
    {
      id: 3,
      admissionNo: "ADM-2024-012",
      name: "Charlie Davis",
      class: "Grade 10",
      section: "Beta",
      selected: false,
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-amber-600 rounded-xl shadow-lg ring-4 ring-amber-50">
            <FaPrint className="text-white" size={20} />
          </div>
          ID Issuance Matrix
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Issuance Parameters */}
        <div className="lg:col-span-12 xl:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-amber-50/5">
            <h4 className="mb-8 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center justify-between">
              Issuance Configuration
              <div className="h-1 w-16 bg-amber-100 rounded-full"></div>
            </h4>

            <form className="space-y-6 flex-1">
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Institutional Tier <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaUsers
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-white shadow-sm appearance-none">
                      <option>Student Body</option>
                      <option>Faculty Staff</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                      Academic Grade
                    </label>
                    <select className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-white shadow-sm appearance-none">
                      <option>All Grades</option>
                      <option>Grade 10</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                      Sectional Unit
                    </label>
                    <select className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-white shadow-sm appearance-none">
                      <option>All Sections</option>
                      <option>Alpha</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Active Blueprint <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaIdCard
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer text-amber-600 underline">
                      <option>Standard Principal Pass</option>
                      <option>Matte Executive</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Print Grip Gap (px)
                  </label>
                  <div className="relative">
                    <FaGripVertical
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <input
                      type="number"
                      className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-mono font-bold focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-white shadow-sm"
                      placeholder="20"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full relative overflow-hidden rounded-2xl bg-gray-900 border-b-4 border-gray-700 text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-black active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-gray-200"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <FaSearch className="italic" />
                    Fetch Candidates
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Candidate List */}
        <div className="lg:col-span-12 xl:col-span-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-50/20 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none"></div>

            <div className="flex items-center justify-between mb-8 relative">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
                Qualified Issuance Stream
              </h4>
              <button className="px-6 py-3 bg-emerald-600 text-white text-[10px] font-black rounded-xl uppercase tracking-widest hover:bg-emerald-700 transition-all flex items-center gap-2 shadow-lg shadow-emerald-100 active:scale-95">
                <FaPrint />
                Batch Execute
              </button>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-50 relative">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50/70 text-gray-500 font-bold border-b border-gray-50">
                  <tr>
                    <th className="px-6 py-6 text-left w-12">
                      <input
                        type="checkbox"
                        className="rounded-md border-gray-300 text-amber-600 focus:ring-amber-500"
                      />
                    </th>
                    <th className="px-6 py-6 text-left text-[10px] uppercase font-black tracking-widest">
                      Candidate Profile
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Grade Unit
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Admission Node
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {students.map((s) => (
                    <tr
                      key={s.id}
                      className="hover:bg-amber-50/10 transition-all group"
                    >
                      <td className="px-6 py-8">
                        <input
                          type="checkbox"
                          className="rounded-md border-gray-300 text-amber-600 focus:ring-amber-500"
                        />
                      </td>
                      <td className="px-6 py-8">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 ring-4 ring-amber-50">
                            <FaUserGraduate size={16} />
                          </div>
                          <div>
                            <div className="font-black text-gray-900 tracking-tight text-base font-serif italic uppercase leading-none mb-1">
                              {s.name}
                            </div>
                            <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                              Verified Institutional Member
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center text-gray-400 italic">
                        <div className="text-[10px] font-black uppercase text-gray-500 font-mono mb-1">
                          {s.class}
                        </div>
                        <div className="text-[9px] font-bold text-amber-600 uppercase tracking-widest">
                          Section {s.section}
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <span className="px-3 py-1 bg-amber-50 text-amber-700 text-[10px] font-mono font-black rounded border border-amber-100 italic">
                          {s.admissionNo}
                        </span>
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
