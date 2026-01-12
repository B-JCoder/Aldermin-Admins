"use client";

import React, { useState } from "react";
import {
  FaPrint,
  FaFilter,
  FaCheck,
  FaCertificate,
  FaLayerGroup,
  FaUsers,
  FaSearch,
} from "react-icons/fa";

export default function BulkCertificatePrintPage() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      admissionNo: "ADM001",
      class: "Class 10",
      section: "A",
      certificate: "Merit Certificate",
      status: "Ready",
    },
    {
      id: 2,
      name: "Bob Smith",
      admissionNo: "ADM002",
      class: "Class 10",
      section: "A",
      certificate: "Merit Certificate",
      status: "Ready",
    },
    {
      id: 3,
      name: "Charlie Davis",
      admissionNo: "ADM003",
      class: "Class 10",
      section: "B",
      certificate: "Participation",
      status: "Pending Data",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-purple-600 rounded-xl shadow-lg ring-4 ring-purple-50">
            <FaPrint className="text-white" size={20} />
          </div>
          Bulk Certificate Processor
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Filter / Config */}
        <div className="lg:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-purple-50/5">
            <h4 className="mb-6 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center justify-between">
              Batch Configuration
              <div className="h-1 w-12 bg-purple-100 rounded-full"></div>
            </h4>

            <form className="space-y-4 flex-1">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Target Class
                  </label>
                  <select className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-purple-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer">
                    <option>All Classes</option>
                    <option>Class 10</option>
                    <option>Class 9</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Target Section
                  </label>
                  <select className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-purple-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer">
                    <option>All Sections</option>
                    <option>A</option>
                    <option>B</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Certificate Template
                  </label>
                  <div className="relative">
                    <FaCertificate
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-purple-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer text-purple-600 underline">
                      <option>Merit Certificate 2024</option>
                      <option>Completion Certificate</option>
                      <option>Sports Achievement</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full relative overflow-hidden rounded-2xl bg-gray-900 border-b-4 border-gray-700 text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-black active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-gray-200"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <FaSearch className="italic" />
                    Load Candidates
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* List */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="flex items-center justify-between mb-8 relative">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
                Print Queue
              </h4>
              <button className="px-6 py-3 bg-purple-600 text-white text-[10px] font-black rounded-xl uppercase tracking-widest hover:bg-purple-700 transition-all flex items-center gap-2 shadow-lg shadow-purple-100 active:scale-95">
                <FaPrint />
                Print Selected (2)
              </button>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-50 relative">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50/70 text-gray-500 font-bold border-b border-gray-50">
                  <tr>
                    <th className="px-6 py-6 text-left w-12">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                    </th>
                    <th className="px-6 py-6 text-left text-[10px] uppercase font-black tracking-widest">
                      Candidate
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Details
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {students.map((s) => (
                    <tr
                      key={s.id}
                      className="group hover:bg-purple-50/20 transition-all"
                    >
                      <td className="px-6 py-8">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                      </td>
                      <td className="px-6 py-8">
                        <div className="font-black text-gray-900 tracking-tight text-base font-serif italic uppercase leading-none mb-1">
                          {s.name}
                        </div>
                        <div className="text-[10px] font-mono text-purple-500 font-bold">
                          {s.admissionNo}
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center text-gray-400">
                        <div className="text-[10px] font-black uppercase text-gray-500 font-mono">
                          {s.class} {s.section}
                        </div>
                        <div className="text-[9px] font-bold text-gray-300 uppercase tracking-wider">
                          {s.certificate}
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm ring-1 ring-inset ${
                            s.status === "Ready"
                              ? "bg-emerald-50 text-emerald-700 ring-emerald-100"
                              : "bg-red-50 text-red-700 ring-red-100"
                          }`}
                        >
                          {s.status}
                        </span>
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
