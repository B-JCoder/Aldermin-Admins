"use client";

import React, { useState } from "react";
import { ExamTypeForm } from "@/components/modules/examination/ExamTypeForm";
import { ExamTypeList } from "@/components/modules/examination/ExamTypeList";
import { PageHeader } from "@/components/common/PageHeader";

export default function ExamTypePage() {
  const [exams, setExams] = useState([
    {
      id: 1,
      name: "Mid-Term Assessment",
      isMandatory: true,
      avgPass: "40%",
      avgMark: "72%",
    },
    {
      id: 2,
      name: "Final Semester Examination",
      isMandatory: true,
      avgPass: "35%",
      avgMark: "68%",
    },
  ]);

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Examination Framework"
        subtitle="Manage Exam Definitions"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
        <div className="lg:col-span-4 h-full">
          <ExamTypeForm />
        </div>
        <div className="lg:col-span-8 h-full">
          <ExamTypeList exams={exams} />
        </div>
      </div>
    </div>
  );
}
