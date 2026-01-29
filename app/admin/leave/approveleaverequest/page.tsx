"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function ApproveLeavePage() {
  return (
    <div className="container mx-auto max-w-7xl space-y-6">
      <PageHeader
        title="Approve Leave Requests"
        subtitle="Manage teacher and staff leave requests"
      />
      <AdminCard>
        <div className="text-gray-500 text-center py-10">
          Leave Approval Module Content
        </div>
      </AdminCard>
    </div>
  );
}
