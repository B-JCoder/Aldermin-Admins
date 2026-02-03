"use client";

import React, { useState, useEffect } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AssignSubjectForm } from "@/components/modules/academics/AssignSubjectForm";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import { DataTable } from "@/components/common/DataTable";
import { apiService } from "@/lib/api-service";
import { ListActionButtons } from "@/components/common/ListActionButtons";

interface AssignedSubject {
  id: number;
  subject: string;
  section: string;
  teacher: string;
}

export default function AssignSubjectPage() {
  const [assignedSubjects, setAssignedSubjects] = useState<AssignedSubject[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState(true);
  const [options, setOptions] = useState({
    subjects: [] as string[],
    sections: [] as string[],
    teachers: [] as string[],
  });

  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [assignments, subjects, sections, staff] = await Promise.all([
          apiService.academics.getSubjectAssignments(),
          apiService.academics.getSubjects(),
          apiService.academics.getSections(),
          apiService.hr.getStaff(),
        ]);
        setAssignedSubjects(assignments as AssignedSubject[]);
        setOptions({
          subjects: (subjects as any[]).map((s) => s.name),
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
    if (!selectedSubject || !selectedSection || !selectedTeacher) return;

    setAssignedSubjects([
      ...assignedSubjects,
      {
        id: Math.random(),
        subject: selectedSubject,
        section: selectedSection,
        teacher: selectedTeacher,
      },
    ]);

    // Reset form
    setSelectedSubject("");
    setSelectedSection("");
    setSelectedTeacher("");
  };

  const columns = [
    {
      header: "Syllabus Component",
      accessor: "subject" as keyof AssignedSubject,
      className: "font-semibold text-foreground",
    },
    {
      header: "Logical Section",
      accessor: "section" as keyof AssignedSubject,
      className: "font-bold text-secondary",
    },
    {
      header: "Lead Instructor",
      accessor: "teacher" as keyof AssignedSubject,
      className: "italic text-gray-500",
    },
    {
      header: "Action",
      accessor: (item: AssignedSubject) => (
        <ListActionButtons
          onEdit={() => console.log("Edit", item.id)}
          onDelete={() =>
            setAssignedSubjects(
              assignedSubjects.filter((s) => s.id !== item.id),
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
        title="Subject Allocation"
        subtitle="Academics Management"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold text-[10px] shadow-lg shadow-secondary/10 transition-all">
            <FaPlus /> Assign Subject
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* FORM */}
        <div className="lg:col-span-4 h-full sticky top-8">
          <AssignSubjectForm
            selectedSubject={selectedSubject}
            setSelectedSubject={setSelectedSubject}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
            selectedTeacher={selectedTeacher}
            setSelectedTeacher={setSelectedTeacher}
            handleSubmit={handleSubmit}
            subjects={options.subjects}
            sections={options.sections}
            teachers={options.teachers}
          />
        </div>

        {/* TABLE */}
        <div className="lg:col-span-8 h-full">
          <DataTable
            data={assignedSubjects}
            columns={columns}
            searchKey="subject"
            searchPlaceholder="Filter by subject..."
            title="Syllabus Deployment Matrix"
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
