"use client";

import React, { useState } from "react";
import {
  FaGraduationCap,
  FaEdit,
  FaTrash,
  FaCheckCircle,
  FaProjectDiagram,
  FaCalendarAlt,
} from "react-icons/fa";

export default function LessonOverviewPage() {
  const [formData, setFormData] = useState({
    teacher: "",
    className: "",
    section: "",
    subject: "",
  });

  const [overviews, setOverviews] = useState([
    {
      id: 1,
      lesson: "Quadratic Equations",
      topic: "Factoring Methods",
      subjectTopic: "Algebraic Reasoning",
      completedDate: "2023-11-20",
      upcomingDate: "-",
      status: "Verified",
    },
    {
      id: 2,
      lesson: "Laws of Motion",
      topic: "Newton's First Law",
      subjectTopic: "Classical Mechanics",
      completedDate: "-",
      upcomingDate: "2023-12-20",
      status: "In Progress",
    },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-800 tracking-tight flex items-center gap-3 font-serif italic text-indigo-700">
          <FaProjectDiagram size={24} />
          Academic Delivery Audit
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Creation Form */}
        <div className="lg:col-span-4">
          <div className="rounded-2xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-indigo-50/20">
            <h4 className="mb-8 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center gap-2">
              Auditor Configuration
              <div className="h-[1px] flex-1 bg-indigo-100"></div>
            </h4>

            <form className="space-y-6 flex-1">
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
                  Primary Instructor
                </label>
                <select
                  name="teacher"
                  onChange={handleInputChange}
                  className="w-full rounded-xl border-gray-100 p-4 text-xs font-bold outline-none bg-white shadow-sm focus:ring-2 focus:ring-indigo-500/20"
                >
                  <option value="">Select Staff</option>
                  <option value="1">Marcus Aurelius</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
                    Class
                  </label>
                  <select
                    name="className"
                    className="w-full rounded-xl border-gray-100 p-4 text-xs font-bold outline-none bg-white shadow-sm focus:ring-2 focus:ring-indigo-500/20"
                  >
                    <option>Class 10</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
                    Section
                  </label>
                  <select
                    name="section"
                    className="w-full rounded-xl border-gray-100 p-4 text-xs font-bold outline-none bg-white shadow-sm focus:ring-2 focus:ring-indigo-500/20"
                  >
                    <option>A</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
                  Subject Domain
                </label>
                <select
                  name="subject"
                  className="w-full rounded-xl border-gray-100 p-4 text-xs font-bold outline-none bg-white shadow-sm focus:ring-2 focus:ring-indigo-500/20"
                >
                  <option>Mathematics</option>
                </select>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  className="w-full py-4 bg-indigo-600 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
                >
                  <FaGraduationCap size={16} />
                  Verify Progress
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Audit Table */}
        <div className="lg:col-span-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 ring-1 ring-black/5">
            <div className="overflow-x-auto rounded-xl">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50/50 text-gray-400 font-black">
                  <tr>
                    <th className="px-6 py-4 text-left w-16 text-[10px] uppercase font-black">
                      SN
                    </th>
                    <th className="px-6 py-4 text-left text-[10px] uppercase font-black">
                      Unit Overview
                    </th>
                    <th className="px-6 py-4 text-left text-[10px] uppercase font-black">
                      Subject Domain
                    </th>
                    <th className="px-6 py-4 text-center text-[10px] uppercase font-black">
                      Timeline
                    </th>
                    <th className="px-6 py-4 text-center text-[10px] uppercase font-black">
                      Status
                    </th>
                    <th className="px-6 py-4 text-center text-[10px] uppercase font-black">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {overviews.map((item, index) => (
                    <tr
                      key={item.id}
                      className="hover:bg-indigo-50/20 transition-all group"
                    >
                      <td className="px-6 py-5 text-gray-400 font-mono text-xs">
                        {index + 1}
                      </td>
                      <td className="px-6 py-5">
                        <div className="font-black text-gray-800 tracking-tight leading-none mb-1">
                          {item.lesson}
                        </div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                          {item.topic}
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className="inline-block px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase rounded ring-1 ring-indigo-100">
                          {item.subjectTopic}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <div className="space-y-1">
                          <div className="flex items-center justify-center gap-1 text-[10px] text-gray-500 font-bold uppercase">
                            <span className="text-emerald-500">Done:</span>{" "}
                            {item.completedDate}
                          </div>
                          <div className="flex items-center justify-center gap-1 text-[10px] text-gray-500 font-bold uppercase">
                            <span className="text-blue-500">Next:</span>{" "}
                            {item.upcomingDate}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex justify-center">
                          <span
                            className={`px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                              item.status === "Verified"
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-amber-100 text-amber-700"
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex justify-center gap-2">
                          <button className="p-2 rounded-lg bg-gray-50 text-blue-500 hover:bg-blue-600 hover:text-white transition-all">
                            <FaEdit size={12} />
                          </button>
                          <button className="p-2 rounded-lg bg-gray-50 text-rose-500 hover:bg-rose-600 hover:text-white transition-all">
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
    </div>
  );
}
