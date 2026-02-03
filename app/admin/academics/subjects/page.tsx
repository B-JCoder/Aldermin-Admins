"use client";

import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { SubjectForm } from "@/components/modules/academics/SubjectForm";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/common/DataTable";
import { apiService } from "@/lib/api-service";
import { ListActionButtons } from "@/components/common/ListActionButtons";

interface Subject {
  id: number;
  name: string;
  code: string;
  type: string;
}

export default function SubjectPage() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [form, setForm] = useState<Omit<Subject, "id">>({
    name: "",
    code: "",
    type: "Theory",
  });

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const data = (await apiService.academics.getSubjects()) as Subject[];
        setSubjects(data);
      } catch (error) {
        console.error("Error fetching subjects:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSubjects();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name) return;
    setSubjects([...subjects, { ...form, id: Math.random() }]);
    setForm({ name: "", code: "", type: "Theory" });
  };

  const columns = [
    {
      header: "Course Name",
      accessor: "name" as keyof Subject,
      className: "font-semibold text-foreground",
    },
    {
      header: "Inventory Code",
      accessor: "code" as keyof Subject,
      className: "font-bold text-secondary font-mono",
    },
    {
      header: "Vector Type",
      accessor: "type" as keyof Subject,
      className: "italic text-gray-500",
    },
    {
      header: "Action",
      accessor: (item: Subject) => (
        <ListActionButtons
          onEdit={() => console.log("Edit", item.id)}
          onDelete={() => setSubjects(subjects.filter((s) => s.id !== item.id))}
        />
      ),
      className: "text-right",
      headerClassName: "text-right",
    },
  ];

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Knowledge Inventory"
        subtitle="Syllabus Management"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold text-[10px] shadow-lg shadow-secondary/10 transition-all">
            <FaPlus /> Authorize Subject
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Creation Form */}
        <div className="lg:col-span-4 h-full sticky top-8">
          <SubjectForm
            form={form as any}
            setForm={setForm as any}
            onSubmit={handleSubmit}
          />
        </div>

        {/* List Index */}
        <div className="lg:col-span-8 h-full">
          <DataTable
            data={subjects}
            columns={columns}
            searchKey="name"
            searchPlaceholder="Search courses..."
            title="Registered Curriculum"
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
