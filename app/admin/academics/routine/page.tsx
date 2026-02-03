"use client";

import React, { useState, useEffect } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { RoutineForm } from "@/components/modules/academics/RoutineForm";
import { Button } from "@/components/ui/button";
import { FaPlus, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { DataTable } from "@/components/common/DataTable";
import { apiService } from "@/lib/api-service";
import { ListActionButtons } from "@/components/common/ListActionButtons";

interface Routine {
  id: number;
  class: string;
  section: string;
  day: string;
  startTime: string;
  endTime: string;
  subject: string;
  teacher: string;
  room: string;
}

export default function ClassRoutinePage() {
  const [routines, setRoutines] = useState<Routine[]>([]);
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    const fetchRoutines = async () => {
      try {
        const data = (await apiService.academics.getRoutines()) as Routine[];
        setRoutines(data);
      } catch (error) {
        console.error("Error fetching routines:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRoutines();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.class || !formData.day || !formData.subject) return;

    setRoutines([
      ...routines,
      {
        id: Math.random(),
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

  const columns = [
    {
      header: "Deployment Vector",
      accessor: (item: Routine) => (
        <div>
          <div className="font-bold text-foreground text-sm leading-none mb-1">
            {item.class} - {item.section}
          </div>
          <div className="text-[9px] text-secondary font-bold uppercase tracking-widest">
            {item.day}
          </div>
        </div>
      ),
    },
    {
      header: "Temporal Window",
      accessor: (item: Routine) => (
        <div className="flex items-center gap-2 text-gray-500 font-mono text-xs">
          <FaClock size={10} className="text-secondary" />
          {item.startTime} - {item.endTime}
        </div>
      ),
    },
    {
      header: "Syllabus Component",
      accessor: (item: Routine) => (
        <div>
          <div className="font-semibold text-foreground text-sm">
            {item.subject}
          </div>
          <div className="text-[9px] text-gray-400 font-bold">
            {item.teacher}
          </div>
        </div>
      ),
    },
    {
      header: "Spatial Resource",
      accessor: (item: Routine) => (
        <div className="flex items-center gap-2 text-secondary font-bold text-xs">
          <FaMapMarkerAlt size={10} />
          Room {item.room}
        </div>
      ),
    },
    {
      header: "Action",
      accessor: (item: Routine) => (
        <ListActionButtons
          onEdit={() => console.log("Edit", item.id)}
          onDelete={() => setRoutines(routines.filter((r) => r.id !== item.id))}
        />
      ),
      className: "text-right",
      headerClassName: "text-right",
    },
  ];

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Routine Management"
        subtitle="Scheduling"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold text-[10px] shadow-lg shadow-secondary/10 transition-all">
            <FaPlus /> Add Routine
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Creation Form */}
        <div className="lg:col-span-4 h-full sticky top-8">
          <RoutineForm
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
          />
        </div>

        {/* List Index */}
        <div className="lg:col-span-8 h-full">
          <DataTable
            data={routines}
            columns={columns}
            searchKey="class"
            searchPlaceholder="Search by class..."
            title="Institutional Operational Schedule"
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
