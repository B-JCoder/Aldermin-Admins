"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function MeritListReportPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Merit List Report" 
        subtitle="View and manage merit list report"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">Merit List Report details and data will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
