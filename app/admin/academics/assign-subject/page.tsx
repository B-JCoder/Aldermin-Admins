"use client";

import { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AssignSubjectForm } from "@/components/modules/academics/AssignSubjectForm";
import { AssignSubjectList } from "@/components/modules/academics/AssignSubjectList";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";

const subjects = ["Math", "English", "Science"];
const sections = ["A", "B", "C"];
const teachers = ["John Doe", "Sarah Smith", "Michael Lee"];

export default function AssignSubjectPage() {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");

  const [assignedSubjects, setAssignedSubjects] = useState([
    {
      id: 1,
      subject: "Math",
      section: "A",
      teacher: "John Doe",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSubject || !selectedSection || !selectedTeacher) return;

    setAssignedSubjects([
      ...assignedSubjects,
      {
        id: assignedSubjects.length + 1,
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

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this record?")) {
      setAssignedSubjects(assignedSubjects.filter((t) => t.id !== id));
    }
  };

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Subject Allocation"
        subtitle="Academics Management"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold uppercase text-[10px] tracking-widest shadow-lg shadow-secondary/10 transition-all">
            <FaPlus /> Assign Subject
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* FORM */}
        <div className="lg:col-span-4 h-full">
          <AssignSubjectForm
            selectedSubject={selectedSubject}
            setSelectedSubject={setSelectedSubject}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
            selectedTeacher={selectedTeacher}
            setSelectedTeacher={setSelectedTeacher}
            handleSubmit={handleSubmit}
            subjects={subjects}
            sections={sections}
            teachers={teachers}
          />
        </div>

        {/* TABLE */}
        <div className="lg:col-span-8 h-full">
          <AssignSubjectList
            assignedSubjects={assignedSubjects}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
