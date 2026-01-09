"use client";

import React, { useState } from "react";
import {
  FaUserPlus,
  FaIdCard,
  FaBuilding,
  FaUserTie,
  FaEnvelope,
  FaCalendarAlt,
  FaPhone,
  FaMapMarkerAlt,
  FaFileAlt,
  FaLock,
  FaUserShield,
  FaChevronRight,
  FaChevronLeft,
  FaSave,
  FaUniversity,
  FaShareAlt,
  FaCloudUploadAlt,
  FaHistory,
} from "react-icons/fa";

export default function AddStaffPage() {
  const [activeStep, setActiveStep] = useState(1);
  const steps = [
    { id: 1, name: "Identity & Role", icon: FaIdCard },
    { id: 2, name: "Personal & Address", icon: FaMapMarkerAlt },
    { id: 3, name: "Fiscal & Contract", icon: FaSave },
    { id: 4, name: "Financial & Social", icon: FaUniversity },
  ];

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-xl shadow-lg ring-4 ring-blue-50">
            <FaUserPlus className="text-white" size={20} />
          </div>
          Personnel Induction
        </h1>
      </div>

      {/* Stepper Navigation */}
      <div className="flex items-center justify-between px-8 py-6 bg-white rounded-[2rem] shadow-xl border border-gray-100 ring-1 ring-black/5 overflow-x-auto gap-4">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center gap-3 min-w-fit">
            <div
              className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
                activeStep === step.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-100 ring-4 ring-blue-50 scale-110"
                  : activeStep > step.id
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-100"
                  : "bg-gray-50 text-gray-400"
              }`}
            >
              <step.icon size={16} />
            </div>
            <div className="hidden lg:block">
              <div
                className={`text-[10px] font-black uppercase tracking-widest ${
                  activeStep >= step.id ? "text-gray-900" : "text-gray-400"
                }`}
              >
                Step 0{step.id}
              </div>
              <div
                className={`text-[11px] font-bold ${
                  activeStep >= step.id ? "text-blue-600" : "text-gray-300"
                }`}
              >
                {step.name}
              </div>
            </div>
            {step.id < steps.length && (
              <FaChevronRight className="ml-4 text-gray-100 hidden lg:block" />
            )}
          </div>
        ))}
      </div>

      <div className="rounded-[2.5rem] bg-white p-10 shadow-2xl shadow-gray-100 border border-gray-100/50 relative overflow-hidden min-h-[500px]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/30 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none"></div>

        <form className="space-y-10 relative">
          {/* STEP 1: IDENTITY & ROLE */}
          {activeStep === 1 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-4 border-l-4 border-blue-600 pl-4 py-1">
                <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">
                  Organizational Identity
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-1">
                    Staff Identifier <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="STF-2024-..."
                    className="w-full bg-gray-50 border-gray-100 rounded-2xl p-4 text-xs font-mono font-bold focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-1">
                    Functional Role <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full bg-gray-50 border-gray-100 rounded-2xl p-4 text-xs font-black text-blue-600 appearance-none outline-none focus:bg-white ring-1 ring-gray-100">
                    <option>Select Role</option>
                    <option>Admin</option>
                    <option>Teacher</option>
                    <option>Accountant</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-1">
                    Department <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full bg-gray-50 border-gray-100 rounded-2xl p-4 text-xs font-bold appearance-none outline-none focus:bg-white ring-1 ring-gray-100">
                    <option>Select Dept</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-1">
                    Designation <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full bg-gray-50 border-gray-100 rounded-2xl p-4 text-xs font-bold appearance-none outline-none focus:bg-white ring-1 ring-gray-100">
                    <option>Select Tier</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-1">
                    Primary Appellation
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-gray-50 border-gray-100 rounded-2xl p-4 text-xs font-bold focus:bg-white transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-1">
                    Secondary Appellation{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-gray-50 border-gray-100 rounded-2xl p-4 text-xs font-bold focus:bg-white transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-1">
                    Patron Appellation
                  </label>
                  <input
                    type="text"
                    placeholder="Father's Name"
                    className="w-full bg-gray-50 border-gray-100 rounded-2xl p-4 text-xs font-bold focus:bg-white transition-all outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: PERSONAL & ADDRESS */}
          {activeStep === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-4 border-l-4 border-blue-600 pl-4 py-1">
                <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">
                  Demographics & Locality
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-1">
                    Gender Expression
                  </label>
                  <select className="w-full bg-gray-50 border-gray-100 rounded-2xl p-4 text-xs font-bold appearance-none outline-none focus:bg-white">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Non-Binary</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-1">
                    Birth Horizon <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaCalendarAlt
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <input
                      type="text"
                      placeholder="YYYY-MM-DD"
                      className="w-full bg-gray-50 border-gray-100 rounded-2xl p-4 pl-10 text-xs font-mono font-bold focus:bg-white transition-all outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-1">
                    Telecommunication <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaPhone
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <input
                      type="text"
                      placeholder="+1 ..."
                      className="w-full bg-gray-50 border-gray-100 rounded-2xl p-4 pl-10 text-xs font-mono font-bold focus:bg-white transition-all outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-1">
                    Email Node
                  </label>
                  <div className="relative">
                    <FaEnvelope
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={12}
                    />
                    <input
                      type="email"
                      placeholder="node@academy.edu"
                      className="w-full bg-gray-50 border-gray-100 rounded-2xl p-4 pl-10 text-xs font-bold focus:bg-white transition-all outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-1">
                    Residential Coordinates
                  </label>
                  <textarea
                    placeholder="Current Living Address..."
                    className="w-full bg-gray-50 border-gray-100 rounded-3xl p-6 text-xs font-medium focus:bg-white transition-all outline-none min-h-[140px] italic"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-1">
                    Permanent Anchor
                  </label>
                  <textarea
                    placeholder="Legal Registered Address..."
                    className="w-full bg-gray-50 border-gray-100 rounded-3xl p-6 text-xs font-medium focus:bg-white transition-all outline-none min-h-[140px] italic"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: FISCAL & CONTRACT */}
          {activeStep === 3 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-4 border-l-4 border-emerald-600 pl-4 py-1">
                <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest text-emerald-600">
                  Contractual & Fiscal Framework
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase ml-1">
                      EPF Identifier
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-50 border-gray-100 rounded-2xl p-4 text-xs font-mono font-bold focus:bg-white transition-all outline-none"
                      placeholder="EPF-00000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase ml-1">
                      Remuneration Base ($)
                    </label>
                    <input
                      type="number"
                      className="w-full bg-emerald-50 text-emerald-700 border-emerald-100 rounded-2xl p-4 text-sm font-black focus:bg-white transition-all outline-none shadow-sm"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase ml-1">
                      Contractual Modality
                    </label>
                    <select className="w-full bg-gray-50 border-gray-100 rounded-2xl p-4 text-xs font-black appearance-none outline-none focus:bg-white ring-1 ring-gray-100 uppercase">
                      <option>Full-Time Tenured</option>
                      <option>Contractual/Limited</option>
                      <option>Ad-Hoc/Visiting</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase ml-1">
                      Deployment Horizon
                    </label>
                    <div className="relative">
                      <FaCalendarAlt
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                        size={12}
                      />
                      <input
                        type="text"
                        placeholder="Joining Date"
                        className="w-full bg-gray-50 border-gray-100 rounded-2xl p-4 pl-10 text-xs font-bold focus:bg-white transition-all outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2 shadow-inner bg-gray-50/50 rounded-[2.5rem] p-8 border border-gray-100">
                  <label className="text-[10px] font-black text-gray-400 uppercase block mb-4 flex items-center gap-2">
                    <FaHistory className="text-blue-400" />
                    Professional Narrative
                  </label>
                  <textarea
                    placeholder="Briefly catalog previous academic or professional exposure..."
                    className="w-full bg-transparent border-none p-0 text-[10px] font-medium leading-relaxed outline-none focus:ring-0 min-h-[140px] italic"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: FINANCIAL & SOCIAL */}
          {activeStep === 4 && activeStep === 4 && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Bank Info */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 border-l-4 border-blue-600 pl-4 py-1">
                    <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">
                      Bank Remittance
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="relative group">
                      <FaUniversity
                        className="absolute left-4 top-4 text-gray-300 group-focus-within:text-blue-500 transition-colors"
                        size={12}
                      />
                      <input
                        type="text"
                        placeholder="Institute Name"
                        className="w-full bg-gray-50 border-gray-100 rounded-2xl p-4 pl-10 text-xs font-bold focus:bg-white transition-all outline-none"
                      />
                    </div>
                    <div className="relative group">
                      <FaIdCard
                        className="absolute left-4 top-4 text-gray-300 group-focus-within:text-blue-500 transition-colors"
                        size={12}
                      />
                      <input
                        type="text"
                        placeholder="Account Number (IBAN/SWIFT)"
                        className="w-full bg-gray-50 border-gray-100 rounded-2xl p-4 pl-10 text-xs font-mono font-bold focus:bg-white transition-all outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 border-l-4 border-blue-600 pl-4 py-1">
                    <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">
                      Digital Footprint
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="LinkedIn Profile"
                      className="w-full bg-gray-50 border-gray-100 rounded-2xl p-4 text-[10px] font-bold outline-none italic"
                    />
                    <input
                      type="text"
                      placeholder="ResearchGate/ORCID"
                      className="w-full bg-gray-50 border-gray-100 rounded-2xl p-4 text-[10px] font-bold outline-none italic"
                    />
                  </div>
                </div>
              </div>

              {/* Document Upload Simulation */}
              <div className="bg-gray-50/50 rounded-[3rem] p-10 border border-gray-100 border-dashed relative group">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-blue-500 shadow-lg ring-8 ring-blue-50 group-hover:scale-110 transition-transform">
                    <FaCloudUploadAlt size={24} />
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-black text-gray-900 uppercase tracking-widest">
                      Dossier Repository
                    </div>
                    <p className="text-[10px] text-gray-400 mt-1 italic font-medium">
                      Drag and drop resume, credentials, and legal documents
                      here.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="px-5 py-2 bg-gray-900 text-white text-[9px] font-black uppercase tracking-widest rounded-full hover:bg-black transition-all"
                  >
                    Browse Node
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-10 border-t border-gray-50">
            <button
              type="button"
              onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
              className={`flex items-center gap-2 px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                activeStep === 1
                  ? "opacity-0 pointer-events-none"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100"
              }`}
            >
              <FaChevronLeft size={10} />
              Retract
            </button>

            {activeStep < 4 ? (
              <button
                type="button"
                onClick={() => setActiveStep(Math.min(4, activeStep + 1))}
                className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 active:scale-95"
              >
                Advance Phase
                <FaChevronRight size={10} />
              </button>
            ) : (
              <button
                type="submit"
                className="flex items-center gap-3 px-10 py-5 bg-emerald-600 border-b-4 border-emerald-800 text-white rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest hover:brightness-110 active:border-b-0 active:translate-y-1 transition-all shadow-2xl shadow-emerald-100"
              >
                <FaUserShield size={14} />
                Commit Inducement
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
