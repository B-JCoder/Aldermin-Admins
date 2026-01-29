"use client";

import React, { useState } from "react";
import {
  FaGraduationCap,
  FaPlus,
  FaTrash,
  FaEdit,
  FaCheck,
  FaLayerGroup,
  FaCheckCircle,
} from "react-icons/fa";

export default function ClassPage() {
  const [className, setClassName] = useState("");
  const [passingMarks, setPassingMarks] = useState("40");
  const [selectedSections, setSelectedSections] = useState<string[]>([]);

  const sections = ["Section Alpha", "Section Beta", "Section Gamma"];
  const [classList, setClassList] = useState([
    {
      id: 1,
      name: "Class 10",
      passingMarks: "40",
      averageMarks: "72",
      sections: ["Section Alpha", "Section Beta"],
    },
    {
      id: 2,
      name: "Class 12",
      passingMarks: "45",
      averageMarks: "68",
      sections: ["Section Alpha", "Section Gamma"],
    },
  ]);

  const toggleSection = (section: string) => {
    setSelectedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (className.trim()) {
      setClassList([
        ...classList,
        {
          id: classList.length + 1,
          name: className,
          passingMarks: passingMarks,
          averageMarks: "0",
          sections: selectedSections,
        },
      ]);
      setClassName("");
      setSelectedSections([]);
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-indigo-600 rounded-xl shadow-lg ring-4 ring-indigo-50">
            <FaGraduationCap className="text-white" size={20} />
          </div>
          Academic Grades
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Creation Form */}
        <div className="lg:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-gray-50/10">
            <h4 className="mb-8 text-xs font-semibold text-gray-400   leading-none flex items-center gap-2">
              Add Academic Grade
              <div className="h-[1px] flex-1 bg-gray-100"></div>
            </h4>

            <form onSubmit={handleSubmit} className="space-y-6 flex-1">
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-semibold text-gray-400   mb-2 px-1">
                    Grade Designation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                    className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white shadow-sm"
                    placeholder="e.g. Class 11"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-gray-400   mb-2 px-1">
                    Passing Threshold
                  </label>
                  <select
                    value={passingMarks}
                    onChange={(e) => setPassingMarks(e.target.value)}
                    className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white shadow-sm appearance-none"
                  >
                    <option value="35">35 Marks</option>
                    <option value="40">40 Marks</option>
                    <option value="45">45 Marks</option>
                    <option value="50">50 Marks</option>
                  </select>
                </div>

                <div className="pt-2">
                  <label className="block text-[10px] font-semibold text-gray-400   mb-4 px-1">
                    Constituent Units
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    {sections.map((section) => (
                      <div
                        key={section}
                        onClick={() => toggleSection(section)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between group ${
                          selectedSections.includes(section)
                            ? "bg-indigo-600 border-indigo-600 text-white shadow-lg"
                            : "bg-gray-50 border-gray-100 text-gray-400 hover:border-indigo-200 hover:bg-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <FaLayerGroup
                            size={12}
                            className={
                              selectedSections.includes(section)
                                ? "text-white"
                                : "text-gray-300 group-hover:text-indigo-400"
                            }
                          />
                          <span className="text-[11px] font-semibold  ">
                            {section}
                          </span>
                        </div>
                        {selectedSections.includes(section) && (
                          <FaCheckCircle size={14} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full relative overflow-hidden rounded-2xl bg-gray-900 border-b-4 border-gray-700 text-white px-8 py-5 text-xs font-semibold   transition-all hover:bg-black active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-gray-200"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <FaPlus className="" />
                    Initialize Grade
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* List Index */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="flex items-center justify-between mb-8 relative">
              <h4 className="text-xs font-semibold text-gray-400   leading-none">
                Institutional Grade Matrix
              </h4>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-50 relative">
              <table className="min-w-full text-[11px]">
                <thead className="bg-gray-50/70 text-gray-500 font-semibold border-b border-gray-50">
                  <tr>
                    <th className="px-5 py-6 text-left w-12  tracking-tighter">
                      SN
                    </th>
                    <th className="px-5 py-6 text-left  tracking-tighter text-gray-400">
                      Grade Entity
                    </th>
                    <th className="px-5 py-6 text-center  tracking-tighter text-gray-400">
                      Metrics
                    </th>
                    <th className="px-5 py-6 text-center  tracking-tighter text-gray-400">
                      Governance
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50/70">
                  {classList.map((c, index) => (
                    <tr
                      key={c.id}
                      className="hover:bg-indigo-50/20 transition-all group"
                    >
                      <td className="px-5 py-8 text-gray-300  ">
                        {index + 1}
                      </td>
                      <td className="px-5 py-8">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                            <FaGraduationCap size={16} />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 leading-tight text-xs   tracking-tighter mb-1">
                              {c.name}
                            </div>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {c.sections.map((s) => (
                                <span
                                  key={s}
                                  className="px-1.5 py-0.5 bg-indigo-50 text-[8px] font-semibold text-indigo-500 rounded  tracking-tighter border border-indigo-100/50"
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-8 text-center">
                        <div className="flex flex-col gap-1 items-center">
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-semibold text-gray-400  tracking-tighter">
                              Pass:
                            </span>
                            <span className=" font-bold text-emerald-500">
                              {c.passingMarks}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-semibold text-gray-400  tracking-tighter">
                              Avg:
                            </span>
                            <span className=" font-bold text-blue-500">
                              {c.averageMarks}%
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-8 text-center">
                        <div className="flex justify-center gap-1">
                          <button className="p-3 rounded-xl bg-gray-50 text-blue-500 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                            <FaEdit size={14} />
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

