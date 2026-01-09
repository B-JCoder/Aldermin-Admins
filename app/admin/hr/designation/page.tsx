"use client";

import React, { useState } from "react";
import { FaUserTie, FaEdit, FaTrash } from "react-icons/fa";

export default function DesignationPage() {
  const [designationTitle, setDesignationTitle] = useState("");
  const [designationList, setDesignationList] = useState([
    { id: 1, title: "Principal" },
    { id: 2, title: "Assistant Professor" },
    { id: 3, title: "Accountant" },
    { id: 4, title: "Exam Controller" },
    { id: 5, title: "Librarian" },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (designationTitle.trim()) {
      const newDesig = {
        id: designationList.length + 1,
        title: designationTitle,
      };
      setDesignationList([...designationList, newDesig]);
      setDesignationTitle("");
    }
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this designation?")) {
      setDesignationList(designationList.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-bold text-gray-800 tracking-tight">
          Designation Management
        </h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-1">
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 ring-1 ring-black/5">
            <h4 className="mb-6 text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">
              Add New Designation
            </h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Designation Title <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaUserTie size={14} />
                  </div>
                  <input
                    type="text"
                    value={designationTitle}
                    onChange={(e) => setDesignationTitle(e.target.value)}
                    className="w-full rounded-xl border-gray-200 pl-10 p-2.5 text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
                    placeholder="e.g. Senior Lecturer"
                    required
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-emerald-600 px-6 py-3 text-white font-black text-sm hover:bg-emerald-700 transition shadow-lg shadow-emerald-100 uppercase tracking-widest active:scale-[0.98]"
                >
                  Save Designation
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* List Section */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 ring-1 ring-black/5">
            <h4 className="mb-6 text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">
              Role Registry
            </h4>
            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50/50 text-gray-500 font-bold border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left w-16 uppercase tracking-tighter text-[10px]">
                      SN
                    </th>
                    <th className="px-6 py-4 text-left uppercase tracking-tighter text-[10px]">
                      Job Title
                    </th>
                    <th className="px-6 py-4 text-center uppercase tracking-tighter text-[10px]">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {designationList.map((item, index) => (
                    <tr
                      key={item.id}
                      className="hover:bg-emerald-50/10 transition-colors group"
                    >
                      <td className="px-6 py-4 text-gray-400 font-mono text-xs">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg group-hover:bg-emerald-100 transition-colors">
                            <FaUserTie size={12} />
                          </div>
                          <span className="font-bold text-gray-800 tracking-tight">
                            {item.title}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center gap-2">
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
                  {designationList.length === 0 && (
                    <tr>
                      <td
                        colSpan={3}
                        className="px-6 py-12 text-center text-gray-300 font-bold uppercase tracking-widest text-[10px]"
                      >
                        No designations found.
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
