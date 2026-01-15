"use client";

import React from "react";
import { FaCogs } from "react-icons/fa";
import { EvaluationSettings } from "@/components/modules/teacher-evaluation/EvaluationSettings";

export default function TeacherEvaluationSettingsPage() {
  return (
    <div className="container mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black text-foreground tracking-tighter flex items-center gap-3">
          <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center shadow-2xl shadow-gray-400 rotate-1">
            <FaCogs className="text-white -rotate-1" size={24} />
          </div>
          Evaluation Protocols
        </h1>
      </div>

      <EvaluationSettings />
    </div>
  );
}
