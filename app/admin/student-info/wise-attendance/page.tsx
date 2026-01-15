"use client";

import React, { useState } from "react";
import { FaUserTag } from "react-icons/fa";
import { CourseContextFilter } from "@/components/modules/student-info/CourseContextFilter";
import { WiseAttendanceTable } from "@/components/modules/student-info/WiseAttendanceTable";
import { PageHeader } from "@/components/common/PageHeader";

export default function StudentWiseAttendancePage() {
  const [attendanceDate, setAttendanceDate] = useState("2023-12-15");
  const [students, setStudents] = useState([
    {
      id: 1,
      admissionNo: "ADM-2023-001",
      name: "Avery Sterling",
      rollNo: "10",
      status: "Present",
      note: "Participated in class discussion",
    },
    {
      id: 2,
      admissionNo: "ADM-2023-042",
      name: "Elara Vance",
      rollNo: "15",
      status: "Late",
      note: "Bus delayed",
    },
  ]);

  const toggleStatus = (id: number, nextStatus: string) => {
    setStudents(
      students.map((s) => (s.id === id ? { ...s, status: nextStatus } : s))
    );
  };

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Subject Specific Attendance"
        subtitle="Course-level Presence Tracking"
        icon={<FaUserTag size={28} />}
        action={
          <div className="flex bg-white/50 p-2 rounded-2xl ring-1 ring-white/60 flex-wrap gap-2 backdrop-blur-sm">
            {["Present", "Late", "Absent"].map((stat) => (
              <div
                key={stat}
                className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg shadow-sm border border-white/50"
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    stat === "Present"
                      ? "bg-emerald-500"
                      : stat === "Late"
                      ? "bg-amber-500"
                      : "bg-rose-500"
                  }`}
                ></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  {stat}
                </span>
              </div>
            ))}
          </div>
        }
      />

      <CourseContextFilter
        attendanceDate={attendanceDate}
        setAttendanceDate={setAttendanceDate}
      />

      <WiseAttendanceTable students={students} toggleStatus={toggleStatus} />
    </div>
  );
}
