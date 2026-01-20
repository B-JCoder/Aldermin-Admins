"use client";

import React, { useState } from "react";
import { IssueReturnFilter } from "@/components/modules/library/IssueReturnFilter";
import { IssueReturnList } from "@/components/modules/library/IssueReturnList";
import { PageHeader } from "@/components/common/PageHeader";

export default function IssueReturnPage() {
  const [memberStream, setMemberStream] = useState([
    {
      id: 1,
      name: "Julian Sterling",
      type: "Student",
      memberId: "LIB-STD-001",
      email: "julian.s@academy.edu",
      mobile: "+1 234 567 890",
    },
    {
      id: 2,
      name: "Prof. Vance",
      type: "Staff",
      memberId: "LIB-STF-015",
      email: "vance.p@academy.edu",
      mobile: "+1 234 567 891",
    },
  ]);

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Asset Circulation Matrix"
        subtitle="Manage Library Circulation"
      />

      <IssueReturnFilter />
      <IssueReturnList members={memberStream} />
    </div>
  );
}
