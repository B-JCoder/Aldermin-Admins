"use client";

import React, { useState } from "react";
import {
  FaBook,
  FaPlus,
  FaTrash,
  FaEdit,
  FaBarcode,
  FaHashtag,
  FaBuilding,
  FaUserEdit,
  FaBox,
  FaDollarSign,
  FaSearch,
  FaLayerGroup,
  FaTags,
} from "react-icons/fa";

export default function BookPage() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Selfish Gene",
      number: "B-501",
      isbn: "978-0198788607",
      category: "Evolutionary Biology",
      publisher: "Oxford Press",
      author: "Richard Dawkins",
      quantity: 15,
      price: "$22.50",
    },
    {
      id: 2,
      title: "Brief Answers to the Big Questions",
      number: "B-204",
      isbn: "978-1473695986",
      category: "Astrophysics",
      publisher: "John Murray",
      author: "Stephen Hawking",
      quantity: 8,
      price: "$18.00",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-emerald-600 rounded-xl shadow-lg ring-4 ring-emerald-50">
            <FaBook size={20} className="text-white" />
          </div>
          Bibliographic Asset Registry
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Definition Form */}
        <div className="lg:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 bg-gradient-to-br from-white to-emerald-50/5 h-fit sticky top-8">
            <h4 className="mb-8 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center justify-between">
              Catalog New Asset
              <div className="h-1 w-12 bg-emerald-200 rounded-full"></div>
            </h4>

            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">
                    Asset Title <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <FaBook
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={10}
                    />
                    <input
                      type="text"
                      className="w-full rounded-2xl border-gray-100 p-3.5 pl-10 text-xs font-bold focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white shadow-sm italic"
                      placeholder="e.g. Principia Mathematica"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">
                      Category <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <FaTags
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                        size={10}
                      />
                      <select className="w-full rounded-2xl border-gray-100 p-3.5 pl-10 text-[10px] font-bold focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white shadow-sm appearance-none">
                        <option>Physics</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">
                      Internal SN <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <FaHashtag
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                        size={10}
                      />
                      <input
                        type="text"
                        className="w-full rounded-2xl border-gray-100 p-3.5 pl-10 text-[10px] font-mono font-bold focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white shadow-sm"
                        placeholder="B-..."
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">
                      ISBN Code
                    </label>
                    <div className="relative font-mono">
                      <FaBarcode
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                        size={10}
                      />
                      <input
                        type="text"
                        className="w-full rounded-2xl border-gray-100 p-3.5 pl-10 text-[9px] font-bold focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white shadow-sm"
                        placeholder="000-000..."
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">
                      Quantity
                    </label>
                    <div className="relative">
                      <FaBox
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                        size={10}
                      />
                      <input
                        type="number"
                        className="w-full rounded-2xl border-gray-100 p-3.5 pl-10 text-[10px] font-bold focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white shadow-sm"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">
                    Author / Publisher
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <FaUserEdit
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                        size={10}
                      />
                      <input
                        type="text"
                        className="w-full rounded-2xl border-gray-100 p-3.5 pl-10 text-[10px] font-bold focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white shadow-sm"
                        placeholder="Author"
                      />
                    </div>
                    <div className="relative">
                      <FaBuilding
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                        size={10}
                      />
                      <input
                        type="text"
                        className="w-full rounded-2xl border-gray-100 p-3.5 pl-10 text-[10px] font-bold focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white shadow-sm"
                        placeholder="Publisher"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">
                    Asset Valuation (Price)
                  </label>
                  <div className="relative">
                    <FaDollarSign
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400"
                      size={10}
                    />
                    <input
                      type="text"
                      className="w-full rounded-2xl border-gray-100 p-3.5 pl-10 text-xs font-mono font-black focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-emerald-50/10 shadow-inner"
                      placeholder="0.00"
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
                    <FaPlus /> Authorize Asset
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Index List */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-50/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="flex items-center justify-between mb-8 relative">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">
                Bibliographic Archive
              </h4>
              <div className="relative max-w-xs w-full">
                <FaSearch
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                  size={12}
                />
                <input
                  type="text"
                  placeholder="Filter archive..."
                  className="w-full rounded-xl border-gray-50 bg-gray-50/50 p-3 pl-10 text-[10px] font-bold outline-none ring-1 ring-gray-100 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-inner"
                />
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl relative border border-gray-50">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50/80 text-gray-400 font-bold border-b border-gray-50 uppercase tracking-widest text-[9px]">
                  <tr>
                    <th className="px-6 py-5 text-left w-16">SN</th>
                    <th className="px-6 py-5 text-left">Industrial Data</th>
                    <th className="px-6 py-5 text-center">Quantities</th>
                    <th className="px-6 py-5 text-center">Valuation</th>
                    <th className="px-6 py-5 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {books.map((b, index) => (
                    <tr
                      key={b.id}
                      className="hover:bg-emerald-50/10 transition-all group"
                    >
                      <td className="px-6 py-8 text-gray-300 font-mono text-xs italic">
                        {index + 1}
                      </td>
                      <td className="px-6 py-8">
                        <div>
                          <div className="font-black text-gray-900 tracking-tight text-base font-serif italic uppercase leading-none mb-1 group-hover:text-emerald-700 transition-colors">
                            {b.title}
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-[8px] font-black bg-gray-900 text-white px-2 py-0.5 rounded uppercase tracking-widest">
                              {b.number}
                            </span>
                            <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest font-mono">
                              ISBN: {b.isbn}
                            </span>
                          </div>
                          <div className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mt-2 flex items-center gap-1.5 opacity-60">
                            <FaTags size={8} /> {b.category} •{" "}
                            <FaUserEdit size={8} /> {b.author}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <div className="inline-flex flex-col items-center p-3 rounded-2xl bg-gray-50 border border-gray-100 group-hover:bg-white transition-all shadow-sm">
                          <span className="text-sm font-black text-gray-900 leading-none">
                            {b.quantity}
                          </span>
                          <span className="text-[7px] font-black uppercase text-gray-400 mt-1">
                            Units
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        <div className="text-sm font-black font-mono text-emerald-600">
                          {b.price}
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                        <div className="flex justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-3 rounded-xl bg-gray-50 text-blue-500 hover:bg-blue-600 hover:text-white transition-all shadow-sm group/btn">
                            <FaEdit
                              size={12}
                              className="group-hover/btn:scale-110 transition-transform"
                            />
                          </button>
                          <button className="p-3 rounded-xl bg-gray-50 text-rose-500 hover:bg-rose-600 hover:text-white transition-all shadow-sm group/btn">
                            <FaTrash
                              size={12}
                              className="group-hover/btn:scale-110 transition-transform"
                            />
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
