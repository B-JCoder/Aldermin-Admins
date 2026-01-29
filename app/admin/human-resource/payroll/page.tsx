"use client";

import React, { useState } from "react";
import {
  FaMoneyBillWave,
  FaSearch,
  FaFilter,
  FaCheckCircle,
  FaExclamationCircle,
  FaReceipt,
  FaUserShield,
  FaCalendarCheck,
  FaPrint,
} from "react-icons/fa";

export default function PayrollPage() {
  const [payrollList, setPayrollList] = useState([
    {
      id: 1,
      staffId: "STF-2024-001",
      name: "Dr. Robert Fox",
      role: "Principal",
      netSalary: "$8,500",
      status: "Paid",
      payDate: "2024-03-01",
    },
    {
      id: 2,
      staffId: "STF-2024-002",
      name: "Jane Cooper",
      role: "Faculty Head",
      netSalary: "$6,200",
      status: "Generated",
      payDate: "-",
    },
    {
      id: 3,
      staffId: "STF-2024-003",
      name: "Albert Flores",
      role: "Admin Director",
      netSalary: "$5,800",
      status: "Paid",
      payDate: "2024-03-01",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-sky-600 rounded-xl shadow-lg ring-4 ring-sky-50">
            <FaMoneyBillWave className="text-white" size={20} />
          </div>
          Fiscal Remuneration Matrix
        </h1>
        <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-[10px] font-semibold rounded-xl  tracking-[0.2em] hover:bg-black transition-all shadow-xl active:scale-95">
          <FaPrint /> Broadcast Payroll
        </button>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 bg-gradient-to-br from-white to-sky-50/5 relative overflow-hidden">
        <form className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <label className="block text-[10px] font-semibold text-gray-400   mb-2 px-1">
              Fiscal Cycle (Month)
            </label>
            <div className="relative">
              <FaCalendarCheck
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                size={12}
              />
              <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-sky-500/10 outline-none transition-all bg-white shadow-sm appearance-none">
                <option>March 2024</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-semibold text-gray-400   mb-2 px-1">
              Organizational Tier
            </label>
            <div className="relative">
              <FaFilter
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                size={12}
              />
              <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-sky-500/10 outline-none transition-all bg-white shadow-sm appearance-none">
                <option>All Departments</option>
              </select>
            </div>
          </div>
          <div className="md:col-span-2 flex items-end">
            <button
              type="submit"
              className="w-full relative overflow-hidden rounded-2xl bg-sky-600 border-b-4 border-sky-800 text-white px-8 py-4 text-[10px] font-semibold  tracking-[0.2em] transition-all hover:bg-sky-700 active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-sky-100"
            >
              <div className="relative z-10 flex items-center justify-center gap-2">
                <FaSearch className="" />
                Analyze Fiscal Distribution
              </div>
            </button>
          </div>
        </form>
      </div>

      <div className="rounded-3xl bg-white shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-gray-50/30">
          <h4 className="text-xs font-semibold text-gray-400   leading-none">
            Remuneration Disbursement Stream
          </h4>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50/50 text-gray-400 font-bold border-b border-gray-50">
              <tr>
                <th className="px-8 py-6 text-left w-20 text-[10px]  font-semibold">
                  SN
                </th>
                <th className="px-8 py-6 text-left text-[10px]  font-semibold ">
                  Personnel Node
                </th>
                <th className="px-8 py-6 text-center text-[10px]  font-semibold ">
                  Net Compensation
                </th>
                <th className="px-8 py-6 text-center text-[10px]  font-semibold ">
                  Compliance Status
                </th>
                <th className="px-8 py-6 text-center text-[10px]  font-semibold ">
                  Disbursement Date
                </th>
                <th className="px-8 py-6 text-center text-[10px]  font-semibold ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {payrollList.map((p, index) => (
                <tr
                  key={p.id}
                  className="hover:bg-sky-50/10 transition-all group"
                >
                  <td className="px-8 py-10 text-gray-300  text-xs ">
                    {index + 1}
                  </td>
                  <td className="px-8 py-10">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 ring-4 ring-sky-50 relative overflow-hidden group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        <FaUserShield size={14} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 tracking-tight text-base    leading-none mb-1">
                          {p.name}
                        </div>
                        <div className="text-[9px] font-semibold text-gray-400  ">
                          {p.role} •{" "}
                          <span className="text-sky-500  ">
                            {p.staffId}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-10 text-center">
                    <div className="text-lg font-semibold  text-gray-900 group-hover:text-sky-600 transition-colors">
                      {p.netSalary}
                    </div>
                  </td>
                  <td className="px-8 py-10 text-center">
                    <span
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-semibold   shadow-sm ring-1 ring-inset ${
                        p.status === "Paid"
                          ? "bg-emerald-50 text-emerald-700 ring-emerald-100"
                          : "bg-amber-50 text-amber-700 ring-amber-100"
                      }`}
                    >
                      {p.status === "Paid" ? (
                        <FaCheckCircle />
                      ) : (
                        <FaExclamationCircle />
                      )}
                      {p.status}
                    </span>
                  </td>
                  <td className="px-8 py-10 text-center text-gray-400  text-[10px] ">
                    {p.payDate}
                  </td>
                  <td className="px-8 py-10 text-center">
                    <button className="px-5 py-2.5 bg-gray-900 text-white text-[9px] font-semibold rounded-xl   hover:bg-black transition-all shadow-lg active:scale-95 flex items-center gap-2 mx-auto">
                      <FaReceipt size={10} /> Generate Payslip
                    </button>
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

