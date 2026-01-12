"use client";

import React, { useState } from "react";
import {
  FaUserShield,
  FaSearch,
  FaEdit,
  FaTrash,
  FaCheck,
  FaPlus,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

export default function UserManagementPage() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Admin User",
      email: "admin@school.com",
      role: "Super Admin",
      status: "Active",
      lastLogin: "2024-03-25 09:00 AM",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john.doe@school.com",
      role: "Teacher",
      status: "Active",
      lastLogin: "2024-03-24 02:15 PM",
    },
    {
      id: 3,
      name: "Jane Smith",
      email: "jane.smith@school.com",
      role: "Accountant",
      status: "Inactive",
      lastLogin: "2024-02-28 10:00 AM",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-gray-900 rounded-xl shadow-lg ring-4 ring-gray-100">
            <FaUserShield className="text-white" size={20} />
          </div>
          System User Control
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* User Creation */}
        <div className="lg:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-gray-100/50">
            <h4 className="mb-6 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center justify-between">
              Register User
              <div className="h-1 w-12 bg-gray-300 rounded-full"></div>
            </h4>

            <form className="space-y-4 flex-1">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-gray-500/10 outline-none transition-all bg-white shadow-sm"
                    placeholder="e.g. John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaEnvelope
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <input
                      type="email"
                      className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-gray-500/10 outline-none transition-all bg-white shadow-sm"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                      System Role
                    </label>
                    <select className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-gray-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer">
                      <option>Teacher</option>
                      <option>Admin</option>
                      <option>Accountant</option>
                      <option>Librarian</option>
                      <option>Student</option>
                      <option>Parent</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                      Password
                    </label>
                    <div className="relative">
                      <FaLock
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                        size={12}
                      />
                      <input
                        type="password"
                        className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-gray-500/10 outline-none transition-all bg-white shadow-sm"
                        placeholder="••••••"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full relative overflow-hidden rounded-2xl bg-gray-900 border-b-4 border-gray-700 text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-black active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-gray-200"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <FaPlus className="italic" />
                    Create Account
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* User List */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="flex items-center justify-between mb-8 relative">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
                Authorized Personnel
              </h4>
              <div className="relative">
                <FaSearch
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                  size={14}
                />
                <input
                  type="text"
                  placeholder="Search Users..."
                  className="pl-10 pr-4 py-3 rounded-2xl bg-gray-50 border-none text-xs font-bold focus:ring-2 focus:ring-gray-500/10 outline-none w-64 transition-all"
                />
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
                      User Profile
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Role
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Status
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {users.map((u, index) => (
                    <tr
                      key={u.id}
                      className="group hover:bg-gray-50/20 transition-all"
                    >
                      <td className="px-6 py-8 text-gray-300 font-mono text-xs italic">
                        {index + 1}
                      </td>
                      <td className="px-6 py-8">
                        <div className="font-black text-gray-900 tracking-tight text-base font-serif italic uppercase leading-none mb-1">
                          {u.name}
                        </div>
                        <div className="text-[10px] font-mono text-gray-400 font-bold flex items-center gap-2">
                          <FaEnvelope size={10} /> {u.email}
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[9px] font-black rounded-xl uppercase tracking-[0.2em] shadow-sm">
                          {u.role}
                        </span>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm ring-1 ring-inset ${
                            u.status === "Active"
                              ? "bg-emerald-50 text-emerald-700 ring-emerald-100"
                              : "bg-red-50 text-red-700 ring-red-100"
                          }`}
                        >
                          {u.status}
                        </span>
                        <div className="text-[9px] text-gray-300 mt-1 font-mono">
                          Last: {u.lastLogin}
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
