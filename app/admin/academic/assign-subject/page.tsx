"use client";

import React, { useState } from "react";
import {
  FaUserTie,
  FaBookOpen,
  FaLayerGroup,
  FaPlus,
  FaTrash,
  FaEdit,
  FaCheck,
  FaLink,
} from "react-icons/fa";

export default function AssignSubjectPage() {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      subject: "Mathematics",
      section: "Section A",
      teacher: "Prof. Julian Sterling",
    },
    {
      id: 2,
      subject: "Physics",
      section: "Section B",
      teacher: "Dr. Elara Vance",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-indigo-600 rounded-xl shadow-lg ring-4 ring-indigo-50">
            <FaLink className="text-white" size={20} />
          </div>
          Academic Mapping
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Assignment Form */}
        <div className="lg:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-gray-50/10">
            <h4 className="mb-8 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center gap-2">
              Create Assignment
              <div className="h-[1px] flex-1 bg-gray-100"></div>
            </h4>

            <form className="space-y-6 flex-1">
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Discipline <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaBookOpen
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white shadow-sm appearance-none">
                      <option>Select Subject</option>
                      <option>Advanced Mathematics</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Sectional Unit <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaLayerGroup
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white shadow-sm appearance-none">
                      <option>Select Unit</option>
                      <option>Section Alpha</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Lead Instructor <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaUserTie
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-black text-indigo-600 outline-none bg-indigo-50/30 appearance-none">
                      <option>Select Faculty</option>
                      <option>Dr. Julian Sterling</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full relative overflow-hidden rounded-2xl bg-indigo-600 px-8 py-5 text-white font-black text-xs uppercase tracking-widest transition-all hover:bg-indigo-700 active:scale-[0.98] shadow-2xl shadow-indigo-100"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <FaCheck className="italic" />
                    Establish Mapping
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Assignment Registry */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="flex items-center justify-between mb-8 relative">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
                Assigned Faculty Registry
              </h4>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-50 relative">
              <table className="min-w-full text-[11px]">
                <thead className="bg-gray-50/70 text-gray-500 font-black border-b border-gray-50">
                  <tr>
                    <th className="px-5 py-6 text-left w-12 uppercase tracking-tighter">
                      SN
                    </th>
                    <th className="px-5 py-6 text-left uppercase tracking-tighter text-gray-400">
                      Assignment Profile
                    </th>
                    <th className="px-5 py-6 text-center uppercase tracking-tighter text-gray-400">
                      Allocated Unit
                    </th>
                    <th className="px-5 py-6 text-center uppercase tracking-tighter text-gray-400">
                      Interaction
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50/70">
                  {assignments.map((a, index) => (
                    <tr
                      key={a.id}
                      className="hover:bg-indigo-50/20 transition-all group"
                    >
                      <td className="px-5 py-8 text-gray-300 font-mono italic">
                        {index + 1}
                      </td>
                      <td className="px-5 py-8">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                            <FaUserTie size={16} />
                          </div>
                          <div>
                            <div className="font-black text-gray-900 leading-tight text-xs uppercase italic tracking-tighter mb-1">
                              {a.teacher}
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-black text-indigo-500 uppercase tracking-widest">
                              <FaBookOpen size={10} /> {a.subject}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-8 text-center">
                        <span className="px-4 py-1.5 bg-gray-900 text-white text-[9px] font-black rounded-lg uppercase tracking-widest italic">
                          {a.section}
                        </span>
                      </td>
                      <td className="px-5 py-8 text-center">
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
