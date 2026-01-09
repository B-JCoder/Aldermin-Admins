"use client";

import React, { useState } from "react";
import {
  FaTag,
  FaSearch,
  FaChalkboardTeacher,
  FaCalendarDay,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

export default function TopicOverviewPage() {
  const [searchParams, setSearchParams] = useState({
    className: "",
    section: "",
    subject: "",
  });

  const [topics, setTopics] = useState([
    {
      id: 1,
      lesson: "Quadratic Equations",
      topic: "Factoring Methods",
      date: "2023-12-10",
      teacher: "Marcus Aurelius",
    },
    {
      id: 2,
      lesson: "Quadratic Equations",
      topic: "Discriminant Analysis",
      date: "2023-12-12",
      teacher: "Marcus Aurelius",
    },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching topics with", searchParams);
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-800 tracking-tight">
            Syllabus Topic Overview
          </h1>
          <p className="text-xs text-gray-400 font-medium">
            Holistic view of all sub-topics and delivery schedule
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 ring-1 ring-black/5">
        <form
          onSubmit={handleSearch}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end"
        >
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
              Target Class
            </label>
            <select
              name="className"
              value={searchParams.className}
              onChange={handleInputChange}
              className="w-full rounded-xl border-gray-100 p-4 text-xs font-bold focus:ring-2 focus:ring-blue-500/20 outline-none bg-gray-50/50"
            >
              <option value="">Select Class</option>
              <option value="10">Class 10</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
              Section
            </label>
            <select
              name="section"
              value={searchParams.section}
              onChange={handleInputChange}
              className="w-full rounded-xl border-gray-100 p-4 text-xs font-bold focus:ring-2 focus:ring-blue-500/20 outline-none bg-gray-50/50"
            >
              <option value="">Select Section</option>
              <option value="A">Section A</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
              Subject
            </label>
            <select
              name="subject"
              value={searchParams.subject}
              onChange={handleInputChange}
              className="w-full rounded-xl border-gray-100 p-4 text-xs font-bold focus:ring-2 focus:ring-blue-500/20 outline-none bg-gray-50/50"
            >
              <option value="">Select Subject</option>
              <option value="math">Mathematics</option>
            </select>
          </div>

          <div className="md:col-span-3 flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-gray-800 px-10 py-3 text-white font-black text-xs transition-all hover:bg-black active:scale-[0.98] shadow-md shadow-gray-100 uppercase tracking-widest"
            >
              <FaSearch size={12} />
              Execute Search
            </button>
          </div>
        </form>
      </div>

      {/* Analytics/Summary could go here, but let's stick to the table for now */}

      {/* Topics Table */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 ring-1 ring-black/5">
        <h4 className="mb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">
          Topic Registry
        </h4>
        <div className="overflow-x-auto rounded-xl border border-gray-50">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50/50 text-gray-500 font-bold border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-left w-16 text-[10px] uppercase font-black">
                  SN
                </th>
                <th className="px-6 py-4 text-left text-[10px] uppercase font-black">
                  Lesson Module
                </th>
                <th className="px-6 py-4 text-left text-[10px] uppercase font-black">
                  Sub-Topic Detail
                </th>
                <th className="px-6 py-4 text-center text-[10px] uppercase font-black">
                  Instruction Date
                </th>
                <th className="px-6 py-4 text-left text-[10px] uppercase font-black">
                  Primary Teacher
                </th>
                <th className="px-6 py-4 text-center text-[10px] uppercase font-black">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {topics.map((item, index) => (
                <tr
                  key={item.id}
                  className="hover:bg-blue-50/20 transition-all group"
                >
                  <td className="px-6 py-5 text-gray-300 font-mono text-xs">
                    {index + 1}
                  </td>
                  <td className="px-6 py-5">
                    <div className="font-black text-gray-900 tracking-tight text-xs uppercase mb-1">
                      {item.lesson}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase">
                      <FaTag size={8} className="text-blue-300" />
                      Module Info
                    </div>
                  </td>
                  <td className="px-6 py-5 font-black text-gray-800 text-base font-serif italic group-hover:text-blue-600 transition-colors">
                    {item.topic}
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full text-[10px] font-bold text-gray-500 ring-1 ring-gray-100">
                      <FaCalendarDay size={10} className="text-gray-300" />
                      {item.date}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                        <FaChalkboardTeacher size={12} />
                      </div>
                      <span className="text-xs font-bold text-gray-600">
                        {item.teacher}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-center gap-2">
                      <button className="p-2 rounded-lg bg-gray-50 text-blue-500 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                        <FaEdit size={12} />
                      </button>
                      <button className="p-2 rounded-lg bg-gray-50 text-rose-500 hover:bg-rose-600 hover:text-white transition-all shadow-sm">
                        <FaTrash size={12} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {topics.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-16 text-center text-gray-300 font-black uppercase tracking-widest text-[10px]"
                  >
                    No topics found for the selected criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
// FaCalendarDay is already imported
