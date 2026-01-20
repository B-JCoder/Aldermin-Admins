"use client";

import React, { useState } from "react";
import { FaChartPie } from "react-icons/fa";
import { TeacherStats } from "@/components/modules/teacher-evaluation/TeacherStats";
import { TeacherFilter } from "@/components/modules/teacher-evaluation/TeacherFilter";
import { TeacherList } from "@/components/modules/teacher-evaluation/TeacherList";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/common/PageHeader";

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
      <PageHeader
        title="Teacher Analytics"
        subtitle="Aggregate Performance Metrics"
        icon={<FaChartPie size={24} />}
        action={
          <Button
            variant="outline"
            className="rounded-2xl border-secondary/20 text-secondary hover:bg-secondary hover:text-white font-black text-xs uppercase tracking-widest"
          >
            Generate Report
          </Button>
        }
      />

      <TeacherStats />

      <TeacherFilter />

      <TeacherList teachers={teachers} />
    </div>
  );
}
