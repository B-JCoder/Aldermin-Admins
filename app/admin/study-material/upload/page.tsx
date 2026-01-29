"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { ContentForm } from "@/components/modules/study-material/ContentForm";
import { ContentList } from "@/components/modules/study-material/ContentList";
import { Button } from "@/components/ui/button";

export default function UploadContentPage() {
  const [contentList, setContentList] = useState([
    {
      id: 1,
      title: "Algebra II Study Guide",
      type: "Assignment",
      availableFor: "Class 10 - Section A",
      date: "2024-03-25",
      file: "algebra_guide.pdf",
    },
    {
      id: 2,
      title: "Biology Lab Safety",
      type: "Syllabus",
      availableFor: "All Classes",
      date: "2024-03-20",
      file: "safety_protocols.docx",
    },
  ]);

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Asset Repository"
        subtitle="Digital Media Management"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold  text-[10px]  shadow-lg shadow-secondary/10 transition-all">
            <FaPlus /> Authorize Asset
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Upload Form */}
        <div className="lg:col-span-4 h-full">
          <ContentForm />
        </div>

        {/* Content List */}
        <div className="lg:col-span-8 h-full">
          <ContentList contentList={contentList} />
        </div>
      </div>
    </div>
  );
}
