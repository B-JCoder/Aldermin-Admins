"use client";

import React, { useState } from "react";
import { FaUserPlus, FaSearch } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { BehaviourFilter } from "@/components/modules/behaviour/BehaviourFilter";
import { AssignIncidentTable } from "@/components/modules/behaviour/AssignIncidentTable";

export default function AssignIncidentPage() {
  const [studentScoreList, setStudentScoreList] = useState([
    {
      id: 1,
      admissionNo: "ADM-2024-001",
      name: "Alice Johnson",
      gender: "Female",
      class: "Grade 10 (Alpha)",
      points: 45,
      incidents: 3,
    },
    {
      id: 2,
      admissionNo: "ADM-2024-005",
      name: "Bob Smith",
      gender: "Male",
      class: "Grade 10 (Alpha)",
      points: -5,
      incidents: 1,
    },
  ]);

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Conduct Attribution"
        subtitle="Manage Student Behavior Records"
      />

      <BehaviourFilter buttonText="Query Subjects" buttonIcon={FaSearch} />

      <AssignIncidentTable students={studentScoreList} />
    </div>
  );
}
