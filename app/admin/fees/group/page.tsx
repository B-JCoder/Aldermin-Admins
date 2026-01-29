"use client";

import React, { useState } from "react";
import { FaFolderOpen, FaPlus } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { FeeGroupForm } from "@/components/modules/fees/FeeGroupForm";
import { FeeGroupList } from "@/components/modules/fees/FeeGroupList";
import { Button } from "@/components/ui/button";

export default function FeeGroupPage() {
  const [formData, setFormData] = useState({
    groupName: "",
    description: "",
  });

  const [groupList, setGroupList] = useState([
    {
      id: 1,
      group: "General Fees",
      description: "Standard fees applicable to all students.",
    },
    {
      id: 2,
      group: "Academic Fees",
      description: "Fees related to course materials and labs.",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.groupName) return;

    setGroupList([
      ...groupList,
      {
        id: groupList.length + 1,
        group: formData.groupName,
        description: formData.description,
      },
    ]);
    setFormData({ groupName: "", description: "" });
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this fee group?")) {
      setGroupList((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Fee Group Organization"
        subtitle="Categorize Fee Structures"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold  text-[10px]  shadow-lg shadow-secondary/10 transition-all">
            <FaPlus /> New Group
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Section */}
        <div className="lg:col-span-4 h-full sticky top-8">
          <FeeGroupForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
          />
        </div>

        {/* List Section */}
        <div className="lg:col-span-8 h-full">
          <FeeGroupList groups={groupList} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}
