"use client";

import React, { useState } from "react";
import {
  FaIdCard,
  FaPlus,
  FaTrash,
  FaEdit,
  FaCheck,
  FaRulerCombined,
  FaImage,
  FaUserShield,
  FaSignature,
  FaToggleOn,
  FaToggleOff,
  FaEye,
} from "react-icons/fa";

export default function IDCardPage() {
  const [idCardList, setIdCardList] = useState([
    {
      id: 1,
      name: "Student Principal Pass",
      role: "Student",
      layout: "Vertical High-Gloss",
    },
    {
      id: 2,
      name: "Faculty Access Token",
      role: "Staff",
      layout: "Horizontal Matte",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-amber-600 rounded-xl shadow-lg ring-4 ring-amber-50">
            <FaIdCard className="text-white" size={20} />
          </div>
          Identification Blueprint
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Template Designer Form */}
        <div className="lg:col-span-12 xl:col-span-5">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-amber-50/5">
            <h4 className="mb-8 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center justify-between">
              Design Token Architecture
              <div className="h-1 w-24 bg-amber-100 rounded-full"></div>
            </h4>

            <form className="space-y-6 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Blueprint Designation{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-white shadow-sm italic"
                    placeholder="e.g. Standard Student ID"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Dimensional Width (mm)
                  </label>
                  <div className="relative">
                    <FaRulerCombined
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <input
                      type="text"
                      className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-mono font-bold focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-white shadow-sm"
                      placeholder="57"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Dimensional Height (mm)
                  </label>
                  <div className="relative">
                    <FaRulerCombined
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <input
                      type="text"
                      className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-mono font-bold focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-white shadow-sm"
                      placeholder="89"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4 px-1">
                    Attribute Toggle Matrix
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      "Admission No",
                      "Full Name",
                      "Class/Grade",
                      "Paternal Liaison",
                      "Maternal Liaison",
                      "Geospatial Address",
                      "Interaction Node",
                      "Birth Chronology",
                      "Vital Group",
                    ].map((attr) => (
                      <div
                        key={attr}
                        className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-sm transition-all group"
                      >
                        <span className="text-[9px] font-black text-gray-500 uppercase tracking-tighter group-hover:text-amber-600 transition-colors">
                          {attr}
                        </span>
                        <FaToggleOn
                          size={16}
                          className="text-emerald-500 cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Background Vector
                  </label>
                  <div className="relative group">
                    <label className="w-full flex items-center gap-3 p-4 rounded-2xl bg-gray-50 border border-dashed border-gray-200 text-[10px] font-black text-gray-400 uppercase tracking-widest cursor-pointer group-hover:bg-white group-hover:border-amber-300 transition-all">
                      <FaImage
                        size={14}
                        className="text-gray-300 group-hover:text-amber-500"
                      />
                      Upload Canvas
                      <input type="file" className="hidden" />
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Institutional Seal
                  </label>
                  <div className="relative group">
                    <label className="w-full flex items-center gap-3 p-4 rounded-2xl bg-gray-50 border border-dashed border-gray-200 text-[10px] font-black text-gray-400 uppercase tracking-widest cursor-pointer group-hover:bg-white group-hover:border-amber-300 transition-all">
                      <FaUserShield
                        size={14}
                        className="text-gray-300 group-hover:text-amber-500"
                      />
                      Upload Logo
                      <input type="file" className="hidden" />
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full relative overflow-hidden rounded-2xl bg-gray-900 border-b-4 border-gray-700 text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:bg-black active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-gray-200"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <FaCheck className="italic" />
                    Establish Blueprint
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Templates Index */}
        <div className="lg:col-span-12 xl:col-span-7">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-50/20 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none"></div>

            <div className="flex items-center justify-between mb-8 relative">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
                Institutional Template Registry
              </h4>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-50 relative">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50/70 text-gray-500 font-bold border-b border-gray-50">
                  <tr>
                    <th className="px-6 py-6 text-left w-16 text-[10px] uppercase font-black">
                      SN
                    </th>
                    <th className="px-6 py-6 text-left text-[10px] uppercase font-black tracking-widest">
                      Blueprint Identity
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Applicable Tier
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {idCardList.map((card, index) => (
                    <tr
                      key={card.id}
                      className="hover:bg-amber-50/10 transition-all group"
                    >
                      <td className="px-6 py-10 text-gray-300 font-mono text-xs italic">
                        {index + 1}
                      </td>
                      <td className="px-6 py-10">
                        <div className="font-black text-gray-900 tracking-tight text-base font-serif italic uppercase leading-none mb-2">
                          {card.name}
                        </div>
                        <div className="text-[9px] font-black text-amber-500 uppercase tracking-widest flex items-center gap-2">
                          <FaRulerCombined size={10} /> Layout: {card.layout}
                        </div>
                      </td>
                      <td className="px-6 py-10 text-center">
                        <span className="px-4 py-1.5 bg-gray-900 text-white text-[9px] font-black rounded-xl uppercase tracking-[0.2em] shadow-sm">
                          {card.role}
                        </span>
                      </td>
                      <td className="px-6 py-10 text-center">
                        <div className="flex justify-center gap-1">
                          <button className="p-3 rounded-xl bg-gray-50 text-blue-500 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                            <FaEye size={14} />
                          </button>
                          <button className="p-3 rounded-xl bg-gray-50 text-emerald-500 hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
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
