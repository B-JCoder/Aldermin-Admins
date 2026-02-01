"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function WeekendPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Weekend" 
        subtitle="Configure and manage weekend"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">Weekend configuration options will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
