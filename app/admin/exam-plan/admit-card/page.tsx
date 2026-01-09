"use client";

import React, { useState } from "react";
import { FaSearch, FaIdCard, FaPrint } from "react-icons/fa";

export default function AdmitCardPage() {
  const [searchParams, setSearchParams] = useState({
    exam: "",
    class: "",
    section: "",
  });

  const [studentList, setStudentList] = useState([
    {
      id: 1,
      name: "John Smith",
      admissionNo: "ADM001",
      className: "Class 10",
      fatherName: "Robert Smith",
      category: "General",
      gender: "Male",
      selected: false,
    },
    {
      id: 2,
      name: "Jane Doe",
      admissionNo: "ADM002",
      className: "Class 10",
      fatherName: "Michael Doe",
      category: "General",
      gender: "Female",
      selected: false,
    },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching admit cards with", searchParams);
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
          <FaIdCard className="text-blue-600 text-2xl" />
          <h4 className="text-xl font-bold text-gray-800 tracking-tight">
            Admit Card Generation
          </h4>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white font-bold text-sm hover:bg-indigo-700 transition shadow-lg shadow-indigo-100">
          <FaPrint size={14} />
          Print Selected
        </button>
      </div>

      {/* Search Header */}
      <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 ring-1 ring-black/5">
        <h4 className="mb-4 text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">
          Selection Filter
        </h4>
        <form
          onSubmit={handleSearch}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end"
        >
          <div className="md:col-span-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Exam <span className="text-red-500">*</span>
            </label>
            <select
              name="exam"
              value={searchParams.exam}
              onChange={handleInputChange}
              className="w-full rounded-lg border-gray-300 p-2.5 border text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
              required
            >
              <option value="">Select Exam</option>
              <option value="term1">First Term Examination</option>
              <option value="final">Final Examination</option>
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
              className="w-full rounded-lg border-gray-300 p-2.5 border text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
              required
            >
              <option value="">Select Class</option>
              <option value="1">Class 1</option>
              <option value="2">Class 2</option>
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
              className="w-full rounded-lg border-gray-300 p-2.5 border text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
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
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-2.5 text-white font-bold text-sm transition-all hover:bg-blue-700 active:scale-[0.98] shadow-md shadow-blue-100"
            >
              <FaSearch size={14} />
              Filter Students
            </button>
          </div>
        </form>
      </div>

      {/* Student List Table */}
      <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 ring-1 ring-black/5">
        <h4 className="mb-4 text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">
          Filtered Student Result
        </h4>
        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50/50 text-gray-500 font-bold">
              <tr>
                <th className="px-5 py-4 text-left w-16">SN</th>
                <th className="px-5 py-4 text-left">Student Name</th>
                <th className="px-5 py-4 text-left">Admission No</th>
                <th className="px-5 py-4 text-left">Class</th>
                <th className="px-5 py-4 text-left">Father's Name</th>
                <th className="px-5 py-4 text-left">Category</th>
                <th className="px-5 py-4 text-left">Gender</th>
                <th className="px-5 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-[10px] uppercase tracking-tighter">
                      Toggle All
                    </span>
                    <input
                      type="checkbox"
                      onChange={handleSelectAll}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {studentList.map((item, index) => (
                <tr
                  key={item.id}
                  className={`hover:bg-blue-50/20 transition-colors ${
                    item.selected ? "bg-blue-50/30" : ""
                  }`}
                >
                  <td className="px-5 py-4 text-gray-400 font-mono text-xs">
                    {index + 1}
                  </td>
                  <td className="px-5 py-4 font-bold text-gray-900">
                    {item.name}
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-xs font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded tracking-tighter">
                      {item.admissionNo}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-gray-600">{item.className}</td>
                  <td className="px-5 py-4 text-gray-600 font-medium">
                    {item.fatherName}
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-xs font-semibold text-gray-500 px-2 py-0.5 rounded-full bg-gray-100 ring-1 ring-gray-200">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-gray-500 text-xs font-bold uppercase">
                    {item.gender}
                  </td>
                  <td className="px-5 py-4 text-center">
                    <input
                      type="checkbox"
                      checked={item.selected}
                      onChange={() => handleSelectOne(item.id)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
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
                    Search to see eligible students.
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
