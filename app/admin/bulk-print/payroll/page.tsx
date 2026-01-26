"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { PayrollConfig } from "@/components/modules/bulk-print/PayrollConfig";
import { PayrollQueue } from "@/components/modules/bulk-print/PayrollQueue";

export default function BulkPayrollPrintPage() {
  const [payrolls, setPayrolls] = useState([
    {
      id: 1,
      staff: "Prof. Albus Dumbledore",
      designation: "Headmaster",
      month: "March 2024",
      netPay: "$5,000",
      status: "Generated",
    },
    {
      id: 2,
      staff: "Minerva McGonagall",
      designation: "Deputy Headmistress",
      month: "March 2024",
      netPay: "$4,200",
      status: "Generated",
    },
  ]);

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader title="Bulk Payroll Processor" subtitle="Salary Management" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 h-full">
          <PayrollConfig />
        </div>

        <div className="lg:col-span-8 h-full">
          <PayrollQueue payrolls={payrolls} />
        </div>
      </div>
    </div>
  );
}
