"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function PaymentReportPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Payment Report" 
        subtitle="View and manage payment report"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">Payment Report details and data will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
