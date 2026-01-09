"use client";

import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaSearch,
  FaClock,
  FaDoorOpen,
  FaUserTie,
  FaGraduationCap,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ExamSchedulePage() {
  const [schedules, setSchedules] = useState([
    {
      id: 1,
      subject: "Theoretical Physics",
      date: "2024-05-15",
      day: "Wednesday",
      time: "09:00 AM - 12:00 PM",
      className: "Class 10-A",
      teacher: "Dr. Julian Sterling",
      duration: "3 Hours",
      room: "Hall B-101",
    },
    {
      id: 2,
      subject: "Advanced Mathematics",
      date: "2024-05-17",
      day: "Friday",
      time: "09:00 AM - 12:00 PM",
      className: "Class 10-A",
      teacher: "Prof. Silas Vance",
      duration: "3 Hours",
      room: "Hall B-102",
    },
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tighter flex items-center gap-4 group">
            <div className="w-14 h-14 bg-rose-600 rounded-[1.5rem] flex items-center justify-center shadow-2xl shadow-rose-200 group-hover:rotate-12 transition-transform duration-500">
              <FaCalendarAlt className="text-white" size={28} />
            </div>
            Examination Timetable
          </h1>
          <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.4em] mt-3 ml-2 italic">
            Institutional Chronology of Assessment
          </p>
        </div>
      </div>

      {/* Strategic Filter */}
      <div className="rounded-[2.5rem] bg-white p-8 shadow-2xl shadow-gray-100 border border-gray-100/50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-end">
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Assessment Type
            </label>
            <select className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 text-xs font-black outline-none focus:ring-4 focus:ring-rose-500/10 focus:bg-white transition-all">
              <option>Annual Finals 2024</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Academic Grade
            </label>
            <select className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 text-xs font-black outline-none focus:ring-4 focus:ring-rose-500/10 focus:bg-white transition-all">
              <option>Class 10</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 ml-2">
              Sectional Unit
            </label>
            <select className="w-full bg-gray-50/50 border-gray-100 rounded-[1.25rem] p-4 text-xs font-black outline-none focus:ring-4 focus:ring-rose-500/10 focus:bg-white transition-all">
              <option>Section A</option>
            </select>
          </div>
          <button className="w-full bg-gray-900 border-b-4 border-gray-700 text-white rounded-[1.25rem] py-4 text-xs font-black uppercase tracking-[0.2em] hover:brightness-110 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-3">
            <FaSearch size={14} />
            Query Timetable
          </button>
        </div>
      </div>

      {/* Timetable Registry */}
      <div className="rounded-[2.5rem] bg-white p-10 shadow-2xl shadow-gray-100 border border-gray-100/50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-50/30 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>

        <div className="relative overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-gray-50">
                <th className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-gray-400 w-16">
                  SN
                </th>
                <th className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Chronology
                </th>
                <th className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Academic Domain
                </th>
                <th className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Env / Room
                </th>
                <th className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Invigilator
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50/70">
              {schedules.map((item, index) => (
                <tr
                  key={item.id}
                  className="group hover:bg-rose-50/10 transition-all"
                >
                  <td className="px-6 py-10 text-gray-300 font-mono text-xs italic">
                    {index + 1}
                  </td>
                  <td className="px-6 py-10">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-rose-50 text-rose-500 rounded-lg group-hover:bg-rose-600 group-hover:text-white transition-colors">
                          <FaCalendarAlt size={12} />
                        </div>
                        <div className="font-black text-gray-900 tracking-tight text-xs uppercase">
                          {item.date}
                        </div>
                      </div>
                      <div className="font-black text-[9px] text-gray-400 uppercase tracking-[0.2em] ml-8">
                        {item.day}
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <FaClock className="text-gray-300" size={10} />
                        <span className="text-[10px] font-bold text-gray-600 italic tracking-tighter">
                          {item.time}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-10">
                    <div className="font-black text-gray-900 tracking-tight text-base font-serif italic mb-2 group-hover:text-rose-600 transition-colors uppercase">
                      {item.subject}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-gray-50 text-gray-400 text-[9px] font-black rounded uppercase tracking-tighter border border-gray-100">
                        {item.className}
                      </span>
                      <span className="px-3 py-1 bg-gray-900 text-white text-[9px] font-black rounded uppercase tracking-tighter italic">
                        {item.duration}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-10">
                    <div className="flex items-center gap-2 text-gray-900">
                      <FaMapMarkerAlt className="text-gray-300" size={12} />
                      <span className="font-black text-sm italic">
                        {item.room}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-1.5 font-bold text-[9px] text-gray-400 uppercase tracking-widest">
                      <FaDoorOpen size={10} /> Access Point Alpha
                    </div>
                  </td>
                  <td className="px-6 py-10">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 transition-all group-hover:scale-110 border border-gray-100">
                        <FaUserTie size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-black text-gray-700 tracking-tight italic">
                          {item.teacher}
                        </div>
                        <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                          Lead Supervisor
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
