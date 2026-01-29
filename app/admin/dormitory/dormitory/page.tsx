"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function DormitoryPage() {
  return (
    <div className="container mx-auto max-w-7xl space-y-6">
      <PageHeader title="Dormitory List" subtitle="Manage dormitories" />
      <AdminCard>
        <div className="text-gray-500 text-center py-10">
          Dormitory Module Content
        </div>
      </AdminCard>
    </div>
  );
}
