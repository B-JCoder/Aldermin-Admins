"use client";

import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { LeaveApplicationForm } from "@/components/modules/leave/LeaveApplicationForm";
import {
  LeaveHistoryList,
  LeaveHistory,
} from "@/components/modules/leave/LeaveHistoryList";

export default function ApplyLeavePage() {
  const [leaveHistory, setLeaveHistory] = useState<LeaveHistory[]>([
    {
      id: 1,
      type: "Sick Leave",
      from: "2024-03-01",
      to: "2024-03-03",
      days: 3,
      reason: "Viral Fever",
      status: "Approved",
    },
    {
      id: 2,
      type: "Casual Leave",
      from: "2024-03-15",
      to: "2024-03-15",
      days: 1,
      reason: "Personal Work",
      status: "Pending",
    },
  ]);

  return (
    <div className="container mx-auto space-y-8 pb-20">
      <PageHeader
        title="Leave Application Portal"
        icon={<FaPaperPlane size={24} />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[600px]">
        {/* Application Form */}
        <div className="lg:col-span-4 h-full">
          <LeaveApplicationForm />
        </div>

        {/* History List */}
        <div className="lg:col-span-8 h-full">
          <LeaveHistoryList history={leaveHistory} />
        </div>
      </div>
    </div>
  );
}
