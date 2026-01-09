"use client";

import React, { useState } from "react";
import {
  FaUserCheck,
  FaSearch,
  FaCheckCircle,
  FaTimesCircle,
  FaUserGraduate,
  FaFileAlt,
} from "react-icons/fa";

export default function ExamAttendancePage() {
  const [students, setStudents] = useState([
    {
      id: 1,
      admissionNo: "ADM-2023-001",
      name: "Avery Sterling",
      className: "10-A",
      rollNo: "10",
      attendance: "Present",
    },
    {
      id: 2,
      admissionNo: "ADM-2023-042",
      name: "Elara Vance",
      className: "10-A",
      rollNo: "15",
      attendance: "Absent",
    },
  ]);

  const toggleAttendance = (id: number) => {
    setStudents(
      students.map((s) =>
        s.id === id
          ? {
              ...s,
              attendance: s.attendance === "Present" ? "Absent" : "Present",
            }
          : s
      )
    );
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tighter flex items-center gap-4">
            <div className="w-14 h-14 bg-rose-600 rounded-[1.5rem] flex items-center justify-center shadow-2xl shadow-rose-200">
              <FaUserCheck className="text-white" size={28} />
            </div>
            Proctorial Attendance
          </h1>
          <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.4em] mt-3 ml-2 italic">
            Assessment Eligibility & Presence
          </p>
        </div>
      </div>

      {/* Strategic Filter */}
      <div className="rounded-[2.5rem] bg-white p-8 shadow-2xl shadow-gray-100 border border-gray-100/50">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Active Exam
            </label>
            <select className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 text-xs font-black outline-none focus:ring-4 focus:ring-rose-500/10 focus:bg-white transition-all appearance-none italic">
              <option>Finals - Year 2024</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Grade
            </label>
            <select className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 text-xs font-black outline-none focus:ring-4 focus:ring-rose-500/10 focus:bg-white transition-all">
              <option>Class 10</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Section
            </label>
            <select className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 text-xs font-black outline-none focus:ring-4 focus:ring-rose-500/10 focus:bg-white transition-all">
              <option>Section A</option>
            </select>
          </div>
          <div className="relative">
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Subject
            </label>
            <div className="relative">
              <FaFileAlt
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                size={12}
              />
              <select className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 pl-10 text-xs font-black outline-none focus:ring-4 focus:ring-rose-500/10 focus:bg-white transition-all appearance-none tracking-tighter">
                <option>Theoretical Physics</option>
              </select>
            </div>
          </div>
          <button className="w-full bg-gray-900 border-b-4 border-gray-700 text-white rounded-[1.25rem] py-4 text-xs font-black uppercase tracking-[0.2em] hover:brightness-110 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-3">
            <FaSearch size={14} />
            Validate
          </button>
        </div>
      </div>

      {/* Attendance Registry */}
      <div className="rounded-[2.5rem] bg-white p-10 shadow-2xl shadow-gray-100 border border-gray-100/50">
        <div className="overflow-x-auto">
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
                  Sectional Unit
                </th>
                <th className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Roll/Nº
                </th>
                <th className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Presence Check
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50/70">
              {students.map((student, index) => (
                <tr
                  key={student.id}
                  className="group hover:bg-rose-50/10 transition-all"
                >
                  <td className="px-6 py-8 text-gray-300 font-mono text-xs italic">
                    {index + 1}
                  </td>
                  <td className="px-6 py-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-rose-600 group-hover:text-white transition-all shadow-sm">
                        <FaUserGraduate size={16} />
                      </div>
                      <div>
                        <div className="font-black text-gray-900 tracking-tight text-base font-serif italic mb-1 uppercase group-hover:text-rose-600 transition-colors leading-none">
                          {student.name}
                        </div>
                        <div className="text-[9px] font-mono text-gray-400 uppercase tracking-tighter italic">
                          Credential: {student.admissionNo}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-8 text-center">
                    <span className="px-3 py-1 bg-gray-50 text-gray-500 text-[10px] font-black rounded-lg uppercase tracking-tighter border border-gray-100">
                      Class {student.className}
                    </span>
                  </td>
                  <td className="px-6 py-8 text-center">
                    <div className="text-lg font-black text-gray-700 italic font-mono tracking-tighter">
                      #{student.rollNo}
                    </div>
                    <div className="text-[8px] font-black text-gray-300 uppercase tracking-widest">
                      Desk Mark
                    </div>
                  </td>
                  <td className="px-6 py-8 text-center">
                    <button
                      onClick={() => toggleAttendance(student.id)}
                      className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                        student.attendance === "Present"
                          ? "bg-emerald-600 text-white shadow-lg shadow-emerald-100"
                          : "bg-rose-600 text-white shadow-lg shadow-rose-100"
                      }`}
                    >
                      {student.attendance === "Present" ? (
                        <FaCheckCircle />
                      ) : (
                        <FaTimesCircle />
                      )}
                      {student.attendance}
                    </button>
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
