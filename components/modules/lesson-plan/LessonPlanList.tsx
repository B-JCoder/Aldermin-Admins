"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { Button } from "@/components/ui/button";
import { FaEdit, FaTrash, FaChalkboardTeacher } from "react-icons/fa";

interface Plan {
  id: number;
  teacher: string;
  className: string;
  subject: string;
  lesson: string;
  topic: string;
  date: string;
  status: string;
}

interface LessonPlanListProps {
  plans: Plan[];
}

export function LessonPlanList({ plans }: LessonPlanListProps) {
  return (
    <AdminCard className="p-6 bg-white">
      <h4 className="mb-6 text-xs font-bold text-gray-400   leading-none">
        Active Teaching Schedule
      </h4>
      <div className="overflow-x-auto rounded-xl border border-gray-100">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50/50 text-gray-500 font-bold border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-left w-16  tracking-tighter text-[10px]">
                SN
              </th>
              <th className="px-6 py-4 text-left  tracking-tighter text-[10px]">
                Instructor
              </th>
              <th className="px-6 py-4 text-left  tracking-tighter text-[10px]">
                Academic Context
              </th>
              <th className="px-6 py-4 text-left  tracking-tighter text-[10px]">
                Lesson / Topic
              </th>
              <th className="px-6 py-4 text-center  tracking-tighter text-[10px]">
                Scheduled Date
              </th>
              <th className="px-6 py-4 text-center  tracking-tighter text-[10px]">
                Status
              </th>
              <th className="px-6 py-4 text-center  tracking-tighter text-[10px]">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {plans.map((plan, index) => (
              <tr
                key={plan.id}
                className="hover:bg-secondary/5 transition-colors group"
              >
                <td className="px-6 py-4 text-gray-400  text-xs">
                  {index + 1}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <FaChalkboardTeacher size={14} />
                    </div>
                    <div className="font-semibold text-gray-800 tracking-tight leading-none  ">
                      {plan.teacher}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-xs font-bold text-gray-700">
                    {plan.subject}
                  </div>
                  <div className="text-[10px] text-gray-400 font-semibold  ">
                    {plan.className}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="font-bold text-gray-900 leading-tight mb-1">
                    {plan.lesson}
                  </div>
                  <div className="text-[10px] text-secondary/70 font-bold  flex items-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-secondary"></div>
                    {plan.topic}
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-xs font-bold text-gray-500 tabular-nums">
                    {plan.date}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center">
                    <span
                      className={`px-4 py-1 rounded-full text-[10px] font-semibold   ring-1 ring-inset ${
                        plan.status === "Completed"
                          ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
                          : "bg-blue-50 text-blue-700 ring-blue-200"
                      }`}
                    >
                      {plan.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2 text-gray-300">
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
