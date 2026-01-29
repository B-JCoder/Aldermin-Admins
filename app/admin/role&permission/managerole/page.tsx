"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function ManageRolePage() {
  return (
    <div className="container mx-auto max-w-7xl space-y-6">
      <PageHeader title="Manage Roles" subtitle="Define and assign roles" />
      <AdminCard>
        <div className="text-gray-500 text-center py-10">
          Role Management Module Content
        </div>
      </AdminCard>
    </div>
  );
}
