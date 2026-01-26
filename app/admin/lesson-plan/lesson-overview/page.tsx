"use client";

import { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { LessonOverviewConfig } from "@/components/modules/lesson-plan/LessonOverviewConfig";
import { LessonOverviewList } from "@/components/modules/lesson-plan/LessonOverviewList";
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa";

export default function LessonOverviewPage() {
  const [formData, setFormData] = useState({
    teacher: "",
    className: "",
    section: "",
    subject: "",
  });

  const [overviews, setOverviews] = useState([
    {
      id: 1,
      lesson: "Quadratic Equations",
      topic: "Factoring Methods",
      subjectTopic: "Algebraic Reasoning",
      completedDate: "2023-11-20",
      upcomingDate: "-",
      status: "Verified",
    },
    {
      id: 2,
      lesson: "Laws of Motion",
      topic: "Newton's First Law",
      subjectTopic: "Classical Mechanics",
      completedDate: "-",
      upcomingDate: "2023-12-20",
      status: "In Progress",
    },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Academic Delivery Audit"
        subtitle="Progress Tracking"
        action={
          <Button variant="outline" className="gap-2">
            <FaDownload /> Export Report
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Creation Form */}
        <div className="lg:col-span-4 h-full">
          <LessonOverviewConfig
            formData={formData}
            handleInputChange={handleInputChange}
          />
        </div>

        {/* Audit Table */}
        <div className="lg:col-span-8 h-full">
          <LessonOverviewList overviews={overviews} />
        </div>
      </div>
    </div>
  );
}
