"use client";

import React, { useState } from "react";
import {
  FaBookOpen,
  FaSearch,
  FaPlus,
  FaFilter,
  FaFileDownload,
  FaEdit,
  FaTrash,
  FaCalendarDay,
  FaUserGraduate,
  FaClipboardCheck,
  FaLayerGroup,
} from "react-icons/fa";

export default function HomeworkListPage() {
  const [homeworkList, setHomeworkList] = useState([
    {
      id: 1,
      class: "Grade 10 (Alpha)",
      subject: "Advanced Physics",
      marks: 25,
      homeworkDate: "2024-03-20",
      submissionDate: "2024-03-25",
      evaluationDate: "2024-03-27",
      fileName: "kinematics_v2.pdf",
    },
    {
      id: 2,
      class: "Grade 11 (Beta)",
      subject: "Organic Chemistry",
      marks: 20,
      homeworkDate: "2024-03-21",
      submissionDate: "2024-03-26",
      evaluationDate: "2024-03-28",
      fileName: "alkanes_guide.pdf",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-rose-600 rounded-xl shadow-lg ring-4 ring-rose-50">
            <FaBookOpen className="text-white" size={20} />
          </div>
          Curricular Assignment Registry
        </h1>
        <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-[10px] font-black rounded-xl uppercase tracking-[0.2em] hover:bg-black transition-all shadow-xl active:scale-95">
          <FaPlus /> Authorize Assignment
        </button>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 bg-gradient-to-br from-white to-rose-50/5 relative overflow-hidden">
        <form className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
              Academic Tier
            </label>
            <div className="relative">
              <FaUserGraduate
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                size={12}
              />
              <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-rose-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer">
                <option>Grade 10</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
              Unit Assignment
            </label>
            <div className="relative">
              <FaFilter
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                size={12}
              />
              <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-rose-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer">
                <option>Alpha</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
              Subject Domain
            </label>
            <div className="relative drop-shadow-sm">
              <select className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-rose-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer">
                <option>Advanced Physics</option>
              </select>
            </div>
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full relative overflow-hidden rounded-2xl bg-rose-600 border-b-4 border-rose-800 text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-rose-700 active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-rose-100"
            >
              <div className="relative z-10 flex items-center justify-center gap-2">
                <FaSearch className="italic" />
                Query Assignments
              </div>
            </button>
          </div>
        </form>
      </div>

      <div className="rounded-3xl bg-white shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-gray-50/30">
          <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
            Published Interaction stream
          </h4>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50/50 text-gray-400 font-bold border-b border-gray-50">
              <tr>
                <th className="px-8 py-6 text-left w-20 text-[10px] uppercase font-black">
                  SN
                </th>
                <th className="px-8 py-6 text-left text-[10px] uppercase font-black tracking-widest">
                  Pedagogical Node
                </th>
                <th className="px-8 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                  Merit Weight
                </th>
                <th className="px-8 py-6 text-left text-[10px] uppercase font-black tracking-widest">
                  Temporal Nodes
                </th>
                <th className="px-8 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                  Asset
                </th>
                <th className="px-8 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {homeworkList.map((h, index) => (
                <tr
                  key={h.id}
                  className="hover:bg-rose-50/10 transition-all group"
                >
                  <td className="px-8 py-10 text-gray-300 font-mono text-xs italic">
                    {index + 1}
                  </td>
                  <td className="px-8 py-10">
                    <div className="font-black text-gray-900 tracking-tight text-base font-serif italic uppercase leading-none mb-1">
                      {h.subject}
                    </div>
                    <div className="text-[9px] font-black text-rose-500 uppercase tracking-widest flex items-center gap-2">
                      <FaLayerGroup size={8} /> {h.class}
                    </div>
                  </td>
                  <td className="px-8 py-10 text-center">
                    <div className="inline-flex flex-col items-center p-3 rounded-2xl bg-rose-50/50 border border-rose-100 min-w-[70px]">
                      <span className="text-sm font-black font-mono text-rose-600 leading-none">
                        {h.marks}
                      </span>
                      <span className="text-[7px] font-black uppercase text-rose-400 mt-1">
                        Valence
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-10">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[9px] text-gray-400">
                        <FaCalendarDay className="text-rose-300" size={10} />
                        <span className="font-black uppercase tracking-tighter w-20">
                          Published:
                        </span>
                        <span className="font-mono font-bold text-gray-600">
                          {h.homeworkDate}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[9px] text-gray-400">
                        <FaClipboardCheck className="text-rose-300" size={10} />
                        <span className="font-black uppercase tracking-tighter w-20">
                          Deadline:
                        </span>
                        <span className="font-mono font-bold text-rose-600">
                          {h.submissionDate}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-10 text-center text-gray-400 font-bold italic">
                    <div className="flex flex-col items-center gap-1 group/asset cursor-pointer">
                      <FaFileDownload
                        size={18}
                        className="text-rose-300 group-hover/asset:text-rose-600 transition-colors"
                      />
                      <span className="text-[8px] font-mono group-hover/asset:text-rose-600 transition-colors">
                        {h.fileName}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-10 text-center">
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
  );
}
