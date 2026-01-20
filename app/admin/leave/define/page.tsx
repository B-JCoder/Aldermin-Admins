"use client";

import React, { useState } from "react";
import { FaSlidersH } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { LeaveEntitlementForm } from "@/components/modules/leave/LeaveEntitlementForm";
import {
  LeaveEntitlementList,
  LeaveEntitlement,
} from "@/components/modules/leave/LeaveEntitlementList";

export default function DefineLeavePage() {
  const [entitlements, setEntitlements] = useState<LeaveEntitlement[]>([
    {
      id: 1,
      role: "Teacher",
      leaveType: "Sick Leave",
      days: 10,
    },
    {
      id: 2,
      role: "Teacher",
      leaveType: "Casual Leave",
      days: 8,
    },
    {
      id: 3,
      role: "Admin Staff",
      leaveType: "Sick Leave",
      days: 12,
    },
  ]);

  return (
    <div className="container mx-auto space-y-8 pb-20">
      <PageHeader
        title="Leave Entitlements"
        subtitle="Define Leave Quotas for Roles"
        icon={<FaSlidersH size={24} />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[600px]">
        <div className="lg:col-span-4 h-full">
          <LeaveEntitlementForm />
        </div>

        <div className="lg:col-span-8 h-full">
          <LeaveEntitlementList entitlements={entitlements} />
        </div>
      </div>
    </div>
  );
}
