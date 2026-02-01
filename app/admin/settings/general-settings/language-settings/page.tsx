"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function LanguageSettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Language Settings" 
        subtitle="Configure and manage language settings"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">Language Settings configuration options will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
