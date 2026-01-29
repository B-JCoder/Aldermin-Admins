"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { AssignmentForm } from "@/components/modules/study-material/AssignmentForm";
import { AssignmentList } from "@/components/modules/study-material/AssignmentList";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";

export default function AssignmentPage() {
  // Logic preserved from original file
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "Algebra Problem Set 1",
      class: "Class 10 - A",
      subject: "Mathematics",
      deadline: "2024-04-01",
      submitted: 24,
      total: 30,
    },
    {
      id: 2,
      title: "Physics Lab Report",
      class: "Class 10 - B",
      subject: "Physics",
      deadline: "2024-03-30",
      submitted: 15,
      total: 28,
    },
  ]);

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Curricular Registry"
        subtitle="Homework Management"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold  text-[10px]  shadow-lg shadow-secondary/10">
            <FaPlus /> Authorize Assignment
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
        {/* Assignment Form */}
        <div className="lg:col-span-4 h-full">
          <AssignmentForm />
        </div>

        {/* Assignment List */}
        <div className="lg:col-span-8 h-full">
          <AssignmentList assignments={assignments} />
        </div>
      </div>
    </div>
  );
}
