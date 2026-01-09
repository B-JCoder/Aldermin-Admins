"use client";

import React, { useState } from "react";
import { FaBuilding, FaEdit, FaTrash } from "react-icons/fa";

export default function DepartmentPage() {
  const [departmentTitle, setDepartmentTitle] = useState("");
  const [departmentList, setDepartmentList] = useState([
    { id: 1, title: "Academic Department" },
    { id: 2, title: "Administration" },
    { id: 3, title: "Finance" },
    { id: 4, title: "Examination" },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (departmentTitle.trim()) {
      const newDept = {
        id: departmentList.length + 1,
        title: departmentTitle,
      };
      setDepartmentList([...departmentList, newDept]);
      setDepartmentTitle("");
    }
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this department?")) {
      setDepartmentList(departmentList.filter((dept) => dept.id !== id));
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-bold text-gray-800 tracking-tight">
          Department Management
        </h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-1">
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 ring-1 ring-black/5">
            <h4 className="mb-6 text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">
              Add New Department
            </h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Department Title <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaBuilding size={14} />
                  </div>
                  <input
                    type="text"
                    value={departmentTitle}
                    onChange={(e) => setDepartmentTitle(e.target.value)}
                    className="w-full rounded-xl border-gray-200 pl-10 p-2.5 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                    placeholder="Enter title..."
                    required
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-600 px-6 py-3 text-white font-black text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-100 uppercase tracking-widest active:scale-[0.98]"
                >
                  Save Department
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* List Section */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 ring-1 ring-black/5">
            <h4 className="mb-6 text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">
              Configured Departments
            </h4>
            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50/50 text-gray-500 font-bold border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left w-16 uppercase tracking-tighter text-[10px]">
                      SN
                    </th>
                    <th className="px-6 py-4 text-left uppercase tracking-tighter text-[10px]">
                      Department Title
                    </th>
                    <th className="px-6 py-4 text-center uppercase tracking-tighter text-[10px]">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {departmentList.map((dept, index) => (
                    <tr
                      key={dept.id}
                      className="hover:bg-blue-50/10 transition-colors group"
                    >
                      <td className="px-6 py-4 text-gray-400 font-mono text-xs">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition-colors">
                            <FaBuilding size={12} />
                          </div>
                          <span className="font-bold text-gray-800 tracking-tight">
                            {dept.title}
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
                            onClick={() => handleDelete(dept.id)}
                            className="p-2 rounded-lg bg-gray-50 text-red-500 hover:bg-red-600 hover:text-white transition-all shadow-sm"
                            title="Delete"
                          >
                            <FaTrash size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {departmentList.length === 0 && (
                    <tr>
                      <td
                        colSpan={3}
                        className="px-6 py-12 text-center text-gray-300 font-bold uppercase tracking-widest text-[10px]"
                      >
                        No departments found.
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
