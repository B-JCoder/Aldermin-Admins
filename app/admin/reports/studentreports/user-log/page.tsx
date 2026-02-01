"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function UserLogPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="User Log" 
        subtitle="View and manage user log"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">User Log details and data will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
