"use client";

import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";

export default function LessonPlanSettingPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Lesson Plan Setting" 
        subtitle="Configure and manage lesson plan setting"
      />
      <AdminCard>
        <div className="p-6">
          <p className="text-gray-500">Lesson Plan Setting configuration options will be displayed here.</p>
        </div>
      </AdminCard>
    </div>
  );
}
