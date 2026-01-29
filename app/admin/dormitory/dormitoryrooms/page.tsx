"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function DormitoryRoomsPage() {
  return (
    <div className="container mx-auto max-w-7xl space-y-6">
      <PageHeader title="Dormitory Rooms" subtitle="Manage dormitory rooms" />
      <AdminCard>
        <div className="text-gray-500 text-center py-10">
          Dormitory Rooms Module Content
        </div>
      </AdminCard>
    </div>
  );
}
