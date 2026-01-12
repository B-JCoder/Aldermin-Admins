"use client";

import React, { useState } from "react";
import {
  FaFolderOpen,
  FaSearch,
  FaTrash,
  FaEdit,
  FaDownload,
  FaFilePdf,
  FaFileWord,
  FaFileImage,
  FaFileAlt,
} from "react-icons/fa";

export default function DownloadCenterListPage() {
  const [contents, setContents] = useState([
    {
      id: 1,
      name: "Student Handbook 2024",
      type: "PDF",
      category: "Administrative",
      date: "2024-01-10",
      size: "3.5 MB",
    },
    {
      id: 2,
      name: "Event Schedule Q1",
      type: "Image",
      category: "Events",
      date: "2024-01-12",
      size: "1.2 MB",
    },
    {
      id: 3,
      name: "Application Form template",
      type: "Word",
      category: "Forms",
      date: "2024-02-01",
      size: "0.5 MB",
    },
  ]);

  const getIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return <FaFilePdf className="text-rose-500" />;
      case "Word":
        return <FaFileWord className="text-blue-500" />;
      case "Image":
        return <FaFileImage className="text-purple-500" />;
      default:
        return <FaFileAlt className="text-gray-400" />;
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-indigo-600 rounded-xl shadow-lg ring-4 ring-indigo-50">
            <FaFolderOpen className="text-white" size={20} />
          </div>
          Central Content Registry
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <div className="rounded-[2.5rem] bg-white p-8 shadow-2xl shadow-gray-100 border border-gray-100/50">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest">
              Stored Assets
            </h3>
            <div className="relative">
              <FaSearch
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                size={14}
              />
              <input
                type="text"
                placeholder="Search Registry..."
                className="pl-10 pr-4 py-3 rounded-2xl bg-gray-50 border-none text-xs font-bold focus:ring-2 focus:ring-indigo-500/10 outline-none w-64 transition-all"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-gray-50">
                  <th className="px-6 py-4 text-left text-[10px] uppercase font-black tracking-widest text-gray-400">
                    Asset Name
                  </th>
                  <th className="px-6 py-4 text-center text-[10px] uppercase font-black tracking-widest text-gray-400">
                    Classification
                  </th>
                  <th className="px-6 py-4 text-center text-[10px] uppercase font-black tracking-widest text-gray-400">
                    Format
                  </th>
                  <th className="px-6 py-4 text-center text-[10px] uppercase font-black tracking-widest text-gray-400">
                    Uploaded
                  </th>
                  <th className="px-6 py-4 text-center text-[10px] uppercase font-black tracking-widest text-gray-400">
                    Options
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50/50">
                {contents.map((c) => (
                  <tr
                    key={c.id}
                    className="group hover:bg-gray-50/50 transition-all"
                  >
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center shadow-sm">
                          {getIcon(c.type)}
                        </div>
                        <div>
                          <div className="font-black text-gray-900 text-sm mb-0.5">
                            {c.name}
                          </div>
                          <div className="text-[10px] font-bold text-gray-400">
                            {c.size}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <span className="px-3 py-1 rounded-lg bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest">
                        {c.category}
                      </span>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <span className="text-xs font-mono font-bold text-gray-500">
                        {c.type}
                      </span>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <span className="text-xs font-mono font-bold text-gray-400">
                        {c.date}
                      </span>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <div className="flex justify-center gap-2">
                        <button
                          className="w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
                          title="Download"
                        >
                          <FaDownload size={12} />
                        </button>
                        <button
                          className="w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-rose-500 hover:text-white transition-all shadow-sm"
                          title="Delete"
                        >
                          <FaTrash size={12} />
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
  );
}
