"use client";

import React from "react";
import { FaCogs } from "react-icons/fa";
import { EvaluationSettings } from "@/components/modules/teacher-evaluation/EvaluationSettings";

import { PageHeader } from "@/components/common/PageHeader";

export default function TeacherEvaluationSettingsPage() {
  return (
    <div className="container mx-auto space-y-8">
      <PageHeader title="Evaluation Protocols" icon={<FaCogs size={24} />} />

      <EvaluationSettings />
    </div>
  );
}
