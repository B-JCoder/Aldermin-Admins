"use client";

import React, { useState } from "react";
import {
  FaPlus,
  FaCheck,
  FaBookOpen,
  FaLayerGroup,
  FaUsers,
  FaCalendarAlt,
  FaFileAlt,
  FaInfoCircle,
  FaStar,
} from "react-icons/fa";

export default function AddHomeworkPage() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-rose-600 rounded-xl shadow-lg ring-4 ring-rose-50">
            <FaPlus className="text-white" size={20} />
          </div>
          Authorize New Assignment
        </h1>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl bg-white p-10 shadow-2xl border border-gray-100 ring-1 ring-black/5 bg-gradient-to-br from-white to-rose-50/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-100/20 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none"></div>

          <h4 className="mb-10 text-xs font-black text-gray-400 uppercase tracking-[0.3em] leading-none flex items-center justify-between">
            Assignment Blueprint
            <div className="h-1 w-24 bg-rose-100 rounded-full"></div>
          </h4>

          <form className="space-y-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1 text-nowrap uppercase">
                    Class Tier <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaLayerGroup
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-rose-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer">
                      <option>Select Class</option>
                      <option>Grade 10</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1 text-nowrap">
                    Subject Domain <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaBookOpen
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-rose-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer">
                      <option>Select Subject</option>
                      <option>Advanced Physics</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1 text-nowrap">
                      Homework Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FaCalendarAlt
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                        size={12}
                      />
                      <input
                        type="date"
                        className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-[10px] font-bold focus:ring-4 focus:ring-rose-500/10 outline-none transition-all bg-white shadow-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1 text-nowrap">
                      Merit Points
                    </label>
                    <div className="relative">
                      <FaStar
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-200"
                        size={12}
                      />
                      <input
                        type="number"
                        className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-mono font-bold focus:ring-4 focus:ring-rose-500/10 outline-none transition-all bg-white shadow-sm"
                        placeholder="e.g. 25"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1 text-nowrap uppercase">
                    Sectional Unit <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaUsers
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-rose-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer">
                      <option>Select Section</option>
                      <option>Alpha</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1 text-nowrap">
                    Submission Deadline <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaCalendarAlt
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      size={12}
                    />
                    <input
                      type="date"
                      className="w-full rounded-2xl border-rose-100 p-4 pl-10 text-[10px] font-black focus:ring-4 focus:ring-rose-500/10 outline-none transition-all bg-rose-50/20 shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1 text-nowrap">
                    Digital Asset (PDF/Docs)
                  </label>
                  <div className="relative group">
                    <label className="w-full flex items-center gap-3 p-4 rounded-2xl bg-gray-50 border border-dashed border-gray-200 text-[10px] font-black text-gray-400 uppercase tracking-widest cursor-pointer group-hover:bg-white group-hover:border-rose-300 transition-all shadow-sm">
                      <FaFileAlt
                        size={14}
                        className="text-gray-300 group-hover:text-rose-500"
                      />
                      Attach Guidelines
                      <input type="file" className="hidden" />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1 text-nowrap">
                Instructional Scope
              </label>
              <div className="relative">
                <FaInfoCircle
                  className="absolute left-4 top-4 text-gray-300"
                  size={12}
                />
                <textarea
                  className="w-full rounded-3xl border-gray-100 p-8 pl-10 text-xs font-bold focus:ring-4 focus:ring-rose-500/10 outline-none transition-all bg-white shadow-sm min-h-[150px] leading-relaxed italic"
                  placeholder="Provide clear pedagogical instructions for this assignment..."
                ></textarea>
              </div>
            </div>

            <div className="pt-8 flex justify-center">
              <button
                type="submit"
                className="w-full max-w-md relative overflow-hidden rounded-2xl bg-gray-900 border-b-4 border-gray-700 text-white px-10 py-6 text-[10px] font-black uppercase tracking-[0.4em] transition-all hover:bg-black active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-gray-200"
              >
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <FaCheck className="italic" />
                  Canonize Assignment
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
