"use client";

import React, { useState } from "react";
import {
  FaBook,
  FaPlus,
  FaTrash,
  FaEdit,
  FaCheck,
  FaUserFriends,
  FaIdCard,
  FaCalendarAlt,
  FaClock,
  FaEnvelope,
  FaFileAlt,
  FaMapMarkerAlt,
  FaSearch,
} from "react-icons/fa";

export default function VisitorBookPage() {
  const [visitorList, setVisitorList] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      phone: "555-0101",
      person: "2",
      purpose: "Admissions Inquiry",
      date: "2024-03-25",
      timeIn: "09:00 AM",
      status: "Checked In",
    },
    {
      id: 2,
      name: "Bob Smith",
      phone: "555-0102",
      person: "1",
      purpose: "Vendor Delivery",
      date: "2024-03-25",
      timeIn: "10:30 AM",
      status: "Checked Out",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-amber-600 rounded-xl shadow-lg ring-4 ring-amber-50">
            <FaBook className="text-white" size={20} />
          </div>
          Institutional Visitor Ledger
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Creation Form */}
        <div className="lg:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-amber-50/5">
            <h4 className="mb-6 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center justify-between">
              Log External Interaction
              <div className="h-1 w-12 bg-amber-100 rounded-full"></div>
            </h4>

            <form className="space-y-6 flex-1">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Visitor Appellation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-white shadow-sm"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                      Identity Token <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FaIdCard
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                        size={12}
                      />
                      <input
                        type="text"
                        className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-white shadow-sm"
                        placeholder="ID No"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                      Census
                    </label>
                    <div className="relative">
                      <FaUserFriends
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                        size={12}
                      />
                      <input
                        type="number"
                        className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-white shadow-sm"
                        placeholder="1"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Interaction Intent
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-white shadow-sm italic"
                    placeholder="e.g. Academic Consultation"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <FaCalendarAlt
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <input
                      type="date"
                      className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-[10px] font-bold focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-white shadow-sm"
                    />
                  </div>
                  <div className="relative">
                    <FaClock
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <input
                      type="time"
                      className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-[10px] font-bold focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-white shadow-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full relative overflow-hidden rounded-2xl bg-gray-900 border-b-4 border-gray-700 text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-black active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-gray-200"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <FaCheck className="italic" />
                    Authorize Entry
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* List Index */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="flex items-center justify-between mb-8 relative">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
                Live Interaction Stream
              </h4>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-50 relative">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50/70 text-gray-500 font-bold border-b border-gray-50">
                  <tr>
                    <th className="px-6 py-6 text-left w-16 text-[10px] uppercase font-black">
                      SN
                    </th>
                    <th className="px-6 py-6 text-left text-[10px] uppercase font-black tracking-widest">
                      Patron Profile
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Temporal Node
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Status
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Interaction
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {visitorList.map((v, index) => (
                    <tr
                      key={v.id}
                      className="hover:bg-amber-50/20 transition-all group"
                    >
                      <td className="px-6 py-8 text-gray-300 font-mono text-xs italic">
                        {index + 1}
                      </td>
                      <td className="px-6 py-8">
                        <div className="font-black text-gray-900 tracking-tight text-base font-serif italic uppercase leading-none mb-2">
                          {v.name}
                        </div>
                        <div className="text-[9px] font-black text-amber-600 uppercase tracking-widest flex items-center gap-2">
                          <FaUserFriends size={10} /> {v.person} Person(s)
                          <span className="h-1 w-1 bg-gray-200 rounded-full"></span>
                          {v.purpose}
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center text-gray-400 italic">
                        <div className="text-[10px] font-black uppercase text-gray-500 font-mono mb-1">
                          {v.date}
                        </div>
                        <div className="text-[9px] font-bold text-gray-300">
                          {v.timeIn} Arrival
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <span
                          className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm ring-1 ring-inset ${
                            v.status === "Checked In"
                              ? "bg-emerald-50 text-emerald-700 ring-emerald-100 animate-pulse"
                              : "bg-gray-100 text-gray-500 ring-gray-200"
                          }`}
                        >
                          {v.status}
                        </span>
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
