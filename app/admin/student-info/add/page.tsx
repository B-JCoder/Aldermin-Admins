"use client";

import React, { useState } from "react";
import {
  FaUserPlus,
  FaGraduationCap,
  FaUserAlt,
  FaPhoneAlt,
  FaHospitalSymbol,
  FaUsers,
  FaUserShield,
  FaUniversity,
  FaFileAlt,
  FaBus,
  FaHome,
  FaSave,
} from "react-icons/fa";

export default function AddStudentPage() {
  const [activeSegment, setActiveSegment] = useState("academic");

  const segments = [
    { id: "academic", label: "Academic", icon: <FaGraduationCap /> },
    { id: "personal", label: "Personal", icon: <FaUserAlt /> },
    { id: "contact", label: "Contact", icon: <FaPhoneAlt /> },
    { id: "medical", label: "Medical", icon: <FaHospitalSymbol /> },
    { id: "parents", label: "Family", icon: <FaUsers /> },
    { id: "guardian", label: "Guardian", icon: <FaUserPlus /> },
    { id: "additional", label: "Extended", icon: <FaFileAlt /> },
  ];

  return (
    <div className="container mx-auto p-4 space-y-8 pb-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 pb-8">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tighter flex items-center gap-4">
            <span className="bg-indigo-600 text-white p-3 rounded-2xl shadow-2xl shadow-indigo-200">
              <FaUserPlus size={28} />
            </span>
            Onboard New Student
          </h1>
          <p className="text-sm text-gray-400 font-bold uppercase tracking-[0.3em] mt-3 ml-2 italic">
            Student Information System (SIS)
          </p>
        </div>
        <div className="flex bg-gray-50 p-1.5 rounded-2xl ring-1 ring-gray-100 shadow-inner">
          {segments.map((seg) => (
            <button
              key={seg.id}
              onClick={() => setActiveSegment(seg.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                activeSegment === seg.id
                  ? "bg-white text-indigo-600 shadow-sm ring-1 ring-indigo-50"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {seg.icon}
              <span className="hidden lg:inline">{seg.label}</span>
            </button>
          ))}
        </div>
      </div>

      <form className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          {/* Dynamic Sections Based on Active Segment */}
          {activeSegment === "academic" && (
            <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-4 text-xs font-black text-gray-300 uppercase tracking-widest">
                <span className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center">
                  01
                </span>
                Institutional Placement
                <div className="h-[1px] flex-1 bg-gray-50"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2">
                    Session Year <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full bg-white border-2 border-gray-50 rounded-2xl p-4 text-xs font-black outline-none focus:border-indigo-500/20 shadow-sm">
                    <option>2023 - 2024</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2">
                    Grade / Class <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full bg-white border-2 border-gray-50 rounded-2xl p-4 text-xs font-black outline-none focus:border-indigo-500/20 shadow-sm">
                    <option>Class 10</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2">
                    Sectional Unit <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full bg-white border-2 border-gray-50 rounded-2xl p-4 text-xs font-black outline-none focus:border-indigo-500/20 shadow-sm">
                    <option>A</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2">
                    Admission No.
                  </label>
                  <input
                    type="text"
                    className="w-full bg-indigo-50/30 border-2 border-indigo-100/50 rounded-2xl p-4 text-xs font-black text-indigo-600 outline-none shadow-inner"
                    placeholder="SIS-2023-..."
                  />
                </div>
              </div>
            </section>
          )}

          {activeSegment === "personal" && (
            <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-4 text-xs font-black text-gray-300 uppercase tracking-widest">
                <span className="w-8 h-8 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center">
                  02
                </span>
                Persona Details
                <div className="h-[1px] flex-1 bg-gray-50"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2">
                    Legal First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border-2 border-gray-50 rounded-2xl p-4 text-xs font-black outline-none focus:border-rose-500/20 shadow-sm italic"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2">
                    Legal Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border-2 border-gray-50 rounded-2xl p-4 text-xs font-black outline-none focus:border-rose-500/20 shadow-sm italic"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2">
                    Birth Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    className="w-full border-2 border-gray-50 rounded-2xl p-4 text-xs font-black outline-none focus:border-rose-500/20 shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2">
                    Gender Identity <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      className="py-4 rounded-xl border-2 border-indigo-100 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest"
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      className="py-4 rounded-xl border-2 border-gray-50 bg-white text-gray-400 text-[10px] font-black uppercase tracking-widest"
                    >
                      Female
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Add placeholders for other segments to keep the code manageable but structure present */}
          {activeSegment !== "academic" && activeSegment !== "personal" && (
            <div className="py-20 text-center space-y-4">
              <div className="text-6xl grayscale opacity-20 select-none">
                {segments.find((s) => s.id === activeSegment)?.icon}
              </div>
              <div className="text-xs font-black text-gray-300 uppercase tracking-[0.3em]">
                Segment {activeSegment} UI Layer Initialized
              </div>
              <p className="text-[10px] text-gray-400 max-w-xs mx-auto">
                This section would contain fields for {activeSegment}{" "}
                information as per the original SIS schema.
              </p>
            </div>
          )}
        </div>

        {/* Side Actions & Overview */}
        <div className="lg:col-span-4 space-y-8">
          <div className="rounded-[2.5rem] bg-indigo-900 p-10 text-white shadow-2xl shadow-indigo-200 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700"></div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-50 mb-8">
              Registration Status
            </h4>
            <div className="space-y-6">
              <div>
                <div className="text-3xl font-black italic tracking-tighter">
                  Profile Not Finalized
                </div>
                <div className="text-[10px] font-bold text-indigo-300 mt-2 uppercase tracking-widest">
                  Step 1 of 7: {activeSegment}
                </div>
              </div>
              <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-400 w-1/7"></div>
              </div>
              <button className="w-full bg-white text-indigo-900 rounded-2xl py-5 text-xs font-black uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                <FaSave size={14} />
                Commit Archive
              </button>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-white p-8 border border-gray-100 shadow-xl space-y-6">
            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              Patron Portrait
            </h4>
            <div className="aspect-square bg-gray-50 rounded-[2rem] border-4 border-dashed border-gray-100 flex flex-col items-center justify-center text-gray-300 gap-4 group cursor-pointer hover:border-indigo-200 hover:bg-indigo-50/30 transition-all">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center text-gray-200 group-hover:text-indigo-400 transition-colors">
                <FaUserAlt size={32} />
              </div>
              <div className="text-[9px] font-black uppercase tracking-widest">
                Upload Digital ISO
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
