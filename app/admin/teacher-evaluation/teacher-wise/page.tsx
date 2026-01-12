"use client";

import React, { useState } from "react";
import {
  FaChartPie,
  FaSearch,
  FaFilter,
  FaEye,
  FaUserTie,
  FaStar,
  FaTrophy,
  FaChartLine,
} from "react-icons/fa";

export default function TeacherWiseReportPage() {
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      staffNo: "STF-2023-001",
      name: "Prof. Silas Vance",
      department: "Mathematics",
      avgRating: 4.8,
      totalReviews: 124,
      status: "Top Performer",
    },
    {
      id: 2,
      staffNo: "STF-2023-045",
      name: "Dr. Elara Vance",
      department: "Science",
      avgRating: 4.5,
      totalReviews: 98,
      status: "Excellent",
    },
    {
      id: 3,
      staffNo: "STF-2023-012",
      name: "Mr. John Doe",
      department: "History",
      avgRating: 3.2,
      totalReviews: 45,
      status: "Needs Improvement",
    },
  ]);

  const renderStars = (rating: number) => {
    return (
      <div className="flex text-amber-400 gap-0.5 items-center">
        <span className="text-xs font-black text-gray-700 mr-1">{rating}</span>
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            size={10}
            className={
              i < Math.round(rating) ? "fill-current" : "text-gray-200"
            }
          />
        ))}
      </div>
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Top Performer":
        return "bg-purple-100 text-purple-600 border-purple-200";
      case "Needs Improvement":
        return "bg-red-50 text-red-500 border-red-100";
      default:
        return "bg-emerald-50 text-emerald-600 border-emerald-100";
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-200 -rotate-3">
              <FaChartPie className="text-white rotate-3" size={24} />
            </div>
            Teacher Analytics
          </h1>
          <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mt-2 ml-1">
            Aggregate Performance Metrics
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-6 py-3 rounded-2xl bg-indigo-50 text-indigo-600 font-black text-xs uppercase tracking-widest hover:bg-indigo-100 transition-all border border-indigo-100 italic">
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-xl shadow-indigo-200/50 relative overflow-hidden">
          <FaTrophy
            className="absolute -right-4 -bottom-4 text-white/10 rotate-12"
            size={120}
          />
          <div className="relative z-10">
            <h3 className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-1">
              Top Performer
            </h3>
            <div className="text-2xl font-black italic">Prof. Silas Vance</div>
            <div className="mt-4 inline-flex items-center gap-1 bg-white/20 backdrop-blur-md rounded-lg px-2 py-1 text-[10px] font-bold">
              <FaStar className="text-yellow-300" /> 4.8 Rating
            </div>
          </div>
        </div>
        <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-4 -mt-4"></div>
          <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 relative z-10">
            Avg Institutional Rating
          </h3>
          <div className="text-4xl font-black text-gray-900 tracking-tighter relative z-10">
            4.2<span className="text-lg text-gray-400">/5.0</span>
          </div>
          <div className="mt-4 relative z-10 text-[10px] font-bold text-emerald-500 flex items-center gap-1">
            <FaChartLine /> +0.4 vs Last Term
          </div>
        </div>
        <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-xl relative overflow-hidden">
          <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 relative z-10">
            Total Evaluations
          </h3>
          <div className="text-4xl font-black text-gray-900 tracking-tighter relative z-10">
            1,248
          </div>
          <div className="mt-4 relative z-10 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Across 45 Faculty
          </div>
        </div>
      </div>

      {/* Advanced Filter Box */}
      <div className="rounded-[2.5rem] bg-white p-8 shadow-2xl shadow-gray-100 border border-gray-100/50">
        <div className="flex items-center gap-2 mb-8 uppercase tracking-[0.2em] font-black text-[10px] text-gray-300">
          <FaFilter size={10} className="text-indigo-400" />
          Metric Filtering
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Department
            </label>
            <select className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 text-xs font-black outline-none ring-2 ring-transparent focus:ring-indigo-500/10 focus:bg-white transition-all text-gray-600">
              <option>All Departments</option>
              <option>Mathematics</option>
              <option>Science</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Performance Tier
            </label>
            <select className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 text-xs font-black outline-none ring-2 ring-transparent focus:ring-indigo-500/10 focus:bg-white transition-all text-gray-600">
              <option>All Tiers</option>
              <option>Top Performers</option>
              <option>Needs Improvement</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-transparent uppercase mb-3 ml-2 select-none">
              Action
            </label>
            <button className="w-full bg-indigo-600 border-b-4 border-indigo-800 text-white rounded-[1.25rem] py-4 text-xs font-black uppercase tracking-[0.2em] hover:brightness-110 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-3">
              <FaSearch size={14} />
              Analyze Data
            </button>
          </div>
        </div>
      </div>

      {/* Results Table */}
      <div className="rounded-[2.5rem] bg-white p-10 shadow-2xl shadow-gray-100 border border-gray-100/50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/30 rounded-full blur-3xl -mr-32 -mt-32"></div>

        <div className="relative overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-gray-50">
                <th className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Faculty Identity
                </th>
                <th className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Department
                </th>
                <th className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Aggregate Rating
                </th>
                <th className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Total Reviews
                </th>
                <th className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Performance Status
                </th>
                <th className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Analytics
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50/50">
              {teachers.map((t, index) => (
                <tr
                  key={t.id}
                  className="group hover:bg-gray-50/50 transition-all"
                >
                  <td className="px-6 py-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full ring-4 ring-gray-50 border-2 border-white bg-indigo-100 flex items-center justify-center text-indigo-400 font-black text-sm shadow-inner">
                        <FaUserTie />
                      </div>
                      <div>
                        <div className="text-sm font-black text-gray-900 tracking-tight group-hover:text-indigo-600 transition-colors font-serif italic">
                          {t.name}
                        </div>
                        <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mt-0.5">
                          {t.staffNo}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-8">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">
                      {t.department}
                    </span>
                  </td>
                  <td className="px-6 py-8">{renderStars(t.avgRating)}</td>
                  <td className="px-6 py-8 text-center">
                    <div className="font-mono text-xs font-bold text-gray-500">
                      {t.totalReviews}
                    </div>
                  </td>
                  <td className="px-6 py-8 text-center">
                    <div
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border ${getStatusColor(
                        t.status
                      )}`}
                    >
                      <span className="text-[9px] font-black uppercase tracking-widest">
                        {t.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-8">
                    <div className="flex justify-center gap-2">
                      <button className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                        <FaEye size={14} />
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
