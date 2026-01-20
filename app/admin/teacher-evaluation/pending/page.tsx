"use client";

import React, { useState } from "react";
import { FaHourglassHalf } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { EvaluationFilter } from "@/components/modules/teacher-evaluation/EvaluationFilter";
import {
  EvaluationList,
  Evaluation,
} from "@/components/modules/teacher-evaluation/EvaluationList";
import { Button } from "@/components/ui/button";

export default function PendingReportPage() {
  const [reports, setReports] = useState<Evaluation[]>([
    {
      id: 1,
      staffNo: "STF-2023-002",
      teacherName: "Prof. John Doe",
      submittedBy: "Michael Chen (Student)",
      className: "Class 11-C",
      rating: 3,
      comment: "Lectures are good but pace is too fast.",
      status: "Pending",
    },
    {
      id: 2,
      staffNo: "STF-2023-019",
      teacherName: "Ms. Sarah Connor",
      submittedBy: "Linda Hamilton (Parent)",
      className: "Class 08-A",
      rating: 4,
      comment: "Very supportive but needs to update study materials.",
      status: "Pending",
    },
  ]);

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this record?")) {
      setReports((prev) => prev.filter((r) => r.id !== id));
    }
  };

  const handleApprove = (id: number) => {
    if (confirm("Approve this evaluation?")) {
      // In a real app, this would make an API call
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
        title="Pending Evaluations"
        subtitle="Awaiting Review"
        icon={<FaHourglassHalf size={24} />}
        action={
          <Button
            variant="outline"
            className="rounded-2xl bg-secondary/5 text-secondary border-secondary/20 hover:bg-secondary/10"
          >
            Batch Process
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
          onApprove={handleApprove}
        />
      </div>
    </div>
  );
}
