"use client";

import React, { useState } from "react";
import { FaEdit, FaTrash, FaShareAlt } from "react-icons/fa";

export default function SharedContentPage() {
  const [contentList, setContentList] = useState([
    {
      id: 1,
      name: "Final Exam Preparation",
      sendTo: "Class 10-A, 10-B",
      sharedDate: "2023-11-20",
      validUpto: "2023-12-25",
      sharedBy: "Admin User",
    },
    {
      id: 2,
      name: "Chemistry Lab Manual",
      sendTo: "Class 11 Science",
      sharedDate: "2023-11-25",
      validUpto: "2024-06-30",
      sharedBy: "John Teacher",
    },
  ]);

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this shared content?")) {
      setContentList((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-bold text-gray-800 tracking-tight">
          Shared Content
        </h4>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 ring-1 ring-black/5">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-indigo-50 rounded-lg">
            <FaShareAlt className="text-indigo-600" size={20} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900 leading-none">
              Management of Shared Resources
            </h4>
            <p className="text-xs text-gray-500 mt-1 font-medium">
              View and manage files shared with students or staff
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50/50 text-gray-400 font-black uppercase text-[10px] tracking-widest">
              <tr>
                <th className="px-6 py-4 text-left w-16">SN</th>
                <th className="px-6 py-4 text-left">Resource Name</th>
                <th className="px-6 py-4 text-left">Recipients</th>
                <th className="px-6 py-4 text-left">Shared Date</th>
                <th className="px-6 py-4 text-left">Valid Until</th>
                <th className="px-6 py-4 text-left">Publisher</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {contentList.map((item, index) => (
                <tr
                  key={item.id}
                  className="hover:bg-indigo-50/10 transition-colors group"
                >
                  <td className="px-6 py-4 text-gray-400 font-mono text-xs">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-gray-800 group-hover:underline cursor-pointer">
                      {item.name}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-1 text-[10px] font-black text-gray-600">
                      {item.sendTo}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500 font-medium text-xs">
                    {item.sharedDate}
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded">
                      {item.validUpto}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-xs font-bold">
                    {item.sharedBy}
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
              {contentList.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-12 text-center text-gray-300 font-bold uppercase tracking-widest text-[10px]"
                  >
                    No content shared currently.
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
