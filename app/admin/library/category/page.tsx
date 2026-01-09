"use client";

import React, { useState } from "react";
import {
  FaTags,
  FaPlus,
  FaTrash,
  FaEdit,
  FaBook,
  FaLayerGroup,
  FaSearch,
  FaBookmark,
} from "react-icons/fa";

export default function BookCategoryPage() {
  const [categories, setCategories] = useState([
    { id: 1, title: "Theoretical Physics" },
    { id: 2, title: "Classical Literature" },
    { id: 3, title: "Advanced Mathematics" },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-emerald-600 rounded-xl shadow-lg ring-4 ring-emerald-50">
            <FaTags className="text-white" size={20} />
          </div>
          Bibliographic Taxonomy
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Definition Form */}
        <div className="lg:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-emerald-50/5">
            <h4 className="mb-6 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center justify-between">
              Define Taxonomy Node
              <div className="h-1 w-12 bg-emerald-200 rounded-full"></div>
            </h4>

            <form className="space-y-4 flex-1">
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1 text-nowrap">
                  Category Descriptor <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaBookmark
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                    size={12}
                  />
                  <input
                    type="text"
                    className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white shadow-sm italic"
                    placeholder="e.g. Quantum Mechanics"
                    required
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full relative overflow-hidden rounded-2xl bg-gray-900 border-b-4 border-gray-700 text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-black active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-gray-200"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <FaPlus />
                    Authorize Category
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Index List */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

            <div className="flex items-center justify-between mb-8 relative">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
                Authorized Category Registry
              </h4>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-50 relative">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50/70 text-gray-400 font-bold border-b border-gray-50">
                  <tr>
                    <th className="px-6 py-6 text-left w-20 text-[10px] uppercase font-black">
                      SN
                    </th>
                    <th className="px-6 py-6 text-left text-[10px] uppercase font-black tracking-widest">
                      Authorized Category
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {categories.map((c, index) => (
                    <tr
                      key={c.id}
                      className="hover:bg-emerald-50/20 transition-all group"
                    >
                      <td className="px-6 py-8 text-gray-300 font-mono text-xs italic">
                        {index + 1}
                      </td>
                      <td className="px-6 py-8">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 ring-4 ring-emerald-50 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm relative overflow-hidden">
                            <FaLayerGroup size={12} />
                          </div>
                          <div className="font-black text-gray-900 tracking-tight text-base font-serif italic uppercase leading-none">
                            {c.title}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                        <div className="flex justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
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
