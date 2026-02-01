"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function TabulationSheetReportPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Tabulation Sheet Report" 
        subtitle="View and manage tabulation sheet report"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">Tabulation Sheet Report details and data will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
