"use client";

import React, { useState, useEffect } from "react";
import { FaCalendarCheck, FaSave } from "react-icons/fa";
import { PersistenceFilter } from "@/components/modules/student-info/PersistenceFilter";
import { AttendanceTable } from "@/components/modules/student-info/AttendanceTable";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { apiService } from "@/lib/api-service";

interface StudentAttendance {
  id: number;
  admissionNo: string;
  name: string;
  rollNo: string;
  status: string;
  note: string;
}

export default function StudentAttendancePage() {
  const [attendanceDate, setAttendanceDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [students, setStudents] = useState<StudentAttendance[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      setIsLoading(true);
      try {
        const data = (await apiService.students.getAll()) as any[];
        const mappedData = data.map((s, idx) => ({
          id: s.id,
          admissionNo: s.admissionNo,
          name: s.name,
          rollNo: (idx + 1).toString(),
          status: "Present",
          note: "",
        }));
        setStudents(mappedData);
      } catch (error) {
        console.error("Error fetching students for attendance:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStudents();
  }, []);

  const toggleStatus = (id: number, nextStatus: string) => {
    setStudents(
      students.map((s) => (s.id === id ? { ...s, status: nextStatus } : s)),
    );
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await new Promise((r) => setTimeout(r, 1000));
      alert("Attendance committed to ledger successfully!");
    } finally {
      setIsSaving(false);
    }
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
                <span className="text-[10px] font-semibold text-gray-500">
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

      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-secondary"></div>
        </div>
      ) : (
        <AttendanceTable students={students} toggleStatus={toggleStatus} />
      )}

      <div className="flex justify-center pb-12">
        <Button
          variant="secondary"
          onClick={handleSave}
          disabled={isSaving || isLoading}
          className="px-12 py-6 rounded-2xl text-sm font-semibold tracking-[0.3em] shadow-xl hover:scale-105 transition-transform"
        >
          {isSaving ? (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
          ) : (
            <FaSave size={18} className="mr-2" />
          )}
          {isSaving ? "COMMITING..." : "COMMIT TO LEDGER"}
        </Button>
      </div>
    </div>
  );
}
