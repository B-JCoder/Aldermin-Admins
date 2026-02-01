"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function FeesInvoiceSettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Fees Invoice Settings"
        subtitle="Configure fees invoice settings"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">
            Fees Invoice configuration options will be displayed here.
          </p>
        </div>
      </AdminCard>
    </div>
  );
}
