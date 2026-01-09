"use client";

import React, { useState } from "react";
import {
  FaCertificate,
  FaPlus,
  FaTrash,
  FaEdit,
  FaCheck,
  FaFont,
  FaFillDrip,
  FaImage,
  FaSignature,
  FaEye,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
} from "react-icons/fa";

export default function CertificatePage() {
  const [certificateList, setCertificateList] = useState([
    {
      id: 1,
      name: "Academic Excellence 2024",
      background: "Classic Parchment",
      applicable: "All Students",
    },
    {
      id: 2,
      name: "Varsity Sports Achievement",
      background: "Athletic Gold",
      applicable: "Sports Tier",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-amber-600 rounded-xl shadow-lg ring-4 ring-amber-50">
            <FaCertificate className="text-white" size={20} />
          </div>
          Institutional Accolade Canvas
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Designer Form */}
        <div className="lg:col-span-12 xl:col-span-5">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-amber-50/5">
            <h4 className="mb-8 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center justify-between">
              Honourary Protocol Design
              <div className="h-1 w-24 bg-amber-100 rounded-full"></div>
            </h4>

            <form className="space-y-6 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Accolade Designation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-white shadow-sm italic"
                    placeholder="e.g. Dean's List Certification"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Typography Class
                  </label>
                  <div className="relative">
                    <FaFont
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-white shadow-sm appearance-none cursor-pointer">
                      <option>Serif Pro Display</option>
                      <option>Gothic Formal</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Font Amplitude (pt)
                  </label>
                  <input
                    type="number"
                    className="w-full rounded-2xl border-gray-100 p-4 text-xs font-mono font-bold focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-white shadow-sm"
                    placeholder="24"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Narrative Body (500+ Lexemes)
                  </label>
                  <textarea
                    className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-amber-500/10 outline-none transition-all bg-white shadow-sm min-h-[120px] leading-relaxed"
                    placeholder="This is to certify that [Student Name] has achieved..."
                  ></textarea>
                </div>

                <div className="grid grid-cols-3 gap-2 md:col-span-2">
                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center gap-2 hover:bg-white transition-all cursor-pointer group">
                    <FaAlignLeft className="text-gray-300 group-hover:text-amber-500" />
                    <span className="text-[8px] font-black uppercase text-gray-400">
                      Left
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex flex-col items-center gap-2 group">
                    <FaAlignCenter className="text-amber-600" />
                    <span className="text-[8px] font-black uppercase text-amber-600">
                      Center
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center gap-2 hover:bg-white transition-all cursor-pointer group">
                    <FaAlignRight className="text-gray-300 group-hover:text-amber-500" />
                    <span className="text-[8px] font-black uppercase text-gray-400">
                      Right
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Watermark Vector
                  </label>
                  <label className="w-full flex items-center gap-3 p-4 rounded-2xl bg-gray-50 border border-dashed border-gray-200 text-[10px] font-black text-gray-400 uppercase tracking-widest cursor-pointer hover:bg-white transition-all">
                    <FaImage size={14} className="text-gray-300" />
                    Upload Asset
                    <input type="file" className="hidden" />
                  </label>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Authorizing Token
                  </label>
                  <label className="w-full flex items-center gap-3 p-4 rounded-2xl bg-gray-50 border border-dashed border-gray-200 text-[10px] font-black text-gray-400 uppercase tracking-widest cursor-pointer hover:bg-white transition-all">
                    <FaSignature size={14} className="text-gray-300" />
                    Upload Sign
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full relative overflow-hidden rounded-2xl bg-gray-900 border-b-4 border-gray-700 text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:bg-black active:scale-[0.98] active:border-b-0 active:translate-y-1 shadow-2xl shadow-gray-200"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <FaCheck className="italic" />
                    Canonize Accolade
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
                Institutional Accolade Registry
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
                      Accolade Identity
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Base Vector
                    </th>
                    <th className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {certificateList.map((c, index) => (
                    <tr
                      key={c.id}
                      className="hover:bg-amber-50/10 transition-all group"
                    >
                      <td className="px-6 py-10 text-gray-300 font-mono text-xs italic">
                        {index + 1}
                      </td>
                      <td className="px-6 py-10">
                        <div className="font-black text-gray-900 tracking-tight text-base font-serif italic uppercase leading-none mb-2">
                          {c.name}
                        </div>
                        <div className="text-[9px] font-black text-amber-500 uppercase tracking-widest flex items-center gap-2">
                          <FaCertificate size={10} /> Tier: {c.applicable}
                        </div>
                      </td>
                      <td className="px-6 py-10 text-center">
                        <span className="px-4 py-1.5 bg-amber-50 text-amber-700 text-[9px] font-black rounded-xl uppercase tracking-[0.2em] border border-amber-100">
                          {c.background}
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
