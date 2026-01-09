"use client";

import React, { useState } from "react";
import {
  FaUsers,
  FaPlus,
  FaTrash,
  FaEdit,
  FaCheck,
  FaLayerGroup,
} from "react-icons/fa";

export default function StudentGroupPage() {
  const [groupName, setGroupName] = useState("");
  const [groups, setGroups] = useState([
    { id: 1, name: "Science Club", grade: "10-12", section: "A, B" },
    { id: 2, name: "Debate Team", grade: "8-12", section: "All" },
    { id: 3, name: "Athletics", grade: "All", section: "All" },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (groupName.trim()) {
      setGroups([
        ...groups,
        {
          id: groups.length + 1,
          name: groupName,
          grade: "All",
          section: "All",
        },
      ]);
      setGroupName("");
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-indigo-600 rounded-xl shadow-lg ring-4 ring-indigo-50">
            <FaUsers className="text-white" size={20} />
          </div>
          Social Assemblies
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Creation Form */}
        <div className="lg:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-indigo-50/5">
            <h4 className="mb-6 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center justify-between">
              Create New Assembly
              <div className="h-1 w-12 bg-indigo-100 rounded-full"></div>
            </h4>

            <form onSubmit={handleSubmit} className="space-y-6 flex-1">
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                  Assembly Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  className="w-full rounded-2xl border-gray-100 p-4 text-sm font-bold focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/20 outline-none transition-all placeholder:font-medium bg-white shadow-sm"
                  placeholder="e.g. Chess Federation"
                  required
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="group w-full relative overflow-hidden rounded-2xl bg-gray-900 px-8 py-4 text-white font-black text-xs uppercase tracking-widest transition-all hover:bg-black active:scale-[0.98] shadow-2xl shadow-gray-200"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <FaPlus className="group-hover:rotate-90 transition-transform italic" />
                    Finalize Assembly
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Assembly Index */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5">
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
                Assembly Registry
              </h4>
              <div className="px-4 py-1.5 bg-gray-900 text-white text-[10px] font-black rounded-full uppercase tracking-tighter">
                {groups.length} Groups Active
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-50">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50/70 text-gray-500 font-bold border-b border-gray-50">
                  <tr>
                    <th className="px-6 py-5 text-left w-16 text-[10px] uppercase font-black">
                      SN
                    </th>
                    <th className="px-6 py-5 text-left text-[10px] uppercase font-black tracking-widest">
                      Assembly Identity
                    </th>
                    <th className="px-6 py-5 text-center text-[10px] uppercase font-black tracking-widest">
                      Target Scope
                    </th>
                    <th className="px-6 py-5 text-center text-[10px] uppercase font-black tracking-widest">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {groups.map((g, index) => (
                    <tr
                      key={g.id}
                      className="hover:bg-indigo-50/20 transition-all group"
                    >
                      <td className="px-6 py-5 text-gray-300 font-mono text-xs italic">
                        {index + 1}
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-500 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all border border-indigo-100">
                            <FaLayerGroup size={12} />
                          </div>
                          <span className="font-black text-gray-900 tracking-tight text-base font-serif italic">
                            {g.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <div className="flex flex-col items-center gap-1">
                          <span className="px-3 py-1 bg-gray-50 text-gray-400 text-[9px] font-black rounded uppercase tracking-tighter">
                            Grades: {g.grade}
                          </span>
                          <span className="px-3 py-1 bg-gray-50 text-gray-400 text-[9px] font-black rounded uppercase tracking-tighter">
                            Units: {g.section}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <div className="flex justify-center gap-2">
                          <button className="p-2.5 rounded-xl bg-gray-50 text-blue-500 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                            <FaEdit size={14} />
                          </button>
                          <button className="p-2.5 rounded-xl bg-gray-50 text-rose-500 hover:bg-rose-600 hover:text-white transition-all shadow-sm">
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
