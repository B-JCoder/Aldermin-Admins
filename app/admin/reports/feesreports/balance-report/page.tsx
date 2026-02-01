"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function BalanceReportPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Balance Report" 
        subtitle="View and manage balance report"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">Balance Report details and data will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
