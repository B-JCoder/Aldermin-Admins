"use client";

import React, { useState } from "react";
import { FaForward, FaSearch, FaUserTag, FaSave } from "react-icons/fa";

export default function FeeCarryForwardPage() {
  const [searchParams, setSearchParams] = useState({
    className: "",
    section: "",
  });

  const [carryForwardList, setCarryForwardList] = useState([
    {
      id: 1,
      name: "Marcus Aurelius",
      admissionNo: "ADM001",
      prevBalance: "1200",
      carryAmount: "1200",
      status: "Unprocessed",
    },
    {
      id: 2,
      name: "Seneca Minor",
      admissionNo: "ADM042",
      prevBalance: "450",
      carryAmount: "450",
      status: "Forwarded",
    },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching carry forward for", searchParams);
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-bold text-gray-800 tracking-tight">
          Fee Carry Forward Registry
        </h4>
        <button className="flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-2.5 text-white font-black text-sm hover:bg-emerald-700 transition shadow-lg shadow-emerald-100 uppercase tracking-widest">
          <FaSave size={14} />
          Bulk Forward
        </button>
      </div>

      {/* Filter Section */}
      <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 ring-1 ring-black/5">
        <h4 className="mb-4 text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">
          Selection Criteria
        </h4>
        <form
          onSubmit={handleSearch}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Class <span className="text-red-500">*</span>
            </label>
            <select
              name="className"
              value={searchParams.className}
              onChange={handleInputChange}
              className="w-full rounded-lg border-gray-300 p-2.5 border text-sm focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
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
              className="w-full rounded-lg border-gray-300 p-2.5 border text-sm focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
              required
            >
              <option value="">Select Section</option>
              <option value="A">Section A</option>
            </select>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-10 py-2.5 text-white font-black text-sm transition-all hover:bg-blue-700 active:scale-[0.98] shadow-md shadow-blue-100"
            >
              <FaSearch size={14} />
              Fetch Balances
            </button>
          </div>
        </form>
      </div>

      {/* Forward List Section */}
      <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 ring-1 ring-black/5">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-emerald-50 rounded-lg">
            <FaForward className="text-emerald-600" size={20} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900 leading-none">
              Previous Session Balance Transfer
            </h4>
            <p className="text-xs text-gray-500 mt-1 font-medium italic">
              Adjust unpaid dues from previous academic cycle
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50/50 text-gray-500 font-bold">
              <tr>
                <th className="px-5 py-4 text-left w-16 uppercase tracking-tighter text-[10px]">
                  SN
                </th>
                <th className="px-5 py-4 text-left uppercase tracking-tighter text-[10px]">
                  Student Identity
                </th>
                <th className="px-5 py-4 text-center uppercase tracking-tighter text-[10px]">
                  Prev. Balance
                </th>
                <th className="px-5 py-4 text-center uppercase tracking-tighter text-[10px]">
                  Carry Forward
                </th>
                <th className="px-5 py-4 text-center uppercase tracking-tighter text-[10px]">
                  Action Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {carryForwardList.map((item, index) => (
                <tr
                  key={item.id}
                  className="hover:bg-emerald-50/10 transition-colors"
                >
                  <td className="px-5 py-4 text-gray-400 font-mono text-xs">
                    {index + 1}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <FaUserTag className="text-gray-300" size={14} />
                      <div>
                        <div className="font-black text-gray-900 tracking-tight">
                          {item.name}
                        </div>
                        <div className="text-[10px] uppercase font-bold text-gray-400">
                          ADM: {item.admissionNo}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-center tabular-nums font-bold text-red-500">
                    ${item.prevBalance}
                  </td>
                  <td className="px-5 py-4 text-center">
                    <input
                      type="number"
                      defaultValue={item.carryAmount}
                      className="w-24 rounded border-emerald-100 p-2 text-center text-sm font-black focus:ring-1 focus:ring-emerald-500 outline-none bg-emerald-50/50 text-emerald-700 shadow-inner"
                    />
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex justify-center">
                      <span
                        className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                          item.status === "Forwarded"
                            ? "bg-green-100 text-green-700 shadow-sm border border-green-200"
                            : "bg-gray-100 text-gray-400 border border-gray-200"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
              {carryForwardList.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-5 py-12 text-center text-gray-300 font-bold uppercase tracking-widest text-[10px]"
                  >
                    No overdue balances found for selection.
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
