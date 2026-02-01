"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function StudentAttendanceReportPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Student Attendance Report" 
        subtitle="View and manage student attendance report"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">Student Attendance Report details and data will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
