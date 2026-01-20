"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { ExamAttendanceFilter } from "@/components/modules/examination/ExamAttendanceFilter";
import { ExamAttendanceList } from "@/components/modules/examination/ExamAttendanceList";

export default function ExamAttendancePage() {
  const [students, setStudents] = useState([
    {
      id: 1,
      admissionNo: "ADM-2023-001",
      name: "Avery Sterling",
      className: "10-A",
      rollNo: "10",
      attendance: "Present",
    },
    {
      id: 2,
      admissionNo: "ADM-2023-042",
      name: "Elara Vance",
      className: "10-A",
      rollNo: "15",
      attendance: "Absent",
    },
  ]);

  const toggleAttendance = (id: number) => {
    setStudents(
      students.map((s) =>
        s.id === id
          ? {
              ...s,
              attendance: s.attendance === "Present" ? "Absent" : "Present",
            }
          : s
      )
    );
  };

  return (
    <div className="container mx-auto space-y-8 pb-32">
      <PageHeader
        title="Proctorial Attendance"
        subtitle="Assessment Eligibility & Presence"
      />

      <ExamAttendanceFilter />
      <ExamAttendanceList
        students={students}
        toggleAttendance={toggleAttendance}
      />
    </div>
  );
}
