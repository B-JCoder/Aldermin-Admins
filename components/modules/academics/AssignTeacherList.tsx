"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { Button } from "@/components/ui/button";
import { FaEdit, FaTrash, FaUserTie } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

interface AssignedTeacher {
  id: number;
  class: string;
  section: string;
  teacher: string;
}

interface AssignTeacherListProps {
  assignedTeachers: AssignedTeacher[];
  handleDelete: (id: number) => void;
}

export function AssignTeacherList({
  assignedTeachers,
  handleDelete,
}: AssignTeacherListProps) {
  return (
    <AdminCard className="h-full bg-white">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white ">
        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <FaUserTie className="text-secondary" />
          Assigned Teachers
        </h3>
        <Badge variant="outline" className="px-3 py-1 bg-white">
          {assignedTeachers.length} Records
        </Badge>
      </div>

      <div className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-500  bg-gray-50/50">
              <tr>
                <th className="px-6 py-4 font-bold tracking-wider">SN</th>
                <th className="px-6 py-4 font-bold tracking-wider">Class</th>
                <th className="px-6 py-4 font-bold tracking-wider">Section</th>
                <th className="px-6 py-4 font-bold tracking-wider">Teacher</th>
                <th className="px-6 py-4 font-bold tracking-wider text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {assignedTeachers.map((item, index) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50/60 transition-colors group"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 text-gray-600 font-medium">
                    {item.class}
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant="secondary" className="font-bold">
                      {item.section}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{item.teacher}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                      >
                        <FaEdit size={14} />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDelete(item.id)}
                        className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <FaTrash size={14} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
              {assignedTeachers.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-12 text-center text-gray-400"
                  >
                    No teachers assigned yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminCard>
  );
}
