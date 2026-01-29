"use client";

import React, { useState } from "react";
import {
  FaLayerGroup,
  FaPlus,
  FaTrash,
  FaEdit,
  FaCheck,
  FaInfoCircle,
  FaFileInvoiceDollar,
} from "react-icons/fa";

export default function FeeGroupPage() {
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");

  const [feeGroups, setFeeGroups] = useState([
    {
      id: 1,
      name: "Annual Fees",
      description: "Fees collected once per academic year",
      count: 5,
    },
    {
      id: 2,
      name: "Recurring Fees",
      description: "Monthly maintenance and tuition fees",
      count: 3,
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (groupName.trim()) {
      setFeeGroups([
        ...feeGroups,
        {
          id: feeGroups.length + 1,
          name: groupName,
          description: description,
          count: 0,
        },
      ]);
      setGroupName("");
      setDescription("");
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-emerald-600 rounded-xl shadow-lg ring-4 ring-emerald-50">
            <FaFileInvoiceDollar className="text-white" size={20} />
          </div>
          Financial Clusters
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Creation Form */}
        <div className="lg:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-emerald-50/5">
            <h4 className="mb-6 text-xs font-semibold text-gray-400   leading-none flex items-center justify-between">
              Create Financial Cluster
              <div className="h-1 w-12 bg-emerald-100 rounded-full"></div>
            </h4>

            <form onSubmit={handleSubmit} className="space-y-6 flex-1">
              <div>
                <label className="block text-xs font-semibold text-gray-400   mb-2 px-1">
                  Cluster Identity <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaLayerGroup
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                    size={12}
                  />
                  <input
                    type="text"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-sm font-bold focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all placeholder:font-medium bg-white shadow-sm "
                    placeholder="e.g. Quarterly Assessments"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400   mb-2 px-1">
                  Scope & Definition
                </label>
                <div className="relative">
                  <FaInfoCircle
                    className="absolute left-4 top-4 text-gray-300"
                    size={12}
                  />
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-sm font-medium focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all placeholder:font-medium bg-white shadow-sm min-h-[120px]"
                    placeholder="Define the scope of this financial cluster..."
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="group w-full relative overflow-hidden rounded-2xl bg-gray-900 border-b-4 border-gray-700 text-white px-8 py-5 text-xs font-semibold   transition-all hover:bg-black active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-gray-200"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <FaCheck className="" />
                    Initialize Cluster
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* List Index */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="flex items-center justify-between mb-8 relative">
              <h4 className="text-xs font-semibold text-gray-400   leading-none">
                Cluster Inventory
              </h4>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-50 relative">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50/70 text-gray-500 font-bold border-b border-gray-50">
                  <tr>
                    <th className="px-6 py-6 text-left w-16 text-[10px]  font-semibold">
                      SN
                    </th>
                    <th className="px-6 py-6 text-left text-[10px]  font-semibold ">
                      Cluster Identity
                    </th>
                    <th className="px-6 py-6 text-left text-[10px]  font-semibold  w-1/3">
                      Definition
                    </th>
                    <th className="px-6 py-6 text-center text-[10px]  font-semibold ">
                      Interaction
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {feeGroups.map((g, index) => (
                    <tr
                      key={g.id}
                      className="hover:bg-emerald-50/20 transition-all group"
                    >
                      <td className="px-6 py-8 text-gray-300  text-xs ">
                        {index + 1}
                      </td>
                      <td className="px-6 py-8">
                        <div className="font-semibold text-gray-900 tracking-tight text-base    leading-none mb-2">
                          {g.name}
                        </div>
                        <div className="text-[8px] font-semibold text-gray-400  tracking-[0.2em] flex items-center gap-1">
                          <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                          {g.count} Associated Types
                        </div>
                      </td>
                      <td className="px-6 py-8">
                        <p className="text-[10px] font-medium text-gray-400  leading-relaxed">
                          {g.description ||
                            "No formal cluster definition provided."}
                        </p>
                      </td>
                      <td className="px-6 py-8 text-center">
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

