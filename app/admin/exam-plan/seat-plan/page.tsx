"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { SeatPlanFilter } from "@/components/modules/exam-plan/SeatPlanFilter";
import { SeatPlanList } from "@/components/modules/exam-plan/SeatPlanList";
import { Button } from "@/components/ui/button";
import { FaPrint } from "react-icons/fa";

export default function SeatPlanPage() {
  const [studentList, setStudentList] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      admissionNo: "ADM201",
      className: "Class 9",
      fatherName: "Samuel Johnson",
      category: "BC",
      gender: "Female",
      selected: false,
    },
    {
      id: 2,
      name: "Bob Smith",
      admissionNo: "ADM202",
      className: "Class 9",
      fatherName: "Harry Smith",
      category: "General",
      gender: "Male",
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
          title="Seat Plan Arrangement"
          subtitle="Generate and Allot Exam Seats"
        />
        <Button className="flex items-center gap-2 rounded-xl bg-foreground text-background px-6 py-3 text-[10px] font-semibold  tracking-[0.2em] hover:bg-foreground/90 transition-all shadow-xl active:scale-95 h-auto">
          <FaPrint size={14} />
          Print Seat Plans
        </Button>
      </div>

      <SeatPlanFilter />
      <SeatPlanList
        students={studentList}
        handleSelectOne={handleSelectOne}
        handleSelectAll={handleSelectAll}
      />
    </div>
  );
}
