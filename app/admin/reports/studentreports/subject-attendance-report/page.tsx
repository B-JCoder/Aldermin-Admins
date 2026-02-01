"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function SubjectAttendanceReportPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Subject Attendance Report" 
        subtitle="View and manage subject attendance report"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">Subject Attendance Report details and data will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
