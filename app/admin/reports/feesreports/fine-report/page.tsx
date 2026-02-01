"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function FineReportPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Fine Report" 
        subtitle="View and manage fine report"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">Fine Report details and data will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
