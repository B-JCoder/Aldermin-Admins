"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function StudentSettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Student Settings" 
        subtitle="Configure and manage student settings"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">Student Settings configuration options will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
