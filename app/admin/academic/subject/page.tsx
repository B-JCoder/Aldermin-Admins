"use client";

import React, { useState } from "react";
import {
  FaBookOpen,
  FaPlus,
  FaTrash,
  FaEdit,
  FaCheck,
  FaFlask,
  FaMicroscope,
} from "react-icons/fa";

export default function SubjectPage() {
  const [subjectName, setSubjectName] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [subjectType, setSubjectType] = useState("Theory");

  const [subjectList, setSubjectList] = useState([
    { id: 1, name: "Advanced Mathematics", type: "Theory", code: "MAT-401" },
    {
      id: 2,
      name: "Computational Physics",
      type: "Practical",
      code: "PHY-402",
    },
    { id: 3, name: "Organic Chemistry", type: "Theory", code: "CHM-403" },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (subjectName.trim() && subjectCode.trim()) {
      setSubjectList([
        ...subjectList,
        {
          id: subjectList.length + 1,
          name: subjectName,
          type: subjectType,
          code: subjectCode,
        },
      ]);
      setSubjectName("");
      setSubjectCode("");
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-indigo-600 rounded-xl shadow-lg ring-4 ring-indigo-50">
            <FaBookOpen className="text-white" size={20} />
          </div>
          Curricular Disciplines
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Creation Form */}
        <div className="lg:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-gray-50/10">
            <h4 className="mb-8 text-xs font-semibold text-gray-400   leading-none flex items-center gap-2">
              Add Curricular Discipline
              <div className="h-[1px] flex-1 bg-gray-100"></div>
            </h4>

            <form onSubmit={handleSubmit} className="space-y-6 flex-1">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-semibold text-gray-400   mb-2 px-1 text-nowrap">
                      Discipline Name
                    </label>
                    <input
                      type="text"
                      value={subjectName}
                      onChange={(e) => setSubjectName(e.target.value)}
                      className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white shadow-sm"
                      placeholder="e.g. Topology"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-semibold text-gray-400   mb-2 px-1">
                      Codification
                    </label>
                    <input
                      type="text"
                      value={subjectCode}
                      onChange={(e) => setSubjectCode(e.target.value)}
                      className="w-full rounded-2xl border-gray-100 p-4 text-xs  font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white shadow-sm"
                      placeholder="TOP-101"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-gray-400   mb-4 px-1">
                    Discipline Modality
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div
                      onClick={() => setSubjectType("Theory")}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center gap-3 ${
                        subjectType === "Theory"
                          ? "bg-indigo-600 border-indigo-600 text-white shadow-lg"
                          : "bg-gray-50 border-gray-100 text-gray-400 hover:border-indigo-200"
                      }`}
                    >
                      <FaBookOpen
                        size={14}
                        className={
                          subjectType === "Theory"
                            ? "text-white"
                            : "text-gray-300"
                        }
                      />
                      <span className="text-[11px] font-semibold  ">
                        Theory
                      </span>
                    </div>
                    <div
                      onClick={() => setSubjectType("Practical")}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center gap-3 ${
                        subjectType === "Practical"
                          ? "bg-indigo-600 border-indigo-600 text-white shadow-lg"
                          : "bg-gray-50 border-gray-100 text-gray-400 hover:border-indigo-200"
                      }`}
                    >
                      <FaFlask
                        size={14}
                        className={
                          subjectType === "Practical"
                            ? "text-white"
                            : "text-gray-300"
                        }
                      />
                      <span className="text-[11px] font-semibold  ">
                        Practical
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full relative overflow-hidden rounded-2xl bg-gray-900 border-b-4 border-gray-700 text-white px-8 py-5 text-xs font-semibold   transition-all hover:bg-black active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-gray-200"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <FaCheck className="" />
                    Catalog Discipline
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
                Discipline Taxonomy
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
                      Discipline Identity
                    </th>
                    <th className="px-5 py-6 text-center  tracking-tighter text-gray-400">
                      Classification
                    </th>
                    <th className="px-5 py-6 text-center  tracking-tighter text-gray-400">
                      Governance
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50/70">
                  {subjectList.map((s, index) => (
                    <tr
                      key={s.id}
                      className="hover:bg-indigo-50/20 transition-all group"
                    >
                      <td className="px-5 py-8 text-gray-300  ">
                        {index + 1}
                      </td>
                      <td className="px-5 py-8">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                            {s.type === "Theory" ? (
                              <FaBookOpen size={16} />
                            ) : (
                              <FaMicroscope size={16} />
                            )}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 leading-tight text-xs   tracking-tighter mb-1">
                              {s.name}
                            </div>
                            <div className="text-[9px]  font-semibold text-indigo-500/60  ">
                              {s.code}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-8 text-center text-gray-500">
                        <span
                          className={`px-4 py-1.5 rounded-lg text-[9px] font-semibold   shadow-sm ring-1 ring-inset ${
                            s.type === "Theory"
                              ? "bg-indigo-50 text-indigo-700 ring-indigo-100"
                              : "bg-emerald-50 text-emerald-700 ring-emerald-100"
                          }`}
                        >
                          {s.type}
                        </span>
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

