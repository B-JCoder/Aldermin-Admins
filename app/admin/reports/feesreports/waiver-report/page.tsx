"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function WaiverReportPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Waiver Report" 
        subtitle="View and manage waiver report"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">Waiver Report details and data will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
