"use client";

import React, { useState } from "react";
import { MemberForm } from "@/components/modules/library/MemberForm";
import { MemberList } from "@/components/modules/library/MemberList";
import { PageHeader } from "@/components/common/PageHeader";

export default function LibraryMembersPage() {
  const [members, setMembers] = useState([
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
        title="Institutional Membership Registry"
        subtitle="Manage Library Members"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
        <div className="lg:col-span-4 h-full">
          <MemberForm />
        </div>
        <div className="lg:col-span-8 h-full">
          <MemberList members={members} />
        </div>
      </div>
    </div>
  );
}
