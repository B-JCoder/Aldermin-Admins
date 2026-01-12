"use client";

import React, { useState } from "react";
import {
  FaSlidersH,
  FaSearch,
  FaEdit,
  FaTrash,
  FaCheck,
  FaUserTie,
} from "react-icons/fa";

export default function DefineLeavePage() {
  const [entitlements, setEntitlements] = useState([
    {
      id: 1,
      role: "Teacher",
      leaveType: "Sick Leave",
      days: 10,
    },
    {
      id: 2,
      role: "Teacher",
      leaveType: "Casual Leave",
      days: 8,
    },
    {
      id: 3,
      role: "Admin Staff",
      leaveType: "Sick Leave",
      days: 12,
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-gray-600 rounded-xl shadow-lg ring-4 ring-gray-50">
            <FaSlidersH className="text-white" size={20} />
          </div>
          Leave Entitlements
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-gray-50/5">
            <h4 className="mb-6 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center justify-between">
              Define Quota
              <div className="h-1 w-12 bg-gray-200 rounded-full"></div>
            </h4>

            <form className="space-y-4 flex-1">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Target Role
                  </label>
                  <select className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-gray-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer">
                    <option>Select Role...</option>
                    <option>Teacher</option>
                    <option>Accountant</option>
                    <option>Librarian</option>
                    <option>Admin Staff</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Leave Type
                  </label>
                  <select className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-gray-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer">
                    <option>Select Type...</option>
                    <option>Sick Leave</option>
                    <option>Casual Leave</option>
                    <option>Maternity Leave</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Days per Year
                  </label>
                  <input
                    type="number"
                    className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-gray-500/10 outline-none transition-all bg-white shadow-sm"
                    placeholder="e.g. 12"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full relative overflow-hidden rounded-2xl bg-gray-900 border-b-4 border-gray-700 text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-black active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-gray-200"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <FaCheck className="italic" />
                    Assign Quota
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="flex items-center justify-between mb-8 relative">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
                Entitlement Matrix
              </h4>
              <div className="relative">
                <FaSearch
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                  size={14}
                />
                <input
                  type="text"
                  placeholder="Search Roles..."
                  className="pl-10 pr-4 py-2 rounded-xl bg-gray-50 border-none text-[10px] font-bold focus:ring-2 focus:ring-gray-500/10 outline-none w-48 transition-all"
                />
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-50 relative">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50/70 text-gray-500 font-bold border-b border-gray-50">
                  <tr>
                    <th className="px-6 py-6 text-left text-[10px] uppercase font-black tracking-widest">
                      Role
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Leave Type
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Quota (Days)
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {entitlements.map((e) => (
                    <tr
                      key={e.id}
                      className="group hover:bg-gray-50/20 transition-all"
                    >
                      <td className="px-6 py-8">
                        <div className="font-black text-gray-900 tracking-tight text-base font-serif italic uppercase leading-none mb-1">
                          {e.role}
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center text-gray-500 font-bold text-xs">
                        {e.leaveType}
                      </td>
                      <td className="px-6 py-8 text-center">
                        <div className="text-[10px] font-black uppercase text-gray-900 font-mono">
                          {e.days}
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
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
      </div>
    </div>
  );
}
