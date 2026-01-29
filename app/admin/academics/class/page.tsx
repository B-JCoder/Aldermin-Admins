"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { ClassForm } from "@/components/modules/academics/ClassForm";
import { ClassList } from "@/components/modules/academics/ClassList";
import { Button } from "@/components/ui/button";

export default function ClassPage() {
  const [className, setClassName] = useState("");
  const [passingMarks, setPassingMarks] = useState("33");
  const [selectedSections, setSelectedSections] = useState<string[]>([]);

  const [classList, setClassList] = useState([
    {
      id: 1,
      name: "Class 1",
      passingMarks: 33,
      averageMarks: 65,
    },
    {
      id: 2,
      name: "Class 2",
      passingMarks: 40,
      averageMarks: 72,
    },
  ]);

  const toggleSection = (section: string) => {
    setSelectedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!className) return;
    setClassList([
      ...classList,
      {
        id: classList.length + 1,
        name: className,
        passingMarks: parseInt(passingMarks),
        averageMarks: 0,
      },
    ]);
    setClassName("");
    setSelectedSections([]);
  };

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Institutional Grades"
        subtitle="Academic Management"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold  text-[10px]  shadow-lg shadow-secondary/10 transition-all">
            <FaPlus /> Authorize Class
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Creation Form */}
        <div className="lg:col-span-4 h-full">
          <ClassForm
            className={className}
            setClassName={setClassName}
            passingMarks={passingMarks}
            setPassingMarks={setPassingMarks}
            selectedSections={selectedSections}
            toggleSection={toggleSection}
            onSubmit={handleSubmit}
          />
        </div>

        {/* List Index */}
        <div className="lg:col-span-8 h-full">
          <ClassList classList={classList} />
        </div>
      </div>
    </div>
  );
}
