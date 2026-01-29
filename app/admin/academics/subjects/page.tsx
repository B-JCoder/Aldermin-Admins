"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { SubjectForm } from "@/components/modules/academics/SubjectForm";
import { SubjectList } from "@/components/modules/academics/SubjectList";
import { Button } from "@/components/ui/button";

type Subject = {
  name: string;
  code: string;
  type: "Theory" | "Practical";
};

export default function SubjectPage() {
  const [subjects, setSubjects] = useState<Subject[]>([
    { name: "Mathematics", code: "MATH101", type: "Theory" },
    { name: "Physics Lab", code: "PHYS101L", type: "Practical" },
  ]);
  const [form, setForm] = useState<Subject>({
    name: "",
    code: "",
    type: "Theory",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name) return;
    setSubjects([...subjects, form]);
    setForm({ name: "", code: "", type: "Theory" });
  };

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Knowledge Inventory"
        subtitle="Syllabus Management"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold  text-[10px]  shadow-lg shadow-secondary/10 transition-all">
            <FaPlus /> Authorize Subject
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Creation Form */}
        <div className="lg:col-span-4 h-full">
          <SubjectForm form={form} setForm={setForm} onSubmit={handleSubmit} />
        </div>

        {/* List Index */}
        <div className="lg:col-span-8 h-full">
          <SubjectList subjects={subjects} />
        </div>
      </div>
    </div>
  );
}
