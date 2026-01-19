"use client";

import React, { useState } from "react";
import { FaUserShield, FaSearch } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { BehaviourFilter } from "@/components/modules/behaviour/BehaviourFilter";
import { StudentReportTable } from "@/components/modules/behaviour/StudentReportTable";

export default function StudentReportPage() {
  const [studentIncidentList, setStudentIncidentList] = useState([
    {
      id: 1,
      admissionNo: "ADM-2024-001",
      name: "Alice Johnson",
      gender: "Female",
      class: "Grade 10 (Alpha)",
      phone: "+1 234 567 890",
      points: 45,
      incidents: 3,
    },
    {
      id: 2,
      admissionNo: "ADM-2024-005",
      name: "Bob Smith",
      gender: "Male",
      class: "Grade 10 (Alpha)",
      phone: "+1 234 567 893",
      points: -5,
      incidents: 1,
    },
  ]);

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Institutional Conduct Logs"
        subtitle="Detailed Student Behaviour Records"
      />

      <BehaviourFilter buttonText="Query Conduct Logs" buttonIcon={FaSearch} />

      <StudentReportTable students={studentIncidentList} />
    </div>
  );
}
