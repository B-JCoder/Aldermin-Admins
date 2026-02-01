"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function ProgressCardReportPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Progress Card Report" 
        subtitle="View and manage progress card report"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">Progress Card Report details and data will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
