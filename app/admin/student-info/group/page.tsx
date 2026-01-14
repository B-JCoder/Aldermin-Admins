"use client";

import React, { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { GroupForm } from "@/components/modules/student-info/GroupForm";
import { GroupList } from "@/components/modules/student-info/GroupList";
import { PageHeader } from "@/components/common/PageHeader";

export default function StudentGroupPage() {
  const [groups, setGroups] = useState([
    { id: 1, name: "Science Club", grade: "10-12", section: "A, B" },
    { id: 2, name: "Debate Team", grade: "8-12", section: "All" },
    { id: 3, name: "Athletics", grade: "All", section: "All" },
  ]);

  const handleAddGroup = (name: string) => {
    setGroups([
      ...groups,
      {
        id: groups.length + 1,
        name: name,
        grade: "All",
        section: "All",
      },
    ]);
  };

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader title="Social Assemblies" icon={<FaUsers size={20} />} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 h-full">
          <GroupForm onAddGroup={handleAddGroup} />
        </div>
        <div className="lg:col-span-8 h-full">
          <GroupList groups={groups} />
        </div>
      </div>
    </div>
  );
}
