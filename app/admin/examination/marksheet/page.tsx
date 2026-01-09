"use client";

import React, { useState } from "react";
import { FaSearch, FaUserGraduate, FaPrint, FaSchool } from "react-icons/fa";

export default function MarksheetReportPage() {
  const [searchParams, setSearchParams] = useState({
    exam: "",
    className: "",
    section: "",
    subject: "",
  });

  const [reportData, setReportData] = useState([
    {
      id: 1,
      name: "John Maxwell",
      admissionNo: "ADM701",
      rollNo: "01",
      position: "1st",
      totalMark: "100",
      passMark: "40",
      obtainedMark: "92",
      result: "Pass",
      grade: "A+",
    },
    {
      id: 2,
      name: "Steve Jobs",
      admissionNo: "ADM702",
      rollNo: "02",
      position: "2nd",
      totalMark: "100",
      passMark: "40",
      obtainedMark: "88",
      result: "Pass",
      grade: "A",
    },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching marksheet for", searchParams);
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-bold text-gray-800 tracking-tight">
          Marksheet Report Analysis
        </h4>
        <button className="flex items-center gap-2 rounded-lg bg-gray-800 px-6 py-2 text-white font-black text-sm hover:bg-black transition shadow-lg shadow-gray-200 uppercase tracking-widest">
          <FaPrint size={14} />
          Export PDF
        </button>
      </div>

      {/* Search Section */}
      <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 ring-1 ring-black/5">
        <h4 className="mb-4 text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">
          Report Generation Filter
        </h4>
        <form
          onSubmit={handleSearch}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Exam <span className="text-red-500">*</span>
            </label>
            <select
              name="exam"
              value={searchParams.exam}
              onChange={handleInputChange}
              className="w-full rounded-lg border-gray-200 p-2.5 border text-sm focus:ring-1 focus:ring-blue-500 outline-none"
              required
            >
              <option value="">Select Exam</option>
              <option value="term1">First Term 2023</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Class <span className="text-red-500">*</span>
            </label>
            <select
              name="className"
              value={searchParams.className}
              onChange={handleInputChange}
              className="w-full rounded-lg border-gray-200 p-2.5 border text-sm focus:ring-1 focus:ring-blue-500 outline-none"
              required
            >
              <option value="">Select Class</option>
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
              className="w-full rounded-lg border-gray-200 p-2.5 border text-sm focus:ring-1 focus:ring-blue-500 outline-none"
              required
            >
              <option value="">Select Section</option>
              <option value="A">Section A</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject <span className="text-red-500">*</span>
            </label>
            <select
              name="subject"
              value={searchParams.subject}
              onChange={handleInputChange}
              className="w-full rounded-lg border-gray-200 p-2.5 border text-sm focus:ring-1 focus:ring-blue-500 outline-none"
              required
            >
              <option value="">Select Subject</option>
              <option value="math">Mathematics</option>
            </select>
          </div>

          <div className="lg:col-span-4 flex justify-end mt-2">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-10 py-2.5 text-white font-black text-sm transition-all hover:bg-blue-700 active:scale-[0.98] shadow-md shadow-blue-100"
            >
              <FaSearch size={14} />
              Generate Marksheet
            </button>
          </div>
        </form>
      </div>

      {/* Marksheet Report View */}
      <div className="space-y-6">
        {/* Header Ribbon */}
        <div className="rounded-xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-gradient-to-r from-emerald-800 to-indigo-900 p-8 text-white">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-inner">
                <FaSchool size={48} className="text-emerald-300 shadow-xl" />
              </div>
              <div>
                <h1 className="text-4xl font-black tracking-tighter mb-1">
                  ALDERMIN
                </h1>
                <p className="text-emerald-100 font-medium italic opacity-80">
                  Empowering Excellence in Education
                </p>
              </div>
            </div>
            <div className="bg-black/20 backdrop-blur-lg p-4 rounded-xl border border-white/10 text-sm space-y-2 min-w-[200px]">
              <div className="flex justify-between border-b border-white/10 pb-1">
                <span className="opacity-60 text-[10px] font-black uppercase">
                  Examination
                </span>
                <span className="font-bold">{searchParams.exam || "N/A"}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1">
                <span className="opacity-60 text-[10px] font-black uppercase">
                  Subject
                </span>
                <span className="font-bold">
                  {searchParams.subject || "N/A"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-60 text-[10px] font-black uppercase">
                  Class
                </span>
                <span className="font-bold">
                  {searchParams.className || "N/A"} -{" "}
                  {searchParams.section || ""}
                </span>
              </div>
            </div>
            <div className="text-right hidden md:block">
              <h4 className="text-xl font-bold mb-1">Academic Registry</h4>
              <p className="text-[10px] font-medium opacity-70 leading-relaxed uppercase tracking-widest">
                89/2 Panthapath, Dhaka Dhaka 1215,
                <br />
                Bangladesh • +8801841412141
              </p>
            </div>
          </div>
        </div>

        {/* Table View */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h4 className="text-center font-black text-2xl text-gray-800 mb-8 uppercase tracking-[0.2em] border-b pb-4">
            Detailed Marksheet Report
          </h4>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 border-y border-gray-100">
                <tr className="text-gray-400 font-black text-[10px] uppercase tracking-widest">
                  <th className="px-6 py-4 text-left">Student Information</th>
                  <th className="px-6 py-4 text-center">Admission #</th>
                  <th className="px-6 py-4 text-center">Roll</th>
                  <th className="px-6 py-4 text-center">Rank</th>
                  <th className="px-6 py-4 text-center">Full Marks</th>
                  <th className="px-6 py-4 text-center text-red-500">
                    Min Pass
                  </th>
                  <th className="px-6 py-4 text-center text-emerald-600">
                    Obtained
                  </th>
                  <th className="px-6 py-4 text-center">Result</th>
                  <th className="px-6 py-4 text-center">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {reportData.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-blue-50/10 transition-colors"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 font-bold">
                          {item.name.charAt(0)}
                        </div>
                        <span className="font-bold text-gray-900 tracking-tight text-base font-serif italic">
                          {item.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center font-mono text-xs font-bold text-gray-400">
                      {item.admissionNo}
                    </td>
                    <td className="px-6 py-5 text-center font-bold text-gray-600 tabular-nums">
                      {item.rollNo}
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-black bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100 uppercase">
                        {item.position}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-center font-black text-gray-800">
                      {item.totalMark}
                    </td>
                    <td className="px-6 py-5 text-center font-bold text-red-600/60 tabular-nums">
                      {item.passMark}
                    </td>
                    <td className="px-6 py-5 text-center font-black text-emerald-700 text-lg tabular-nums font-mono">
                      {item.obtainedMark}
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                          item.result === "Pass"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.result}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-center font-black text-indigo-600 italic text-xl drop-shadow-sm">
                      {item.grade}
                    </td>
                  </tr>
                ))}
                {reportData.length === 0 && (
                  <tr>
                    <td
                      colSpan={9}
                      className="px-6 py-20 text-center text-gray-300 font-black uppercase tracking-widest text-xs"
                    >
                      No report data available for this selection.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
