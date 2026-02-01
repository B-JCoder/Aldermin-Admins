"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function NotificationSettingPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Notification Setting" 
        subtitle="Configure and manage notification setting"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">Notification Setting configuration options will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
