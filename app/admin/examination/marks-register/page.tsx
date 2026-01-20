"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { MarkRegisterFilter } from "@/components/modules/examination/MarkRegisterFilter";
import { MarkRegisterList } from "@/components/modules/examination/MarkRegisterList";

export default function MarkRegisterPage() {
  const [students, setStudents] = useState([
    {
      id: 1,
      admissionNo: "ADM-2023-001",
      rollNo: "10",
      className: "10-A",
      name: "Avery Sterling",
      marks: 85,
      remarks: "Outstanding logic",
      isPresent: true,
    },
    {
      id: 2,
      admissionNo: "ADM-2023-042",
      rollNo: "15",
      className: "10-A",
      name: "Elara Vance",
      marks: 42,
      remarks: "Needs improvement in trig",
      isPresent: true,
    },
  ]);

  const togglePresence = (id: number) => {
    setStudents(
      students.map((s) =>
        s.id === id
          ? { ...s, isPresent: !s.isPresent, marks: !s.isPresent ? s.marks : 0 }
          : s
      )
    );
  };

  return (
    <div className="container mx-auto space-y-8 pb-32">
      <PageHeader
        title="Evaluative Ledger"
        subtitle="Official Academic Mark Entry Registry"
      />

      <MarkRegisterFilter />
      <MarkRegisterList students={students} togglePresence={togglePresence} />
    </div>
  );
}
