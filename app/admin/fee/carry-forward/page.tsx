"use client";

import React, { useState } from "react";
import {
  FaForward,
  FaSearch,
  FaUserGraduate,
  FaMoneyBillWave,
  FaArrowRight,
  FaCalendarAlt,
  FaHistory,
} from "react-icons/fa";

export default function FeeCarryForwardPage() {
  const [studentsData, setStudentsData] = useState([
    {
      id: 1,
      admissionNo: "ADM-2023-001",
      name: "Avery Sterling",
      previousBalance: "450.00",
      status: "Analyzed",
    },
    {
      id: 2,
      admissionNo: "ADM-2023-042",
      name: "Elara Vance",
      previousBalance: "120.00",
      status: "Pending",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-emerald-600 rounded-xl shadow-lg ring-4 ring-emerald-50">
            <FaForward className="text-white" size={20} />
          </div>
          Fiscal Transition
        </h1>
      </div>

      {/* Transitional Parameter Form */}
      <div className="rounded-[2rem] bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 bg-gradient-to-br from-white to-emerald-50/5">
        <h4 className="mb-8 text-xs font-semibold text-gray-400   leading-none flex items-center gap-2">
          Transition Mapping
          <div className="h-[1px] flex-1 bg-gray-100"></div>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-end">
          <div className="space-y-3">
            <label className="block text-[10px] font-semibold text-gray-400   ml-1">
              Source Session
            </label>
            <div className="relative">
              <FaCalendarAlt
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                size={12}
              />
              <select className="w-full bg-white border-gray-100 rounded-2xl p-4 pl-10 text-xs font-bold outline-none ring-1 ring-gray-100 focus:ring-4 focus:ring-emerald-500/10 transition-all appearance-none">
                <option>Academic Session 2023-24</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center md:pb-5 text-gray-200">
            <FaArrowRight size={24} />
          </div>
          <div className="space-y-3">
            <label className="block text-[10px] font-semibold text-gray-400   ml-1">
              Target Session
            </label>
            <div className="relative">
              <FaCalendarAlt
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                size={12}
              />
              <select className="w-full bg-white border-gray-100 rounded-2xl p-4 pl-10 text-xs font-bold outline-none ring-1 ring-gray-100 focus:ring-4 focus:ring-emerald-500/10 transition-all appearance-none">
                <option>Academic Session 2024-25</option>
              </select>
            </div>
          </div>
          <button className="w-full bg-gray-900 text-white rounded-2xl py-4 text-xs font-semibold   hover:bg-black transition-all shadow-xl shadow-gray-200 active:scale-95 flex items-center justify-center gap-2">
            <FaSearch size={12} />
            Verify Balances
          </button>
        </div>
      </div>

      {/* Balance Registry */}
      <div className="rounded-[2.5rem] bg-white p-10 shadow-2xl shadow-gray-100 border border-gray-100/50 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-50/20 rounded-full blur-3xl -ml-40 -mt-40 pointer-events-none"></div>

        <div className="relative overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-6 py-8 text-left text-[10px] font-semibold   text-gray-400 w-16">
                  SN
                </th>
                <th className="px-6 py-8 text-left text-[10px] font-semibold   text-gray-400">
                  Patron Information
                </th>
                <th className="px-6 py-8 text-center text-[10px] font-semibold   text-gray-400">
                  Previous Arrears
                </th>
                <th className="px-6 py-8 text-center text-[10px] font-semibold   text-gray-400">
                  Status
                </th>
                <th className="px-6 py-8 text-center text-[10px] font-semibold   text-gray-400">
                  Interaction
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50/70">
              {studentsData.map((s, index) => (
                <tr
                  key={s.id}
                  className="group hover:bg-emerald-50/10 transition-all"
                >
                  <td className="px-6 py-10 text-gray-300  text-xs ">
                    {index + 1}
                  </td>
                  <td className="px-6 py-10">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm border border-gray-100">
                        <FaUserGraduate size={16} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 tracking-tight text-base    leading-none mb-1">
                          {s.name}
                        </div>
                        <div className="text-[9px]  text-gray-400  tracking-tighter ">
                          ID: {s.admissionNo}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-600 rounded-xl text-xs font-semibold  border border-rose-100">
                      <FaMoneyBillWave size={10} />${s.previousBalance}
                    </div>
                  </td>
                  <td className="px-6 py-10 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-[9px] font-semibold   ${
                        s.status === "Analyzed"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {s.status}
                    </span>
                  </td>
                  <td className="px-6 py-10 text-center">
                    <button className="p-3 rounded-xl bg-gray-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all shadow-sm group">
                      <FaHistory
                        size={14}
                        className="group-hover:rotate-180 transition-transform duration-500"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="px-16 py-6 bg-emerald-600 border-b-4 border-emerald-800 text-white rounded-[2rem] text-xs font-semibold  tracking-[0.4em] shadow-2xl shadow-emerald-100 hover:brightness-110 active:border-b-0 active:translate-y-1 transition-all flex items-center gap-4">
          <FaForward size={14} />
          Commit Fiscal Transition
        </button>
      </div>
    </div>
  );
}

