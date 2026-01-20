"use client";

import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { EvaluationFilter } from "@/components/modules/teacher-evaluation/EvaluationFilter";
import {
  EvaluationList,
  Evaluation,
} from "@/components/modules/teacher-evaluation/EvaluationList";
import { Button } from "@/components/ui/button";

export default function ApprovedReportPage() {
  const [reports, setReports] = useState<Evaluation[]>([
    {
      id: 1,
      staffNo: "STF-2023-001",
      teacherName: "Prof. Silas Vance",
      submittedBy: "Avery Sterling (Student)",
      className: "Class 10-A",
      rating: 5,
      comment: "Excellent teaching methodology clearly explained concepts.",
      status: "Approved",
    },
    {
      id: 2,
      staffNo: "STF-2023-045",
      teacherName: "Dr. Elara Vance",
      submittedBy: "Julian Sterling (Parent)",
      className: "Class 09-B",
      rating: 4,
      comment: "Good interaction but assignment load is high.",
      status: "Approved",
    },
  ]);

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this record?")) {
      setReports((prev) => prev.filter((r) => r.id !== id));
    }
  };

  const handleEdit = (id: number) => {
    console.log("Edit report", id);
  };

  const handleView = (id: number) => {
    console.log("View report", id);
  };

  return (
    <div className="container mx-auto space-y-8 pb-20">
      <PageHeader
        title="Approved Evaluations"
        subtitle="Performance Review Registry"
        icon={<FaCheckCircle size={24} />}
        action={
          <Button
            variant="outline"
            className="rounded-2xl bg-secondary/5 text-secondary border-secondary/20 hover:bg-secondary/10"
          >
            Batch Export
          </Button>
        }
      />

      <div className="space-y-8">
        <EvaluationFilter />
        <EvaluationList
          evaluations={reports}
          onRemove={handleDelete}
          onEdit={handleEdit}
          onView={handleView}
        />
      </div>
    </div>
  );
}
