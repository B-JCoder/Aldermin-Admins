"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function HolidayPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Holiday" 
        subtitle="Configure and manage holiday"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">Holiday configuration options will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
