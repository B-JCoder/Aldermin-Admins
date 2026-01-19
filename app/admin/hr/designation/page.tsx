"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { DesignationForm } from "@/components/modules/hr/DesignationForm";
import { DesignationList } from "@/components/modules/hr/DesignationList";
import { Button } from "@/components/ui/button";

export default function DesignationPage() {
  const [designationTitle, setDesignationTitle] = useState("");
  const [designationList, setDesignationList] = useState([
    { id: 1, title: "Principal" },
    { id: 2, title: "Assistant Professor" },
    { id: 3, title: "Accountant" },
    { id: 4, title: "Exam Controller" },
    { id: 5, title: "Librarian" },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (designationTitle.trim()) {
      const newDesig = {
        id: designationList.length + 1,
        title: designationTitle,
      };
      setDesignationList([...designationList, newDesig]);
      setDesignationTitle("");
    }
  };

  const handleDelete = (id: number) => {
    setDesignationList(designationList.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Institutional Roles"
        subtitle="Staff Hierarchy Management"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold uppercase text-[10px] tracking-widest shadow-lg shadow-secondary/10 transition-all">
            <FaPlus /> Authorize Role
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Creation Form */}
        <div className="lg:col-span-4 h-full">
          <DesignationForm
            designationTitle={designationTitle}
            setDesignationTitle={setDesignationTitle}
            onSubmit={handleSubmit}
          />
        </div>

        {/* List Index */}
        <div className="lg:col-span-8 h-full">
          <DesignationList
            designationList={designationList}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
