"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import { Button } from "@/components/ui/button";
import { FaEdit, FaTrash, FaBookOpen } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

interface AssignedSubject {
  id: number;
  subject: string;
  section: string;
  teacher: string;
}

interface AssignSubjectListProps {
  assignedSubjects: AssignedSubject[];
  handleDelete: (id: number) => void;
}

export function AssignSubjectList({
  assignedSubjects,
  handleDelete,
}: AssignSubjectListProps) {
  return (
    <GlassCard className="h-full bg-white/60">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white/40 backdrop-blur-md">
        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <FaBookOpen className="text-secondary" />
          Subject Assignments
        </h3>
        <Badge variant="outline" className="px-3 py-1 bg-white/50">
          {assignedSubjects.length} Records
        </Badge>
      </div>

      <div className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50/50">
              <tr>
                <th className="px-6 py-4 font-bold tracking-wider">SN</th>
                <th className="px-6 py-4 font-bold tracking-wider">Subject</th>
                <th className="px-6 py-4 font-bold tracking-wider">Section</th>
                <th className="px-6 py-4 font-bold tracking-wider">Teacher</th>
                <th className="px-6 py-4 font-bold tracking-wider text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {assignedSubjects.map((item, index) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50/60 transition-colors group"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 text-gray-600 font-medium">
                    {item.subject}
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
              {assignedSubjects.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-12 text-center text-gray-400"
                  >
                    No subjects assigned yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </GlassCard>
  );
}
