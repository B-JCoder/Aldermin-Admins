"use client";

import React, { useState } from "react";
import {
  FaPrint,
  FaSearch,
  FaFileInvoiceDollar,
  FaUserTie,
  FaCalendarAlt,
} from "react-icons/fa";

export default function BulkPayrollPrintPage() {
  const [payrolls, setPayrolls] = useState([
    {
      id: 1,
      staff: "Prof. Albus Dumbledore",
      designation: "Headmaster",
      month: "March 2024",
      netPay: "$5,000",
      status: "Generated",
    },
    {
      id: 2,
      staff: "Minerva McGonagall",
      designation: "Deputy Headmistress",
      month: "March 2024",
      netPay: "$4,200",
      status: "Generated",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-teal-600 rounded-xl shadow-lg ring-4 ring-teal-50">
            <FaFileInvoiceDollar className="text-white" size={20} />
          </div>
          Bulk Payroll Processor
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-teal-50/5">
            <h4 className="mb-6 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center justify-between">
              Payroll Config
              <div className="h-1 w-12 bg-teal-100 rounded-full"></div>
            </h4>

            <form className="space-y-4 flex-1">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Role / Designation
                  </label>
                  <select className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-teal-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer">
                    <option>All Staff</option>
                    <option>Teaching Staff</option>
                    <option>Admin Staff</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Pay Period
                  </label>
                  <div className="relative">
                    <FaCalendarAlt
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <input
                      type="month"
                      className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-[10px] font-bold focus:ring-4 focus:ring-teal-500/10 outline-none transition-all bg-white shadow-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full relative overflow-hidden rounded-2xl bg-gray-900 border-b-4 border-gray-700 text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-black active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-gray-200"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <FaSearch className="italic" />
                    Retrieve Slips
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="flex items-center justify-between mb-8 relative">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
                Payslip Batch
              </h4>
              <button className="px-6 py-3 bg-teal-600 text-white text-[10px] font-black rounded-xl uppercase tracking-widest hover:bg-teal-700 transition-all flex items-center gap-2 shadow-lg shadow-teal-100 active:scale-95">
                <FaPrint />
                Print Slips
              </button>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-50 relative">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50/70 text-gray-500 font-bold border-b border-gray-50">
                  <tr>
                    <th className="px-6 py-6 text-left w-12">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                      />
                    </th>
                    <th className="px-6 py-6 text-left text-[10px] uppercase font-black tracking-widest">
                      Staff Member
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Period
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Net Pay
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {payrolls.map((p) => (
                    <tr
                      key={p.id}
                      className="group hover:bg-teal-50/20 transition-all"
                    >
                      <td className="px-6 py-8">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                        />
                      </td>
                      <td className="px-6 py-8">
                        <div className="font-black text-gray-900 tracking-tight text-base font-serif italic uppercase leading-none mb-1">
                          {p.staff}
                        </div>
                        <div className="text-[10px] font-mono text-teal-500 font-bold">
                          {p.designation}
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <div className="text-[10px] font-black uppercase text-gray-400 font-mono">
                          {p.month}
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <div className="text-[10px] font-black uppercase text-gray-900 font-mono">
                          {p.netPay}
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
