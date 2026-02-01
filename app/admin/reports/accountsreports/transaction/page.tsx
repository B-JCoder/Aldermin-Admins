"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function TransactionPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Transaction" 
        subtitle="View and manage transaction"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">Transaction details and data will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
