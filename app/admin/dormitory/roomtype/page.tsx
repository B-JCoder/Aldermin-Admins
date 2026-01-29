"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function RoomTypePage() {
  return (
    <div className="container mx-auto max-w-7xl space-y-6">
      <PageHeader title="Room Types" subtitle="Manage room types" />
      <AdminCard>
        <div className="text-gray-500 text-center py-10">
          Room Types Module Content
        </div>
      </AdminCard>
    </div>
  );
}
