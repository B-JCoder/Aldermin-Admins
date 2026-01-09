"use client";

import React, { useState } from "react";
import { FaEdit, FaTrash, FaMoneyCheckAlt } from "react-icons/fa";

export default function FeeTypePage() {
  const [formData, setFormData] = useState({
    typeName: "",
    feeGroup: "",
    description: "",
  });

  const [feeTypeList, setFeeTypeList] = useState([
    {
      id: 1,
      type: "Admission Fee",
      group: "General Fees",
      description: "One-time admission charge for new students.",
    },
    {
      id: 2,
      type: "Monthly Tuition",
      group: "Academic Fees",
      description: "Monthly recurring tuition fee.",
    },
  ]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this fee type?")) {
      setFeeTypeList((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-bold text-gray-800 tracking-tight">
          Fee Type Definition
        </h4>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Form Section */}
        <div className="md:col-span-1">
          <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 ring-1 ring-black/5">
            <h4 className="mb-5 text-sm font-bold text-gray-400 gap-2 uppercase tracking-widest leading-none">
              Add New Fee Type
            </h4>
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="typeName"
                  value={formData.typeName}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border-gray-300 p-2.5 border text-sm focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                  placeholder="e.g. Registration Fee"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fees Group <span className="text-red-500">*</span>
                </label>
                <select
                  name="feeGroup"
                  value={formData.feeGroup}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border-gray-300 p-2.5 border text-sm focus:ring-1 focus:ring-emerald-500 outline-none font-medium"
                  required
                >
                  <option value="">Select Group</option>
                  <option value="general">General Fees</option>
                  <option value="academic">Academic Fees</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border-gray-300 p-2.5 border text-sm focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                  rows={4}
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-emerald-600 px-4 py-2.5 text-white font-black text-sm transition-all hover:bg-emerald-700 active:scale-[0.98] shadow-md shadow-emerald-100"
                >
                  Save Fee Type
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* List Section */}
        <div className="md:col-span-2">
          <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 ring-1 ring-black/5">
            <h4 className="mb-5 text-sm font-bold text-gray-400 gap-2 uppercase tracking-widest leading-none">
              Configured Fee Types
            </h4>
            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50/50 text-gray-500 font-bold">
                  <tr>
                    <th className="px-6 py-4 text-left w-16 uppercase tracking-tighter text-[10px]">
                      SN
                    </th>
                    <th className="px-6 py-4 text-left uppercase tracking-tighter text-[10px]">
                      Type Name
                    </th>
                    <th className="px-6 py-4 text-left uppercase tracking-tighter text-[10px]">
                      Fee Group
                    </th>
                    <th className="px-6 py-4 text-left uppercase tracking-tighter text-[10px]">
                      Description
                    </th>
                    <th className="px-6 py-4 text-center uppercase tracking-tighter text-[10px]">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {feeTypeList.map((item, index) => (
                    <tr
                      key={item.id}
                      className="hover:bg-emerald-50/10 transition-colors group"
                    >
                      <td className="px-6 py-4 text-gray-400 font-mono text-xs">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 bg-emerald-50 rounded-md">
                            <FaMoneyCheckAlt
                              className="text-emerald-600"
                              size={14}
                            />
                          </div>
                          <span className="font-bold text-gray-800 tracking-tight">
                            {item.type}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-0.5 text-[10px] font-black text-gray-500 border border-gray-200 uppercase">
                          {item.group}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-500 font-medium max-w-[200px] truncate">
                        {item.description}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center space-x-2">
                          <button
                            className="p-2 rounded-lg bg-gray-50 text-blue-500 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                            title="Edit"
                          >
                            <FaEdit size={14} />
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="p-2 rounded-lg bg-gray-50 text-red-500 hover:bg-red-600 hover:text-white transition-all shadow-sm"
                            title="Delete"
                          >
                            <FaTrash size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {feeTypeList.length === 0 && (
                    <tr>
                      <td
                        colSpan={5}
                        className="px-6 py-12 text-center text-gray-300 font-bold uppercase tracking-widest text-[10px]"
                      >
                        No fee types configured yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
