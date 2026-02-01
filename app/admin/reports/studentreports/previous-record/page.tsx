"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function PreviousRecordPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Previous Record" 
        subtitle="View and manage previous record"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">Previous Record details and data will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
