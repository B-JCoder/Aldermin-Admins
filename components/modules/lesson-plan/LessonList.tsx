"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { Button } from "@/components/ui/button";
import { FaEdit, FaTrash, FaBook } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

interface Lesson {
  id: number;
  className: string;
  section: string;
  subject: string;
  lesson: string;
}

interface LessonListProps {
  lessonList: Lesson[];
  handleDelete: (id: number) => void;
}

export function LessonList({ lessonList, handleDelete }: LessonListProps) {
  return (
    <AdminCard className="h-full bg-white">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white ">
        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <FaBook className="text-secondary" />
          Active Lesson Repository
        </h3>
        <Badge
          variant="outline"
          className="px-3 py-1 bg-secondary/10 text-secondary border-secondary/20"
        >
          {lessonList.length} Lessons
        </Badge>
      </div>

      <div className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50/50 text-gray-500 font-bold">
              <tr>
                <th className="px-6 py-5 text-left w-16 text-[10px]  font-semibold">
                  SN
                </th>
                <th className="px-6 py-5 text-left text-[10px]  font-semibold ">
                  Context (Class/Sec)
                </th>
                <th className="px-6 py-5 text-left text-[10px]  font-semibold ">
                  Subject
                </th>
                <th className="px-6 py-5 text-left text-[10px]  font-semibold ">
                  Lesson Topic
                </th>
                <th className="px-6 py-5 text-center text-[10px]  font-semibold ">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {lessonList.map((item, index) => (
                <tr
                  key={item.id}
                  className="hover:bg-secondary/5 transition-all group"
                >
                  <td className="px-6 py-5 text-gray-400  text-xs">
                    {index + 1}
                  </td>
                  <td className="px-6 py-5">
                    <div className="font-semibold text-gray-700">
                      {item.className}
                    </div>
                    <div className="text-[10px] text-gray-400 font-bold ">
                      {item.section}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <span className="font-bold text-gray-600  ">
                        {item.subject}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 font-semibold text-gray-900 tracking-tight text-base group-hover:text-secondary transition-colors">
                    {item.lesson}
                  </td>
                  <td className="px-6 py-5">
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
                        onClick={() => handleDelete(item.id)}
                        className="h-8 w-8 p-0 text-rose-500 hover:text-rose-600 hover:bg-rose-50"
                      >
                        <FaTrash size={14} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
              {lessonList.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-16 text-center text-gray-300 font-semibold   text-[10px]"
                  >
                    No lessons registered.
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
