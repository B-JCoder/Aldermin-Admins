"use client";

import React, { useState } from "react";
import {
  FaHourglassHalf,
  FaSearch,
  FaFilter,
  FaEdit,
  FaTrash,
  FaEye,
  FaUserTie,
  FaUser,
  FaStar,
  FaGraduationCap,
  FaCheck,
} from "react-icons/fa";

export default function PendingReportPage() {
  const [reports, setReports] = useState([
    {
      id: 1,
      staffNo: "STF-2023-002",
      teacherName: "Prof. John Doe",
      submittedBy: "Michael Chen (Student)",
      className: "Class 11-C",
      rating: 3,
      comment: "Lectures are good but pace is too fast.",
      status: "Pending",
    },
    {
      id: 2,
      staffNo: "STF-2023-019",
      teacherName: "Ms. Sarah Connor",
      submittedBy: "Linda Hamilton (Parent)",
      className: "Class 08-A",
      rating: 4,
      comment: "Very supportive but needs to update study materials.",
      status: "Pending",
    },
  ]);

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this record?")) {
      setReports((prev) => prev.filter((r) => r.id !== id));
    }
  };

  const handleApprove = (id: number) => {
    if (confirm("Approve this evaluation?")) {
      setReports((prev) => prev.filter((r) => r.id !== id));
      // In a real app, this would move to the approved list
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex text-amber-400 gap-0.5">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            size={10}
            className={i < rating ? "fill-current" : "text-gray-200"}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-amber-200 -rotate-3">
              <FaHourglassHalf className="text-white rotate-3" size={24} />
            </div>
            Pending Evaluations
          </h1>
          <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mt-2 ml-1">
            Awaiting Review
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-6 py-3 rounded-2xl bg-amber-50 text-amber-600 font-black text-xs uppercase tracking-widest hover:bg-amber-100 transition-all border border-amber-100 italic">
            Batch Process
          </button>
        </div>
      </div>

      {/* Advanced Filter Box */}
      <div className="rounded-[2.5rem] bg-white p-8 shadow-2xl shadow-gray-100 border border-gray-100/50">
        <div className="flex items-center gap-2 mb-8 uppercase tracking-[0.2em] font-black text-[10px] text-gray-300">
          <FaFilter size={10} className="text-amber-400" />
          Queue Filtering
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Faculty Member
            </label>
            <select className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 text-xs font-black outline-none ring-2 ring-transparent focus:ring-amber-500/10 focus:bg-white transition-all text-gray-600">
              <option>All Faculty</option>
              <option>Prof. John Doe</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Academic Grade
            </label>
            <select className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 text-xs font-black outline-none ring-2 ring-transparent focus:ring-amber-500/10 focus:bg-white transition-all text-gray-600">
              <option>All Grades</option>
              <option>Class 11</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Submission Date
            </label>
            <input
              type="date"
              className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 text-xs font-black outline-none ring-2 ring-transparent focus:ring-amber-500/10 focus:bg-white transition-all text-gray-600"
            />
          </div>
          <div>
            <label className="block text-[10px] font-black text-transparent uppercase mb-3 ml-2 select-none">
              Action
            </label>
            <button className="w-full bg-amber-500 border-b-4 border-amber-700 text-white rounded-[1.25rem] py-4 text-xs font-black uppercase tracking-[0.2em] hover:brightness-110 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-3">
              <FaSearch size={14} />
              Filter Queue
            </button>
          </div>
        </div>
      </div>

      {/* Results Table */}
      <div className="rounded-[2.5rem] bg-white p-10 shadow-2xl shadow-gray-100 border border-gray-100/50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50/30 rounded-full blur-3xl -mr-32 -mt-32"></div>

        <div className="relative overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-gray-50">
                <th className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Staff Identity
                </th>
                <th className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Evaluated Faculty
                </th>
                <th className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Submission Detail
                </th>
                <th className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Rating & Review
                </th>
                <th className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Status
                </th>
                <th className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Review Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50/50">
              {reports.map((report, index) => (
                <tr
                  key={report.id}
                  className="group hover:bg-gray-50/50 transition-all"
                >
                  <td className="px-6 py-8">
                    <div className="font-mono text-[10px] font-black text-amber-600 bg-amber-50/50 px-3 py-1 rounded-full inline-block border border-amber-100">
                      {report.staffNo}
                    </div>
                    <div className="mt-2 text-[9px] font-black text-gray-300 uppercase tracking-tighter italic">
                      SN: {index + 1}
                    </div>
                  </td>
                  <td className="px-6 py-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full ring-4 ring-gray-50 border-2 border-white bg-amber-100 flex items-center justify-center text-amber-500 font-black text-sm shadow-inner">
                        <FaUserTie />
                      </div>
                      <div>
                        <div className="text-sm font-black text-gray-900 tracking-tight group-hover:text-amber-600 transition-colors font-serif italic">
                          {report.teacherName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-8">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-[11px] font-bold text-gray-700">
                        <FaUser size={10} className="text-gray-400" />
                        {report.submittedBy}
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-black text-amber-500 uppercase tracking-wide bg-amber-50 w-fit px-2 py-0.5 rounded">
                        <FaGraduationCap size={10} />
                        {report.className}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-8">
                    <div className="space-y-2">
                      {renderStars(report.rating)}
                      <p className="text-[10px] font-medium text-gray-500 leading-relaxed max-w-[200px] line-clamp-2 italic">
                        "{report.comment}"
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-8 text-center">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-100/50 text-amber-600 border border-amber-100 animate-pulse">
                      <FaHourglassHalf size={10} />
                      <span className="text-[9px] font-black uppercase tracking-widest">
                        {report.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-8">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleApprove(report.id)}
                        className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
                        title="Approve"
                      >
                        <FaCheck size={14} />
                      </button>
                      <button className="p-3 bg-blue-50 text-blue-600 rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                        <FaEdit size={14} />
                      </button>
                      <button
                        onClick={() => handleDelete(report.id)}
                        className="p-3 bg-rose-50 text-rose-600 rounded-2xl hover:bg-rose-600 hover:text-white transition-all shadow-sm"
                      >
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
  );
}
