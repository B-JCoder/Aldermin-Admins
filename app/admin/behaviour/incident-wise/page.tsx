"use client";

import React, { useState } from "react";
import { FaFileInvoice, FaPrint } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { IncidentWiseTable } from "@/components/modules/behaviour/IncidentWiseTable";

export default function IncidentWisePage() {
  const [incidentReport, setIncidentReport] = useState([
    {
      id: 1,
      incident: "Exceptional Scholarly Pursuit",
      students: ["Alice Johnson", "John Doe", "Sarah Miller"],
    },
    { id: 2, incident: "Integrity Violation", students: ["Bob Smith"] },
    {
      id: 3,
      incident: "Community Leadership",
      students: ["Charlie Davis", "Emma Wilson"],
    },
  ]);

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Conduct Distribution Analytics"
        subtitle="Analysing Incident Spread"
        action={
          <Button
            variant="outline"
            className="rounded-xl border-secondary/20 text-secondary font-black text-[10px] uppercase tracking-widest hover:bg-secondary hover:text-white transition-all shadow-sm px-6 h-12"
          >
            <FaPrint className="mr-2" /> Export Analytical Report
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-8">
        <IncidentWiseTable reports={incidentReport} />
      </div>
    </div>
  );
}
