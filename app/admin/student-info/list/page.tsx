"use client";

import React, { useState } from "react";
import {
  FaUserGraduate,
  FaSearch,
  FaFilter,
  FaEdit,
  FaTrash,
  FaEye,
  FaIdCard,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function StudentListPage() {
  const [students, setStudents] = useState([
    {
      id: 1,
      admissionNo: "ADM-2023-001",
      name: "Avery Sterling",
      fatherName: "Julian Sterling",
      dob: "2010-05-15",
      className: "Class 10-A",
      gender: "Male",
      category: "General",
    },
    {
      id: 2,
      admissionNo: "ADM-2023-042",
      name: "Elara Vance",
      fatherName: "Silas Vance",
      dob: "2011-02-28",
      className: "Class 10-A",
      gender: "Female",
      category: "Scholarship",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-200 rotate-3">
              <FaUserGraduate className="text-white -rotate-3" size={24} />
            </div>
            Student Directory
          </h1>
          <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mt-2 ml-1">
            Academic Year 2023-24
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-6 py-3 rounded-2xl bg-indigo-50 text-indigo-600 font-black text-xs uppercase tracking-widest hover:bg-indigo-100 transition-all border border-indigo-100 italic">
            Batch Actions
          </button>
          <button className="px-6 py-3 rounded-2xl bg-gray-900 text-white font-black text-xs uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-gray-200">
            Export Ledger
          </button>
        </div>
      </div>

      {/* Advanced Filter Box */}
      <div className="rounded-[2.5rem] bg-white p-8 shadow-2xl shadow-gray-100 border border-gray-100/50">
        <div className="flex items-center gap-2 mb-8 uppercase tracking-[0.2em] font-black text-[10px] text-gray-300">
          <FaFilter size={10} className="text-indigo-400" />
          Precision Search
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Session Year
            </label>
            <select className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 text-xs font-black outline-none ring-2 ring-transparent focus:ring-indigo-500/10 focus:bg-white transition-all">
              <option>2023 - 2024</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Academic Class
            </label>
            <select className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 text-xs font-black outline-none ring-2 ring-transparent focus:ring-indigo-500/10 focus:bg-white transition-all">
              <option>Class 10</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Sectional Unit
            </label>
            <select className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 text-xs font-black outline-none ring-2 ring-transparent focus:ring-indigo-500/10 focus:bg-white transition-all">
              <option>Section A</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-transparent uppercase mb-3 ml-2 select-none">
              Action
            </label>
            <button className="w-full bg-indigo-600 border-b-4 border-indigo-800 text-white rounded-[1.25rem] py-4 text-xs font-black uppercase tracking-[0.2em] hover:brightness-110 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-3">
              <FaSearch size={14} />
              Query Database
            </button>
          </div>
        </div>
      </div>

      {/* Results Table */}
      <div className="rounded-[2.5rem] bg-white p-10 shadow-2xl shadow-gray-100 border border-gray-100/50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/30 rounded-full blur-3xl -mr-32 -mt-32"></div>

        <div className="relative overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-gray-50">
                <th className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Identity
                </th>
                <th className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Student Profile
                </th>
                <th className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Guardianship
                </th>
                <th className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Class Point
                </th>
                <th className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Interaction
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50/50">
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="group hover:bg-gray-50/50 transition-all"
                >
                  <td className="px-6 py-8">
                    <div className="font-mono text-[10px] font-black text-indigo-500 bg-indigo-50/50 px-3 py-1 rounded-full inline-block border border-indigo-100">
                      {student.admissionNo}
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-[9px] font-black text-gray-300 uppercase tracking-tighter">
                      <FaIdCard size={10} /> Certified Member
                    </div>
                  </td>
                  <td className="px-6 py-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full ring-4 ring-gray-50 border-2 border-white bg-indigo-100 flex items-center justify-center text-indigo-400 font-black text-lg shadow-inner">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-base font-black text-gray-900 tracking-tight leading-none group-hover:text-indigo-600 transition-colors font-serif italic">
                          {student.name}
                        </div>
                        <div className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-widest flex items-center gap-2">
                          {student.gender}{" "}
                          <span className="w-1 h-1 bg-gray-200 rounded-full"></span>{" "}
                          {student.dob}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-8">
                    <div className="text-xs font-black text-gray-700 tracking-tight mb-1">
                      {student.fatherName}
                    </div>
                    <div className="text-[9px] font-black text-indigo-300 uppercase leading-none">
                      Primary Contact
                    </div>
                  </td>
                  <td className="px-6 py-8 text-center">
                    <div className="inline-flex flex-col items-center">
                      <div className="px-4 py-1.5 bg-gray-900 text-white text-[10px] font-black rounded-lg uppercase tracking-widest shadow-lg shadow-gray-200">
                        {student.className}
                      </div>
                      <div className="mt-2 text-[9px] font-black text-emerald-500 uppercase flex items-center gap-1 italic">
                        <FaMapMarkerAlt size={8} /> Active Desk
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-8">
                    <div className="flex justify-center gap-2">
                      <button className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                        <FaEye size={14} />
                      </button>
                      <button className="p-3 bg-blue-50 text-blue-600 rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                        <FaEdit size={14} />
                      </button>
                      <button className="p-3 bg-rose-50 text-rose-600 rounded-2xl hover:bg-rose-600 hover:text-white transition-all shadow-sm">
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
