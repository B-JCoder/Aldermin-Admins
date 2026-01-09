"use client";

import React, { useState } from "react";
import {
  FaUserPlus,
  FaSearch,
  FaIdBadge,
  FaPhone,
  FaEnvelope,
  FaBuilding,
  FaUserTie,
} from "react-icons/fa";

export default function StaffListPage() {
  const [searchParams, setSearchParams] = useState({
    role: "",
    staffId: "",
    name: "",
  });

  const [staffList, setStaffList] = useState([
    {
      id: 1,
      staffNo: "STF2023-001",
      name: "Marcus Aurelius",
      role: "Teacher",
      department: "Academic",
      designation: "Lead Lecturer",
      mobile: "+8801700000001",
      email: "marcus@aldermin.edu",
    },
    {
      id: 2,
      staffNo: "STF2023-008",
      name: "Seneca Minor",
      role: "Admin",
      department: "Administration",
      designation: "Registar",
      mobile: "+8801700000008",
      email: "seneca@aldermin.edu",
    },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h4 className="text-xl font-bold text-gray-800 tracking-tight">
            Staff Directory
          </h4>
          <p className="text-xs text-gray-500 font-medium">
            Search and manage all institutional personnel
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-2.5 text-white font-black text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-100 uppercase tracking-widest">
          <FaUserPlus size={14} /> Add New Staff
        </button>
      </div>

      {/* Filter Section */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 ring-1 ring-black/5">
        <h4 className="mb-6 text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">
          Directory Filter
        </h4>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role <span className="text-red-500">*</span>
            </label>
            <select
              name="role"
              value={searchParams.role}
              onChange={handleInputChange}
              className="w-full rounded-xl border-gray-200 p-2.5 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-bold text-gray-600 bg-gray-50/50"
            >
              <option value="">Select Role</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Staff ID
            </label>
            <select
              name="staffId"
              className="w-full rounded-xl border-gray-200 p-2.5 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-bold text-gray-600 bg-gray-50/50"
            >
              <option value="">Select ID</option>
              <option value="001">STF2023-001</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Search by Name
            </label>
            <select
              name="name"
              className="w-full rounded-xl border-gray-200 p-2.5 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-bold text-gray-600 bg-gray-50/50"
            >
              <option value="">Select Name</option>
              <option value="marcus">Marcus Aurelius</option>
            </select>
          </div>

          <div className="md:col-span-3 flex justify-end">
            <button
              type="button"
              className="flex items-center gap-2 rounded-xl bg-gray-800 px-10 py-3 text-white font-black text-sm transition-all hover:bg-black active:scale-[0.98] shadow-md shadow-gray-100"
            >
              <FaSearch size={14} />
              Search Directory
            </button>
          </div>
        </form>
      </div>

      {/* Directory Table */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 ring-1 ring-black/5">
        <h4 className="mb-6 text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">
          Personnel List
        </h4>
        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50/50 text-gray-500 font-bold border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-left w-16 uppercase tracking-tighter text-[10px]">
                  SN
                </th>
                <th className="px-6 py-4 text-left uppercase tracking-tighter text-[10px]">
                  Staff Identity
                </th>
                <th className="px-6 py-4 text-left uppercase tracking-tighter text-[10px]">
                  Role / Dept
                </th>
                <th className="px-6 py-4 text-left uppercase tracking-tighter text-[10px]">
                  Designation
                </th>
                <th className="px-6 py-4 text-left uppercase tracking-tighter text-[10px]">
                  Contact Info
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {staffList.map((staff, index) => (
                <tr
                  key={staff.id}
                  className="hover:bg-blue-50/10 transition-colors group"
                >
                  <td className="px-6 py-4 text-gray-400 font-mono text-xs">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center font-black text-lg shadow-inner">
                        {staff.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-black text-gray-900 tracking-tight font-serif italic text-base leading-none mb-1">
                          {staff.name}
                        </div>
                        <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          <FaIdBadge className="text-gray-300" />{" "}
                          {staff.staffNo}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-black uppercase ring-1 ring-blue-100 mb-1">
                      {staff.role}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                      <FaBuilding className="text-gray-300" />{" "}
                      {staff.department}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 font-bold text-gray-600">
                      <FaUserTie className="text-gray-300" size={12} />
                      {staff.designation}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                        <FaPhone className="text-emerald-500/50" size={10} />{" "}
                        {staff.mobile}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                        <FaEnvelope className="text-blue-500/50" size={10} />{" "}
                        {staff.email}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
              {staffList.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-12 text-center text-gray-300 font-bold uppercase tracking-widest text-[10px]"
                  >
                    No personnel records found.
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
