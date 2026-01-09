"use client";

import React, { useState } from "react";
import {
  FaEdit,
  FaSearch,
  FaCheckCircle,
  FaTimesCircle,
  FaUserGraduate,
  FaCommentDots,
  FaSave,
} from "react-icons/fa";

export default function MarkRegisterPage() {
  const [students, setStudents] = useState([
    {
      id: 1,
      admissionNo: "ADM-2023-001",
      rollNo: "10",
      className: "10-A",
      name: "Avery Sterling",
      marks: 85,
      remarks: "Outstanding logic",
      isPresent: true,
    },
    {
      id: 2,
      admissionNo: "ADM-2023-042",
      rollNo: "15",
      className: "10-A",
      name: "Elara Vance",
      marks: 42,
      remarks: "Needs improvement in trig",
      isPresent: true,
    },
  ]);

  const togglePresence = (id: number) => {
    setStudents(
      students.map((s) =>
        s.id === id
          ? { ...s, isPresent: !s.isPresent, marks: !s.isPresent ? s.marks : 0 }
          : s
      )
    );
  };

  return (
    <div className="container mx-auto p-4 space-y-8 pb-32">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tighter flex items-center gap-4">
            <div className="w-14 h-14 bg-indigo-600 rounded-[1.5rem] flex items-center justify-center shadow-2xl shadow-indigo-200">
              <FaEdit className="text-white" size={28} />
            </div>
            Evaluative Ledger
          </h1>
          <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.4em] mt-3 ml-2 italic">
            Official Academic Mark Entry Registry
          </p>
        </div>
      </div>

      {/* Strategic Query Filter */}
      <div className="rounded-[2.5rem] bg-white p-8 shadow-2xl shadow-gray-100 border border-gray-100/50">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Active Framework
            </label>
            <select className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 text-xs font-black outline-none focus:ring-4 focus:ring-indigo-500/10 focus:bg-white transition-all appearance-none italic">
              <option>Mid-Term Finals 2024</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Grade
            </label>
            <select className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 text-xs font-black outline-none focus:ring-4 focus:ring-indigo-500/10 focus:bg-white transition-all">
              <option>Class 10</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Section
            </label>
            <select className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 text-xs font-black outline-none focus:ring-4 focus:ring-indigo-500/10 focus:bg-white transition-all">
              <option>Section A</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Discipline
            </label>
            <select className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 text-xs font-black outline-none focus:ring-4 focus:ring-indigo-500/10 focus:bg-white transition-all">
              <option>Theoretical Physics</option>
            </select>
          </div>
          <button className="w-full bg-gray-900 border-b-4 border-gray-700 text-white rounded-[1.25rem] py-4 text-xs font-black uppercase tracking-[0.2em] hover:brightness-110 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-3">
            <FaSearch size={14} />
            Open Ledger
          </button>
        </div>
      </div>

      {/* Ledger Interaction Matrix */}
      <div className="rounded-[2.5rem] bg-white p-10 shadow-2xl shadow-gray-100 border border-gray-100/50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-50/30 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none"></div>

        <div className="relative overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-gray-50">
                <th className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-gray-400 w-16">
                  SN
                </th>
                <th className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Patron Information
                </th>
                <th className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Roll/Nº
                </th>
                <th className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Evaluated Score
                </th>
                <th className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Instructional Remarks
                </th>
                <th className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50/70">
              {students.map((student, index) => (
                <tr
                  key={student.id}
                  className={`group transition-all ${
                    !student.isPresent
                      ? "bg-rose-50/30"
                      : "hover:bg-indigo-50/5"
                  }`}
                >
                  <td className="px-6 py-10 text-gray-300 font-mono text-xs italic">
                    {index + 1}
                  </td>
                  <td className="px-6 py-10">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all shadow-sm ${
                          student.isPresent
                            ? "bg-white text-indigo-500 border border-gray-100 group-hover:bg-indigo-600 group-hover:text-white"
                            : "bg-rose-100 text-rose-500"
                        }`}
                      >
                        <FaUserGraduate size={16} />
                      </div>
                      <div>
                        <div className="font-black text-gray-900 tracking-tight text-base font-serif italic mb-1 uppercase leading-none">
                          {student.name}
                        </div>
                        <div className="text-[9px] font-mono text-gray-400 uppercase tracking-tighter italic">
                          ID: {student.admissionNo}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-10 text-center font-mono font-black text-gray-400">
                    #{student.rollNo}
                  </td>
                  <td className="px-6 py-10 text-center">
                    <input
                      type="number"
                      disabled={!student.isPresent}
                      defaultValue={student.marks}
                      className={`w-20 text-center p-3 rounded-xl text-sm font-black font-mono transition-all outline-none ring-1 ${
                        !student.isPresent
                          ? "bg-gray-100 text-gray-300 ring-gray-200"
                          : "bg-indigo-50/50 text-indigo-600 ring-indigo-100 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white"
                      }`}
                    />
                    <div className="mt-2 text-[8px] font-black text-gray-300 uppercase tracking-widest">
                      Mark Scored
                    </div>
                  </td>
                  <td className="px-6 py-10">
                    <div className="relative group/note">
                      <FaCommentDots
                        className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${
                          student.isPresent
                            ? "text-gray-200 group-focus-within/note:text-indigo-400"
                            : "text-rose-200"
                        }`}
                        size={12}
                      />
                      <input
                        type="text"
                        disabled={!student.isPresent}
                        placeholder="Enter remark..."
                        defaultValue={student.remarks}
                        className={`w-full border-none rounded-xl py-3 pl-9 text-[10px] font-bold outline-none ring-1 transition-all ${
                          !student.isPresent
                            ? "bg-gray-100 text-gray-400 ring-gray-200 italic"
                            : "bg-gray-50/50 text-gray-600 ring-gray-100 focus:ring-indigo-500/20 focus:bg-white"
                        }`}
                      />
                    </div>
                  </td>
                  <td className="px-6 py-10 text-center">
                    <button
                      onClick={() => togglePresence(student.id)}
                      className={`w-12 h-6 rounded-full relative transition-all duration-300 ${
                        student.isPresent ? "bg-emerald-500" : "bg-rose-400"
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 shadow-sm ${
                          student.isPresent ? "left-7" : "left-1"
                        }`}
                      ></div>
                    </button>
                    <div
                      className={`mt-2 text-[9px] font-black uppercase tracking-widest ${
                        student.isPresent ? "text-emerald-500" : "text-rose-500"
                      }`}
                    >
                      {student.isPresent ? "Present" : "Absent"}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="px-14 py-5 bg-indigo-600 border-b-4 border-indigo-800 text-white rounded-[2rem] text-xs font-black uppercase tracking-[0.4em] shadow-2xl shadow-indigo-100 hover:brightness-110 active:border-b-0 active:translate-y-1 transition-all flex items-center gap-4">
          <FaSave size={14} />
          Commit Record To Archive
        </button>
      </div>
    </div>
  );
}
