"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import { Button } from "@/components/ui/button";
import { FaEdit, FaTrash } from "react-icons/fa";

interface Overview {
  id: number;
  lesson: string;
  topic: string;
  subjectTopic: string;
  completedDate: string;
  upcomingDate: string;
  status: string;
}

interface LessonOverviewListProps {
  overviews: Overview[];
}

export function LessonOverviewList({ overviews }: LessonOverviewListProps) {
  return (
    <GlassCard className="h-full bg-white/60">
      <div className="p-6">
        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50/50 text-gray-400 font-black">
              <tr>
                <th className="px-6 py-4 text-left w-16 text-[10px] uppercase font-black">
                  SN
                </th>
                <th className="px-6 py-4 text-left text-[10px] uppercase font-black">
                  Unit Overview
                </th>
                <th className="px-6 py-4 text-left text-[10px] uppercase font-black">
                  Subject Domain
                </th>
                <th className="px-6 py-4 text-center text-[10px] uppercase font-black">
                  Timeline
                </th>
                <th className="px-6 py-4 text-center text-[10px] uppercase font-black">
                  Status
                </th>
                <th className="px-6 py-4 text-center text-[10px] uppercase font-black">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {overviews.map((item, index) => (
                <tr
                  key={item.id}
                  className="hover:bg-secondary/5 transition-all group"
                >
                  <td className="px-6 py-5 text-gray-400 font-mono text-xs">
                    {index + 1}
                  </td>
                  <td className="px-6 py-5">
                    <div className="font-black text-gray-800 tracking-tight leading-none mb-1">
                      {item.lesson}
                    </div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                      {item.topic}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-block px-2 py-0.5 bg-secondary/10 text-secondary text-[10px] font-black uppercase rounded ring-1 ring-secondary/20">
                      {item.subjectTopic}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="space-y-1">
                      <div className="flex items-center justify-center gap-1 text-[10px] text-gray-500 font-bold uppercase">
                        <span className="text-emerald-500">Done:</span>{" "}
                        {item.completedDate}
                      </div>
                      <div className="flex items-center justify-center gap-1 text-[10px] text-gray-500 font-bold uppercase">
                        <span className="text-blue-500">Next:</span>{" "}
                        {item.upcomingDate}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-center">
                      <span
                        className={`px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                          item.status === "Verified"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {item.status}
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
            </tbody>
          </table>
        </div>
      </div>
    </GlassCard>
  );
}
