"use client";

import React, { useState } from "react";
import { FaChartBar, FaPrint, FaSearch } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { BehaviourFilter } from "@/components/modules/behaviour/BehaviourFilter";
import { BehaviourReportTable } from "@/components/modules/behaviour/BehaviourReportTable";

export default function BehaviourReportPage() {
  const [behaviourRankList, setBehaviourRankList] = useState([
    {
      id: 1,
      rank: 1,
      admissionNo: "ADM-2024-001",
      name: "Alice Johnson",
      class: "Grade 10 (Alpha)",
      gender: "Female",
      phone: "+1 234 567 890",
      points: 150,
    },
    {
      id: 2,
      rank: 2,
      admissionNo: "ADM-2024-012",
      name: "Charlie Davis",
      class: "Grade 10 (Alpha)",
      gender: "Male",
      phone: "+1 234 567 891",
      points: 120,
    },
    {
      id: 3,
      rank: 3,
      admissionNo: "ADM-2024-009",
      name: "Emma Wilson",
      class: "Grade 10 (Alpha)",
      gender: "Female",
      phone: "+1 234 567 892",
      points: 95,
    },
  ]);

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Conduct Excellence Ledger"
        subtitle="Ranked Behavioral Analytics"
        action={
          <Button className="rounded-xl bg-accent text-white hover:bg-accent/90 transition-all shadow-xl text-[10px] font-black uppercase tracking-[0.2em] px-6 h-12">
            <FaPrint className="mr-2" /> Broadcast Standings
          </Button>
        }
      />

      <BehaviourFilter buttonText="Analyze Standings" buttonIcon={FaSearch} />

      <BehaviourReportTable ranks={behaviourRankList} />
    </div>
  );
}
