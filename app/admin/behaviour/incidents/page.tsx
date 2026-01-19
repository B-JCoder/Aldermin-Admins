"use client";

import React, { useState } from "react";
import { FaShieldAlt } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { IncidentForm } from "@/components/modules/behaviour/IncidentForm";
import { IncidentListTable } from "@/components/modules/behaviour/IncidentListTable";

export default function IncidentsPage() {
  const [incidentList, setIncidentList] = useState([
    {
      id: 1,
      title: "Exceptional Scholarly Pursuit",
      points: 10,
      description: "Demonstrated advanced comprehension and peer mentorship.",
    },
    {
      id: 2,
      title: "Integrity Violation - Assessment",
      points: -15,
      description: "Unauthorized assistance during formal examination.",
    },
  ]);

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Conduct Taxonomy"
        subtitle="Define and Manage Behavioral Nodes"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Definition Form */}
        <div className="lg:col-span-4 sticky top-8">
          <IncidentForm />
        </div>

        {/* Taxonomy Index */}
        <div className="lg:col-span-8">
          <IncidentListTable incidents={incidentList} />
        </div>
      </div>
    </div>
  );
}
