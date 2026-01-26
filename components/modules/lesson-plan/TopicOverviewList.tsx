"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import { Button } from "@/components/ui/button";
import {
  FaTag,
  FaCalendarDay,
  FaChalkboardTeacher,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

interface Topic {
  id: number;
  lesson: string;
  topic: string;
  date: string;
  teacher: string;
}

interface TopicOverviewListProps {
  topics: Topic[];
}

export function TopicOverviewList({ topics }: TopicOverviewListProps) {
  return (
    <GlassCard className="p-6 bg-white/60">
      <h4 className="mb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">
        Topic Registry
      </h4>
      <div className="overflow-x-auto rounded-xl border border-gray-50">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50/50 text-gray-500 font-bold border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-left w-16 text-[10px] uppercase font-black">
                SN
              </th>
              <th className="px-6 py-4 text-left text-[10px] uppercase font-black">
                Lesson Module
              </th>
              <th className="px-6 py-4 text-left text-[10px] uppercase font-black">
                Sub-Topic Detail
              </th>
              <th className="px-6 py-4 text-center text-[10px] uppercase font-black">
                Instruction Date
              </th>
              <th className="px-6 py-4 text-left text-[10px] uppercase font-black">
                Primary Teacher
              </th>
              <th className="px-6 py-4 text-center text-[10px] uppercase font-black">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {topics.map((item, index) => (
              <tr
                key={item.id}
                className="hover:bg-secondary/5 transition-all group"
              >
                <td className="px-6 py-5 text-gray-300 font-mono text-xs">
                  {index + 1}
                </td>
                <td className="px-6 py-5">
                  <div className="font-black text-gray-900 tracking-tight text-xs uppercase mb-1">
                    {item.lesson}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase">
                    <FaTag size={8} className="text-secondary/60" />
                    Module Info
                  </div>
                </td>
                <td className="px-6 py-5 font-black text-gray-800 text-base font-serif italic group-hover:text-secondary transition-colors">
                  {item.topic}
                </td>
                <td className="px-6 py-5 text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full text-[10px] font-bold text-gray-500 ring-1 ring-gray-100">
                    <FaCalendarDay size={10} className="text-gray-300" />
                    {item.date}
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <FaChalkboardTeacher size={12} />
                    </div>
                    <span className="text-xs font-bold text-gray-600">
                      {item.teacher}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex justify-center gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 text-blue-500 hover:text-blue-600 hover:bg-blue-50"
                    >
                      <FaEdit size={12} />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 text-rose-500 hover:text-rose-600 hover:bg-rose-50"
                    >
                      <FaTrash size={12} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
            {topics.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-6 py-16 text-center text-gray-300 font-black uppercase tracking-widest text-[10px]"
                >
                  No topics found for the selected criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </GlassCard>
  );
}
