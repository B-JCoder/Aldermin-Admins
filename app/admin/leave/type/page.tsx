"use client";

import React, { useState } from "react";
import { FaTag } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { LeaveTypeForm } from "@/components/modules/leave/LeaveTypeForm";
import {
  LeaveTypeList,
  LeaveType,
} from "@/components/modules/leave/LeaveTypeList";

export default function LeaveTypePage() {
  const [types, setTypes] = useState<LeaveType[]>([
    {
      id: 1,
      name: "Sick Leave",
      code: "SL",
      description: "Medical reasons with certificate",
    },
    {
      id: 2,
      name: "Casual Leave",
      code: "CL",
      description: "Personal matters",
    },
    {
      id: 3,
      name: "Earned Leave",
      code: "EL",
      description: "Accrued vacation days",
    },
  ]);

  return (
    <div className="container mx-auto space-y-8 pb-20">
      <PageHeader
        title="Leave Classifications"
        subtitle="Manage Leave Types and Codes"
        icon={<FaTag size={24} />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[600px]">
        <div className="lg:col-span-4 h-full">
          <LeaveTypeForm />
        </div>

        <div className="lg:col-span-8 h-full">
          <LeaveTypeList types={types} />
        </div>
      </div>
    </div>
  );
}
