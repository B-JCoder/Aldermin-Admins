"use client";

import React, { useState } from "react";
import { FaLevelUpAlt } from "react-icons/fa";
import { PromoteFilter } from "@/components/modules/student-info/PromoteFilter";
import { ProgressionRegistry } from "@/components/modules/student-info/ProgressionRegistry";
import { PageHeader } from "@/components/common/PageHeader";

export default function StudentPromotePage() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Avery Sterling",
      rollNo: "10",
      currentClass: "Class 9",
      nextClass: "Class 10",
    },
    {
      id: 2,
      name: "Elara Vance",
      rollNo: "15",
      currentClass: "Class 9",
      nextClass: "Class 10",
    },
  ]);

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Student Promotion Hub"
        subtitle="Academic Progression Management"
      />

      <ProgressionRegistry students={students} />
    </div>
  );
}
