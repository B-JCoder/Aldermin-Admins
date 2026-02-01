"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function EmailSettingPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Email Setting" 
        subtitle="Configure and manage email setting"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">Email Setting configuration options will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
