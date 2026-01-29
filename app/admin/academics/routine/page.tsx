"use client";

import { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { RoutineForm } from "@/components/modules/academics/RoutineForm";
import { RoutineList } from "@/components/modules/academics/RoutineList";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";

export default function ClassRoutinePage() {
  const [routines, setRoutines] = useState([
    {
      id: 1,
      class: "Class 5",
      section: "A",
      day: "Monday",
      startTime: "08:00",
      endTime: "08:40",
      subject: "Math",
      teacher: "Sir Ahmed",
      room: "101",
    },
  ]);

  const [formData, setFormData] = useState({
    class: "",
    section: "",
    day: "",
    startTime: "",
    endTime: "",
    subject: "",
    teacher: "",
    room: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.class || !formData.day || !formData.subject) return;

    setRoutines([
      ...routines,
      {
        id: routines.length + 1,
        ...formData,
      },
    ]);

    // Reset minimal
    setFormData({
      class: "",
      section: "",
      day: "",
      startTime: "",
      endTime: "",
      subject: "",
      teacher: "",
      room: "",
    });
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this routine?")) {
      setRoutines(routines.filter((r) => r.id !== id));
    }
  };

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Routine Management"
        subtitle="Scheduling"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold  text-[10px]  shadow-lg shadow-secondary/10 transition-all">
            <FaPlus /> Add Routine
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Creation Form */}
        <div className="lg:col-span-4 h-full">
          <RoutineForm
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
          />
        </div>

        {/* List Index */}
        <div className="lg:col-span-8 h-full">
          <RoutineList routines={routines} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}
