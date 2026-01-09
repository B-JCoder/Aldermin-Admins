"use client";

import React, { useState } from "react";
import { FaSearch, FaCouch, FaPrint } from "react-icons/fa";

export default function SeatPlanPage() {
  const [searchParams, setSearchParams] = useState({
    exam: "",
    class: "",
    section: "",
  });

  const [studentList, setStudentList] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      admissionNo: "ADM201",
      className: "Class 9",
      fatherName: "Samuel Johnson",
      category: "BC",
      gender: "Female",
      selected: false,
    },
    {
      id: 2,
      name: "Bob Smith",
      admissionNo: "ADM202",
      className: "Class 9",
      fatherName: "Harry Smith",
      category: "General",
      gender: "Male",
      selected: false,
    },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching seat plans with", searchParams);
  };

  const handleSelectOne = (id: number) => {
    setStudentList((prev) =>
      prev.map((s) => (s.id === id ? { ...s, selected: !s.selected } : s))
    );
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setStudentList((prev) => prev.map((s) => ({ ...s, selected: isChecked })));
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FaCouch className="text-amber-600 text-2xl" />
          <h4 className="text-xl font-bold text-gray-800 tracking-tight">
            Seat Plan Arrangement
          </h4>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white font-bold text-sm hover:bg-indigo-700 transition shadow-lg shadow-indigo-100 uppercase tracking-wide">
          <FaPrint size={14} />
          Print Seat Plans
        </button>
      </div>

      {/* Search Header */}
      <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 ring-1 ring-black/5">
        <h4 className="mb-4 text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">
          Logistics Filter
        </h4>
        <form
          onSubmit={handleSearch}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end"
        >
          <div className="md:col-span-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Examination Session <span className="text-red-500">*</span>
            </label>
            <select
              name="exam"
              value={searchParams.exam}
              onChange={handleInputChange}
              className="w-full rounded-lg border-gray-300 p-2.5 border text-sm focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all"
              required
            >
              <option value="">Select Exam</option>
              <option value="midt">Mid-Term 2023</option>
              <option value="fint">Final-Term 2023</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Class <span className="text-red-500">*</span>
            </label>
            <select
              name="class"
              value={searchParams.class}
              onChange={handleInputChange}
              className="w-full rounded-lg border-gray-300 p-2.5 border text-sm focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all"
              required
            >
              <option value="">Select Class</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Section <span className="text-red-500">*</span>
            </label>
            <select
              name="section"
              value={searchParams.section}
              onChange={handleInputChange}
              className="w-full rounded-lg border-gray-300 p-2.5 border text-sm focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all"
              required
            >
              <option value="">Select Section</option>
              <option value="A">Section A</option>
              <option value="B">Section B</option>
            </select>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg bg-amber-600 px-8 py-2.5 text-white font-bold text-sm transition-all hover:bg-amber-700 active:scale-[0.98] shadow-md shadow-amber-100"
            >
              <FaSearch size={14} />
              Filter Records
            </button>
          </div>
        </form>
      </div>

      {/* Seat Plan Results Table */}
      <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 ring-1 ring-black/5">
        <h4 className="mb-4 text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">
          Candidate Allotment List
        </h4>
        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50/50 text-gray-500 font-black text-[10px] uppercase">
              <tr>
                <th className="px-5 py-4 text-left w-16">SN</th>
                <th className="px-5 py-4 text-left">Student Name</th>
                <th className="px-5 py-4 text-left">Admission No</th>
                <th className="px-5 py-4 text-left">Class</th>
                <th className="px-5 py-4 text-left">Father's Name</th>
                <th className="px-5 py-4 text-left">Category</th>
                <th className="px-5 py-4 text-left">Gender</th>
                <th className="px-5 py-4 text-center">
                  <div className="flex flex-col items-center justify-center gap-1">
                    <span className="text-[8px] font-black text-amber-600">
                      Allot All
                    </span>
                    <input
                      type="checkbox"
                      onChange={handleSelectAll}
                      className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500 cursor-pointer"
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {studentList.map((item, index) => (
                <tr
                  key={item.id}
                  className={`hover:bg-amber-50/10 transition-colors ${
                    item.selected ? "bg-amber-50/20" : ""
                  }`}
                >
                  <td className="px-5 py-4 text-gray-400 font-mono text-xs">
                    {index + 1}
                  </td>
                  <td className="px-5 py-4 font-bold text-gray-900 line-clamp-1">
                    {item.name}
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-xs font-black text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-100 tabular-nums">
                      {item.admissionNo}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-gray-600 font-medium">
                    {item.className}
                  </td>
                  <td className="px-5 py-4 text-gray-600 italic text-xs">
                    {item.fatherName}
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-[10px] font-black tracking-widest text-gray-400">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-gray-500 text-xs font-black">
                    {item.gender}
                  </td>
                  <td className="px-5 py-4 text-center">
                    <input
                      type="checkbox"
                      checked={item.selected}
                      onChange={() => handleSelectOne(item.id)}
                      className="w-4 h-4 text-amber-600 border-gray-200 rounded focus:ring-amber-500 cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
              {studentList.length === 0 && (
                <tr>
                  <td
                    colSpan={8}
                    className="px-5 py-12 text-center text-gray-300 font-bold uppercase tracking-widest text-[10px]"
                  >
                    No students matching the criteria.
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
