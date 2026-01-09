"use client";

import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function ContentTypePage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const [typeList, setTypeList] = useState([
    {
      id: 1,
      name: "Assignment",
      description: "Student homework assignments.",
    },
    {
      id: 2,
      name: "Syllabus",
      description: "Academic year syllabus documents.",
    },
  ]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this record?")) {
      setTypeList((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-bold text-gray-800 tracking-tight">
          Content Type
        </h4>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Form Section */}
        <div className="md:col-span-1">
          <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 ring-1 ring-black/5">
            <h4 className="mb-5 text-sm font-bold text-gray-400 gap-2 uppercase tracking-widest leading-none">
              Add Content Type
            </h4>
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border-gray-300 p-2.5 border text-sm focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border-gray-300 p-2.5 border text-sm focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
                  rows={4}
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-white font-bold text-sm transition-all hover:bg-blue-700 active:scale-[0.98] shadow-md shadow-blue-100"
                >
                  Save Type
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* List Section */}
        <div className="md:col-span-2">
          <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 ring-1 ring-black/5">
            <h4 className="mb-5 text-sm font-bold text-gray-400 gap-2 uppercase tracking-widest leading-none">
              Content Type List
            </h4>
            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50/50 text-gray-500 font-bold">
                  <tr>
                    <th className="px-6 py-4 text-left w-16 uppercase tracking-tighter">
                      SN
                    </th>
                    <th className="px-6 py-4 text-left uppercase tracking-tighter">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left uppercase tracking-tighter">
                      Description
                    </th>
                    <th className="px-6 py-4 text-center uppercase tracking-tighter">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {typeList.map((item, index) => (
                    <tr
                      key={item.id}
                      className="hover:bg-gray-50/30 transition-colors"
                    >
                      <td className="px-6 py-4 text-gray-400 font-mono text-xs">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 font-bold text-gray-800 tracking-tight">
                        {item.name}
                      </td>
                      <td className="px-6 py-4 text-gray-500 line-clamp-1 max-w-xs">
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
                  {typeList.length === 0 && (
                    <tr>
                      <td
                        colSpan={4}
                        className="px-6 py-12 text-center text-gray-300 font-bold uppercase tracking-widest text-[10px]"
                      >
                        No content types defined.
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
