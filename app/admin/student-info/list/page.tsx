"use client";

import React, { useState } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { StudentListTable } from "@/components/modules/student-info/StudentListTable";
import { StudentListFilter } from "@/components/modules/student-info/StudentListFilter";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";

export default function StudentListPage() {
  const [students, setStudents] = useState([
    {
      id: 1,
      admissionNo: "ADM-2023-001",
      name: "Avery Sterling",
      fatherName: "Julian Sterling",
      dob: "2010-05-15",
      className: "Class 10-A",
      gender: "Male",
      category: "General",
    },
    {
      id: 2,
      admissionNo: "ADM-2023-042",
      name: "Elara Vance",
      fatherName: "Silas Vance",
      dob: "2011-02-28",
      className: "Class 10-A",
      gender: "Female",
      category: "Scholarship",
    },
  ]);

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Student Directory"
        subtitle="Academic Year 2023-24"
        action={
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="rounded-2xl border-secondary/20 text-secondary font-semibold text-xs   hover:bg-secondary hover:text-white transition-all shadow-sm"
            >
              Batch Actions
            </Button>
            <Button
              variant="default"
              className="rounded-2xl bg-accent text-white font-semibold text-xs   hover:bg-accent/90 transition-all shadow-xl"
            >
              Export Ledger
            </Button>
          </div>
        }
      />

      <StudentListTable students={students} />
    </div>
  );
}
