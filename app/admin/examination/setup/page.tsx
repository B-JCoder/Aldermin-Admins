"use client";

import React, { useState } from "react";
import { ExamSetupForm } from "@/components/modules/examination/ExamSetupForm";
import { ExamSetupList } from "@/components/modules/examination/ExamSetupList";
import { PageHeader } from "@/components/common/PageHeader";

export default function ExamSetupPage() {
  const [examSetups, setExamSetups] = useState([
    {
      id: 1,
      title: "Mid-Term",
      className: "Class 10",
      section: "A",
      subject: "Mathematics",
      totalMark: 100,
      distribution: "Theory: 70, Practical: 30",
    },
    {
      id: 2,
      title: "Final Term",
      className: "Class 10",
      section: "A",
      subject: "Physics",
      totalMark: 100,
      distribution: "Theory: 60, Practical: 20, Viva: 20",
    },
  ]);

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader title="Configuration Lab" subtitle="Manage Exam Setups" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
        <div className="lg:col-span-12 xl:col-span-4 h-full">
          <ExamSetupForm />
        </div>
        <div className="lg:col-span-12 xl:col-span-8 h-full">
          <ExamSetupList setups={examSetups} />
        </div>
      </div>
    </div>
  );
}
