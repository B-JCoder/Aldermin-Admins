"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { MarkGradeForm } from "@/components/modules/examination/MarkGradeForm";
import { MarkGradeList } from "@/components/modules/examination/MarkGradeList";

export default function MarkGradePage() {
  const [grades, setGrades] = useState([
    {
      id: 1,
      name: "A+",
      gpa: "4.00",
      percentRange: "90% - 100%",
      gpaRange: "4.0 - 4.0",
      description: "Outstanding performance",
    },
    {
      id: 2,
      name: "A",
      gpa: "3.75",
      percentRange: "80% - 89%",
      gpaRange: "3.75 - 3.99",
      description: "Excellent achievement",
    },
    {
      id: 3,
      name: "B",
      gpa: "3.00",
      percentRange: "70% - 79%",
      gpaRange: "3.0 - 3.74",
      description: "Good understanding",
    },
  ]);

  return (
    <div className="container mx-auto space-y-8 pb-32">
      <PageHeader
        title="Graduation Standards"
        subtitle="Manage Grade Definitions"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
        <div className="lg:col-span-12 xl:col-span-4 h-full">
          <MarkGradeForm />
        </div>
        <div className="lg:col-span-12 xl:col-span-8 h-full">
          <MarkGradeList grades={grades} />
        </div>
      </div>
    </div>
  );
}
