"use client";

import React, { useState, useEffect } from "react";
import { MemberForm } from "@/components/modules/library/MemberForm";
import { PageHeader } from "@/components/common/PageHeader";
import { DataTable } from "@/components/common/DataTable";
import { apiService } from "@/lib/api-service";
import { ListActionButtons } from "@/components/common/ListActionButtons";
import { Badge } from "@/components/ui/badge";

interface Member {
  id: number;
  name: string;
  type: string;
  memberId: string;
  email: string;
  mobile: string;
}

export default function LibraryMembersPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        // Since apiService doesn't have getMembers yet, we'll mock it here
        // in a real app, we'd add it to apiService
        await new Promise((r) => setTimeout(r, 600));
        setMembers([
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
      } catch (error) {
        console.error("Error fetching members:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMembers();
  }, []);

  const columns = [
    {
      header: "Member Name",
      accessor: "name" as keyof Member,
      className: "font-semibold text-foreground",
    },
    {
      header: "Category",
      accessor: (item: Member) => (
        <Badge variant={item.type === "Student" ? "secondary" : "default"}>
          {item.type}
        </Badge>
      ),
    },
    {
      header: "Member ID",
      accessor: "memberId" as keyof Member,
      className: "text-secondary font-bold",
    },
    {
      header: "Email",
      accessor: "email" as keyof Member,
    },
    {
      header: "Mobile",
      accessor: "mobile" as keyof Member,
    },
    {
      header: "Action",
      accessor: (item: Member) => (
        <ListActionButtons
          onEdit={() => console.log("Edit", item.id)}
          onDelete={() => setMembers(members.filter((m) => m.id !== item.id))}
        />
      ),
      className: "text-center",
      headerClassName: "text-center",
    },
  ];

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Institutional Membership Registry"
        subtitle="Manage Library Members"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
        <div className="lg:col-span-4 h-full sticky top-8">
          <MemberForm />
        </div>
        <div className="lg:col-span-8 h-full">
          <DataTable
            data={members}
            columns={columns}
            searchKey="name"
            searchPlaceholder="Search members..."
            title="Registered bibliophiles"
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
