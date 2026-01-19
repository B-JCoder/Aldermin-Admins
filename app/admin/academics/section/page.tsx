"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { SectionForm } from "@/components/modules/academics/SectionForm";
import { SectionList } from "@/components/modules/academics/SectionList";
import { Button } from "@/components/ui/button";

export default function SectionPage() {
  const [sections, setSections] = useState<string[]>([
    "Section Alpha",
    "Section Beta",
  ]);
  const [sectionName, setSectionName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sectionName) return;
    setSections([...sections, sectionName]);
    setSectionName("");
  };

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Institutional Sections"
        subtitle="Academic Management"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold uppercase text-[10px] tracking-widest shadow-lg shadow-secondary/10">
            <FaPlus /> Authorize Section
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Creation Form */}
        <div className="lg:col-span-4 h-full">
          <SectionForm
            sectionName={sectionName}
            setSectionName={setSectionName}
            onSubmit={handleSubmit}
          />
        </div>

        {/* List Index */}
        <div className="lg:col-span-8 h-full">
          <SectionList sections={sections} />
        </div>
      </div>
    </div>
  );
}
