"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { ExamScheduleFilter } from "@/components/modules/examination/ExamScheduleFilter";
import { ExamScheduleList } from "@/components/modules/examination/ExamScheduleList";

export default function ExamSchedulePage() {
  const [schedules, setSchedules] = useState([
    {
      id: 1,
      subject: "Theoretical Physics",
      date: "2024-05-15",
      day: "Wednesday",
      time: "09:00 AM - 12:00 PM",
      className: "Class 10-A",
      teacher: "Dr. Julian Sterling",
      duration: "3 Hours",
      room: "Hall B-101",
    },
    {
      id: 2,
      subject: "Advanced Mathematics",
      date: "2024-05-17",
      day: "Friday",
      time: "09:00 AM - 12:00 PM",
      className: "Class 10-A",
      teacher: "Prof. Silas Vance",
      duration: "3 Hours",
      room: "Hall B-102",
    },
  ]);

  return (
    <div className="container mx-auto space-y-8 pb-20">
      <PageHeader
        title="Examination Timetable"
        subtitle="Institutional Chronology of Assessment"
      />

      <ExamScheduleFilter />
      <ExamScheduleList schedules={schedules} />
    </div>
  );
}
