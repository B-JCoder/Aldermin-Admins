"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdmitCardFilter } from "@/components/modules/exam-plan/AdmitCardFilter";
import { AdmitCardList } from "@/components/modules/exam-plan/AdmitCardList";
import { Button } from "@/components/ui/button";
import { FaPrint } from "react-icons/fa";

export default function AdmitCardPage() {
  const [studentList, setStudentList] = useState([
    {
      id: 1,
      name: "John Smith",
      admissionNo: "ADM001",
      className: "Class 10",
      fatherName: "Robert Smith",
      category: "General",
      gender: "Male",
      selected: false,
    },
    {
      id: 2,
      name: "Jane Doe",
      admissionNo: "ADM002",
      className: "Class 10",
      fatherName: "Michael Doe",
      category: "General",
      gender: "Female",
      selected: false,
    },
  ]);

  const handleSelectOne = (id: number) => {
    setStudentList((prev) =>
      prev.map((s) => (s.id === id ? { ...s, selected: !s.selected } : s))
    );
  };

  const handleSelectAll = (checked: boolean) => {
    setStudentList((prev) => prev.map((s) => ({ ...s, selected: checked })));
  };

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <PageHeader
          title="Admit Card Generation"
          subtitle="Generate and Print Student Admit Cards"
        />
        <Button className="flex items-center gap-2 rounded-xl bg-foreground text-background px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-foreground/90 transition-all shadow-xl active:scale-95 h-auto">
          <FaPrint size={14} />
          Print Selected
        </Button>
      </div>

      <AdmitCardFilter />
      <AdmitCardList
        students={studentList}
        handleSelectOne={handleSelectOne}
        handleSelectAll={handleSelectAll}
      />
    </div>
  );
}
