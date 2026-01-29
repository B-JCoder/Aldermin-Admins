"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { MarksheetFilter } from "@/components/modules/examination/MarksheetFilter";
import { MarksheetReport } from "@/components/modules/examination/MarksheetReport";
import { Button } from "@/components/ui/button";
import { FaPrint } from "react-icons/fa";

export default function MarksheetReportPage() {
  const [searchParams, setSearchParams] = useState({
    exam: "",
    className: "",
    section: "",
    subject: "",
  });

  const [reportData, setReportData] = useState([
    {
      id: 1,
      name: "John Maxwell",
      admissionNo: "ADM701",
      rollNo: "01",
      position: "1st",
      totalMark: "100",
      passMark: "40",
      obtainedMark: "92",
      result: "Pass",
      grade: "A+",
    },
    {
      id: 2,
      name: "Steve Jobs",
      admissionNo: "ADM702",
      rollNo: "02",
      position: "2nd",
      totalMark: "100",
      passMark: "40",
      obtainedMark: "88",
      result: "Pass",
      grade: "A",
    },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching marksheet for", searchParams);
  };

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <PageHeader
          title="Marksheet Report Analysis"
          subtitle="Generate and Print Student Marksheets"
        />
        <Button className="flex items-center gap-2 px-6 py-3 bg-foreground text-background text-[10px] font-semibold rounded-xl  tracking-[0.2em] hover:bg-foreground/90 transition-all shadow-xl active:scale-95 h-auto">
          <FaPrint size={14} />
          Export PDF
        </Button>
      </div>

      <MarksheetFilter
        searchParams={searchParams}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
      />

      <MarksheetReport searchParams={searchParams} reportData={reportData} />
    </div>
  );
}
