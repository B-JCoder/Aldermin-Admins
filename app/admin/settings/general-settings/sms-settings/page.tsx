"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function SmsSettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="SMS Settings" 
        subtitle="Configure and manage sms settings"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">SMS Settings configuration options will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
