"use client";

import React, { useState } from "react";
import {
  FaUserTie,
  FaSearch,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaIdCard,
  FaPlus,
  FaFilter,
  FaEdit,
} from "react-icons/fa";
import Link from "next/link";

export default function StaffDirectoryPage() {
  const [staffList, setStaffList] = useState([
    {
      id: 1,
      staffNo: "STF-2024-001",
      name: "Prof. Julian Sterling",
      role: "Principal",
      department: "Administration",
      designation: "Chief Academic Officer",
      mobile: "+1 234 567 890",
      email: "julian.s@academy.edu",
    },
    {
      id: 2,
      staffNo: "STF-2024-015",
      name: "Dr. Elara Vance",
      role: "Teacher",
      department: "Behavioral Sciences",
      designation: "Senior Lecturer",
      mobile: "+1 234 567 891",
      email: "elara.v@academy.edu",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-xl shadow-lg ring-4 ring-blue-50">
            <FaUserTie className="text-white" size={20} />
          </div>
          Personnel Directory
        </h1>
        <Link
          href="/admin/human-resource/staff/add"
          className="px-6 py-3 bg-gray-900 text-white text-[11px] font-black uppercase tracking-widest rounded-2xl hover:bg-black transition-all shadow-xl shadow-gray-200 flex items-center gap-2 active:scale-95"
        >
          <FaPlus size={12} />
          Enlist Personnel
        </Link>
      </div>

      {/* Strategic Filter Matrix */}
      <div className="rounded-[2.5rem] bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 bg-gradient-to-br from-white to-blue-50/5">
        <h4 className="mb-8 text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none flex items-center gap-3">
          <FaFilter className="text-blue-400" />
          Query parameters
          <div className="h-[1px] flex-1 bg-gray-100"></div>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 ml-1">
              Functional Role
            </label>
            <select className="w-full bg-white border-gray-100 rounded-2xl p-4 text-xs font-bold outline-none ring-1 ring-gray-100 focus:ring-4 focus:ring-blue-500/10 transition-all appearance-none">
              <option>All Personnel</option>
              <option>Teaching Faculty</option>
              <option>Administrative Staff</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 ml-1">
              Staff Identifier
            </label>
            <div className="relative">
              <FaIdCard
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                size={12}
              />
              <input
                type="text"
                placeholder="STF-..."
                className="w-full bg-white border-gray-100 rounded-2xl p-4 pl-10 text-xs font-bold outline-none ring-1 ring-gray-100 focus:ring-4 focus:ring-blue-500/10 transition-all"
              />
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 ml-1">
              Search by name
            </label>
            <div className="relative">
              <FaSearch
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                size={12}
              />
              <input
                type="text"
                placeholder="e.g. Sterling"
                className="w-full bg-white border-gray-100 rounded-2xl p-4 pl-10 text-xs font-bold outline-none ring-1 ring-gray-100 focus:ring-4 focus:ring-blue-500/10 transition-all"
              />
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white rounded-2xl py-4 text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 active:scale-[0.98]">
            Execute Query
          </button>
        </div>
      </div>

      {/* Result Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {staffList.map((staff) => (
          <div
            key={staff.id}
            className="rounded-[2rem] bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex items-start gap-6 hover:shadow-2xl hover:shadow-blue-100/50 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

            <div className="w-24 h-24 rounded-3xl bg-gray-50 flex-shrink-0 flex items-center justify-center text-blue-400 border border-gray-100 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-3 shadow-sm">
              <FaUserTie size={40} />
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <div className="text-[10px] font-mono text-blue-500 font-bold uppercase tracking-tighter mb-1">
                  {staff.staffNo}
                </div>
                <h3 className="text-lg font-black text-gray-900 font-serif italic uppercase leading-tight">
                  {staff.name}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-0.5 bg-gray-900 text-white text-[8px] font-black rounded uppercase tracking-widest">
                    {staff.role}
                  </span>
                  <span className="h-1 w-1 bg-gray-200 rounded-full"></span>
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                    {staff.designation}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 pt-2 border-t border-gray-50">
                <div className="flex items-center gap-2 text-[10px] text-gray-500">
                  <FaBuilding className="text-gray-300" size={10} />
                  <span className="font-bold text-gray-700 uppercase tracking-tighter">
                    {staff.department}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-gray-500 italic">
                  <FaEnvelope className="text-gray-300" size={10} />
                  <span>{staff.email}</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono">
                  <FaPhone className="text-gray-300" size={10} />
                  <span>{staff.mobile}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button className="p-3 bg-gray-50 rounded-xl text-blue-500 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                <FaEdit size={12} />
              </button>
              <button className="p-3 bg-gray-50 rounded-xl text-emerald-500 hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
                <FaSearch size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
