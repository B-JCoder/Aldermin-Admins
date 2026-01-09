"use client";

import React, { useState } from "react";
import {
  FaFileInvoice,
  FaPrint,
  FaSearch,
  FaShieldAlt,
  FaUsers,
  FaArrowRight,
  FaUserGraduate,
} from "react-icons/fa";

export default function IncidentWisePage() {
  const [incidentReport, setIncidentReport] = useState([
    {
      id: 1,
      incident: "Exceptional Scholarly Pursuit",
      students: ["Alice Johnson", "John Doe", "Sarah Miller"],
    },
    { id: 2, incident: "Integrity Violation", students: ["Bob Smith"] },
    {
      id: 3,
      incident: "Community Leadership",
      students: ["Charlie Davis", "Emma Wilson"],
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-violet-600 rounded-xl shadow-lg ring-4 ring-violet-50">
            <FaFileInvoice className="text-white" size={20} />
          </div>
          Conduct Distribution Analytics
        </h1>
        <button className="flex items-center gap-2 px-6 py-3 bg-white text-violet-600 text-[10px] font-black rounded-xl uppercase tracking-widest hover:bg-violet-50 transition-all shadow-lg border border-violet-100 active:scale-95">
          <FaPrint /> Export Analytical Report
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <div className="rounded-3xl bg-white shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-100/20 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>

          <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-gray-50/30 relative">
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
              Taxonomy-Centric Distribution
            </h4>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-violet-100 text-violet-700 text-[9px] font-black rounded-lg uppercase tracking-tighter">
                Live Stream
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50/50 text-gray-400 font-bold border-b border-gray-50">
                <tr>
                  <th className="px-8 py-6 text-left w-20 text-[10px] uppercase font-black">
                    SN
                  </th>
                  <th className="px-8 py-6 text-left text-[10px] uppercase font-black tracking-widest">
                    Conduct Node
                  </th>
                  <th className="px-8 py-6 text-left text-[10px] uppercase font-black tracking-widest">
                    Attributed Subjects
                  </th>
                  <th className="px-8 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                    Magnitude
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {incidentReport.map((item, index) => (
                  <tr
                    key={item.id}
                    className="hover:bg-violet-50/10 transition-all group"
                  >
                    <td className="px-8 py-10 text-gray-300 font-mono text-xs italic">
                      {index + 1}
                    </td>
                    <td className="px-8 py-10">
                      <div className="font-black text-gray-900 tracking-tight text-base font-serif italic uppercase leading-none">
                        {item.incident}
                      </div>
                      <div className="mt-2 text-[9px] font-black text-violet-500 uppercase tracking-widest flex items-center gap-1">
                        <FaShieldAlt size={8} /> Active Taxonomy Node
                      </div>
                    </td>
                    <td className="px-8 py-10">
                      <div className="flex flex-wrap gap-2">
                        {item.students.map((student, sIndex) => (
                          <div
                            key={sIndex}
                            className="flex items-center gap-2 pl-1 pr-3 py-1 bg-white border border-gray-100 rounded-full shadow-sm hover:border-violet-200 transition-all group/chip"
                          >
                            <div className="w-6 h-6 rounded-full bg-violet-50 flex items-center justify-center text-violet-500 text-[10px]">
                              <FaUserGraduate size={10} />
                            </div>
                            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-tighter">
                              {student}
                            </span>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-8 py-10 text-center">
                      <div className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-2xl shadow-lg">
                        <span className="text-xs font-black font-mono">
                          {item.students.length}
                        </span>
                        <span className="ml-2 text-[8px] font-black uppercase text-gray-400">
                          Total
                        </span>
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
  );
}
