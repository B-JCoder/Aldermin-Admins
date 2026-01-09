"use client";

import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaBook,
  FaUserTie,
  FaDoorOpen,
  FaPlus,
  FaTrash,
  FaEdit,
  FaCheck,
  FaChalkboard,
  FaLayerGroup,
} from "react-icons/fa";

export default function ClassRoutinePage() {
  const [routines, setRoutines] = useState([
    {
      id: 1,
      className: "Class 10",
      section: "Section A",
      day: "Monday",
      time: "08:00 - 08:40",
      subject: "Advanced Physics",
      teacher: "Prof. Silas Vance",
      room: "LAB-01",
    },
    {
      id: 2,
      className: "Class 09",
      section: "Section B",
      day: "Tuesday",
      time: "09:00 - 09:40",
      subject: "Quantum Calculus",
      teacher: "Dr. Elara Vance",
      room: "HALL-C",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-indigo-600 rounded-xl shadow-lg ring-4 ring-indigo-50">
            <FaCalendarAlt className="text-white" size={20} />
          </div>
          Chronological Routine
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Creation Form */}
        <div className="lg:col-span-4">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 flex flex-col h-full bg-gradient-to-br from-white to-indigo-50/5">
            <h4 className="mb-8 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center gap-2">
              Add To Chronology
              <div className="h-[1px] flex-1 bg-gray-100"></div>
            </h4>

            <form className="space-y-5 flex-1">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Grade
                  </label>
                  <select className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white shadow-sm appearance-none">
                    <option>Class 10</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Unit
                  </label>
                  <select className="w-full rounded-2xl border-gray-100 p-4 text-xs font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white shadow-sm appearance-none">
                    <option>Section A</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                  Academic Day
                </label>
                <select className="w-full rounded-2xl border-gray-100 p-4 text-xs font-black text-indigo-600 outline-none bg-indigo-50/30 appearance-none italic">
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Commencement
                  </label>
                  <div className="relative">
                    <FaClock
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <input
                      type="text"
                      placeholder="08:00 AM"
                      className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-mono font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white shadow-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Conclusion
                  </label>
                  <div className="relative">
                    <FaClock
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <input
                      type="text"
                      placeholder="08:40 AM"
                      className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-mono font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white shadow-sm"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                  Discipline
                </label>
                <div className="relative">
                  <FaBook
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                    size={12}
                  />
                  <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white shadow-sm appearance-none">
                    <option>Advanced Physics</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                  Instructor
                </label>
                <div className="relative">
                  <FaUserTie
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                    size={12}
                  />
                  <select className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white shadow-sm appearance-none group">
                    <option>Prof. Silas Vance</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
                  Allocated Space
                </label>
                <div className="relative">
                  <FaDoorOpen
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                    size={12}
                  />
                  <input
                    type="text"
                    placeholder="LAB-01"
                    className="w-full rounded-2xl border-gray-100 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white shadow-sm italic uppercase"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full relative overflow-hidden rounded-2xl bg-gray-900 px-8 py-5 text-white font-black text-xs uppercase tracking-widest transition-all hover:bg-black active:scale-[0.98] shadow-2xl shadow-gray-200"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <FaCheck className="italic" />
                    Save To Routine
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Routine Registry */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 ring-1 ring-black/5 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="flex items-center justify-between mb-8 relative">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
                Institutional Timetable
              </h4>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-50 relative">
              <table className="min-w-full text-[11px]">
                <thead className="bg-gray-50/70 text-gray-500 font-black border-b border-gray-50">
                  <tr>
                    <th className="px-5 py-6 text-left w-12 uppercase tracking-tighter">
                      SN
                    </th>
                    <th className="px-5 py-6 text-left uppercase tracking-tighter text-gray-400">
                      Class Matrix
                    </th>
                    <th className="px-5 py-6 text-center uppercase tracking-tighter text-gray-400">
                      Temporal Slot
                    </th>
                    <th className="px-5 py-6 text-left uppercase tracking-tighter text-gray-400">
                      Instructor & Subject
                    </th>
                    <th className="px-5 py-6 text-center uppercase tracking-tighter text-gray-400">
                      Interaction
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50/70">
                  {routines.map((r, index) => (
                    <tr
                      key={r.id}
                      className="hover:bg-indigo-50/20 transition-all group"
                    >
                      <td className="px-5 py-8 text-gray-300 font-mono italic">
                        {index + 1}
                      </td>
                      <td className="px-5 py-8">
                        <div className="font-black text-gray-900 leading-tight text-xs uppercase italic tracking-tighter mb-1">
                          {r.className}
                        </div>
                        <div className="flex items-center gap-1.5 text-[8px] font-black text-indigo-500 uppercase tracking-widest">
                          <FaLayerGroup size={8} /> {r.section}
                        </div>
                      </td>
                      <td className="px-5 py-8 text-center">
                        <div className="font-black text-gray-800 italic uppercase mb-1">
                          {r.day}
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 rounded-lg text-[9px] font-mono text-gray-500 border border-gray-100">
                          <FaClock size={8} className="text-indigo-400" />{" "}
                          {r.time}
                        </div>
                      </td>
                      <td className="px-5 py-8">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100">
                            <FaUserTie size={16} />
                          </div>
                          <div>
                            <div className="text-xs font-black text-indigo-600 tracking-tight italic uppercase">
                              {r.subject}
                            </div>
                            <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                              By {r.teacher}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-8 text-center text-[10px] font-black italic text-gray-400 uppercase">
                        <div className="flex justify-center gap-1">
                          <button className="p-3 rounded-xl bg-gray-50 text-blue-500 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                            <FaEdit size={12} />
                          </button>
                          <button className="p-3 rounded-xl bg-gray-50 text-rose-500 hover:bg-rose-600 hover:text-white transition-all shadow-sm">
                            <FaTrash size={12} />
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
