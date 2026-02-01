"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function HomeWorkEvaluationReportPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Home Work Evaluation Report" 
        subtitle="View and manage home work evaluation report"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">Home Work Evaluation Report details and data will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
