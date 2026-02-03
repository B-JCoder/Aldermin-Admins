"use client";

import React, { useState, useEffect } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AssignTeacherForm } from "@/components/modules/academics/AssignTeacherForm";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import { DataTable } from "@/components/common/DataTable";
import { apiService } from "@/lib/api-service";
import { ListActionButtons } from "@/components/common/ListActionButtons";

interface AssignedTeacher {
  id: number;
  class: string;
  section: string;
  teacher: string;
}

export default function AssignClassTeacherPage() {
  const [assignedTeachers, setAssignedTeachers] = useState<AssignedTeacher[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState(true);
  const [options, setOptions] = useState({
    classes: [] as string[],
    sections: [] as string[],
    teachers: [] as string[],
  });

  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [assignments, classes, sections, staff] = await Promise.all([
          apiService.academics.getTeacherAssignments(),
          apiService.academics.getClasses(),
          apiService.academics.getSections(),
          apiService.hr.getStaff(),
        ]);
        setAssignedTeachers(assignments as AssignedTeacher[]);
        setOptions({
          classes: classes as string[],
          sections: sections as string[],
          teachers: (staff as any[]).map((s) => s.name),
        });
      } catch (error) {
        console.error("Error fetching assignments:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedClass || !selectedSection || !selectedTeacher) return;

    setAssignedTeachers([
      ...assignedTeachers,
      {
        id: Math.random(),
        class: selectedClass,
        section: selectedSection,
        teacher: selectedTeacher,
      },
    ]);

    // Reset form
    setSelectedClass("");
    setSelectedSection("");
    setSelectedTeacher("");
  };

  const columns = [
    {
      header: "Institutional Class",
      accessor: "class" as keyof AssignedTeacher,
      className: "font-semibold text-foreground",
    },
    {
      header: "Logical Section",
      accessor: "section" as keyof AssignedTeacher,
      className: "font-bold text-secondary",
    },
    {
      header: "Faculty In-Charge",
      accessor: "teacher" as keyof AssignedTeacher,
      className: "italic text-gray-500",
    },
    {
      header: "Action",
      accessor: (item: AssignedTeacher) => (
        <ListActionButtons
          onEdit={() => console.log("Edit", item.id)}
          onDelete={() =>
            setAssignedTeachers(
              assignedTeachers.filter((t) => t.id !== item.id),
            )
          }
        />
      ),
      className: "text-right",
      headerClassName: "text-right",
    },
  ];

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Class Teacher Allocation"
        subtitle="Academics Management"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold text-[10px] shadow-lg shadow-secondary/10 transition-all">
            <FaPlus /> Assign Teacher
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* FORM */}
        <div className="lg:col-span-4 h-full sticky top-8">
          <AssignTeacherForm
            selectedClass={selectedClass}
            setSelectedClass={setSelectedClass}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
            selectedTeacher={selectedTeacher}
            setSelectedTeacher={setSelectedTeacher}
            handleSubmit={handleSubmit}
            classes={options.classes}
            sections={options.sections}
            teachers={options.teachers}
          />
        </div>

        {/* TABLE */}
        <div className="lg:col-span-8 h-full">
          <DataTable
            data={assignedTeachers}
            columns={columns}
            searchKey="teacher"
            searchPlaceholder="Filter by teacher..."
            title="Institutional Faculty Matrix"
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
