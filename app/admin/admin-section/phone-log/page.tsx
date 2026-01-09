"use client";

import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaPlus,
  FaTrash,
  FaEdit,
  FaCheck,
  FaUserTie,
  FaCalendarAlt,
  FaClock,
  FaHistory,
  FaSearch,
  FaVolumeUp,
  FaVolumeMute,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

export default function PhoneLogPage() {
  const [phoneLog, setPhoneLog] = useState([
    {
      id: 1,
      name: "Dr. Julian Sterling",
      phone: "555-0101",
      date: "2024-03-25",
      followUp: "2024-03-28",
      duration: "05:22",
      type: "Incoming",
      status: "Completed",
    },
    {
      id: 2,
      name: "Elara Vance",
      phone: "555-0115",
      date: "2024-03-25",
      followUp: "2024-03-26",
      duration: "02:15",
      type: "Outgoing",
      status: "Follow-up Required",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-amber-600 rounded-xl shadow-lg ring-4 ring-amber-50">
            <FaPhoneAlt className="text-white" size={20} />
          </div>
          Telephonic Communications
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Log Creation Form */}
        <div className="lg:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-amber-50/5">
            <h4 className="mb-6 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center justify-between">
              New Communication Log
              <div className="h-1 w-12 bg-amber-100 rounded-full"></div>
            </h4>

            <form className="space-y-4 flex-1">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1 text-nowrap">
                    Interlocutor Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaUserTie
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <input
                      type="text"
                      className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-white shadow-sm"
                      placeholder="Contact Name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1 text-nowrap">
                    Communication Node <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaPhoneAlt
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <input
                      type="text"
                      className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-white shadow-sm font-mono"
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1 text-nowrap">
                      Interaction Date
                    </label>
                    <input
                      type="date"
                      className="w-full rounded-2xl border-gray-100 p-4 text-[10px] font-bold focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-white shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1 text-nowrap">
                      Next Phase
                    </label>
                    <input
                      type="date"
                      className="w-full rounded-2xl border-gray-100 p-4 text-[10px] font-bold focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-white shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <FaClock
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <input
                      type="text"
                      className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-white shadow-sm font-mono"
                      placeholder="MM:SS"
                    />
                  </div>
                  <select className="w-full rounded-2xl border-gray-100 p-4 text-xs font-black uppercase tracking-widest focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer">
                    <option>Incoming</option>
                    <option>Outgoing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1 text-nowrap">
                    Internal Memoranda
                  </label>
                  <textarea
                    className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-white shadow-sm min-h-[80px]"
                    placeholder="Brief context of the dialogue..."
                  ></textarea>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full relative overflow-hidden rounded-2xl bg-gray-900 border-b-4 border-gray-700 text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-black active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-gray-200"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <FaCheck className="italic" />
                    Catalog interaction
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Log Streams */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="flex items-center justify-between mb-8 relative">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
                Institutional Dial History
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
                      Interlocutor Profile
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Vector
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Chronology
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {phoneLog.map((log, index) => (
                    <tr
                      key={log.id}
                      className="hover:bg-amber-50/20 transition-all group"
                    >
                      <td className="px-6 py-8 text-gray-300 font-mono text-xs italic">
                        {index + 1}
                      </td>
                      <td className="px-6 py-8">
                        <div className="font-black text-gray-900 tracking-tight text-base font-serif italic uppercase leading-none mb-2">
                          {log.name}
                        </div>
                        <div className="text-[10px] font-mono text-amber-600 font-bold flex items-center gap-2">
                          <FaPhoneAlt size={10} className="text-amber-400" />{" "}
                          {log.phone}
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <div
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-xl text-[9px] font-black uppercase tracking-widest shadow-sm ring-1 ring-inset ${
                            log.type === "Incoming"
                              ? "bg-indigo-50 text-indigo-700 ring-indigo-100"
                              : "bg-rose-50 text-rose-700 ring-rose-100"
                          }`}
                        >
                          {log.type === "Incoming" ? (
                            <FaArrowDown size={8} />
                          ) : (
                            <FaArrowUp size={8} />
                          )}
                          {log.type}
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <div className="text-[10px] font-black uppercase text-gray-500 font-mono mb-1">
                          {log.date}
                        </div>
                        <div className="text-[9px] font-bold text-gray-300 flex items-center justify-center gap-1">
                          <FaClock size={8} /> {log.duration}
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
