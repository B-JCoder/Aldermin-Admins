"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { UserForm } from "@/components/modules/user/UserForm";
import { UserList } from "@/components/modules/user/UserList";

export default function UserManagementPage() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Admin User",
      email: "admin@school.com",
      role: "Super Admin",
      status: "Active",
      lastLogin: "2024-03-25 09:00 AM",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john.doe@school.com",
      role: "Teacher",
      status: "Active",
      lastLogin: "2024-03-24 02:15 PM",
    },
    {
      id: 3,
      name: "Jane Smith",
      email: "jane.smith@school.com",
      role: "Accountant",
      status: "Inactive",
      lastLogin: "2024-02-28 10:00 AM",
    },
  ]);

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="System User Control"
        subtitle="System Administration"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* User Creation */}
        <div className="lg:col-span-4 h-full">
          <UserForm />
        </div>

        {/* User List */}
        <div className="lg:col-span-8 h-full">
          <UserList users={users} />
        </div>
      </div>
    </div>
  );
}
