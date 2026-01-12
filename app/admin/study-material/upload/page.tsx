"use client";

import React, { useState } from "react";
import {
  FaCloudUploadAlt,
  FaPlus,
  FaTrash,
  FaEdit,
  FaCheck,
  FaFileAlt,
  FaCalendarAlt,
  FaLayerGroup,
  FaUsers,
  FaDownload,
  FaSearch,
} from "react-icons/fa";

export default function UploadContentPage() {
  const [contentList, setContentList] = useState([
    {
      id: 1,
      title: "Algebra II Study Guide",
      type: "Assignment",
      availableFor: "Class 10 - Section A",
      date: "2024-03-25",
      file: "algebra_guide.pdf",
    },
    {
      id: 2,
      title: "Biology Lab Safety",
      type: "Syllabus",
      availableFor: "All Classes",
      date: "2024-03-20",
      file: "safety_protocols.docx",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-indigo-600 rounded-xl shadow-lg ring-4 ring-indigo-50">
            <FaCloudUploadAlt className="text-white" size={20} />
          </div>
          Digital Content Repository
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Upload Form */}
        <div className="lg:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-indigo-50/5">
            <h4 className="mb-6 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center justify-between">
              Upload New Asset
              <div className="h-1 w-12 bg-indigo-100 rounded-full"></div>
            </h4>

            <form className="space-y-4 flex-1">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Content Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white shadow-sm"
                    placeholder="e.g. Midterm Syllabus"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                      Content Type <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FaLayerGroup
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                        size={12}
                      />
                      <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer">
                        <option>Assignment</option>
                        <option>Syllabus</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                      Target Audience
                    </label>
                    <div className="relative">
                      <FaUsers
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                        size={12}
                      />
                      <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer">
                        <option>All Classes</option>
                        <option>Class 10</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Description
                  </label>
                  <textarea
                    className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white shadow-sm min-h-[80px]"
                    placeholder="Brief description of the content..."
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                      Publish Date
                    </label>
                    <div className="relative">
                      <FaCalendarAlt
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                        size={12}
                      />
                      <input
                        type="date"
                        className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-[10px] font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white shadow-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                      Attachment
                    </label>
                    <div className="relative">
                      <FaFileAlt
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                        size={12}
                      />
                      <input type="file" className="hidden" id="content-file" />
                      <label
                        htmlFor="content-file"
                        className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-[10px] font-black uppercase tracking-widest bg-gray-50 border border-dashed border-gray-200 cursor-pointer hover:bg-white flex items-center truncate"
                      >
                        Choose File...
                      </label>
                    </div>
                    <div className="text-[8px] font-bold text-gray-400 mt-1 ml-1">
                      PDF, DOCX, JPG, TXT
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
                    <FaCloudUploadAlt className="italic" />
                    Upload Asset
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Content List */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="flex items-center justify-between mb-8 relative">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
                Active Content Matrix
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
                      Content Profile
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Target
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Date
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {contentList.map((c, index) => (
                    <tr
                      key={c.id}
                      className="hover:bg-indigo-50/20 transition-all group"
                    >
                      <td className="px-6 py-8 text-gray-300 font-mono text-xs italic">
                        {index + 1}
                      </td>
                      <td className="px-6 py-8">
                        <div className="font-black text-gray-900 tracking-tight text-base font-serif italic uppercase leading-none mb-2">
                          {c.title}
                        </div>
                        <div className="text-[10px] font-mono text-indigo-500 font-bold flex items-center gap-2 bg-indigo-50 w-fit px-2 py-1 rounded">
                          <FaLayerGroup size={10} /> {c.type}
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center text-gray-400">
                        <div className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest">
                          <FaUsers size={12} className="text-gray-300 mb-0.5" />
                          {c.availableFor}
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <div className="text-[10px] font-black uppercase text-gray-500 font-mono">
                          {c.date}
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <div className="flex justify-center gap-1">
                          <button
                            className="p-3 rounded-xl bg-gray-50 text-indigo-500 hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
                            title="Download"
                          >
                            <FaDownload size={14} />
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
