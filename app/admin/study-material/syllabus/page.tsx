"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { SyllabusForm } from "@/components/modules/study-material/SyllabusForm";
import { SyllabusList } from "@/components/modules/study-material/SyllabusList";
import { Button } from "@/components/ui/button";

export default function SyllabusPage() {
  const [syllabusList, setSyllabusList] = useState([
    {
      id: 1,
      title: "Annual Curriculum 2024",
      class: "Class 10",
      type: "Academic",
      date: "2024-01-15",
      file: "annual_curr_10.pdf",
    },
    {
      id: 2,
      title: "First Term Syllabus",
      class: "Class 9",
      type: "Academic",
      date: "2024-01-20",
      file: "term1_curr_9.pdf",
    },
  ]);

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Institutional Syllabus"
        subtitle="Curriculum Strategy"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold uppercase text-[10px] tracking-widest shadow-lg shadow-secondary/10 transition-all">
            <FaPlus /> Authorize Syllabus
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Creation Form */}
        <div className="lg:col-span-4 h-full">
          <SyllabusForm />
        </div>

        {/* List Index */}
        <div className="lg:col-span-8 h-full">
          <SyllabusList syllabusList={syllabusList} />
        </div>
      </div>
    </div>
  );
}
