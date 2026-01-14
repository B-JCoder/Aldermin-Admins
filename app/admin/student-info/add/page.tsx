"use client";

import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { StudentOnboarding } from "@/components/modules/student-info/StudentOnboarding";
import { PageHeader } from "@/components/common/PageHeader";

export default function AddStudentPage() {
  return (
    <div className="container mx-auto space-y-8 pb-32">
      <PageHeader
        title="Onboard New Student"
        subtitle="Student Information System (SIS)"
        icon={<FaUserPlus size={24} />}
      />

      <StudentOnboarding />
    </div>
  );
}
