"use client";

import React, { useState } from "react";
import {
  FaBookReader,
  FaSearch,
  FaHistory,
  FaCheckCircle,
  FaExclamationCircle,
  FaUserTag,
  FaBarcode,
  FaCalendarAlt,
  FaPrint,
  FaArrowRight,
} from "react-icons/fa";

export default function IssuedBooksPage() {
  const [issuedList, setIssuedList] = useState([
    {
      id: 1,
      title: "The Selfish Gene",
      bookNo: "B-501",
      isbn: "978-0198788607",
      member: "Julian Sterling",
      author: "Richard Dawkins",
      subject: "Evolutionary Biology",
      issueDate: "2024-03-10",
      returnDate: "2024-03-24",
      status: "Active",
    },
    {
      id: 2,
      title: "Brief Answers",
      bookNo: "B-204",
      isbn: "978-1473695986",
      member: "Prof. Vance",
      author: "Stephen Hawking",
      subject: "Astrophysics",
      issueDate: "2024-03-05",
      returnDate: "2024-03-19",
      status: "Overdue",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-emerald-600 rounded-xl shadow-lg ring-4 ring-emerald-50">
            <FaBookReader className="text-white" size={20} />
          </div>
          Active Disbursement Ledger
        </h1>
        <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-[10px] font-black rounded-xl uppercase tracking-[0.2em] hover:bg-black transition-all shadow-xl active:scale-95">
          <FaPrint /> Export Disbursement stream
        </button>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 bg-gradient-to-br from-white to-emerald-50/5 relative overflow-hidden">
        <form className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
              Asset Allocation
            </label>
            <div className="relative">
              <FaBarcode
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                size={12}
              />
              <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-[10px] font-bold focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white shadow-sm appearance-none">
                <option>All Assets</option>
              </select>
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1 text-nowrap">
              Member / Identifier Search
            </label>
            <div className="relative">
              <FaSearch
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={12}
              />
              <input
                type="text"
                className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white shadow-sm italic"
                placeholder="Enter Member ID or full name..."
              />
            </div>
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full relative overflow-hidden rounded-2xl bg-emerald-600 border-b-4 border-emerald-800 text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-emerald-700 active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-emerald-100 font-serif italic"
            >
              Analyze Disbursement
            </button>
          </div>
        </form>
      </div>

      <div className="rounded-3xl bg-white shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-gray-50/30">
          <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
            Issued Inventory Registry
          </h4>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50/50 text-gray-400 font-bold border-b border-gray-50 uppercase tracking-widest text-[9px]">
              <tr>
                <th className="px-6 py-6 text-left w-16">SN</th>
                <th className="px-6 py-6 text-left">Industrial Asset</th>
                <th className="px-6 py-6 text-left">Allocation Holder</th>
                <th className="px-6 py-6 text-center">Temporal nodes</th>
                <th className="px-6 py-6 text-center">Status</th>
                <th className="px-6 py-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {issuedList.map((i, index) => (
                <tr
                  key={i.id}
                  className="hover:bg-emerald-50/10 transition-all group"
                >
                  <td className="px-6 py-10 text-gray-300 font-mono text-xs italic">
                    {index + 1}
                  </td>
                  <td className="px-6 py-10">
                    <div>
                      <div className="font-black text-gray-900 tracking-tight text-base font-serif italic uppercase leading-none mb-1 group-hover:text-emerald-700 transition-colors">
                        {i.title}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[8px] font-black bg-gray-900 text-white px-2 py-0.5 rounded uppercase tracking-widest">
                          {i.bookNo}
                        </span>
                        <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">
                          {i.author}
                        </span>
                      </div>
                      <div className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mt-2 flex items-center gap-1.5 opacity-60 italic">
                        {i.subject}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                        <FaUserTag size={12} />
                      </div>
                      <div className="font-black text-gray-900 tracking-tight text-sm uppercase leading-none">
                        {i.member}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-10">
                    <div className="space-y-1.5 flex flex-col items-center">
                      <div className="flex items-center gap-2 text-[9px] text-gray-400">
                        <FaCalendarAlt size={10} className="text-emerald-300" />
                        <span className="font-black tracking-tighter w-12 uppercase">
                          Issued:
                        </span>
                        <span className="font-mono font-bold text-gray-600">
                          {i.issueDate}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[9px] text-gray-400">
                        <FaCalendarAlt
                          size={10}
                          className={` ${
                            i.status === "Overdue"
                              ? "text-rose-400"
                              : "text-emerald-300"
                          }`}
                        />
                        <span className="font-black tracking-tighter w-12 uppercase">
                          Return:
                        </span>
                        <span
                          className={`font-mono font-bold ${
                            i.status === "Overdue"
                              ? "text-rose-600"
                              : "text-gray-600"
                          }`}
                        >
                          {i.returnDate}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-10 text-center">
                    <span
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-sm ring-1 ring-inset ${
                        i.status === "Active"
                          ? "bg-emerald-50 text-emerald-700 ring-emerald-100"
                          : "bg-rose-50 text-rose-700 ring-rose-100 animate-pulse"
                      }`}
                    >
                      {i.status === "Active" ? (
                        <FaCheckCircle />
                      ) : (
                        <FaExclamationCircle />
                      )}
                      {i.status}
                    </span>
                  </td>
                  <td className="px-6 py-10 text-center">
                    <button className="p-3 bg-gray-50 text-gray-400 rounded-xl hover:bg-emerald-600 hover:text-white transition-all border border-gray-100 shadow-sm group/btn">
                      <FaHistory
                        size={12}
                        className="group-hover/btn:rotate-[-45deg] transition-transform"
                      />
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
