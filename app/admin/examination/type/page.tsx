"use client";

import React, { useState } from "react";
import {
  FaFileSignature,
  FaEdit,
  FaTrash,
  FaCheckCircle,
  FaPercent,
  FaTrophy,
} from "react-icons/fa";

export default function ExamTypePage() {
  const [examName, setExamName] = useState("");
  const [isMandatory, setIsMandatory] = useState(false);
  const [exams, setExams] = useState([
    {
      id: 1,
      name: "Mid-Term Assessment",
      isMandatory: true,
      avgPass: "40%",
      avgMark: "72%",
    },
    {
      id: 2,
      name: "Final Semester Examination",
      isMandatory: true,
      avgPass: "35%",
      avgMark: "68%",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (examName.trim()) {
      setExams([
        ...exams,
        {
          id: exams.length + 1,
          name: examName,
          isMandatory: isMandatory,
          avgPass: "TBD",
          avgMark: "N/A",
        },
      ]);
      setExamName("");
      setIsMandatory(false);
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-rose-600 rounded-xl shadow-lg ring-4 ring-rose-50">
            <FaFileSignature className="text-white" size={20} />
          </div>
          Examination Framework
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Exam Definition Form */}
        <div className="lg:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-rose-50/5">
            <h4 className="mb-6 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center justify-between">
              Define New Assessment
              <div className="h-1 w-12 bg-rose-100 rounded-full"></div>
            </h4>

            <form onSubmit={handleSubmit} className="space-y-6 flex-1">
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                  Assessment Designation <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={examName}
                  onChange={(e) => setExamName(e.target.value)}
                  className="w-full rounded-2xl border-gray-100 p-4 text-sm font-bold focus:ring-4 focus:ring-rose-500/10 focus:border-rose-500/20 outline-none transition-all placeholder:font-medium bg-white shadow-sm italic"
                  placeholder="e.g. Annual Finals"
                  required
                />
              </div>

              <div className="flex items-center gap-4 bg-gray-50/50 p-4 rounded-2xl border border-gray-100/50">
                <button
                  type="button"
                  onClick={() => setIsMandatory(!isMandatory)}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    isMandatory
                      ? "bg-rose-600 text-white shadow-lg shadow-rose-200"
                      : "bg-white text-gray-300 border border-gray-100 shadow-sm"
                  }`}
                >
                  <FaCheckCircle size={18} />
                </button>
                <div>
                  <div className="text-[10px] font-black text-gray-900 uppercase tracking-widest italic">
                    Average Passing
                  </div>
                  <div className="text-[9px] font-bold text-gray-400 lowercase italic">
                    Mandatory evaluative criteria
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="group w-full relative overflow-hidden rounded-2xl bg-gray-900 px-8 py-5 text-white font-black text-xs uppercase tracking-widest transition-all hover:bg-black active:scale-[0.98] shadow-2xl shadow-gray-200"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <FaTrophy className="group-hover:rotate-12 transition-transform" />
                    Save Assessment Model
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Assessment Index */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-rose-50/30 rounded-full blur-3xl -mr-24 -mt-24"></div>

            <div className="flex items-center justify-between mb-8 relative">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
                Assessment Catalog
              </h4>
              <div className="px-5 py-2 bg-rose-50 text-rose-600 text-[10px] font-black rounded-full uppercase tracking-widest ring-1 ring-rose-100 shadow-sm">
                {exams.length} Frameworks Active
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-50 relative">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50/70 text-gray-500 font-bold border-b border-gray-50">
                  <tr>
                    <th className="px-6 py-6 text-left w-16 text-[10px] uppercase font-black">
                      SN
                    </th>
                    <th className="px-6 py-6 text-left text-[10px] uppercase font-black tracking-widest">
                      Assessment Name
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Pass Criteria
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Cohort Avg
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Interaction
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {exams.map((e, index) => (
                    <tr
                      key={e.id}
                      className="hover:bg-rose-50/10 transition-all group"
                    >
                      <td className="px-6 py-6 text-gray-300 font-mono text-xs italic">
                        {index + 1}
                      </td>
                      <td className="px-6 py-6">
                        <div className="font-black text-gray-900 tracking-tight text-base font-serif italic group-hover:text-rose-600 transition-colors uppercase">
                          {e.name}
                        </div>
                        <div className="flex items-center gap-1.5 mt-1.5 font-black text-[8px] uppercase tracking-widest">
                          <span
                            className={
                              e.isMandatory
                                ? "text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded"
                                : "text-gray-300"
                            }
                          >
                            {e.isMandatory ? "Mandatory" : "Optional"}
                          </span>
                          <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                          <span className="text-gray-300">
                            Active Framework
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-6 text-center">
                        <div className="inline-flex items-center gap-1 text-xs font-black text-gray-700 italic">
                          <FaPercent size={8} className="text-rose-400" />
                          {e.avgPass}
                        </div>
                      </td>
                      <td className="px-6 py-6 text-center">
                        <div className="text-sm font-black text-indigo-500 italic">
                          {e.avgMark}
                        </div>
                      </td>
                      <td className="px-6 py-6 text-center">
                        <div className="flex justify-center gap-2">
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
