"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function AcademicYearPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Academic Year" 
        subtitle="Configure and manage academic year"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">Academic Year configuration options will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
