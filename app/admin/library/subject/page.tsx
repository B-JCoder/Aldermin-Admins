"use client";

import React, { useState } from "react";
import { SubjectForm } from "@/components/modules/library/SubjectForm";
import { SubjectList } from "@/components/modules/library/SubjectList";
import { PageHeader } from "@/components/common/PageHeader";

export default function LibrarySubjectPage() {
  const [subjects, setSubjects] = useState([
    {
      id: 1,
      title: "Quantum Electrodynamics",
      category: "Theoretical Physics",
      code: "PHY-QED-401",
    },
    {
      id: 2,
      title: "Modernist Poetry",
      category: "Classical Literature",
      code: "LIT-MOD-202",
    },
    {
      id: 3,
      title: "Linear Algebra",
      category: "Advanced Mathematics",
      code: "MAT-LIN-301",
    },
  ]);

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Academic Subject Matrix"
        subtitle="Manage Library Subjects"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
        <div className="lg:col-span-4 h-full">
          <SubjectForm />
        </div>
        <div className="lg:col-span-8 h-full">
          <SubjectList subjects={subjects} />
        </div>
      </div>
    </div>
  );
}
