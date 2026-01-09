"use client";

import React, { useState } from "react";
import {
  FaCalendarCheck,
  FaSearch,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaCommentDots,
  FaUserGraduate,
  FaSave,
} from "react-icons/fa";

export default function StudentAttendancePage() {
  const [attendanceDate, setAttendanceDate] = useState("2023-12-15");
  const [students, setStudents] = useState([
    {
      id: 1,
      admissionNo: "ADM-2023-001",
      name: "Avery Sterling",
      rollNo: "10",
      status: "Present",
      note: "",
    },
    {
      id: 2,
      admissionNo: "ADM-2023-042",
      name: "Elara Vance",
      rollNo: "15",
      status: "Absent",
      note: "Medical leave",
    },
  ]);

  const toggleStatus = (id: number, nextStatus: string) => {
    setStudents(
      students.map((s) => (s.id === id ? { ...s, status: nextStatus } : s))
    );
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tighter flex items-center gap-4 group">
            <div className="w-14 h-14 bg-emerald-600 rounded-[1.5rem] flex items-center justify-center shadow-2xl shadow-emerald-200 group-hover:rotate-12 transition-transform duration-500">
              <FaCalendarCheck className="text-white" size={28} />
            </div>
            Attendance Ledger
          </h1>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-[0.4em] mt-3 ml-2">
            Monitor Daily Student Presence
          </p>
        </div>
        <div className="flex bg-gray-50/50 p-2 rounded-2xl ring-1 ring-gray-100 flex-wrap gap-2">
          {["Present", "Late", "Absent", "Half Day"].map((stat) => (
            <div
              key={stat}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-gray-50"
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  stat === "Present"
                    ? "bg-emerald-500"
                    : stat === "Late"
                    ? "bg-amber-500"
                    : stat === "Absent"
                    ? "bg-rose-500"
                    : "bg-indigo-500"
                }`}
              ></div>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                {stat}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Persistence Filter */}
      <div className="rounded-[2.5rem] bg-white p-8 shadow-2xl shadow-gray-100 border border-gray-100/50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-end">
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Academic Grade
            </label>
            <select className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 text-xs font-black outline-none focus:ring-4 focus:ring-emerald-500/10 focus:bg-white transition-all">
              <option>Class 10</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Sectional Unit
            </label>
            <select className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 text-xs font-black outline-none focus:ring-4 focus:ring-emerald-500/10 focus:bg-white transition-all">
              <option>Section A</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Observation Date
            </label>
            <input
              type="date"
              value={attendanceDate}
              onChange={(e) => setAttendanceDate(e.target.value)}
              className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 text-xs font-black outline-none focus:ring-4 focus:ring-emerald-500/10 focus:bg-white transition-all"
            />
          </div>
          <button className="w-full bg-gray-900 border-b-4 border-gray-700 text-white rounded-[1.25rem] py-4 text-xs font-black uppercase tracking-[0.2em] hover:brightness-110 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-3">
            <FaSearch size={14} />
            Fetch Registry
          </button>
        </div>
      </div>

      {/* Attendance Matrix */}
      <div className="rounded-[2.5rem] bg-white p-10 shadow-2xl shadow-gray-100 border border-gray-100/50">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-gray-50">
                <th className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">
                  SN
                </th>
                <th className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Patron Info
                </th>
                <th className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Rank/Roll
                </th>
                <th className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Status Control
                </th>
                <th className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Observation Note
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50/70">
              {students.map((student, index) => (
                <tr
                  key={student.id}
                  className="group hover:bg-emerald-50/10 transition-all"
                >
                  <td className="px-6 py-8 text-gray-300 font-mono text-xs italic">
                    {index + 1}
                  </td>
                  <td className="px-6 py-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-emerald-100 group-hover:text-emerald-500 transition-colors">
                        <FaUserGraduate size={16} />
                      </div>
                      <div>
                        <div className="font-black text-gray-900 tracking-tight text-base font-serif italic">
                          {student.name}
                        </div>
                        <div className="text-[10px] font-mono text-gray-400 uppercase mt-1">
                          ID: {student.admissionNo}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-8 text-center">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-black rounded-lg border border-gray-200 uppercase tracking-widest">
                      Nº {student.rollNo}
                    </span>
                  </td>
                  <td className="px-6 py-8">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => toggleStatus(student.id, "Present")}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                          student.status === "Present"
                            ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200"
                            : "bg-gray-50 text-gray-300 hover:bg-emerald-50 hover:text-emerald-400"
                        }`}
                      >
                        <FaCheckCircle size={18} />
                      </button>
                      <button
                        onClick={() => toggleStatus(student.id, "Late")}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                          student.status === "Late"
                            ? "bg-amber-500 text-white shadow-lg shadow-amber-200"
                            : "bg-gray-50 text-gray-300 hover:bg-amber-50 hover:text-amber-400"
                        }`}
                      >
                        <FaClock size={18} />
                      </button>
                      <button
                        onClick={() => toggleStatus(student.id, "Absent")}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                          student.status === "Absent"
                            ? "bg-rose-600 text-white shadow-lg shadow-rose-200"
                            : "bg-gray-50 text-gray-300 hover:bg-rose-50 hover:text-rose-400"
                        }`}
                      >
                        <FaTimesCircle size={18} />
                      </button>
                    </div>
                    <div className="mt-2 text-center text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">
                      {student.status}
                    </div>
                  </td>
                  <td className="px-6 py-8">
                    <div className="relative group/note">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within/note:text-emerald-500 transition-colors">
                        <FaCommentDots size={12} />
                      </div>
                      <input
                        type="text"
                        placeholder="Remark..."
                        defaultValue={student.note}
                        className="w-full bg-gray-50 border-none rounded-xl py-3 pl-9 text-[10px] font-bold text-gray-500 outline-none ring-1 ring-gray-100 focus:ring-emerald-500/20 focus:bg-white transition-all"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-center pb-12">
        <button className="px-12 py-5 bg-emerald-600 border-b-4 border-emerald-800 text-white rounded-[2rem] text-sm font-black uppercase tracking-[0.3em] shadow-2xl shadow-emerald-100 hover:brightness-110 active:border-b-0 active:translate-y-1 transition-all flex items-center gap-3">
          <FaSave size={18} />
          Commit To Ledger
        </button>
      </div>
    </div>
  );
}
