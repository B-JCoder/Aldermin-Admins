"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function StaffAttendanceReportPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Staff Attendance Report" 
        subtitle="View and manage staff attendance report"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">Staff Attendance Report details and data will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
