"use client";

import React, { useState } from "react";
import {
  FaUserTag,
  FaSearch,
  FaBook,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaCommentDots,
  FaUserGraduate,
} from "react-icons/fa";

export default function StudentWiseAttendancePage() {
  const [attendanceDate, setAttendanceDate] = useState("2023-12-15");
  const [students, setStudents] = useState([
    {
      id: 1,
      admissionNo: "ADM-2023-001",
      name: "Avery Sterling",
      rollNo: "10",
      status: "Present",
      note: "Participated in class discussion",
    },
    {
      id: 2,
      admissionNo: "ADM-2023-042",
      name: "Elara Vance",
      rollNo: "15",
      status: "Late",
      note: "Bus delayed",
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
            <div className="w-14 h-14 bg-indigo-900 rounded-[1.5rem] flex items-center justify-center shadow-2xl shadow-indigo-100 group-hover:rotate-12 transition-transform duration-500">
              <FaUserTag className="text-white" size={28} />
            </div>
            Subject Specific Attendance
          </h1>
          <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.4em] mt-3 ml-2">
            Course-level Presence Tracking
          </p>
        </div>
        <div className="flex bg-gray-50/50 p-2 rounded-2xl ring-1 ring-gray-100 flex-wrap gap-2">
          {["Present", "Late", "Absent"].map((stat) => (
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
                    : "bg-rose-500"
                }`}
              ></div>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                {stat}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Course Context Filter */}
      <div className="rounded-[2.5rem] bg-white p-8 shadow-2xl shadow-gray-100 border border-gray-100/50">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Academic Grade
            </label>
            <select className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 text-xs font-black outline-none focus:ring-4 focus:ring-indigo-500/10 focus:bg-white transition-all">
              <option>Class 10</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Sectional Unit
            </label>
            <select className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 text-xs font-black outline-none focus:ring-4 focus:ring-indigo-500/10 focus:bg-white transition-all">
              <option>Section A</option>
            </select>
          </div>
          <div className="relative">
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Subject Discipline
            </label>
            <div className="relative">
              <FaBook
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                size={14}
              />
              <select className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 pl-10 text-xs font-black outline-none focus:ring-4 focus:ring-indigo-500/10 focus:bg-white transition-all appearance-none">
                <option>Theoretical Physics</option>
                <option>Mathematics</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Lecture Date
            </label>
            <input
              type="date"
              value={attendanceDate}
              onChange={(e) => setAttendanceDate(e.target.value)}
              className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 text-xs font-black outline-none focus:ring-4 focus:ring-indigo-500/10 focus:bg-white transition-all"
            />
          </div>
          <button className="w-full bg-indigo-900 border-b-4 border-indigo-950 text-white rounded-[1.25rem] py-4 text-xs font-black uppercase tracking-[0.2em] hover:brightness-110 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-3">
            <FaSearch size={14} />
            Verify Roll
          </button>
        </div>
      </div>

      {/* Attendance Registry */}
      <div className="rounded-[2.5rem] bg-white p-10 shadow-2xl shadow-gray-100 border border-gray-100/50">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-gray-50">
                <th className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">
                  SN
                </th>
                <th className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Patron Information
                </th>
                <th className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Lecture Nº
                </th>
                <th className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Engagement Status
                </th>
                <th className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Session Remarks
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50/70">
              {students.map((student, index) => (
                <tr
                  key={student.id}
                  className="group hover:bg-gray-50/50 transition-all"
                >
                  <td className="px-6 py-8 text-gray-300 font-mono text-xs italic">
                    {index + 1}
                  </td>
                  <td className="px-6 py-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-white group-hover:shadow-lg transition-all border border-gray-100">
                        <FaUserGraduate size={16} />
                      </div>
                      <div>
                        <div className="font-black text-gray-900 tracking-tight text-base font-serif italic leading-none">
                          {student.name}
                        </div>
                        <div className="text-[9px] font-mono text-gray-400 uppercase mt-1.5 tracking-tighter">
                          Credential: {student.admissionNo}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-8 text-center">
                    <div className="text-lg font-black text-gray-700 font-mono italic">
                      #{student.rollNo}
                    </div>
                    <div className="text-[8px] font-black text-gray-300 uppercase tracking-widest">
                      Desk Mark
                    </div>
                  </td>
                  <td className="px-6 py-8">
                    <div className="flex items-center justify-center gap-1.5">
                      <button
                        onClick={() => toggleStatus(student.id, "Present")}
                        className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${
                          student.status === "Present"
                            ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200"
                            : "bg-gray-50 text-gray-300 hover:bg-emerald-50 hover:text-emerald-500"
                        }`}
                      >
                        Present
                      </button>
                      <button
                        onClick={() => toggleStatus(student.id, "Late")}
                        className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${
                          student.status === "Late"
                            ? "bg-amber-500 text-white shadow-lg shadow-amber-200"
                            : "bg-gray-50 text-gray-300 hover:bg-amber-50 hover:text-amber-500"
                        }`}
                      >
                        Late
                      </button>
                      <button
                        onClick={() => toggleStatus(student.id, "Absent")}
                        className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${
                          student.status === "Absent"
                            ? "bg-rose-600 text-white shadow-lg shadow-rose-200"
                            : "bg-gray-50 text-gray-300 hover:bg-rose-50 hover:text-rose-500"
                        }`}
                      >
                        Absent
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-8">
                    <div className="relative group/note">
                      <FaCommentDots
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-200 group-focus-within/note:text-indigo-400 transition-colors"
                        size={12}
                      />
                      <input
                        type="text"
                        placeholder="Enter observation..."
                        defaultValue={student.note}
                        className="w-full bg-gray-50/50 border-none rounded-xl py-3 pl-9 text-[10px] font-bold text-gray-500 outline-none ring-1 ring-gray-100 focus:ring-indigo-500/20 focus:bg-white transition-all"
                      />
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
