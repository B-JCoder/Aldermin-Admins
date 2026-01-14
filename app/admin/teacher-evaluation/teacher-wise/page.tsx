"use client";

import React, { useState } from "react";
import { FaChartPie } from "react-icons/fa";
import { TeacherStats } from "@/components/modules/teacher-evaluation/TeacherStats";
import { TeacherFilter } from "@/components/modules/teacher-evaluation/TeacherFilter";
import { TeacherList } from "@/components/modules/teacher-evaluation/TeacherList";
import { Button } from "@/components/ui/button";

export default function TeacherWiseReportPage() {
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      staffNo: "STF-2023-001",
      name: "Prof. Silas Vance",
      department: "Mathematics",
      avgRating: 4.8,
      totalReviews: 124,
      status: "Top Performer",
    },
    {
      id: 2,
      staffNo: "STF-2023-045",
      name: "Dr. Elara Vance",
      department: "Science",
      avgRating: 4.5,
      totalReviews: 98,
      status: "Excellent",
    },
    {
      id: 3,
      staffNo: "STF-2023-012",
      name: "Mr. John Doe",
      department: "History",
      avgRating: 3.2,
      totalReviews: 45,
      status: "Needs Improvement",
    },
  ]);

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-foreground tracking-tighter flex items-center gap-3">
            <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center shadow-2xl shadow-secondary/20 -rotate-3">
              <FaChartPie className="text-white rotate-3" size={24} />
            </div>
            Teacher Analytics
          </h1>
          <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest mt-2 ml-1">
            Aggregate Performance Metrics
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="rounded-2xl border-secondary/20 text-secondary hover:bg-secondary hover:text-white font-black text-xs uppercase tracking-widest"
          >
            Generate Report
          </Button>
        </div>
      </div>

      <TeacherStats />

      <TeacherFilter />

      <TeacherList teachers={teachers} />
    </div>
  );
}
