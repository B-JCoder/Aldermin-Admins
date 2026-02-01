"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function ProgressCardReport100Page() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Progress Card Report 100%" 
        subtitle="View and manage progress card report 100%"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">Progress Card Report 100% details and data will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
