"use client";

import React, { useState } from "react";
import {
  FaDownload,
  FaPlus,
  FaTrash,
  FaEdit,
  FaCheck,
  FaFileAlt,
  FaCalendarAlt,
  FaGlobe,
  FaCloudDownloadAlt,
} from "react-icons/fa";

export default function DownloadsPage() {
  const [downloads, setDownloads] = useState([
    {
      id: 1,
      title: "School Prospectus",
      type: "Public",
      date: "2024-01-01",
      size: "2.4 MB",
    },
    {
      id: 2,
      title: "Holiday Calendar",
      type: "Internal",
      date: "2024-01-05",
      size: "1.1 MB",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-xl shadow-lg ring-4 ring-blue-50">
            <FaDownload className="text-white" size={20} />
          </div>
          General Resources
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Creation Form */}
        <div className="lg:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-blue-50/5">
            <h4 className="mb-6 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center justify-between">
              Add Resource
              <div className="h-1 w-12 bg-blue-100 rounded-full"></div>
            </h4>

            <form className="space-y-4 flex-1">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Resource Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-white shadow-sm"
                    placeholder="e.g. Annual Report"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                      Access Level
                    </label>
                    <div className="relative">
                      <FaGlobe
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                        size={12}
                      />
                      <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer">
                        <option>Public</option>
                        <option>Internal</option>
                        <option>Restricted</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                      Date
                    </label>
                    <div className="relative">
                      <FaCalendarAlt
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                        size={12}
                      />
                      <input
                        type="date"
                        className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-[10px] font-bold focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-white shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Brief
                  </label>
                  <textarea
                    className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-white shadow-sm min-h-[80px]"
                    placeholder="Context..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Resource File
                  </label>
                  <div className="relative">
                    <input type="file" className="hidden" id="download-file" />
                    <label
                      htmlFor="download-file"
                      className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-[10px] font-black uppercase tracking-widest bg-gray-50 border border-dashed border-gray-200 cursor-pointer hover:bg-white flex items-center truncate"
                    >
                      <FaCloudDownloadAlt
                        className="mr-2 text-blue-400"
                        size={14}
                      />
                      Select File
                    </label>
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
                    Publish Resource
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* List Index */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="flex items-center justify-between mb-8 relative">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
                Resource Library
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
                      Resource Data
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Access
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Format
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {downloads.map((d, index) => (
                    <tr
                      key={d.id}
                      className="hover:bg-blue-50/20 transition-all group"
                    >
                      <td className="px-6 py-8 text-gray-300 font-mono text-xs italic">
                        {index + 1}
                      </td>
                      <td className="px-6 py-8">
                        <div className="font-black text-gray-900 tracking-tight text-base font-serif italic uppercase leading-none mb-2">
                          {d.title}
                        </div>
                        <div className="text-[10px] font-mono text-blue-400 font-bold flex items-center gap-2">
                          {d.date}
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-[9px] font-black rounded-xl uppercase tracking-[0.2em] shadow-sm">
                          {d.type}
                        </span>
                      </td>
                      <td className="px-6 py-8 text-center text-gray-400">
                        <div className="text-[10px] font-black uppercase text-gray-500 font-mono">
                          {d.size}
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <div className="flex justify-center gap-1">
                          <button className="p-3 rounded-xl bg-gray-50 text-blue-500 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                            <FaCloudDownloadAlt size={14} />
                          </button>
                          <button className="p-3 rounded-xl bg-gray-50 text-emerald-500 hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
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
