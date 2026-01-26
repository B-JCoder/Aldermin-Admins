"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { FeesConfig } from "@/components/modules/bulk-print/FeesConfig";
import { FeesQueue } from "@/components/modules/bulk-print/FeesQueue";

export default function BulkFeesPrintPage() {
  const [receipts, setReceipts] = useState([
    {
      id: 1,
      student: "Alice Johnson",
      class: "Class 10",
      amount: "$1,200",
      date: "2024-03-25",
      status: "Paid",
    },
    {
      id: 2,
      student: "Bob Smith",
      class: "Class 10",
      amount: "$1,200",
      date: "2024-03-24",
      status: "Paid",
    },
  ]);

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Bulk Fee Receipt Printer"
        subtitle="Financial Batching"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 h-full">
          <FeesConfig />
        </div>

        <div className="lg:col-span-8 h-full">
          <FeesQueue receipts={receipts} />
        </div>
      </div>
    </div>
  );
}
