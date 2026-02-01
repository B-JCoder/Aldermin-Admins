"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function OnlineExamReportPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Online Exam Report" 
        subtitle="View and manage online exam report"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">Online Exam Report details and data will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
