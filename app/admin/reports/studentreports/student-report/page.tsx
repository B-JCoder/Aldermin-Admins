"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function StudentReportPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Student Report" 
        subtitle="View and manage student report"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">Student Report details and data will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
