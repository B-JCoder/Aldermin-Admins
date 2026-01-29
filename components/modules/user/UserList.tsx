"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaSearch, FaEnvelope, FaEdit, FaTrash } from "react-icons/fa";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  lastLogin: string;
}

interface UserListProps {
  users: User[];
}

export function UserList({ users }: UserListProps) {
  return (
    <AdminCard className="h-full bg-white relative overflow-hidden">
      

      <div className="p-8 pb-0 flex items-center justify-between mb-8 relative">
        <h4 className="text-xs font-semibold text-gray-400   leading-none">
          Authorized Personnel
        </h4>
        <div className="relative">
          <FaSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 z-10"
            size={14}
          />
          <Input
            type="text"
            placeholder="Search Users..."
            className="pl-10 pr-4 py-3 h-12 rounded-2xl bg-white border-gray-200 text-xs font-bold focus:ring-2 focus:ring-secondary/20 outline-none w-64 transition-all shadow-sm"
          />
        </div>
      </div>

      <div className="p-8 pt-0 overflow-x-auto relative">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50/70 text-gray-500 font-bold border-b border-gray-50">
            <tr>
              <th className="px-6 py-6 text-left w-16 text-[10px]  font-semibold">
                SN
              </th>
              <th className="px-6 py-6 text-left text-[10px]  font-semibold ">
                User Profile
              </th>
              <th className="px-6 py-6 text-center text-[10px]  font-semibold ">
                Role
              </th>
              <th className="px-6 py-6 text-center text-[10px]  font-semibold ">
                Status
              </th>
              <th className="px-6 py-6 text-center text-[10px]  font-semibold ">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {users.map((u, index) => (
              <tr
                key={u.id}
                className="group hover:bg-secondary/5 transition-all"
              >
                <td className="px-6 py-8 text-gray-300  text-xs ">
                  {index + 1}
                </td>
                <td className="px-6 py-8">
                  <div className="font-semibold text-gray-900 tracking-tight text-base    leading-none mb-1">
                    {u.name}
                  </div>
                  <div className="text-[10px]  text-gray-400 font-bold flex items-center gap-2">
                    <FaEnvelope size={10} /> {u.email}
                  </div>
                </td>
                <td className="px-6 py-8 text-center">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-[9px] font-semibold rounded-xl  tracking-[0.2em] shadow-sm">
                    {u.role}
                  </span>
                </td>
                <td className="px-6 py-8 text-center">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-semibold   shadow-sm ring-1 ring-inset ${
                      u.status === "Active"
                        ? "bg-emerald-50 text-emerald-700 ring-emerald-100"
                        : "bg-red-50 text-red-700 ring-red-100"
                    }`}
                  >
                    {u.status}
                  </span>
                  <div className="text-[9px] text-gray-300 mt-1 ">
                    Last: {u.lastLogin}
                  </div>
                </td>
                <td className="px-6 py-8 text-center">
                  <div className="flex justify-center gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 text-blue-500 hover:text-blue-600 hover:bg-blue-50"
                    >
                      <FaEdit size={14} />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 text-rose-500 hover:text-rose-600 hover:bg-rose-50"
                    >
                      <FaTrash size={14} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminCard>
  );
}

