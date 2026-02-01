"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function StudentHistoryPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Student History" 
        subtitle="View and manage student history"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">Student History details and data will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
