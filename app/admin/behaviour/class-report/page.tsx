"use client";

import React, { useState } from "react";
import { FaLayerGroup, FaPrint } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { ClassReportKPIs } from "@/components/modules/behaviour/ClassReportKPIs";
import { ClassReportTable } from "@/components/modules/behaviour/ClassReportTable";

export default function ClassReportPage() {
  const [classRankList, setClassRankList] = useState([
    { id: 1, rank: 1, class: "Grade 10 (Alpha)", students: 42, points: 1250 },
    { id: 2, rank: 2, class: "Grade 11 (Beta)", students: 38, points: 1120 },
    { id: 3, rank: 3, class: "Grade 10 (Beta)", students: 45, points: 980 },
  ]);

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Institutional Tier Analytics"
        subtitle="Performance Metrics Data"
        action={
          <Button className="rounded-xl bg-accent text-white hover:bg-accent/90 transition-all shadow-xl text-[10px] font-black uppercase tracking-[0.2em] px-6 h-12">
            <FaPrint className="mr-2" /> Export Tier Report
          </Button>
        }
      />

      <ClassReportKPIs />

      <ClassReportTable ranks={classRankList} />
    </div>
  );
}
