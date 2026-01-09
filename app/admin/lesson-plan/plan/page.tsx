"use client";

import React, { useState } from "react";
import {
  FaChalkboardTeacher,
  FaCalendarCheck,
  FaEdit,
  FaTrash,
  FaCheckCircle,
  FaSearch,
} from "react-icons/fa";

export default function LessonPlanPage() {
  const [plans, setPlans] = useState([
    {
      id: 1,
      teacher: "Marcus Aurelius",
      className: "Class 10-A",
      subject: "Mathematics",
      lesson: "Quadratic Equations",
      topic: "Factoring Methods",
      date: "2023-12-15",
      status: "Completed",
    },
    {
      id: 2,
      teacher: "Marcus Aurelius",
      className: "Class 10-A",
      subject: "Mathematics",
      lesson: "Quadratic Equations",
      topic: "Discriminant Analysis",
      date: "2023-12-16",
      status: "Scheduled",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-gray-800 tracking-tight">
            Instructional Delivery Plan
          </h1>
          <p className="text-xs text-gray-500 font-medium italic">
            Monitor curriculum execution and teacher progress
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-2.5 text-white font-black text-sm hover:bg-indigo-700 transition shadow-lg shadow-indigo-100 uppercase tracking-widest">
          <FaCalendarCheck size={14} /> Schedule Lesson
        </button>
      </div>

      {/* Filter Row */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 ring-1 ring-black/5 flex flex-wrap gap-4 items-end">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">
            Search Teacher
          </label>
          <div className="relative">
            <FaSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"
              size={12}
            />
            <input
              type="text"
              className="w-full bg-gray-50 border-none rounded-xl p-3 pl-10 text-xs font-bold outline-none"
              placeholder="Staff name..."
            />
          </div>
        </div>
        <div className="w-40">
          <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">
            Class
          </label>
          <select className="w-full bg-gray-50 border-none rounded-xl p-3 text-xs font-bold outline-none">
            <option>All Classes</option>
          </select>
        </div>
        <div className="w-40">
          <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">
            Status
          </label>
          <select className="w-full bg-gray-50 border-none rounded-xl p-3 text-xs font-bold outline-none">
            <option>All Status</option>
          </select>
        </div>
        <button className="bg-gray-800 text-white px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all">
          Filter
        </button>
      </div>

      {/* Plans Table */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 ring-1 ring-black/5">
        <h4 className="mb-6 text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">
          Active Teaching Schedule
        </h4>
        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50/50 text-gray-500 font-bold border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-left w-16 uppercase tracking-tighter text-[10px]">
                  SN
                </th>
                <th className="px-6 py-4 text-left uppercase tracking-tighter text-[10px]">
                  Instructor
                </th>
                <th className="px-6 py-4 text-left uppercase tracking-tighter text-[10px]">
                  Academic Context
                </th>
                <th className="px-6 py-4 text-left uppercase tracking-tighter text-[10px]">
                  Lesson / Topic
                </th>
                <th className="px-6 py-4 text-center uppercase tracking-tighter text-[10px]">
                  Scheduled Date
                </th>
                <th className="px-6 py-4 text-center uppercase tracking-tighter text-[10px]">
                  Status
                </th>
                <th className="px-6 py-4 text-center uppercase tracking-tighter text-[10px]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {plans.map((plan, index) => (
                <tr
                  key={plan.id}
                  className="hover:bg-indigo-50/10 transition-colors group"
                >
                  <td className="px-6 py-4 text-gray-400 font-mono text-xs">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500">
                        <FaChalkboardTeacher size={14} />
                      </div>
                      <div className="font-black text-gray-800 tracking-tight leading-none italic font-serif">
                        {plan.teacher}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-xs font-bold text-gray-700">
                      {plan.subject}
                    </div>
                    <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest">
                      {plan.className}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-gray-900 leading-tight mb-1">
                      {plan.lesson}
                    </div>
                    <div className="text-[10px] text-indigo-400 font-bold uppercase flex items-center gap-1">
                      <div className="w-1 h-1 rounded-full bg-indigo-400"></div>
                      {plan.topic}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-xs font-bold text-gray-500 tabular-nums">
                      {plan.date}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      <span
                        className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ring-1 ring-inset ${
                          plan.status === "Completed"
                            ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
                            : "bg-blue-50 text-blue-700 ring-blue-200"
                        }`}
                      >
                        {plan.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2 text-gray-300">
                      <button className="p-2 rounded-lg bg-gray-50 text-blue-500 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                        <FaEdit size={14} />
                      </button>
                      <button className="p-2 rounded-lg bg-gray-50 text-rose-500 hover:bg-rose-600 hover:text-white transition-all shadow-sm">
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
