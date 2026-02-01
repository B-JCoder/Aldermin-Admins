"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function StaffSettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Staff Settings" 
        subtitle="Configure and manage staff settings"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">Staff Settings configuration options will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
