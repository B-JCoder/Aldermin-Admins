"use client";

import React, { useState, useEffect } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { MarkRegisterFilter } from "@/components/modules/examination/MarkRegisterFilter";
import { MarkRegisterList } from "@/components/modules/examination/MarkRegisterList";
import { apiService } from "@/lib/api-service";

interface MarkRegisterStudent {
  id: number;
  admissionNo: string;
  rollNo: string;
  className: string;
  name: string;
  marks: number;
  remarks: string;
  isPresent: boolean;
}

export default function MarkRegisterPage() {
  const [students, setStudents] = useState<MarkRegisterStudent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMarks = async () => {
      try {
        const data = (await apiService.examination.getMarksRegister()) as any[];
        const mappedData = data.map((s) => ({
          ...s,
          className: "10-A", // Default for now
        }));
        setStudents(mappedData);
      } catch (error) {
        console.error("Error fetching marks register:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMarks();
  }, []);

  const togglePresence = (id: number) => {
    setStudents(
      students.map((s) =>
        s.id === id
          ? { ...s, isPresent: !s.isPresent, marks: !s.isPresent ? s.marks : 0 }
          : s,
      ),
    );
  };

  return (
    <div className="container mx-auto space-y-8 pb-32">
      <PageHeader
        title="Evaluative Ledger"
        subtitle="Official Academic Mark Entry Registry"
      />

      <MarkRegisterFilter />

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div>
        </div>
      ) : (
        <MarkRegisterList students={students} togglePresence={togglePresence} />
      )}
    </div>
  );
}
