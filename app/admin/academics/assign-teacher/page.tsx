"use client";

import { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AssignTeacherForm } from "@/components/modules/academics/AssignTeacherForm";
import { AssignTeacherList } from "@/components/modules/academics/AssignTeacherList";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";

const classes = ["Class 1", "Class 2", "Class 3"];
const sections = ["A", "B", "C"];
const teachers = ["John Doe", "Sarah Smith", "Michael Lee"];

export default function AssignClassTeacherPage() {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");

  const [assignedTeachers, setAssignedTeachers] = useState([
    {
      id: 1,
      class: "Class 1",
      section: "A",
      teacher: "John Doe",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedClass || !selectedSection || !selectedTeacher) return;

    setAssignedTeachers([
      ...assignedTeachers,
      {
        id: assignedTeachers.length + 1,
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

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this record?")) {
      setAssignedTeachers(assignedTeachers.filter((t) => t.id !== id));
    }
  };

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Class Teacher Allocation"
        subtitle="Academics Management"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold uppercase text-[10px] tracking-widest shadow-lg shadow-secondary/10 transition-all">
            <FaPlus /> Assign Teacher
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* FORM */}
        <div className="lg:col-span-4 h-full">
          <AssignTeacherForm
            selectedClass={selectedClass}
            setSelectedClass={setSelectedClass}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
            selectedTeacher={selectedTeacher}
            setSelectedTeacher={setSelectedTeacher}
            handleSubmit={handleSubmit}
            classes={classes}
            sections={sections}
            teachers={teachers}
          />
        </div>

        {/* TABLE */}
        <div className="lg:col-span-8 h-full">
          <AssignTeacherList
            assignedTeachers={assignedTeachers}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
