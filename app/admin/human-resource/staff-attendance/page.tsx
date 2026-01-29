"use client";

import React, { useState } from "react";
import {
  FaUserCheck,
  FaSearch,
  FaCalendarAlt,
  FaFilter,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaClipboardList,
  FaPrint,
} from "react-icons/fa";

export default function StaffAttendancePage() {
  const [attendanceList, setAttendanceList] = useState([
    {
      id: 1,
      staffId: "STF-2024-001",
      name: "Dr. Robert Fox",
      role: "Principal",
      status: "Present",
      clockIn: "08:25 AM",
      clockOut: "04:30 PM",
    },
    {
      id: 2,
      staffId: "STF-2024-002",
      name: "Jane Cooper",
      role: "Faculty Head",
      status: "Absent",
      clockIn: "-",
      clockOut: "-",
    },
    {
      id: 3,
      staffId: "STF-2024-003",
      name: "Albert Flores",
      role: "Admin Director",
      status: "Present",
      clockIn: "08:45 AM",
      clockOut: "05:00 PM",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-sky-600 rounded-xl shadow-lg ring-4 ring-sky-50">
            <FaUserCheck className="text-white" size={20} />
          </div>
          Personnel Attendance Matrix
        </h1>
        <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-[10px] font-semibold rounded-xl  tracking-[0.2em] hover:bg-black transition-all shadow-xl active:scale-95">
          <FaPrint /> Export Chronology
        </button>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 bg-gradient-to-br from-white to-sky-50/5 relative overflow-hidden">
        <form className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <label className="block text-[10px] font-semibold text-gray-400   mb-2 px-1">
              Evaluation Date
            </label>
            <div className="relative">
              <FaCalendarAlt
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                size={12}
              />
              <input
                type="date"
                className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-[10px] font-bold focus:ring-4 focus:ring-sky-500/10 outline-none transition-all bg-white shadow-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-semibold text-gray-400   mb-2 px-1">
              Staff Hierarchy
            </label>
            <div className="relative">
              <FaFilter
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                size={12}
              />
              <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-sky-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer">
                <option>All Personnel</option>
                <option>Faculty</option>
                <option>Admin</option>
              </select>
            </div>
          </div>
          <div className="md:col-span-2 flex items-end">
            <button
              type="submit"
              className="w-full relative overflow-hidden rounded-2xl bg-sky-600 border-b-4 border-sky-800 text-white px-8 py-4 text-[10px] font-semibold  tracking-[0.2em] transition-all hover:bg-sky-700 active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-sky-100"
            >
              <div className="relative z-10 flex items-center justify-center gap-2">
                <FaSearch className="" />
                Query Chronological Stream
              </div>
            </button>
          </div>
        </form>
      </div>

      <div className="rounded-3xl bg-white shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-gray-50/30">
          <h4 className="text-xs font-semibold text-gray-400   leading-none">
            Daily Presence Registry
          </h4>
          <div className="flex gap-4">
            <span className="flex items-center gap-1.5 text-[9px] font-semibold text-emerald-500 ">
              <div className="w-2 h-2 rounded-full bg-emerald-500 blur-[2px]"></div>
              Active Log
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50/50 text-gray-400 font-bold border-b border-gray-50">
              <tr>
                <th className="px-8 py-6 text-left w-20 text-[10px]  font-semibold">
                  SN
                </th>
                <th className="px-8 py-6 text-left text-[10px]  font-semibold ">
                  Personnel Profile
                </th>
                <th className="px-8 py-6 text-center text-[10px]  font-semibold ">
                  Chronological Markers
                </th>
                <th className="px-8 py-6 text-center text-[10px]  font-semibold ">
                  Status
                </th>
                <th className="px-8 py-6 text-center text-[10px]  font-semibold ">
                  Interaction
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {attendanceList.map((a, index) => (
                <tr
                  key={a.id}
                  className="hover:bg-sky-50/10 transition-all group"
                >
                  <td className="px-8 py-10 text-gray-300  text-xs ">
                    {index + 1}
                  </td>
                  <td className="px-8 py-10">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 ring-4 ring-sky-50">
                        <FaClipboardList size={14} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 tracking-tight text-base    leading-none mb-1">
                          {a.name}
                        </div>
                        <div className="text-[9px] font-semibold text-gray-400  ">
                          {a.role} •{" "}
                          <span className="text-sky-500 ">
                            {a.staffId}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-10">
                    <div className="flex items-center justify-center gap-8">
                      <div className="text-center">
                        <div className="text-[10px] font-semibold text-gray-300  tracking-[0.1em] mb-1">
                          Clock In
                        </div>
                        <div className=" text-xs font-bold text-gray-600 flex items-center gap-1">
                          <FaClock size={10} className="text-sky-300" />{" "}
                          {a.clockIn}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-[10px] font-semibold text-gray-400  tracking-[0.1em] mb-1">
                          Clock Out
                        </div>
                        <div className=" text-xs font-bold text-gray-600 flex items-center gap-1">
                          <FaClock size={10} className="text-rose-300" />{" "}
                          {a.clockOut}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-10 text-center">
                    <span
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-[10px] font-semibold   shadow-sm ring-1 ring-inset ${
                        a.status === "Present"
                          ? "bg-emerald-50 text-emerald-700 ring-emerald-100"
                          : "bg-rose-50 text-rose-700 ring-rose-100"
                      }`}
                    >
                      {a.status === "Present" ? (
                        <FaCheckCircle />
                      ) : (
                        <FaTimesCircle />
                      )}
                      {a.status}
                    </span>
                  </td>
                  <td className="px-8 py-10 text-center">
                    <button className="px-5 py-2.5 bg-gray-50 text-gray-400 text-[9px] font-semibold rounded-xl   hover:bg-sky-600 hover:text-white transition-all shadow-sm border border-gray-100">
                      View Dossier
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

