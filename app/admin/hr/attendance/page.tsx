"use client";

import React, { useState } from "react";
import {
  FaUserCheck,
  FaSearch,
  FaRegCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaRunning,
} from "react-icons/fa";

export default function StaffAttendancePage() {
  const [attendanceDate, setAttendanceDate] = useState("2023-12-14");
  const [attendanceList, setAttendanceList] = useState([
    {
      id: 1,
      staffId: "STF001",
      name: "Marcus Aurelius",
      role: "Teacher",
      status: "Present",
      clockIn: "08:30 AM",
      clockOut: "04:30 PM",
    },
    {
      id: 2,
      staffId: "STF008",
      name: "Seneca Minor",
      role: "Admin",
      status: "Absent",
      clockIn: "-",
      clockOut: "-",
    },
    {
      id: 3,
      staffId: "STF012",
      name: "Epictetus Slave",
      role: "Librarian",
      status: "Late",
      clockIn: "09:12 AM",
      clockOut: "04:30 PM",
    },
  ]);

  const handleStatusChange = (id: number, newStatus: string) => {
    setAttendanceList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h4 className="text-xl font-bold text-gray-800 tracking-tight">
            Staff Daily Attendance
          </h4>
          <p className="text-xs text-gray-500 font-medium">
            Record and track daily presence of institutional personnel
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <FaRegCalendarAlt
              className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500"
              size={14}
            />
            <input
              type="date"
              value={attendanceDate}
              onChange={(e) => setAttendanceDate(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-xl bg-white border border-gray-200 text-sm font-bold focus:ring-2 focus:ring-blue-500/20 outline-none shadow-sm"
            />
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-2.5 text-white font-black text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-100 uppercase tracking-widest">
            <FaUserCheck size={14} /> Mark All Present
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-emerald-500 p-4 rounded-xl text-white shadow-lg shadow-emerald-100 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black uppercase opacity-70">
              Present
            </p>
            <h3 className="text-2xl font-black">42</h3>
          </div>
          <FaCheckCircle size={24} className="opacity-30" />
        </div>
        <div className="bg-rose-500 p-4 rounded-xl text-white shadow-lg shadow-rose-100 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black uppercase opacity-70">
              Absent
            </p>
            <h3 className="text-2xl font-black">04</h3>
          </div>
          <FaTimesCircle size={24} className="opacity-30" />
        </div>
        <div className="bg-amber-500 p-4 rounded-xl text-white shadow-lg shadow-amber-100 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black uppercase opacity-70">Late</p>
            <h3 className="text-2xl font-black">03</h3>
          </div>
          <FaClock size={24} className="opacity-30" />
        </div>
        <div className="bg-indigo-500 p-4 rounded-xl text-white shadow-lg shadow-indigo-100 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black uppercase opacity-70">
              On Leave
            </p>
            <h3 className="text-2xl font-black">02</h3>
          </div>
          <FaRunning size={24} className="opacity-30" />
        </div>
      </div>

      {/* Table Section */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 ring-1 ring-black/5">
        <div className="flex items-center justify-between mb-8">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">
            Personnel Attendance Ledger
          </h4>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black text-gray-400 uppercase">
              Sort by:
            </span>
            <select className="bg-gray-50 border-none text-[10px] font-black uppercase rounded-lg px-2 py-1 outline-none">
              <option>Department</option>
              <option>Role</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50/50 text-gray-500 font-bold border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-left w-16 uppercase tracking-tighter text-[10px]">
                  SN
                </th>
                <th className="px-6 py-4 text-left uppercase tracking-tighter text-[10px]">
                  Staff Identity
                </th>
                <th className="px-6 py-4 text-left uppercase tracking-tighter text-[10px]">
                  Role
                </th>
                <th className="px-6 py-4 text-center uppercase tracking-tighter text-[10px]">
                  Attendance
                </th>
                <th className="px-6 py-4 text-center uppercase tracking-tighter text-[10px]">
                  Log Times
                </th>
                <th className="px-6 py-4 text-center uppercase tracking-tighter text-[10px]">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {attendanceList.map((item, index) => (
                <tr
                  key={item.id}
                  className="hover:bg-blue-50/10 transition-colors group"
                >
                  <td className="px-6 py-4 text-gray-400 font-mono text-xs">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-black text-gray-900 tracking-tight leading-none mb-1">
                      {item.name}
                    </div>
                    <div className="text-[10px] uppercase font-bold text-gray-400">
                      ID: {item.staffId}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-bold text-gray-600 px-2 py-0.5 bg-gray-100 rounded-md">
                      {item.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-1">
                      <button
                        onClick={() => handleStatusChange(item.id, "Present")}
                        className={`px-3 py-1 rounded-full text-[10px] font-black uppercase transition-all ${
                          item.status === "Present"
                            ? "bg-emerald-500 text-white shadow-md"
                            : "bg-gray-50 text-gray-400 hover:bg-emerald-50 hover:text-emerald-500"
                        }`}
                      >
                        P
                      </button>
                      <button
                        onClick={() => handleStatusChange(item.id, "Late")}
                        className={`px-3 py-1 rounded-full text-[10px] font-black uppercase transition-all ${
                          item.status === "Late"
                            ? "bg-amber-500 text-white shadow-md"
                            : "bg-gray-50 text-gray-400 hover:bg-amber-50 hover:text-amber-500"
                        }`}
                      >
                        L
                      </button>
                      <button
                        onClick={() => handleStatusChange(item.id, "Absent")}
                        className={`px-3 py-1 rounded-full text-[10px] font-black uppercase transition-all ${
                          item.status === "Absent"
                            ? "bg-rose-500 text-white shadow-md"
                            : "bg-gray-50 text-gray-400 hover:bg-rose-50 hover:text-rose-500"
                        }`}
                      >
                        A
                      </button>
                      <button
                        onClick={() => handleStatusChange(item.id, "Half Day")}
                        className={`px-3 py-1 rounded-full text-[10px] font-black uppercase transition-all ${
                          item.status === "Half Day"
                            ? "bg-indigo-500 text-white shadow-md"
                            : "bg-gray-50 text-gray-400 hover:bg-indigo-50 hover:text-indigo-500"
                        }`}
                      >
                        H
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-4">
                      <div className="text-center">
                        <p className="text-[10px] font-black text-gray-300 uppercase leading-none mb-1">
                          In
                        </p>
                        <p className="text-xs font-bold text-gray-700 tabular-nums">
                          {item.clockIn}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-[10px] font-black text-gray-300 uppercase leading-none mb-1">
                          Out
                        </p>
                        <p className="text-xs font-bold text-gray-700 tabular-nums">
                          {item.clockOut}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      placeholder="Add remark..."
                      className="w-full bg-gray-50 border-none rounded-lg p-2 text-xs focus:ring-1 focus:ring-blue-500 outline-none"
                    />
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
