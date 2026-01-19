"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { DepartmentForm } from "@/components/modules/hr/DepartmentForm";
import { DepartmentList } from "@/components/modules/hr/DepartmentList";
import { Button } from "@/components/ui/button";

export default function DepartmentPage() {
  const [departmentTitle, setDepartmentTitle] = useState("");
  const [departmentList, setDepartmentList] = useState([
    { id: 1, title: "Academic Department" },
    { id: 2, title: "Administration" },
    { id: 3, title: "Finance" },
    { id: 4, title: "Examination" },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (departmentTitle.trim()) {
      const newDept = {
        id: departmentList.length + 1,
        title: departmentTitle,
      };
      setDepartmentList([...departmentList, newDept]);
      setDepartmentTitle("");
    }
  };

  const handleDelete = (id: number) => {
    setDepartmentList(departmentList.filter((dept) => dept.id !== id));
  };

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Institutional Units"
        subtitle="Departmental Management"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold uppercase text-[10px] tracking-widest shadow-lg shadow-secondary/10 transition-all">
            <FaPlus /> Authorize Unit
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Creation Form */}
        <div className="lg:col-span-4 h-full">
          <DepartmentForm
            departmentTitle={departmentTitle}
            setDepartmentTitle={setDepartmentTitle}
            onSubmit={handleSubmit}
          />
        </div>

        {/* List Index */}
        <div className="lg:col-span-8 h-full">
          <DepartmentList
            departmentList={departmentList}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
