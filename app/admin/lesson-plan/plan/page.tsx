"use client";

import { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { LessonPlanFilter } from "@/components/modules/lesson-plan/LessonPlanFilter";
import { LessonPlanList } from "@/components/modules/lesson-plan/LessonPlanList";
import { Button } from "@/components/ui/button";
import { FaCalendarCheck } from "react-icons/fa";

export default function LessonPlanPage() {
  const [plans, setPlans] = useState([
    {
      id: 1,
      teacher: "Marcus Aurelius",
      className: "Class 10-A",
      subject: "Mathematics",
      lesson: "Quadratic Equations",
      topic: "Factoring Methods",
      date: "2023-12-15",
      status: "Completed",
    },
    {
      id: 2,
      teacher: "Marcus Aurelius",
      className: "Class 10-A",
      subject: "Mathematics",
      lesson: "Quadratic Equations",
      topic: "Discriminant Analysis",
      date: "2023-12-16",
      status: "Scheduled",
    },
  ]);

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Instructional Delivery Plan"
        subtitle="Curriculum Execution"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold  text-[10px]  shadow-lg shadow-secondary/10 transition-all">
            <FaCalendarCheck /> Schedule Lesson
          </Button>
        }
      />

      <div className="space-y-8">
        {/* Filter Row */}
        <LessonPlanFilter />

        {/* Plans Table */}
        <LessonPlanList plans={plans} />
      </div>
    </div>
  );
}
