"use client";

import React, { useState } from "react";
import { FaCalendarCheck, FaSave } from "react-icons/fa";
import { PersistenceFilter } from "@/components/modules/student-info/PersistenceFilter";
import { AttendanceTable } from "@/components/modules/student-info/AttendanceTable";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";

export default function StudentAttendancePage() {
  const [attendanceDate, setAttendanceDate] = useState("2023-12-15");
  const [students, setStudents] = useState([
    {
      id: 1,
      admissionNo: "ADM-2023-001",
      name: "Avery Sterling",
      rollNo: "10",
      status: "Present",
      note: "",
    },
    {
      id: 2,
      admissionNo: "ADM-2023-042",
      name: "Elara Vance",
      rollNo: "15",
      status: "Absent",
      note: "Medical leave",
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
        title="Attendance Ledger"
        subtitle="Monitor Daily Student Presence"
        icon={<FaCalendarCheck size={28} />}
        action={
          <div className="flex bg-white p-2 rounded-2xl ring-1 ring-white/60 flex-wrap gap-2 backdrop-blur-sm">
            {["Present", "Late", "Absent", "Half Day"].map((stat) => (
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
                      : stat === "Absent"
                      ? "bg-rose-500"
                      : "bg-indigo-500"
                  }`}
                ></div>
                <span className="text-[10px] font-semibold   text-gray-500">
                  {stat}
                </span>
              </div>
            ))}
          </div>
        }
      />

      <PersistenceFilter
        attendanceDate={attendanceDate}
        setAttendanceDate={setAttendanceDate}
      />

      <AttendanceTable students={students} toggleStatus={toggleStatus} />

      <div className="flex justify-center pb-12">
        <Button
          variant="secondary"
          className="px-12 py-6 rounded-2xl text-sm font-semibold  tracking-[0.3em] shadow-xl hover:scale-105 transition-transform"
        >
          <FaSave size={18} className="mr-2" />
          Commit To Ledger
        </Button>
      </div>
    </div>
  );
}
